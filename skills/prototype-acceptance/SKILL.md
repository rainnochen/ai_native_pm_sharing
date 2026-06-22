# Prototype Acceptance

## Purpose

Evaluate whether a prototype or demo proves the intended product assumption.

## Use Cases

- PM reviews a coded demo.
- Hackathon team freezes scope.
- A prototype is shown before formal development.

## Required Inputs

- Prototype link, screenshots, or flow description.
- Key assumption to prove.
- Target user.
- Demo script.
- Known limitations.
- Acceptance criteria.

## Procedure

1. Restate the key assumption.
2. Identify the demo spine: input, action, output, user value.
3. Check whether the prototype proves the assumption or only illustrates it.
4. Test happy path, edge cases, loading, failure, and fallback.
5. Identify fake, mocked, or manual steps.
6. Recommend next step: user test, technical spike, rebuild, or stop.

## Output Contract

```markdown
## Acceptance Verdict
Accept / Accept With Risks / Revise / Reject

## Assumption Tested
## Demo Spine
## Evidence Produced
## Gaps And Fake Steps
## Edge Cases
## Next Validation Step
## Human Decision Needed
```

## Quality Checks

- Distinguish working functionality from scripted illusion.
- Check whether users can understand the value without explanation.
- Identify at least one failure path.
- Acceptance criteria must be observable.

## Human Gates

Human approval is required before:

- Treating a demo as user-validated.
- Sharing externally.
- Moving from prototype to production planning.

## Example

Verdict: "Accept With Risks" because the demo proves route explanation value, but POI availability and real-time data are mocked.

## Common Failure Modes

- Confusing visual polish with evidence.
- Ignoring latency or data quality.
- Showing only happy path.
- Treating a mocked workflow as production feasibility.
