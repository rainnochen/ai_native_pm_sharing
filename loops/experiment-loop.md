# Experiment Loop

## Objective

Use experiments to improve product decisions while protecting users and business guardrails.

## Trigger

New hypothesis, feature launch, strategy change, or unexpected metric movement.

## Signals

- Experiment metrics.
- Guardrail metrics.
- User feedback.
- Operational incidents.
- Segment-level differences.

## Procedure

1. Define hypothesis and decision rule before launch.
2. Run [`../skills/experiment-design/SKILL.md`](../skills/experiment-design/SKILL.md).
3. Review primary and guardrail metrics.
4. Inspect segment differences and qualitative feedback.
5. Decide: ship, iterate, rerun, or stop.
6. Record decision and update assumptions.

## Evaluator

- Metric validity.
- Guardrail impact.
- Confidence level.
- Business significance.

## Human Gates

PM, data, and business owners approve scale-up decisions.

## Memory

Record final decision, confidence, and follow-up.

## Stop Rules

Stop if guardrails regress beyond agreed thresholds.

## Example

Ship if conversion improves without increasing complaint rate or route abandonment.

## Failure Modes

- Changing metrics after results.
- Ignoring novelty effects.
- Over-scaling from weak evidence.
