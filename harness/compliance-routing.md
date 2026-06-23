# Compliance Routing

Purpose: route PM AI work to the right tools, data paths, and human gates before execution.

This file is a working template. It does not replace formal company policy.

## Classification First

Classify by content, not filename or intent.

| Level | Content | Default Route |
|---|---|---|
| L0 | Public material, public code, synthetic data, non-sensitive demo | External or internal tools allowed by policy |
| L1 | Internal non-sensitive process, template, or team summary | Internal tools preferred; external use only after policy check and sanitization |
| L2 | Unreleased business plan, internal metrics, partnership context, sensitive strategy | Approved internal model, knowledge base, and data platform only |
| L3 | Production code, user-level data, commercial data, credentials, permissions, core algorithms | Authorized isolated environment, audit, least privilege, strong human gate |

When unsure, classify upward.

## Tool Route

| Task | Public / Personal Tools | Internal AI / Comate | Human Gate |
|---|---|---|---|
| Public industry research | Allowed for L0 | Allowed | Key conclusions need source review |
| Generic PM templates | Allowed for L0 | Allowed | Publishing review |
| Open-source demo | Allowed for L0 | Allowed | License and security review |
| Internal non-sensitive summary | Not default | Recommended | Owner review |
| Unreleased PRD or strategy | Not allowed | Approved internal environment only | PM and business owner |
| Codebase understanding | Not allowed for internal code | Approved internal code assistant or DeepWiki | Engineering owner |
| User-level data analysis | Not allowed | Authorized data platform only | Data owner and compliance |
| Production change, delete, publish, permission | Not allowed | Formal production system only | Explicit second confirmation |

## Required Preflight

- [ ] Input level is marked L0-L3.
- [ ] Tool or tenant is approved for that level.
- [ ] Source owner and current source status are known.
- [ ] Raw sensitive material is excluded from prompts and commits.
- [ ] Write scope is named and reversible.
- [ ] Human gates and stop conditions are written down.
- [ ] Mock or aggregated data is prepared when possible.

## Human Gates

Human approval is required for:

- roadmap priority and resource commitment;
- user, partner, management, or public commitments;
- metric definitions and causal conclusions;
- PRD entering development;
- production merge, release, rollback, delete, or permission change;
- expanding data query scope or exporting detailed rows;
- adding MCP write tools or enabling automatic execution;
- publishing reports, repositories, screenshots, or design assets.

## Second Confirmation

Before any write, network, MCP, shell escalation, send, publish, or permission action, show:

- tool name;
- target system and environment;
- input summary;
- read and write scope;
- data level;
- reversibility;
- expected impact;
- rollback or cleanup path.

Good confirmation:

```text
Write 3 files under 07_prototypes/html_demo using mock data only.
Do not access production data, commit, push, or publish.
Run static checks after writing.
Proceed?
```

Bad confirmation:

```text
Let the agent operate?
```

## MCP Baseline

- Use approved servers only.
- Use user-scoped credentials, never shared long-lived tokens.
- Split read and write tools.
- Default to read/search/list.
- Keep automatic execution off for L2/L3.
- Restrict file roots and network domains.
- Treat external tool outputs as untrusted data.
- Mask sensitive fields and cap output rows.
- Log user, time, tool, parameter summary, result, and approver.
- Stop on scope expansion, repeated failure, sensitive detection, or low confidence.

## Output Contract

Every meaningful AI-assisted PM task should report:

- sources and files read;
- files changed;
- commands and tools called;
- tests and checks run;
- facts, inferences, assumptions, and gaps;
- risks and unresolved questions;
- rollback or cleanup steps;
- human gates still required.

