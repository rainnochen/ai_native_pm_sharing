# Agent Experience Loop

## Objective

Improve AI Agent experience by analyzing failures, tool traces, user feedback, and human interventions.

## Trigger

- Agent failure.
- Low-confidence action.
- User correction.
- Weekly trace review.

## Signals

- User intent.
- Tool calls.
- Agent response.
- Trace logs.
- User feedback.
- Human override.

## Procedure

1. Sample traces and user feedback.
2. Classify failures: intent, data, tool, permission, policy, UX, latency.
3. Identify whether fix belongs in prompt, context, tool contract, policy, or product design.
4. Add test cases for repeated failures.
5. Update harness or loop.

## Evaluator

- Task success.
- User correction rate.
- Unsafe action avoidance.
- Fallback quality.

## Human Gates

Human approval is required for new tool permissions, external actions, and user commitments.

## Memory

Record failure samples and fixes in an eval set.

## Stop Rules

Stop automation if unsafe action risk is detected.

## Example

Failure: agent recommends a closed restaurant. Fix: add business-hour freshness check and fallback message.

## Failure Modes

- Fixing every failure with a longer prompt.
- Ignoring tool contract gaps.
- Automating actions before permissions and fallback are clear.
