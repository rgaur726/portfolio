"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#personal", label: "More" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl h-14 px-4 flex items-center justify-between">
        <Link href="#" className="font-semibold">
          Your Name
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex">
          <Button size="sm">Connect</Button>
        </a>
      </div>
    </header>
  )
}
