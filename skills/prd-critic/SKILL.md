# PRD Critic

## Purpose

Review a PRD for completeness, testability, contradictions, and missing product decisions.

## Use Cases

- Before PRD review.
- Before development starts.
- Before converting a PRD into a prototype or agent spec.

## Required Inputs

- PRD draft.
- Product goal.
- Target users.
- Scope and non-goals.
- Success metrics.
- Known dependencies.

If the PRD is not provided, stop.

## Procedure

1. Summarize the PRD in 5 bullets.
2. Check whether the problem and goal are explicit.
3. Check user journey, states, permissions, error paths, empty states, and fallback.
4. Check success metrics, guardrail metrics, and logging needs.
5. Check dependencies and launch requirements.
6. Identify contradictions, vague verbs, hidden assumptions, and missing owners.
7. Produce a prioritized critique.

## Output Contract

```markdown
## Summary
## Blocking Issues
## Important Gaps
## Nice-To-Have Improvements
## Missing Metrics / Events
## Edge Cases
## Questions For PM
## Suggested Rewrite
```

## Quality Checks

- Blocking issues must be truly blocking.
- Each critique points to a specific PRD section or missing section.
- Suggested rewrites do not invent facts.
- Acceptance criteria are observable.

## Human Gates

PM must decide:

- Whether to change scope.
- Whether unclear requirements can enter development.
- Whether a risk is acceptable.

## Example

Finding: "The PRD says the agent should 'recommend the best option' but does not define best. Add ranking criteria, tie-breakers, and fallback for insufficient data."

## Common Failure Modes

- Rewriting the PRD without explaining risks.
- Treating formatting issues as product issues.
- Missing agent-specific requirements such as tool permissions and fallback.
