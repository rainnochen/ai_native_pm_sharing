# Comate / Codex / Figma Capability Matrix

Purpose: keep the research report's tool findings in a compact, source-backed reference for course updates and PM workbench design.

Snapshot: 2026-06-23. Product capabilities and enterprise policies may change; verify official docs and internal approvals before using this in production.

## Evidence Legend

- Verified: described in official public documentation as of the snapshot.
- Internal check needed: public docs are insufficient for a Baidu internal deployment, tenant, connector, quota, or policy claim.
- Workflow suggestion: recommended operating model based on verified capabilities and safety constraints.

## Matrix

| Capability | Comate | Codex / ChatGPT | Figma | PM Use | Boundary |
|---|---|---|---|---|---|
| Task-oriented agent | Mission Mode and Spec are publicly documented. | Codex App, CLI, IDE, Cloud, and GitHub workflows are documented. | Provides design context to agents through MCP. | Move from one-shot prompts to scoped tasks. | Tasks still need explicit scope, stop rules, and review. |
| Persistent project rules | Rules, Memory, Skills, and knowledge sets are documented. | AGENTS.md, Skills, Projects, and custom instructions are documented. | Files, libraries, variables, components, and Dev Mode status hold design state. | Keep context reusable and reviewable. | Memory and rules can become stale or conflicting. |
| Skills | Comate Skills are documented as versioned reusable capability packages. | Codex Skills are documented as reusable workflow packages. | Design rules can be turned into agent skills or rules. | Convert PM methods into reusable assets. | Skills must include inputs, quality checks, human gates, and failure modes. |
| Code understanding | DeepWiki and code knowledge capabilities are documented. | Codex can read, edit, and run code in configured environments. | Code Connect maps Figma components to real code components. | Help PMs understand routes, states, APIs, events, and impact. | Internal production code is L3 by default and must stay in approved environments. |
| Prototype generation | Comate preview and element-level debugging are documented. | Codex can build and run non-sensitive demos. | Design context can guide implementation. | Turn PRD and design intent into reviewable evidence. | Mock and production paths must be clearly separated. |
| MCP | Comate MCP support is documented. | Codex and other clients support MCP workflows. | Figma MCP is documented for supported clients. | Connect tools without hand-copying every artifact. | MCP is a tool protocol, not a safety boundary. |
| Figma direct path | Comate direct Figma MCP support was not found in public docs. | Figma documents Codex setup for MCP. | Official MCP and Code Connect docs exist. | Compare PRD, design, and implementation. | Figma allows only supported clients; internal policy may require export-based alternatives. |
| Data analysis | Can assist plans and SQL drafts; internal data access needs approved tools. | Suitable for public or synthetic data analysis only by default. | Not a business data platform. | Force analysis plan before SQL and report. | Real business data stays in approved internal data platforms. |
| Review and isolation | Diff review and task confirmation are part of agent workflows; internal behavior needs check. | Sandbox, approvals, worktrees, and review workflows are documented. | Dev Mode status and annotations support handoff review. | Make changes inspectable and reversible. | Human gates remain mandatory for high-impact changes. |

## Recommended Routing

| Work Type | Recommended Primary Tool | Allowed Data | Notes |
|---|---|---|---|
| Public capability research | ChatGPT / Codex / Comate | L0 | Cite official docs and avoid internal facts. |
| Internal PM harness pilot | Comate-first internal workspace | L1-L2 as approved | Use private repo, source registry, skills, eval, and human gates. |
| Internal codebase product map | Approved Comate / DeepWiki path | L3 as authorized | Read-only by default; output `CODE_MAP.md` and impact table. |
| PRD to mock demo | Comate or internal IDE agent | L1-L2 summaries, mock data | Generate only under demo directories. |
| Figma to frontend review | Figma MCP for L0, export package for internal work | L0 externally; L1-L3 internally only as approved | If direct MCP is not approved, use design manifest, component map, tokens, and sanitized screenshots. |
| Data analysis | Internal BI / SQL / data platform with AI assistance | L2-L3 as authorized | First output analysis plan, then SQL draft, then human-reviewed execution. |

## Source Links

- Comate Mission Mode: https://cloud.baidu.com/doc/COMATE/s/Smowccwio
- Comate Skills: https://cloud.baidu.com/doc/COMATE/s/Nmma28iqe
- Comate Rules: https://cloud.baidu.com/doc/COMATE/s/Zm9l4agw3
- Comate Memory: https://cloud.baidu.com/doc/COMATE/s/smiss5jka
- Comate MCP: https://cloud.baidu.com/doc/COMATE/s/mmipy9pt9
- Comate Subagents: https://cloud.baidu.com/doc/COMATE/s/Rmfb62bhj
- Comate Knowledge Management: https://cloud.baidu.com/doc/COMATE/s/xmk2donc2
- Comate DeepWiki: https://cloud.baidu.com/doc/COMATE/s/dmpuztqhg
- Comate Spec: https://cloud.baidu.com/doc/COMATE/s/Smpe3cf8h
- Comate Preview: https://cloud.baidu.com/doc/COMATE/s/8mc4sla81
- Comate Data Security: https://cloud.baidu.com/doc/COMATE/s/Lm839z700
- Codex overview: https://developers.openai.com/codex
- Codex Skills: https://developers.openai.com/codex/skills
- Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- Codex approvals and security: https://developers.openai.com/codex/agent-approvals-security
- Figma MCP: https://help.figma.com/hc/en-us/articles/39216419318551-Get-started-with-the-Figma-MCP-server
- Figma Codex MCP setup: https://help.figma.com/hc/en-us/articles/39888629089175-Codex-and-Figma-Set-up-the-MCP-server
- Figma Code Connect: https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect
- Figma Dev Mode: https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode
- Figma variables: https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma
- MCP security best practices: https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices

