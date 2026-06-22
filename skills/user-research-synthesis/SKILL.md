# User Research Synthesis

## Purpose

Turn interviews, surveys, support tickets, or feedback logs into evidence-backed user insights.

## Use Cases

- Synthesize interview notes.
- Analyze user feedback themes.
- Prepare a research readout.

## Required Inputs

- Raw notes or feedback.
- Research question.
- Target segment.
- Sampling context.
- Any known bias or limitation.

## Procedure

1. Preserve source traceability.
2. Cluster observations into themes.
3. Separate user quotes, inferred needs, and PM interpretation.
4. Identify contradictions and minority signals.
5. Rate confidence by sample quality and recurrence.
6. Generate product implications and next questions.

## Output Contract

```markdown
## Research Question
## Theme Summary
## Evidence Table
| Theme | Evidence | Segment | Confidence | Product Implication |
## Contradictions
## Open Questions
## Recommended Next Research
```

## Quality Checks

- Do not overgeneralize small samples.
- Keep direct evidence separate from interpretation.
- Preserve dissenting evidence.
- Mark uncertainty explicitly.

## Human Gates

PM or researcher must approve:

- Final interpretation.
- Any user-facing claim.
- Any decision based on low-confidence evidence.

## Example

Theme: "Users want restaurant recommendations that explain tradeoffs, not just ranked lists." Confidence: medium, based on 7 of 12 interviews.

## Common Failure Modes

- Collapsing all feedback into majority vote.
- Removing uncomfortable evidence.
- Treating stated preference as proven behavior.
