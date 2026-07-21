---
name: portfolio-builder
description: Use this skill when building, editing, or reviewing Robin Mia's Infrastructure & Security Engineer portfolio site. Triggers on any request to add a section, write copy, adjust styling, or review content for this specific portfolio project. Covers positioning rules (SRE/infra framing, not C++/IT-support framing), content exclusions (no BD-job-market salary/location details, no personal/demographic info from the source CV), and the required case-study structure for the portview C++ flagship project.
---

# Portfolio Builder — Robin Mia

## When this applies

Any work on the portfolio site described in `docs/PRD.md` of this project:
writing section copy, building components, reviewing content, or adjusting
positioning/framing.

## Core positioning rule

This portfolio targets SRE / Production Engineer roles at Meta, Google, and
similar companies — NOT the local Bangladesh IT-support/junior-C++ job
market that the source CV (`Robin_Mia_CV.pdf`) was written for. Every
framing decision should be checked against this: would this line read well
to a Meta/Google SRE hiring manager doing a 30-second scan?

The identity framing is "Infrastructure & Security Engineer" — not the
CV's original stacked title "C++ Developer | Server Administrator |
Networking & Infrastructure Engineer."

## Source of truth for facts

Always pull real facts from `data/profile.json`, `data/experience.json`,
`data/skills.json`, `data/projects.json` — never invent or embellish. If a
skill is marked `"level": "basic"` in the source data, don't write copy
implying advanced proficiency.

## Hard exclusions (never include, in any section, ever)

- Expected salary, preferred countries/locations
- Personal/demographic details: marital status, blood group, parents'
  names, date of birth, height, nationality
- The CV's references section (names/contacts of referees)
- CCTV installation, hardware troubleshooting, WordPress installation as
  headline skills — real experience, but not relevant to SRE/infra
  positioning; omit or fold into a minimal mention at most

Full detail: see `docs/CONTENT_MAP.md` in this project.

## Flagship project rule

portview (the C++ Windows CLI socket & traffic inspector tool) must be treated as the main
technical C++ project showcase on the site, structured with a clear technical breakdown (what it
is, why it matters, architecture, key technical decisions) — see `docs/CONTENT_MAP.md`.

## Stack constraints

Astro + Tailwind CSS, static site, deploys to Vercel, no backend/CMS/auth
in v1. Performance target: Lighthouse 90+ across all categories. Full
detail in `docs/TECH_SPEC.md`.

## Workflow

For any non-trivial change, follow the phase order in `docs/TODO.md`:
structure before content, content before styling, styling before QA. Don't
polish visuals before the content is factually correct and exclusion-list
compliant.
