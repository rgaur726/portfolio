# Personal Portfolio

This repo contains a Next.js portfolio.

# SEO & Performance

This project includes basic SEO and performance improvements added by an automated assistant.

Quick audit

1. Start dev server:

```powershell
npm run dev
```

2. Run Lighthouse CI audit (requires lhci installed globally or as a dev dep):

```powershell
npm run seo:audit
```

Assumptions:
- Site will be deployed to `https://example.com` by default. Set `NEXT_PUBLIC_BASE_URL` in environment when deploying.
- This changes metadata and adds structured data. Further fine-tuning may be needed for production domain and images.
