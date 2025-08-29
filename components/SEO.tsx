// Helper: build a Next.js Metadata object for App Router pages
import type { Metadata } from "next"

export function buildMetadata({
  title,
  description,
  url,
  image,
}: {
  title?: string
  description?: string
  url?: string
  image?: string
}): Metadata {
  const baseTitle = title ?? "Rishabh Gaur — AI Product Strategist | GoGuardian, ex-Microsoft"
  const baseDescription = description ?? "Senior PM focused on LLM-powered workflows, time-to-value, and churn prevention. Built B2B SaaS across 4+ markets at GoGuardian, Microsoft, and Circles."
  const siteUrl = url ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://example.com"
  const siteImage = image ?? "/og/hero.jpg"

  // Ensure metadataBase is a proper URL so Next can resolve relative images
  let metadataBase: URL | undefined
  try {
    metadataBase = new URL(siteUrl)
  } catch (e) {
    metadataBase = undefined
  }

  return {
    title: baseTitle,
    description: baseDescription,
    metadataBase,
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: siteUrl,
      siteName: "Rishabh Gaur",
      images: [siteImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      images: [siteImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      "max-image-preview": "large",
    } as any,
    other: {
      "theme-color": "#0f172a",
    },
  }
}
