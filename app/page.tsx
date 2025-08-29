import type React from "react"
import Hero from "@/components/portfolio/hero"
import About from "@/components/portfolio/about"
import Experience from "@/components/portfolio/experience"
import Projects from "@/components/portfolio/projects"
import Education from "@/components/portfolio/education"
// import Fun from "@/components/portfolio/fun"
import Contact from "@/components/portfolio/contact"
import { buildMetadata } from "@/components/SEO"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rishabh Gaur",
  jobTitle: "AI Product Strategist / Senior Product Manager",
  url: BASE_URL,
  image: `${BASE_URL}/professional-headshot.png`,
  worksFor: { "@type": "Organization", name: "GoGuardian" },
  alumniOf: "BITS Pilani",
  sameAs: [
    "https://www.linkedin.com/in/your-profile",
    "https://github.com/rgaur726",
    "https://x.com/rishabhgaur_",
  ],
  knowsAbout: ["Large Language Models", "B2B SaaS", "EdTech", "Churn Prevention", "Product Strategy"],
}

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rishabh Gaur",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Rishabh Gaur — AI Product Strategist | GoGuardian, ex-Microsoft",
    description:
      "Senior PM focused on LLM-powered workflows, time-to-value, and churn prevention. Built B2B SaaS across 4+ markets at GoGuardian, Microsoft, and Circles.",
    url: `${BASE_URL}/`,
  })
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }} />

      {/* Hero */}
      <Hero
        content={{
          name: "Rishabh Gaur",
          title: "Senior Product Manager | AI Strategy | EdTech Innovation",
          tagline: "From Technical Architect to AI Product Strategist!",
          intro:
            "Currently obsessing about time-to-value, churn prevention, and convincing educators that robots can actually make their jobs better. I live at the intersection of LLMs, user workflows, and million-dollar ARR targets. B2B SaaS across 4+ countries.",
          linkedin: "https://www.linkedin.com/in/your-profile",
          stats: [
            { label: "ARR via AI strategy", value: "$1.1M+" },
            { label: "International growth", value: "240%" },
            { label: "Microsoft Certified", value: "11×" },
            { label: "Students served", value: "10M+" },
          ],
        }}
      />

      <SectionDivider />

      <Section id="about">
        <About />
      </Section>

      <SectionDivider />

      <Section id="experience">
        <Experience />
      </Section>

      <SectionDivider />

      <Section id="projects">
        <Projects />
      </Section>

      <SectionDivider />

      <Section id="education">
        <Education />
      </Section>

      <SectionDivider />

      <Section id="contact">
        <Contact />
      </Section>

      <Footer />
    </main>
  )
}

function Section({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`py-16 md:py-24`}>
      <div className="container mx-auto max-w-5xl px-4">{children}</div>
    </section>
  )
}

function SectionDivider() {
  return (
    <div className="py-2">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto w-[30%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80" />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-8 flex items-center justify-center">
        <p className="text-sm text-muted-foreground text-center w-full">© 2025. All rights reserved.</p>
      </div>
    </footer>
  )
}
