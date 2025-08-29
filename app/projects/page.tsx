import type React from "react"
import Projects from "@/components/portfolio/projects"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

const PROJECTS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Collection",
  name: "Projects — Rishabh Gaur",
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Projects — Rishabh Gaur | Vibe Coding & PM Tools",
    description: "Personal projects and tooling — Vibe Coding Adventures and PM tools focused on developer experience and AI-assisted workflows.",
    url: `${BASE_URL}/projects`,
  })
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PROJECTS_JSONLD) }} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <Projects />
        </div>
      </section>
    </main>
  )
}
