"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Sparkles, Mail } from "lucide-react"

type HeroContent = {
  name: string
  title: string
  tagline: string
  intro: string
  linkedin: string
  stats: { label: string; value: string }[]
}

export default function Hero({ content }: { content: HeroContent }) {
  return (
  <section className="relative overflow-hidden font-sans" aria-labelledby="hero-title">
    <div className="container mx-auto max-w-5xl px-4 min-h-screen flex items-center justify-center">
  <div className="grid gap-8 md:grid-cols-[1.35fr_1fr] items-center">
          <div>
            {/* Removed AI Strategy • Product Leadership label */}

            <h1 id="hero-title" className="mt-4 text-balance text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 font-sans">
              {content.name}
            </h1>
            <div className="mt-6">
              <p className="text-xl md:text-2xl font-normal text-gray-800 mb-2">
                {content.tagline}
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {content.intro}
              </p>
            </div>

            <div className="mt-6 flex flex-row flex-wrap items-center justify-start gap-3 text-left">
              <a href="https://www.linkedin.com/in/gaurrishabh/" target="_blank" rel="noreferrer">
                <Button className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-white border border-gray-300 text-gray-900 shadow-sm hover:bg-gray-50 transition-all cursor-pointer">
                  <Image src="/li.png" alt="LinkedIn" width={20} height={20} className="rounded-sm" />
                  Connect on LinkedIn
                </Button>
              </a>
              <a href="mailto:rishabhgaur1226@gmail.com" target="_blank" rel="noopener">
                <Button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-gray-900 text-white shadow-sm hover:bg-gray-800 transition-all cursor-pointer min-w-[140px]">
                  <Mail className="w-5 h-5" />
                  Contact
                </Button>
              </a>
            </div>
          </div>

          {/* Avatar with a subtle colorful halo */}
          <div className="flex md:justify-end md:pl-12">
            <div className="relative rounded-xl border p-1 bg-background/70">
              {/* Soft radial halo behind the photo for more visible hue */}
              <span
                aria-hidden
                className="absolute -inset-6 md:-inset-8 -z-10 rounded-[40px]"
                style={{
                  background:
                    "radial-gradient(50% 40% at 60% 35%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(45% 35% at 20% 75%, rgba(236,72,153,0.18), transparent 70%)",
                  filter: 'blur(10px)'
                }}
              />
              <span className="absolute inset-0 rounded-[32px] z-[-1]" style={{boxShadow: '16px 16px 40px 0px #E9D8FD'}}></span>
              <Image
                src="/rishabh_gaur.png"
                alt="Rishabh's photo"
                width={768}
                height={1080}
                className="rounded-lg object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
