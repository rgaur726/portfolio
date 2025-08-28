import type React from "react"
import Hero from "@/components/portfolio/hero"
import About from "@/components/portfolio/about"
import Experience from "@/components/portfolio/experience"
import Projects from "@/components/portfolio/projects"
import Skills from "@/components/portfolio/skills"
import Education from "@/components/portfolio/education"
import Fun from "@/components/portfolio/fun"
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

      <Section id="about">
        <About />
      </Section>

      <Section id="experience" alt>
        <Experience />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="skills" alt>
        <Skills />
      </Section>

      <Section id="education">
        <Education />
      </Section>

      <Section id="personal" alt>
        <Fun />
      </Section>

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
  alt = false,
}: {
  id: string
  children: React.ReactNode
  alt?: boolean
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${alt ? "bg-muted/30" : ""}`}>
      <div className="container mx-auto max-w-5xl px-4">{children}</div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name</p>
        <div className="flex gap-4">
          <a href="#experience" className="text-sm text-primary hover:underline">
            View Experience
          </a>
          <a href="#contact" className="text-sm text-primary hover:underline">
            Discuss AI Strategy
          </a>
        </div>
      </div>
    </footer>
  )
}
