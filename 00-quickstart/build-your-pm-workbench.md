# Build Your PM Workbench From This Repository

Purpose: copy this repository into a personal or team PM workbench, then seed it with safe project context, reusable skills, loops, and hackathon templates.

This guide is designed for a live demo during the course.

## 0. Safety Boundary

Use a private repository or internal Git service for real business work.

Do not commit the following to a public GitHub repository:

- internal documents;
- user data;
- customer or merchant information;
- access tokens, cookies, API keys, or screenshots containing secrets;
- unreleased strategy, pricing, legal, or partner material.

The public repo is a template. Your real PM workbench should contain only approved, scoped, and reviewable context.

## 1. Copy The Workbench

Choose one path:

| Path | Use When |
|---|---|
| Fork on GitHub | You want to keep updating from the public template |
| Clone into an internal repo | You need business context, internal tools, and private knowledge |
| Copy selected folders | You only want `context/`, `skills/`, `loops/`, and `hackathon-kit/` |

Recommended first private commit:

```bash
git clone <your-private-workbench-repo>
cd <your-private-workbench-repo>
git remote -v
```

## 2. Seed The Minimum Context

Fill these files first:

- [`../context/project-brief.md`](../context/project-brief.md)
- [`../context/glossary.md`](../context/glossary.md)
- [`../context/decision-log.md`](../context/decision-log.md)

Minimum context should answer:

```text
Project:
User:
Business goal:
Current decision:
Known facts:
Open assumptions:
Sensitive data that must not leave approved systems:
Human owner:
```

Commit only the safe summary, not raw internal material:

```bash
git add context/project-brief.md context/glossary.md context/decision-log.md
git commit -m "docs: seed PM workbench context"
```

## 3. Import Approved Knowledge

If your organization has an internal knowledge system, export only approved documents into a private workbench.

For example, if using an internal tool such as 如流 CLI, treat the following as pseudocode and replace it with the real approved command:

```bash
# Pseudocode only. Replace with the real internal command and approval flow.
<ruliu-cli> export \
  --source "<approved-space-or-folder>" \
  --format markdown \
  --output context/knowledge-inbox/
```

Before committing, reduce raw material into a human-reviewed index:

```text
context/knowledge-index.md
- Source name
- Owner
- Last updated
- What it is useful for
- What it must not be used for
- Sensitive fields removed
```

Then commit the reviewed index and approved summaries:

```bash
git add context/knowledge-index.md context/knowledge-inbox/
git commit -m "docs: add approved project knowledge index"
```

## 4. Run One Skill

Start with one small PM task:

- [`../skills/requirement-review/SKILL.md`](../skills/requirement-review/SKILL.md)
- [`../skills/prd-critic/SKILL.md`](../skills/prd-critic/SKILL.md)
- [`../skills/user-research-synthesis/SKILL.md`](../skills/user-research-synthesis/SKILL.md)

Ask your AI tool:

```text
Use the project context in context/.
Follow the selected SKILL.md exactly.
If required inputs are missing, ask questions first.
Separate facts, assumptions, gaps, risks, and PM decisions.
```

## 5. Turn It Into A Loop

Use:

- [`../loops/pm-loop-canvas.md`](../loops/pm-loop-canvas.md)
- [`../loops/loop-contract.md`](../loops/loop-contract.md)

Do not automate immediately. First run the workflow manually at least three times.

Only automate when:

- the task repeats;
- the output can be verified;
- failure can be reproduced;
- budget is acceptable;
- a human will review the result.

## 6. Use The Hackathon Workbench

For hackathon preparation, start here:

- [`../hackathon-kit/preflight-checklist.md`](../hackathon-kit/preflight-checklist.md)
- [`../hackathon-kit/problem-one-pager.md`](../hackathon-kit/problem-one-pager.md)
- [`../hackathon-kit/demo-spine.md`](../hackathon-kit/demo-spine.md)
- [`../hackathon-kit/eval-template.md`](../hackathon-kit/eval-template.md)
- [`../hackathon-kit/demo-backup-plan.md`](../hackathon-kit/demo-backup-plan.md)

The hackathon workbench should always produce:

```text
Problem One-Pager
Demo Spine
Repo
Eval
Decision Log
Backup Plan
```

