# PM Loop Contract

Use this before turning a prompt, workflow, or agent task into a recurring loop.

The goal is not to write a beautiful document. The goal is to expose the boundaries before automation starts: what the loop may do, how it proves progress, when it stops, and when a human must take over.

## 1. Name

- Loop name:
- Owner:
- Review cadence:

## 2. Trigger

- How does the loop start?
- Is it time-based, event-based, threshold-based, or manually started?
- What conditions should prevent it from starting?

## 3. Objective

- What result counts as done?
- What metric or signal proves progress?
- What must not be sacrificed?
- What anti-metric prevents Goodhart-style optimization?

## 4. Inputs

- Data sources:
- Documents or repos:
- Tools or APIs:
- Source freshness:
- Source trust level:
- Privacy or permission limits:

## 5. Scope

- The loop may read:
- The loop may write:
- The loop must not touch:
- Maximum diff, message count, spend, or runtime:

## 6. Tools

| Tool | Purpose | Permission | Human approval needed? |
|---|---|---|---|
| | | | |

## 7. State

Where does each run write durable state?

- Current objective:
- Actions taken:
- Evidence used:
- Failed paths:
- Current blockers:
- Next suggested step:
- Human decisions:

## 8. Verification

- Machine checks:
- Rule checks:
- Golden cases:
- Human sampling method:
- Independent reviewer or sub-agent:

## 9. Stop Rules

The loop must stop when:

- The objective is achieved.
- Budget is exhausted.
- The same failure repeats:
- No progress is detected:
- Confidence is too low:
- Risk threshold is crossed:

## 10. Escalation

Escalate to a human when:

- The loop touches user rights, money, compliance, privacy, or public commitments.
- The loop proposes deleting data, changing permissions, publishing, or sending external messages.
- Evidence conflicts or the source is unreliable.
- The loop needs a product, strategy, legal, or brand judgment.

## 11. Cleanup

- Failed branch/worktree handling:
- Temporary files:
- Draft messages or tickets:
- Rollback path:
- Audit trail location:

## 12. Retrospective

After each review cycle:

- What did the loop handle well?
- Where did it create noise?
- Which decision still required human judgment?
- Should we update the skill, context, tool permission, eval, stop rule, or contract?

