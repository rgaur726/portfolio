import type React from "react"
import Experience from "@/components/portfolio/experience"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

const PERSON_EXPERIENCE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rishabh Gaur",
  worksFor: [
    { "@type": "Organization", name: "GoGuardian" },
    { "@type": "Organization", name: "Microsoft" },
    { "@type": "Organization", name: "Circles" },
  ],
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Experience — Rishabh Gaur | GoGuardian, Circles, Microsoft",
    description: "Experience and roles at GoGuardian, Microsoft, and Circles — product leadership and AI strategy.",
    url: `${BASE_URL}/experience`,
  })
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_EXPERIENCE_JSONLD) }} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <Experience />
        </div>
      </section>
    </main>
  )
}
