# PM Loop Canvas

Purpose: design a controlled AI-assisted feedback loop before automating it.

| Field | Fill In |
|---|---|
| Loop name |  |
| Owner |  |
| Objective |  |
| Trigger |  |
| Input signals |  |
| AI actions |  |
| Human gates |  |
| Evaluator |  |
| Output |  |
| Memory |  |
| Stop rules |  |
| Escalation path |  |

## Procedure

1. Define the decision this loop supports.
2. List signals and likely noise.
3. Define what AI may do.
4. Define what humans must decide.
5. Define evaluation and stop rules.
6. Run manually three times before automating.

## Output Format

```markdown
## Loop Summary
## Signals
## AI Actions
## Human Gates
## Evaluation
## Decision Log Entry
## Next Iteration
```

## Quality Checks

- The loop has a named owner.
- The trigger is specific.
- The evaluator is defined before running.
- Stop rules are explicit.

## Human Gates

At minimum, human approval is required for roadmap changes, launch, external communication, and sensitive data use.

## Example

Loop: Weekly PRD quality loop. Trigger: every Friday. Signal: PRD drafts, review comments, blocked issues. Output: top 5 recurring requirement gaps and one process improvement.

## Common Failure Modes

- Loop runs without a decision owner.
- Signals are noisy and never validated.
- AI output accumulates but no decision changes.
- Automation starts before manual loop is understood.
