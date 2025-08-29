import type React from "react"
import Reading from "@/components/portfolio/fun"
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
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(READING_JSONLD) }} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <Reading />
        </div>
      </section>
    </main>
  )
}
