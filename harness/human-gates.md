# Human Gates

Purpose: define where AI must stop and ask for human judgment.

| Level | Meaning | Examples |
|---|---|---|
| H0 Monitor | AI acts only in draft or analysis mode | Summaries, risk lists, draft options |
| H1 Review | Human reviews before use | PRD critique, research synthesis |
| H2 Approve | Human approves before action | Send message, publish, modify config |
| H3 Co-Decide | Human and team make the decision | Roadmap, launch, sensitive tradeoff |

## Default H2 / H3 Actions

- Publishing or external sharing.
- Deleting or overwriting data.
- Sending messages.
- Payment or paid API use.
- Permission changes.
- User commitments.
- Sensitive data access.

## Quality Checks

- Every loop has a human gate.
- Gate owner is named.
- Stop condition is explicit.
