# TODO — Build Checklist

Work top to bottom. Don't jump to styling/polish before structure and real
content are in place — an unstyled site with the right content beats a
beautiful site with placeholder text.

## Phase 0 — Setup
- [x] Initialize Astro project (`npm create astro@latest`)
- [x] Add Tailwind CSS
- [x] Copy `data/*.json` into `src/data/`
- [x] Set up base layout with meta tags (see TECH_SPEC.md SEO section)

## Phase 1 — Structure (no styling yet)
- [x] Build `index.astro` with all sections as empty/placeholder blocks,
      correct order per PRD.md section 6
- [x] Set up anchor navigation between sections
- [x] Confirm section order matches priority: Hero → Infra → Networking →
      portview C++ Showcase → Pinned GitHub Projects → Timeline → Contact

## Phase 2 — Real content
- [x] Hero: write identity statement + one-liner (see CONTENT_MAP.md)
- [x] Infrastructure & Systems: write 1-2 concrete situations, not a bullet
      dump
- [x] Networking & Security: same — concrete, not generic
- [x] portview C++ Showcase (port & socket inspector breakdown)
- [x] Pinned GitHub Projects grid (mca, expense, ShareBuddy, hello-streamer, smart_restuarant)
- [x] Experience timeline (condensed, reverse-chronological)
- [x] Contact section — email + GitHub + website + X

## Phase 3 — Verify exclusions
- [x] Confirm no salary, location preference, or personal/demographic
      details from the CV appear anywhere
- [x] Confirm references section is not included
- [x] Confirm CCTV/hardware/WordPress skills are minimized or omitted per
      CONTENT_MAP.md

## Phase 4 — Visual design
- [x] Apply Tailwind styling — restrained, technical aesthetic (dark
      terminal-adjacent or clean minimalist)
- [x] Typography: one clean sans or mono-adjacent font for headers
- [x] Responsive check at mobile/tablet/desktop breakpoints

## Phase 5 — Performance & QA
- [x] Build static site bundle without errors (`npm run build`)
- [x] Check font loading strategy
- [x] Keyboard navigation check
- [x] Color contrast check (AA minimum)

## Phase 6 — Deploy
- [ ] Deploy to Vercel
- [ ] Verify OG tags render correctly when link is shared
- [ ] Final read-through: would a Meta/Google SRE recruiter understand
      what you do within 30 seconds of landing on this page?
