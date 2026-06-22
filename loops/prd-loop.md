# PRD Loop

## Objective

Improve PRD quality over repeated reviews by feeding review findings back into templates, skills, and product rules.

## Trigger

- New PRD draft.
- Major scope change.
- Pre-review checkpoint.

## Signals

- PRD content.
- Review comments.
- Engineering questions.
- Design questions.
- QA defects caused by unclear requirements.

## Procedure

1. Run [`../skills/prd-critic/SKILL.md`](../skills/prd-critic/SKILL.md).
2. Classify findings: blocking, important, nice-to-have.
3. Identify repeated failure patterns.
4. PM resolves or accepts each issue.
5. Update PRD template, glossary, or human gate if the same gap repeats.

## Evaluator

- Blocking ambiguity count.
- Missing edge cases.
- Missing metrics / events.
- Number of review cycles before development.

## Human Gates

- PM approves scope changes.
- Tech lead approves technical feasibility assumptions.
- Data owner approves metrics and logging.

## Memory

Record decisions in [`../context/decision-log.md`](../context/decision-log.md).

## Stop Rules

Stop the loop if PRD lacks a clear decision, target user, or business goal.

## Example

Finding: "Fallback path missing for insufficient POI data."  
Action: add fallback section to PRD template and require it in future Agent specs.

## Failure Modes

- Treating PRD polish as product clarity.
- Fixing symptoms without updating templates.
- No owner for repeated gaps.
