# Experiment Design

## Purpose

Turn a product question into a testable experiment with metrics, guardrails, and decision rules.

## Use Cases

- Validate a new feature.
- Decide whether to scale a strategy.
- Compare recommendation, ranking, or onboarding variants.

## Required Inputs

- Product question.
- Hypothesis.
- Target population.
- Primary metric.
- Guardrail metrics.
- Constraints and risks.

## Procedure

1. Rewrite the hypothesis in testable form.
2. Define target users and inclusion/exclusion rules.
3. Choose experiment type: prototype test, A/B, fake door, concierge, survey, or data analysis.
4. Define metrics and guardrails.
5. Set decision rules before launch.
6. Identify ethical, operational, and data risks.
7. Define stop conditions and post-experiment review.

## Output Contract

```markdown
## Hypothesis
## Experiment Type
## Population
## Variant / Control
## Metrics
## Guardrails
## Decision Rule
## Risks
## Stop Conditions
## Review Plan
```

## Quality Checks

- Metrics match the hypothesis.
- Guardrails protect user experience and business health.
- Decision rule is defined before results are known.
- Risks include false positives and novelty effects.

## Human Gates

Human approval is required for:

- User-impacting experiments.
- Sensitive segments.
- Launch or scale decisions.

## Example

Decision rule: "Ship only if completion rate improves by 5% without increasing complaint rate or route abandonment."

## Common Failure Modes

- Choosing metrics after seeing results.
- Ignoring guardrails.
- Treating correlation as causation.
