"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let raf = 0
    const el = ref.current
    if (!el) return

  const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset
    // Subtle parallax by shifting background position of each layer
    const offset = Math.min(80, Math.max(-80, y * 0.03))
    const o1 = offset // base linear gradient (very subtle)
    const o2 = Math.round(offset * 0.7) // blue radial
    const o3 = Math.round(offset * 0.5) // green radial
    const o4 = Math.round(offset * 0.6) // pink radial
    el.style.backgroundPosition = `0px ${o1}px, 0px ${o2}px, 0px ${o3}px, 0px ${o4}px`
        raf = 0
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 [will-change:background-position]"
      // Two soft radial gradients similar to hero, spanning larger than viewport for smooth motion
      style={{
        // Extend beyond the viewport so overscroll never reveals white
        top: "calc(-20vh - env(safe-area-inset-top))",
        height: "calc(140vh + env(safe-area-inset-top))",
        // Base linear gradient + softer radials (lighter blue/green/pink) for a subtler wash
        backgroundImage:
          "linear-gradient(180deg, rgba(223,246,255,0.42) 0%, rgba(238,251,247,0.24) 30%, rgba(255,255,255,0.0) 66%), radial-gradient(60% 40% at 15% 30%, rgba(56,189,248,0.14), transparent), radial-gradient(50% 30% at 80% 20%, rgba(16,185,129,0.10), transparent), radial-gradient(42% 32% at 70% 75%, rgba(236,72,153,0.09), transparent)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundSize: "100% 130%, 180% 180%, 180% 180%, 180% 180%",
        backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px",
      }}
    />
  )
}
