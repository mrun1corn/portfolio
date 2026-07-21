# Tech Spec — Robin Mia Portfolio Site

## Stack

- **Framework:** Astro (preferred) — near-zero shipped JS by default, best
  path to Lighthouse 90+ with minimal effort. Next.js is an acceptable
  fallback if the agent/user wants more interactivity later (e.g. a live
  WAF rule demo).
- **Styling:** Tailwind CSS. Utility-first, fast to iterate, no design system
  overhead for a single-page-ish site.
- **Content:** Structured JSON in `data/` (already provided) — components
  read from these files, not hardcoded strings. This keeps content edits
  separate from layout/component work.
- **Deployment:** Vercel (or Netlify). No environment variables/secrets
  required for v1.
- **Analytics (optional, stretch):** Plausible or Umami — lightweight,
  privacy-respecting, no cookie banner needed.

## Architecture

```
src/
├── pages/
│   └── index.astro          <- single-page site, section-anchored nav
├── components/
│   ├── Hero.astro
│   ├── InfraSection.astro
│   ├── NetworkingSection.astro
│   ├── PortviewShowcase.astro   <- deep-dive for C++ portview tool
│   ├── SoftwareSection.astro
│   ├── Timeline.astro
│   └── Contact.astro
├── data/                     <- copy of /data/*.json from this scaffold
└── layouts/
    └── BaseLayout.astro      <- meta tags, fonts, global styles
```

Single-page with anchor navigation is the default recommendation — it's
faster to build, faster to load, and matches how a 30-second recruiter scan
actually works (scroll, not click through pages). Multi-page is only worth
it if the WAF case study grows long enough to want its own URL for sharing.

## Performance requirements

- Lighthouse: 90+ on Performance, Accessibility, Best Practices, SEO
- No render-blocking web fonts — use `font-display: swap` or self-host
  a single variable font
- Images: served as WebP/AVIF, lazy-loaded below the fold
- No client-side JS frameworks hydrated unless a component is genuinely
  interactive (Astro's island architecture — ship JS only where needed)

## Accessibility

- Semantic HTML (nav, section, article, not div soup)
- Color contrast AA minimum
- All interactive elements keyboard-navigable
- Alt text on any diagrams/screenshots (e.g. WAF architecture diagram)

## SEO / metadata

- Descriptive `<title>` and meta description targeting "infrastructure
  engineer", "SRE", "security engineer" — not "C++ developer portfolio"
- Open Graph tags for link previews when shared
- One clean canonical URL, no duplicate content

## What NOT to build in v1

- No CMS / admin panel — content is static JSON, edited directly
- No blog (separate scope, not part of this brief)
- No auth, no database, no backend API — everything is static
- No live WAF demo in v1 (stretch goal only, flag it in TODO.md as optional)

## Browser support

Modern evergreen browsers only (Chrome, Firefox, Safari, Edge — last 2
versions). No IE11 considerations needed.
