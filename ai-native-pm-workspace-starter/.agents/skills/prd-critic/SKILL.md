# PRD Critic

## Purpose

评审 PRD 是否完整、可测试、可交付、可追溯，并暴露矛盾、缺口、模糊表述和需要 PM 决策的事项。

本 Skill 适合在 PRD 评审前、Spec 生成前、原型 Demo 前使用。

## Use Cases

- PRD draft 进入正式评审前。
- 需求准备拆成研发任务前。
- PM 想把 PRD 转成 mock demo 或 agent spec 前。
- 独立 reviewer 需要检查 PRD 是否有隐藏风险。

## Required Inputs

- PRD draft。
- Product goal。
- Target users。
- Scope and non-goals。
- Success metrics and guardrail metrics。
- Known dependencies。
- Source registry entries for key facts。
- Data classification: L0 / L1 / L2 / L3。

如果没有 PRD draft，停止。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和 `SOURCE_REGISTRY.md`。
2. 检查当前工具是否允许处理该 PRD 的分类等级。
3. 用 5 条 bullet 总结 PRD。
4. 检查问题、目标、用户、范围和非目标是否明确。
5. 检查主流程、权限、状态、错误、空态、撤销、降级和 fallback。
6. 检查成功指标、护栏指标、埋点和验收方式。
7. 检查依赖、上线条件、运营流程和数据口径。
8. 标记 contradiction、vague verbs、hidden assumptions、missing owners。
9. 按 blocking / important / nice-to-have 分级。
10. 输出可直接给 PM 使用的修改建议，但不发明事实。

## Output Contract

```markdown
## Summary

## Blocking Issues

## Important Gaps

## Nice-To-Have Improvements

## Missing Metrics / Events

## Edge Cases

## Source And Evidence Gaps

## Questions For PM

## Suggested Rewrite

## Human Gates
```

## Quality Checks

- Blocking issues 必须是真正阻塞评审、排期、验收或合规的事项。
- 每条 critique 指向具体 PRD section 或缺失 section。
- Suggested rewrite 不编造业务事实、数据、期限或承诺。
- Acceptance criteria 必须可观察、可测试。
- 合规等级和工具边界要被显式检查。

## Human Gates

PM must decide:

- whether to change scope；
- whether unclear requirements can enter development；
- whether weak evidence is acceptable；
- whether a metric definition is authoritative；
- whether the PRD can be shared outside the approved environment。

## Example

Finding: "PRD says the agent should recommend the best option, but does not define best. Add ranking criteria, tie-breakers, and fallback behavior for insufficient data."

## Failure Modes

- 只润色文字，不指出产品风险。
- 把格式问题当成核心问题。
- 缺少 agent-specific requirements，例如工具权限、失败路径、Human Gate 和审计。
- 忽略 source_id，导致结论需要授权后追溯。

