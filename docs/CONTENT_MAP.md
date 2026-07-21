# Content Map — CV → Portfolio

This maps what's in `Robin_Mia_CV.pdf` to where it goes (or explicitly does
NOT go) on the portfolio. Source of truth for facts is `data/*.json`.

## Hero

- Identity: "Infrastructure & Security Engineer" (reframed from CV's
  "C++ Developer | Server Administrator | Networking & Infrastructure
  Engineer" — same substance, sharper focus)
- Identity: C++ Developer | Server Administrator | Networking & Infrastructure Engineer (BFIN IT, Mohammadpur, Dhaka)
- Do NOT include: expected salary, preferred countries, availability —
  all BD-job-market specific, irrelevant to this audience

## Infrastructure & Systems section

Pulled from:
- Joy Cinemas (IT Executive, Jul 2024–Mar 2026): VPS infra, server
  maintenance, Linux-based servers
- CV skills: Proxmox VE, VMware, RAID configuration, Server OS install
  (Windows Server, Linux/Ubuntu), VPS deployment & management

Framing: don't list these as a bullet dump. Pick 1-2 concrete situations
(e.g. "managed VPS infrastructure for a ticketing platform, including
server maintenance and uptime") and let the skill list support the story,
not replace it.

## Networking & Security section

Pulled from:
- ALO Communication (Assistant Network Engineer, Sep 2022–Jul 2024):
  router/switch config, firewall security, network troubleshooting
- CV skills: Mikrotik & Cisco configuration, firewall & network security

Framing: this is the credibility bridge to "SRE" — most SRE-adjacent
portfolios skip real networking experience entirely, so this is a
differentiator, not a footnote.

## Flagship Project: portview (C++17 / Windows SDK)

### Overview
`portview` is a high-performance Windows CLI utility designed for port and socket inspection, mapping active network connections directly to process IDs and per-connection traffic stats.

### Structure & Highlights
- **Role**: System-level C++ developer.
- **Key Features**: Live port listing, PID process mapping, connection status monitoring, per-connection byte/packet traffic counters.
- **Tech Stack**: C++17, Windows SDK (`IPHLPAPI`, Winsock), STL.
- **Open Source**: MIT Licensed on GitHub ([mrun1corn/portview](https://github.com/mrun1corn/portview)).

---

## Pinned GitHub Projects Showcase

Grid featuring your public pinned GitHub repositories:
1. **mca** — Modern TypeScript web application deployed on Vercel.
2. **expense** — Cross-platform expense tracking application built with Dart & Flutter.
3. **ShareBuddy** — Android bill-splitting and balance tracking app built with Kotlin.
4. **hello-streamer** — Lightweight web IPTV streaming app for live channels (HTML/JS).
5. **smart_restuarant** — Smart restaurant management system (JavaScript/Node.js).

---

## Software Engineering section

- Current role: C++ Developer @ BFIN IT (Apr 2026–present) — software
  development, debugging, system-level problem solving
- Python: basic, scripting/automation — mention briefly, don't overstate
- Secondary project: Rental Management System (Next.js/MongoDB) — proof
  of full-stack range, UddoktaPay payment gateway integration. Keep this
  short; it's supporting evidence, not the headline.

## Experience timeline

Condensed, reverse-chronological:
- BFIN IT — C++ Developer (Apr 2026–present)
- Joy Cinemas — IT Executive (Jul 2024–Mar 2026)
- ALO Communication — Assistant Network Engineer (Sep 2022–Jul 2024)

Education mentioned briefly at the bottom of this section, not as its own
hero section: BSc CSE (in progress), Diploma in Computer Technology
(CGPA 3.47/4, 2022).

## Explicitly EXCLUDED from portfolio

From the CV, do not include anywhere on the site:
- Personal details: father's/mother's name, DOB, height, marital status,
  nationality, blood group
- Expected salary (Tk. 30,000) and preferred countries/locations — this
  framing is for local BD job applications, not the Meta/Google target
- References section (Imran Molla, Shakil Imran) — not appropriate for a
  public portfolio; save for direct applications if requested
- CCTV installation / hardware troubleshooting / WordPress installation
  skills — real, but not relevant to the SRE/infra positioning; omit or
  fold into a minimal "IT Support background" mention at most
