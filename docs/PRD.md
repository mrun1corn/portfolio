# PRD — Robin Mia Portfolio Site

## 1. Goal

Build a fast, capability-organized developer portfolio that repositions
Robin from "C++ Developer / IT Support" (current CV framing) to
"Infrastructure & Security Engineer" — supporting applications to
SRE / Production Engineer roles at Meta, Google, and similar companies.

## 2. Problem statement

Current online presence (mrun1corn.xyz) has a mismatch: the headline signals
C++/infra, but the visible project work skews web-focused. Recruiters scanning
for 30 seconds won't connect the dots. The CV itself (Robin_Mia_CV.pdf) is
written for local Bangladesh IT-support/junior roles (BDT salary expectations,
BD-only location preferences) — none of that framing should leak into the
portfolio, which targets a different tier of role entirely.

## 3. Audience

Primary: Technical recruiters and hiring managers at Meta/Google (SRE,
Production Engineer, Infra) doing a fast scan.
Secondary: Engineers doing a deeper technical review after the recruiter pass
(will read the WAF case study in detail).

## 4. Success criteria

- A hiring manager can tell within 30 seconds: "this person does
  infrastructure, networking, and security-focused systems work."
- At least one project (portview) is presented as a clear technical project breakdown:
  problem, architecture, decisions, tradeoffs, what you'd change.
- Site loads in under 2 seconds, Lighthouse 90+ across all categories.
- Fully responsive — this will be checked on mobile.
- No BD-job-market framing (salary expectations, local-only availability,
  personal details like father's name/blood group) anywhere on the site.

## 5. Non-goals

- Not a job board / resume clone — don't just reformat the PDF.
- Not trying to look like a designer's portfolio — restraint over flash.
- Not including the Rental Management System as a headline project; it's
  supporting evidence of full-stack range, not the main pitch.

## 6. Sections (in priority order)

1. **Hero** — identity statement + what role you're targeting + CTA to
   contact/resume
2. **Infrastructure & Systems** — Proxmox VE, VMware, RAID, Linux
   administration, VPS deployment & management
3. **Networking & Security** — Mikrotik/Cisco configuration, firewalls,
   network security, troubleshooting
4. **Flagship C++ Project: portview** — deep-dive technical breakdown of the Windows CLI socket & traffic inspector (C++, Windows SDK)
5. **GitHub Pinned Projects Showcase** — grid showcasing mca (TypeScript/Vercel), expense (Dart/Flutter), ShareBuddy (Kotlin/Android), hello-streamer (HTML IPTV), and smart_restuarant (JavaScript)

5. **Software Engineering** — C++ (current role, BFIN IT), Python, plus
   Rental Management System (Next.js/MongoDB) as secondary proof point
6. **Experience timeline** — condensed, reframed (see CONTENT_MAP.md)
7. **Contact** — email, GitHub, no personal/demographic details

## 7. Content rules

- Every claim ("firewall configuration", "server administration") should be
  anchored to a specific, real example from `data/experience.json` — never
  vague skill-listing.
- No filler personal details from the CV (marital status, blood group,
  father's/mother's name, height, references) — irrelevant and unprofessional
  for this audience.
- Expected salary / preferred countries from the CV are BD-job-market
  specific and must NOT appear anywhere on the portfolio.
- Education: mention BSc CSE (in progress) and Diploma in Computer
  Technology briefly — don't lead with it, this audience cares about
  demonstrated work first.

## 8. Constraints

- Must deploy free (Vercel/Netlify target).
- No paid APIs/services required to run the base site.
- Static-first: no backend required unless a specific interactive feature
  demands it (e.g., a live WAF rule-testing demo is a stretch goal, not v1).
