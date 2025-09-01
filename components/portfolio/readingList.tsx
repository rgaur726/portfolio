"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Book = Record<string, string>

function isExternal(url?: string) {
  return !!url && (url.startsWith("http://") || url.startsWith("https://"))
}

export default function ReadingList({ books }: { books: Book[] }) {
  const [selected, setSelected] = useState<Book | null>(null)
  const total = Array.isArray(books) ? books.length : 0

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full flex items-center justify-between max-w-6xl">
  <Link href="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/80 text-slate-900 border border-slate-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transform transition duration-150 text-sm font-medium">
          <span aria-hidden className="text-lg">←</span>
          <span>Back</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center">My Reading List</h1>
      <p className="text-muted-foreground max-w-4xl w-full whitespace-normal break-words text-center">My literary refuge from the world of KPIs and user stories. This collection spans murder mysteries, fantasy epics, dystopian classics, and thriller series that I couldn't stop reading even when sprint planning was calling. These books survived my attention span and earned their spot by being impossible to put down.</p>

      <div className="w-full flex justify-center">
        <div className="mt-6 flex flex-col items-center">
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-300 via-violet-200 to-pink-200 shadow-lg">
            <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-slate-900">{total}</div>
              </div>
            </div>
            {/* subtle accent ring */}
            <span className="absolute -inset-0.5 rounded-full border border-white/30 pointer-events-none" />
          </div>

          <div className="mt-3 text-center">
            <div className="text-sm text-muted-foreground">Total number of books finished</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((b, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(b)}
            className="flex items-center gap-4 text-left rounded-lg p-3 bg-gradient-to-br from-white/60 to-indigo-50/40 shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0 w-20 h-28 relative rounded overflow-hidden bg-gray-100">
              {isExternal(b._cover) ? (
                // external link — show as simple img
                // eslint-disable-next-line @next/next/no-img-element
                <img src={b._cover} alt={b.Title || b.title} className="w-full h-full object-cover" />
              ) : (
                <Image src={b._cover || '/placeholder.jpg'} alt={b.Title || b.title} fill={true} sizes="80px" className="object-cover" />
              )}
            </div>

            <div className="flex-1">
              <div className="font-semibold">{b["Title"] || b["title"] || "Untitled"}</div>
              <div className="text-sm text-muted-foreground">{b["Author"] || b["author"]}</div>
              <div className="text-xs text-muted-foreground mt-2">{b["Genres"] || b["genres"]}</div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-xl p-6">
            <div className="flex gap-4 items-start">
              <div className="w-28 h-40 relative rounded overflow-hidden bg-gray-100 flex-shrink-0">
                {isExternal(selected._cover) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selected._cover} alt={selected.Title} className="w-full h-full object-cover" />
                ) : (
                  <Image src={selected._cover || '/placeholder.jpg'} alt={selected.Title} fill={true} sizes="112px" className="object-cover" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selected["Title"]}</h2>
                    <p className="text-sm text-muted-foreground">{selected["Author"]}</p>
                  </div>
                  <button className="text-muted-foreground" onClick={() => setSelected(null)}>Close</button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Metadata</h3>
                    <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                      <li><strong>Series:</strong> {selected["Series"] || "-"}</li>
                      <li><strong>Year:</strong> {selected["Original_Publication_Year"] || selected["Year"] || "-"}</li>
                      <li><strong>Pages:</strong> {selected["Length_Pages"] || "-"}</li>
                      <li><strong>Publisher:</strong> {selected["Publisher"] || "-"}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">My thoughts</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Add your notes here. This is a placeholder — edit the component to include your personal comments about each book.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
