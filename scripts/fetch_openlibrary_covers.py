#!/usr/bin/env python3
"""
fetch_openlibrary_covers.py

Usage:
  python fetch_openlibrary_covers.py --infile "book_metadata_79_with_direct_covers.xlsx" --outfile "book_metadata_79_with_direct_covers_final.csv"

This script reads an input spreadsheet (XLSX) or CSV with at least Title and Author columns,
queries OpenLibrary search API to find a cover id or ISBN, and writes a CSV with an added
Cover_Link column (direct cover image URL when available).

Requires: requests, pandas, openpyxl
"""

import argparse
import time
import urllib.parse
from typing import Optional

import pandas as pd
import requests


SEARCH_URL = "https://openlibrary.org/search.json"
COVERS_BY_ID = "https://covers.openlibrary.org/b/id/{cover_id}-L.jpg"
COVERS_BY_ISBN = "https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg"


def find_cover_for(title: str, author: str) -> Optional[str]:
    params = {
        "title": title or "",
        "author": author or "",
        "limit": 1,
    }
    try:
        r = requests.get(SEARCH_URL, params=params, timeout=10)
        r.raise_for_status()
        data = r.json()
        docs = data.get("docs", [])
        if not docs:
            return None
        doc = docs[0]
        # Prefer cover_i
        cover_id = doc.get("cover_i")
        if cover_id:
            return COVERS_BY_ID.format(cover_id=cover_id)
        # Fallback to ISBN list
        isbns = doc.get("isbn") or []
        if isbns:
            return COVERS_BY_ISBN.format(isbn=urllib.parse.quote(isbns[0]))
    except Exception:
        return None
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--infile", required=True, help="Input XLSX or CSV file path")
    ap.add_argument("--outfile", required=True, help="Output CSV file path")
    ap.add_argument("--delay", type=float, default=0.6, help="Delay between requests (seconds)")
    args = ap.parse_args()

    infile = args.infile
    outfile = args.outfile

    if infile.lower().endswith(".xlsx") or infile.lower().endswith(".xls"):
        df = pd.read_excel(infile)
    else:
        df = pd.read_csv(infile)

    # normalize columns
    cols = {c.lower(): c for c in df.columns}
    title_col = cols.get("title") or cols.get("book") or None
    author_col = cols.get("author") or cols.get("authors") or None

    if not title_col:
        raise SystemExit("Input file must have a 'Title' column")

    cover_links = []
    total = len(df)
    for idx, row in df.iterrows():
        title = str(row.get(title_col, "")).strip()
        author = str(row.get(author_col, "")).strip() if author_col else ""
        print(f"[{idx+1}/{total}] Searching cover for: {title} — {author}")
        cover = find_cover_for(title, author)
        if cover:
            cover_links.append(cover)
        else:
            cover_links.append("")
        time.sleep(args.delay)

    df_out = df.copy()
    df_out["Cover_Link"] = cover_links
    df_out.to_csv(outfile, index=False)
    print(f"Wrote output to {outfile}")


if __name__ == "__main__":
    main()
