# Requirement Review

## Purpose

Review a product requirement before planning or development. The goal is to expose unclear value, weak evidence, missing constraints, and decision risks.

## Use Cases

- A stakeholder proposes a new feature.
- A PM is preparing sprint planning.
- A team needs to compare several requirement candidates.

## Required Inputs

- Requirement statement.
- Target user or customer segment.
- Problem evidence.
- Business goal or metric.
- Known constraints.
- Current decision to make.

If any required input is missing, stop and ask for it.

## Procedure

1. Restate the requirement in one sentence.
2. Separate facts, assumptions, and opinions.
3. Identify the user problem and business objective.
4. Score evidence strength: strong / medium / weak.
5. List missing context and unresolved questions.
6. Identify product, technical, data, legal, operational, and GTM risks.
7. Suggest the smallest validation step.
8. Recommend: proceed, revise, validate first, or reject.

## Output Contract

```markdown
## Verdict
Proceed / Revise / Validate First / Reject

## Requirement Summary

## Facts / Assumptions / Opinions

## Evidence Strength

## Key Risks

## Missing Questions

## Smallest Validation

## PM Decision Needed
```

## Quality Checks

- Every claim is tied to input evidence or marked as assumption.
- The recommendation includes a reason.
- Missing data is not invented.
- Risks include at least one failure path or edge case.

## Human Gates

Human approval is required for:

- Committing roadmap priority.
- Making user promises.
- Sharing internal data externally.
- Entering development when evidence is weak.

## Example

Input: "Add an AI restaurant planner for family dinners."  
Output verdict: "Validate First" because user segment and success metric are unclear. Smallest validation: prototype 3 planning scenarios and test with 5 target users.

## Common Failure Modes

- Treating stakeholder preference as user evidence.
- Optimizing for solution novelty instead of problem severity.
- Ignoring operational or data quality constraints.
- Producing a polished PRD before the decision is ready.
