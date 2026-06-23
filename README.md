# AI Native PM Kit

Harnesses, Loops, Skills and Builder Starters for Product Managers.

AI Native PM Kit is an open toolkit for product managers who want to move from one-off AI prompts to reusable AI work systems. It supports the course **AI 原生组织下的 PM 自进化实践** and packages its frameworks into templates that PMs can copy, edit, version, and run in real work.

## What This Is

This repository helps PMs build:

- **Prompt templates** for common product work.
- **PM Skills** with clear inputs, procedures, quality checks, and human gates.
- **AI Harness templates** for personal and team work systems.
- **AI Loops** for feedback-driven product decisions.
- **Builder starters** for turning specs into demos.
- **Hackathon Kit** for PM-led AI demos with repo, eval, decision log, and backup plan.
- **AI Native PM Workspace Starter** for Comate-first or IDE-based internal pilots.
- **Course development loop** for iterating the talk, slides, HTML, and toolkit as one system.

It is not an AI tool directory, an auto-PRD wrapper, a fully autonomous production system, or a way to outsource product judgment to agents.

## Why PMs Need Harness / Loop / Builder Ability

AI changes PM work from document production to system design. In an AI-native organization, PMs must design how humans, models, tools, data, feedback, and human gates work together:

- **Prompt Engineering** helps you define one task clearly.
- **Harness Engineering** connects context, skills, tools, rules, and evaluation.
- **Loop Engineering** makes signals, decisions, actions, and feedback improve over time.
- **Builder ability** lets PMs turn ideas into runnable evidence instead of only slides.

For public sharing materials, use [`ai-native-pm-sharing-public.html`](ai-native-pm-sharing-public.html). Live-event scripts, QR codes, internal notes, and private examples are kept local.

The PM remains responsible for the problem, evidence, decision, and result.

## Who This Is For

- Product managers, business PMs, strategy PMs, content PMs, growth PMs, and commercialization PMs.
- Non-engineering PMs who want practical templates rather than abstract AI theory.
- Teams that need a fast path from problem to demo.
- Teams experimenting with AI Agent or AI-native workflow design.

## 10-Minute Quickstart

1. Open [`00-quickstart/10-minute-start.md`](00-quickstart/10-minute-start.md).
2. Pick one real task, such as PRD review, user feedback synthesis, or demo acceptance.
3. Fill [`context/project-brief.md`](context/project-brief.md).
4. Run one skill from [`skills/`](skills/README.md).
5. Use [`prompts/ask-before-answer.md`](prompts/ask-before-answer.md) when facts are missing.
6. Use [`loops/pm-loop-canvas.md`](loops/pm-loop-canvas.md) to define the next feedback cycle.
7. Use [`loops/loop-contract.md`](loops/loop-contract.md) before turning the cycle into automation.

## Live Demo Path

To turn this repository into your own PM workbench, open [`00-quickstart/build-your-pm-workbench.md`](00-quickstart/build-your-pm-workbench.md).

It covers copying the repo, seeding safe context, importing approved knowledge into a private workbench, committing the workbench state, running one skill, writing a loop contract, and using the hackathon kit.

For an IDE / Comate-first internal pilot, use [`00-quickstart/ide-workbench-7-day-pilot.md`](00-quickstart/ide-workbench-7-day-pilot.md).

## Workspace Starter

The directory [`ai-native-pm-workspace-starter/`](ai-native-pm-workspace-starter/README.md) is a copyable PM workbench template. It includes:

- project brief, glossary, stakeholder map, source registry, decision log, and assumption log;
- business docs, user research, metrics, PRD, design, code context, prototype, experiment, and report folders;
- compliance templates for L0-L3 classification, human gates, and tool registration;
- eval rubric and golden case folders;
- runnable PM Skills under `.agents/skills/`;
- Comate rules and subagent examples under `.comate/`.

Use it for private or internal workspaces. Do not put real internal documents, code, user data, business data, secrets, or unapproved screenshots into the public repository.

## Repository Structure

```text
00-quickstart/    PM-friendly start paths
context/          Project context, glossary, metrics, decision logs
prompts/          Copyable prompt templates
skills/           Reusable PM skills with quality checks and human gates
harness/          Personal and team AI Harness templates
loops/            PM feedback-loop templates
builder-starters/ Spec-to-demo and prototype starter guides
hackathon-kit/    24h / 36h / 48h PM Hackathon toolkit
evals/            Rubrics, golden cases, failure modes
references/       Source-backed capability and workflow references
ai-native-pm-workspace-starter/ Copyable private PM workspace template
scripts/          Lightweight validation scripts
```

## Safety And License Notes

- Do not commit real secrets, cookies, internal business data, or private user information.
- Agent, MCP, browser automation, and shell scripts must default to read-only or mock mode.
- Human approval is required before publish, delete, payment, permission, external-send, or sensitive-data actions.
- Third-party projects are referenced in [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md). Do not copy restricted-license content into this repo.

## Chinese README

中文说明见 [`README.zh-CN.md`](README.zh-CN.md).

## License

Apache-2.0. See [`LICENSE`](LICENSE).
