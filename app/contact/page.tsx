import type React from "react"
import Contact from "@/components/portfolio/contact"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

const CONTACT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Person",
    name: "Rishabh Gaur",
  },
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Contact — Rishabh Gaur",
    description: "Get in touch with Rishabh Gaur — AI Product Strategist.",
    url: `${BASE_URL}/contact`,
  })
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSONLD) }} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <Contact />
        </div>
      </section>
    </main>
  )
}
