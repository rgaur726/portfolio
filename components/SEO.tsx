import React from "react"
import Head from "next/head"

type SEOProps = {
  title?: string
  description?: string
  canonical?: string
  image?: string
  url?: string
  children?: React.ReactNode
}

export default function SEO({ title, description, canonical, image, url, children }: SEOProps) {
  const siteTitle = title ?? "Rishabh Gaur — AI Product Strategist | GoGuardian, ex-Microsoft"
  const siteDescription = description ?? "Senior PM focused on LLM-powered workflows, time-to-value, and churn prevention. Built B2B SaaS across 4+ markets at GoGuardian, Microsoft, and Circles."
  const siteUrl = url ?? (canonical ?? "https://example.com")
  const siteImage = image ?? "/og/hero.jpg"

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Core */}
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="theme-color" content="#0f172a" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {children}
    </Head>
  )
}
