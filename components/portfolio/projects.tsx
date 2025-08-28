import { Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PROJECTS = [
  {
    title: "AI-Powered Assessment Platform",
    challenge: "Educators overwhelmed by administrative tasks",
    solution: "LLM-based assessment automation tools",
    impact: "$1.1M ARR, 40% time reduction for teachers",
    tech: "AI/ML, LLM integration, EdTech platforms",
  },
  {
    title: "International Market Expansion",
    challenge: "Digital-first model failing in LATAM",
    solution: "Hybrid retail-digital onboarding strategy",
    impact: "32% conversion rate, 250+ store network",
    tech: "Platform architecture, international scaling",
  },
  {
    title: "Healthcare Virtual Care Platform",
    challenge: "Hospital digital transformation needs",
    solution: "Teams-integrated virtual consultation features",
    impact: "2M+ monthly interactions, 99.9% uptime",
    tech: "Azure, Healthcare APIs, Microsoft Teams",
  },
]

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2">
        <Rocket className="size-6 text-emerald-500" />
        Key Projects
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Challenge:</span> {p.challenge}
              </p>
              <p className="mt-2">
                <span className="font-medium text-foreground">Solution:</span> {p.solution}
              </p>
              <p className="mt-2">
                <span className="font-medium text-foreground">Impact:</span> {p.impact}
              </p>
              <p className="mt-2">
                <span className="font-medium text-foreground">Tech:</span> {p.tech}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
