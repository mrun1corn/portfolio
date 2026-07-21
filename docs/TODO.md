# TODO — Build Checklist

Work top to bottom. Don't jump to styling/polish before structure and real
content are in place — an unstyled site with the right content beats a
beautiful site with placeholder text.

## Phase 0 — Setup
- [ ] Initialize Astro project (`npm create astro@latest`)
- [ ] Add Tailwind CSS
- [ ] Copy `data/*.json` into `src/data/`
- [ ] Set up base layout with meta tags (see TECH_SPEC.md SEO section)

## Phase 1 — Structure (no styling yet)
- [ ] Build `index.astro` with all sections as empty/placeholder blocks,
      correct order per PRD.md section 6
- [ ] Set up anchor navigation between sections
- [ ] Confirm section order matches priority: Hero → Infra → Networking →
      portview C++ Project → Software Eng → Timeline → Contact

## Phase 2 — Real content
- [ ] Hero: write identity statement + one-liner (see CONTENT_MAP.md)
- [ ] Infrastructure & Systems: write 1-2 concrete situations, not a bullet
      dump
- [ ] Networking & Security: same — concrete, not generic
- [ ] portview C++ Showcase (port & socket inspector breakdown)
- [ ] Pinned GitHub Projects grid (mca, expense, ShareBuddy, hello-streamer, smart_restuarant)
      the most iteration. Follow the 6-part structure in CONTENT_MAP.md.
- [ ] Software Engineering section
- [ ] Experience timeline (condensed, reverse-chronological)
- [ ] Contact section — email + GitHub only

## Phase 3 — Verify exclusions
- [ ] Confirm no salary, location preference, or personal/demographic
      details from the CV appear anywhere
- [ ] Confirm references section is not included
- [ ] Confirm CCTV/hardware/WordPress skills are minimized or omitted per
      CONTENT_MAP.md

## Phase 4 — Visual design
- [ ] Apply Tailwind styling — restrained, technical aesthetic (dark
      terminal-adjacent or clean minimalist; avoid generic gradient/
      glassmorphism templates, they read as templated for this audience)
- [ ] Typography: one clean sans or mono-adjacent font for headers
- [ ] Responsive check at mobile/tablet/desktop breakpoints

## Phase 5 — Performance & QA
- [ ] Run Lighthouse — target 90+ on all four categories
- [ ] Check font loading strategy (swap, no FOIT)
- [ ] Compress/convert any images to WebP
- [ ] Keyboard navigation check
- [ ] Color contrast check (AA minimum)

## Phase 6 — Deploy
- [ ] Deploy to Vercel
- [ ] Verify OG tags render correctly when link is shared
- [ ] Final read-through: would a Meta/Google SRE recruiter understand
      what you do within 30 seconds of landing on this page?

## Stretch goals (optional, not required for v1)
- [ ] Interactive WAF rule-testing mini-demo
- [ ] Architecture diagram for portview (SVG, not a photo of a
      whiteboard)
- [ ] Lightweight analytics (Plausible/Umami)
