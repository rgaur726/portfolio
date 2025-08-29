import type React from "react"
import Hero from "@/components/portfolio/hero"
import About from "@/components/portfolio/about"
import Experience from "@/components/portfolio/experience"
import Projects from "@/components/portfolio/projects"
import Education from "@/components/portfolio/education"
// import Fun from "@/components/portfolio/fun"
import Contact from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main>
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
