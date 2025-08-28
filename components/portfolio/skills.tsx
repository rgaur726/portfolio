import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CATEGORIES = [
  {
    title: "Product Strategy",
    items: [
      "AI Product Strategy",
      "0-to-1 Product Development",
      "International Expansion",
      "User Journey Optimization",
      "Product-Market Fit",
      "Platform Thinking",
    ],
  },
  {
    title: "Technical",
    items: [
      "Azure (11x Certified)",
      "AI/ML Implementation",
      "API Strategy",
      "Microsoft 365",
      "Dynamics 365",
      "Cloud Architecture",
    ],
  },
  {
    title: "Industries",
    items: ["EdTech", "Healthcare Technology", "SaaS", "Telecommunications"],
  },
  {
    title: "Languages",
    items: ["English (Native)", "Hindi (Native)"],
  },
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance">Skills & Expertise</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <Card key={cat.title}>
            <CardHeader>
              <CardTitle className="text-lg">{cat.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
