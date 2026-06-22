# PM Loops

Loops turn one-off AI assistance into controlled feedback cycles.

A loop must include:

- Objective
- Trigger
- Signals
- Procedure
- Evaluator
- Human Gates
- Memory
- Stop Rules
- Example
- Failure Modes

Start with [`pm-loop-canvas.md`](pm-loop-canvas.md).
Before automating a loop, write a boundary contract with [`loop-contract.md`](loop-contract.md).

## Available Loops

| Loop | Use |
|---|---|
| [`pm-loop-canvas.md`](pm-loop-canvas.md) | Generic PM loop design |
| [`prd-loop.md`](prd-loop.md) | Improve PRD quality over repeated reviews |
| [`user-feedback-loop.md`](user-feedback-loop.md) | Turn feedback into validated opportunities |
| [`experiment-loop.md`](experiment-loop.md) | Run experiment decisions with guardrails |
| [`agent-experience-loop.md`](agent-experience-loop.md) | Improve AI Agent experience from traces and failures |
| [`course-development-loop.md`](course-development-loop.md) | Iteratively develop the AI Native PM course and toolkit |
| [`loop-contract.md`](loop-contract.md) | Define trigger, objective, scope, tools, verification, stop rules, escalation, and cleanup before automation |

For course development, copy [`../prompts/course-development-loop-prompt.md`](../prompts/course-development-loop-prompt.md) into your AI tool and fill in the current loop objective.
