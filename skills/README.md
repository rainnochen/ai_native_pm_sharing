# PM Skills

Skills are reusable task modules for product work. A skill is stronger than a prompt because it includes inputs, procedure, quality checks, and human gates.

## Skill Contract

Every `SKILL.md` should include:

- Purpose
- Use Cases
- Required Inputs
- Procedure
- Output Contract
- Quality Checks
- Human Gates
- Example
- Common Failure Modes

## Core Skills

| Skill | Use |
|---|---|
| [`requirement-review`](requirement-review/SKILL.md) | Review a requirement before it enters planning |
| [`prd-critic`](prd-critic/SKILL.md) | Check PRD completeness and contradictions |
| [`prototype-acceptance`](prototype-acceptance/SKILL.md) | Decide whether a demo proves the key assumption |
| [`user-research-synthesis`](user-research-synthesis/SKILL.md) | Synthesize interviews or feedback |
| [`competitor-analysis`](competitor-analysis/SKILL.md) | Compare competitor moves with evidence |
| [`experiment-design`](experiment-design/SKILL.md) | Turn a product question into an experiment |

## Safety

Skills must not publish, delete, send messages, change permissions, or call paid APIs without explicit human approval.
