import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2">
        <GraduationCap className="size-6 text-emerald-500" />
        Education & Certifications
      </h2>
      <div className="mt-4 space-y-3 text-muted-foreground">
        <p>[Your Degree Details]</p>
        <p>
          <span className="font-medium text-foreground">11× Microsoft Certified:</span> Azure, M365, Dynamics 365
        </p>
        <p>
          <span className="font-medium text-foreground">Key Certifications:</span> List relevant product management or
          technical certifications
        </p>
      </div>
    </div>
  )
}
