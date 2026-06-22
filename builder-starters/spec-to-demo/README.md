# Spec To Demo

Purpose: convert a product spec into a small demo that proves one key assumption.

## Inputs

| Input | Description |
|---|---|
| Problem | User problem to prove |
| Target user | Who experiences the problem |
| Key assumption | What the demo must validate |
| Main flow | Shortest path from input to value |
| Acceptance criteria | Observable success |
| Constraints | Data, time, technical, compliance |

## Procedure

1. Write the key assumption in one sentence.
2. Define the demo spine.
3. Remove every feature that does not support the spine.
4. Add one edge case and one fallback.
5. Define eval cases.
6. Build or mock only what is needed to prove the assumption.

## Output

```markdown
## Demo Goal
## Demo Spine
## Acceptance Criteria
## Eval Cases
## Fake / Mocked Parts
## Risks
## Next Decision
```

## Quality Checks

- The demo proves a decision, not a full product.
- Mocked parts are labeled.
- There is a backup path.
- The next decision is explicit.
