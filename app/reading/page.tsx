import fs from "fs"
import path from "path"
import ReadingList from "@/components/portfolio/readingList"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

const READING_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Reading — Rishabh Gaur",
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Reading — Rishabh Gaur | Thrillers, Epics, Classics",
    description: "My reading list: mysteries, epics, and classics — what I’m currently reading and favorite books.",
    url: `${BASE_URL}/reading`,
  })
}

export default function Page() {
  // Read and parse CSV at build time (use covers.csv which includes Cover_Link)
  const csvPath = path.join(process.cwd(), "public", "covers.csv")
  let csv = ""
  try {
    csv = fs.readFileSync(csvPath, "utf8")
  } catch (e) {
    console.error("Could not read CSV", e)
  }

  function parseCSV(input: string) {
    const lines: string[] = []
    let cur = ""
    let inQuotes = false
    for (let i = 0; i < input.length; i++) {
      const ch = input[i]
      if (ch === '"') {
        inQuotes = !inQuotes
        cur += ch
      } else if (ch === "\n" && !inQuotes) {
        lines.push(cur.trim())
        cur = ""
      } else {
        cur += ch
      }
    }
    if (cur.trim()) lines.push(cur.trim())

    const rows = lines.map((l) => {
      const cells: string[] = []
      let cell = ""
      let q = false
      for (let i = 0; i < l.length; i++) {
        const ch = l[i]
        if (ch === '"') {
          q = !q
          continue
        }
        if (ch === "," && !q) {
          cells.push(cell)
          cell = ""
          continue
        }
        cell += ch
      }
      cells.push(cell)
      return cells.map((c) => c.trim())
    })

    const headers = rows[0] || []
    const data = rows.slice(1).map((r) => {
      const obj: any = {}
      headers.forEach((h, i) => {
        obj[h] = r[i] || ""
      })
      return obj
    })
    return data
  }

  const booksRaw = parseCSV(csv)

  // Resolve cover images: prefer local files in /public, then external Cover_Link, then placeholder
  const publicDir = path.join(process.cwd(), "public")
  let publicFiles: string[] = []
  try {
    publicFiles = fs.readdirSync(publicDir).map((f) => f.toLowerCase())
  } catch (e) {
    publicFiles = []
  }

  function findLocalByTokens(title: string) {
    const tokens = (title || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
    for (const t of tokens) {
      if (t.length < 3) continue
      const found = publicFiles.find((f) => f.includes(t))
      if (found) return `/${found}`
    }
    return null
  }

  const books = booksRaw.map((b: any) => {
    let cover = '/placeholder.jpg'
    const cl = (b['Cover_Link'] || b['CoverLink'] || '').trim()
    if (cl) {
      if (cl.startsWith('http')) {
        // external link — use as-is (may be a search page or an image)
        cover = cl
      } else {
        const lower = cl.toLowerCase()
        if (publicFiles.includes(lower)) cover = `/${cl}`
      }
    }

    // try to find by title tokens if still placeholder
    if (cover === '/placeholder.jpg') {
      const alt = findLocalByTokens(b['Title'] || b['title'] || '')
      if (alt) cover = alt
    }

    return { ...b, _cover: cover }
  })

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(READING_JSONLD) }} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <ReadingList books={books} />
        </div>
      </section>
    </main>
  )
}
