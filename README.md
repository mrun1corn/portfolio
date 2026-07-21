# Robin Mia — Portfolio Site (AI-Agent Build Project)

This folder is a complete brief for building an SRE/Infra-positioned developer
portfolio using an agentic coding tool (Claude Code, Antigravity, Cursor, etc).

## How to use this

1. Open this whole folder in your coding agent (Claude Code / Antigravity).
2. Point the agent at `docs/PRD.md` and `docs/TECH_SPEC.md` first — these are
   the source of truth for what to build and how.
3. The `agents/` folder contains role-specific instructions. If your tool
   supports sub-agents or multi-step planning, feed each one in at the
   relevant stage (architecture → content → frontend → QA). If it doesn't,
   just feed them in sequence as prompts in the same session.
4. `data/*.json` is your real CV content already structured and ready to
   drop into components — don't make the agent re-derive this from the PDF.
5. `.claude/skills/portfolio-builder/SKILL.md` is a drop-in Claude Code Skill.
   If you're using Claude Code, copy the `.claude/` folder into your actual
   project repo and it will auto-load when relevant.
6. Work through `docs/TODO.md` top to bottom. Check items off as the agent
   completes them — don't let it skip ahead to polish before structure/content
   are locked in.

## Folder map

```
portfolio-ai-project/
├── README.md                          <- you are here
├── docs/
│   ├── PRD.md                         <- what we're building & why
│   ├── TECH_SPEC.md                   <- stack, architecture, constraints
│   ├── CONTENT_MAP.md                 <- CV -> portfolio section mapping
│   └── TODO.md                        <- build checklist, in order
├── agents/
│   ├── 00-orchestrator.md             <- overall coordinator role
│   ├── 01-architect-agent.md          <- site structure & routing
│   ├── 02-content-agent.md            <- writes section copy from data/
│   ├── 03-frontend-agent.md           <- builds components, styling
│   └── 04-qa-agent.md                 <- performance/a11y/consistency pass
├── .claude/
│   └── skills/
│       └── portfolio-builder/
│           └── SKILL.md               <- Claude Code skill definition
└── data/
    ├── profile.json                   <- identity, contact, bio
    ├── experience.json                <- work history (from CV)
    ├── skills.json                    <- technical skills, grouped
    └── projects.json                  <- portview, mca, expense, ShareBuddy, hello-streamer, smart_restuarant
```

## Why it's structured this way

Your CV is written for local BD IT Support / junior C++ roles. Your actual
target (SRE / Production Engineer at Meta, Google) needs a different
narrative — same facts, different framing. This scaffold keeps the raw facts
in `data/` (untouched, accurate) and pushes all the *framing* work into the
agent prompts, so you can regenerate copy/positioning later without
re-entering your work history.
