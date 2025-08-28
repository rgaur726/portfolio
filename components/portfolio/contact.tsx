import { Linkedin, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance">Contact</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4 text-emerald-500" />
            <span>Email:</span>
          </div>
          <a href="mailto:you@example.com" className="mt-1 block hover:underline">
            you@example.com
          </a>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Linkedin className="size-4 text-emerald-500" />
            <span>LinkedIn:</span>
          </div>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="mt-1 block hover:underline"
          >
            linkedin.com/in/your-profile
          </a>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-emerald-500" />
            <span>Location:</span>
          </div>
          <p className="mt-1">Bengaluru, Karnataka, India</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Availability: Open to discussing AI product strategy, EdTech innovation, and international expansion
            opportunities.
          </p>
          <div className="mt-3 flex gap-2">
            <a href="#experience">
              <Button variant="outline" size="sm">
                View Experience
              </Button>
            </a>
            <a href="#" aria-label="Download Resume (add link)">
              <Button size="sm">
                <Download className="mr-2 size-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
