import type React from "react"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

export async function generateMetadata() {
  return buildMetadata({
    title: "Resume — Rishabh Gaur | AI Product Strategist",
    description: "Resume and professional summary for Rishabh Gaur — AI Product Strategist and Senior Product Manager.",
    url: `${BASE_URL}/resume`,
  })
}

export default function Page() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-2xl font-semibold">Resume</h1>
          <p className="mt-4">Download: <a href="/resume.pdf" className="underline">Download PDF</a></p>
        </div>
      </section>
    </main>
  )
}
