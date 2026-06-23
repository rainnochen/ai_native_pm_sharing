# Human Gates

| Gate | Trigger | Required approver | Evidence shown | Reversible | Log location |
|---|---|---|---|---|---|
| External sharing | Any L1+ or public release | Compliance / Owner | final content and sources | No |  |
| Code write | Any non-demo code edit | Engineering Owner | diff, tests, rollback | Usually |  |
| Production deploy | Release / rollback | Release approvers | PR, CI, risk | Yes / partial |  |
| Data detail access | User-level / expanded scope | Data Owner | fields, rows, purpose | No |  |
| MCP write | Side-effect tool | Tool Owner | params, impact, rollback | Depends |  |
