# Requirement Review

## Purpose

在需求进入 PRD、原型或研发排期前，评审需求的用户价值、证据强度、约束、风险和下一步验证方式。

本 Skill 的目标不是替 PM 做决定，而是把不清楚、需要授权后验证、缺少来源或需要 Human Gate 的地方暴露出来。

## Use Cases

- Stakeholder 提出一个新功能或新策略。
- PM 准备进入需求评审。
- 团队需要比较多个需求候选项。
- Agent 需要先判断是否可以进入 PRD 或 Demo 阶段。

## Required Inputs

- Requirement statement。
- Target user or customer segment。
- Problem evidence and `source_id`。
- Business goal or metric。
- Known constraints。
- Current decision to make。
- Data classification: L0 / L1 / L2 / L3。

如果缺少需求、用户、证据、业务目标或分类，停止并先提问。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和 `SOURCE_REGISTRY.md`。
2. 检查输入分类是否允许当前工具处理。
3. 用一句话复述需求。
4. 分离 facts、assumptions、opinions、gaps。
5. 检查每个关键事实是否有 `source_id`。
6. 判断用户问题、业务目标和成功指标是否明确。
7. 对证据强度打标：strong / medium / weak。
8. 列出产品、技术、数据、设计、合规、运营和 GTM 风险。
9. 给出最小验证步骤。
10. 给出建议：proceed / revise / validate first / reject。

## Output Contract

```markdown
## Verdict
Proceed / Revise / Validate First / Reject

## Requirement Summary

## Facts / Assumptions / Opinions / Gaps

## Evidence Strength

## Source Coverage

## Key Risks

## Missing Questions

## Smallest Validation

## Human Gates

## PM Decision Needed
```

## Quality Checks

- 每个关键事实要么引用 `source_id`，要么标记为 assumption。
- 不补写没有来源的内部事实、指标、日期或承诺。
- 建议必须说明理由。
- 风险至少覆盖一个失败路径或边界场景。
- 对 L2/L3 输入，不建议使用外部工具或外发路径。

## Human Gates

Human approval is required for:

- roadmap priority；
- user, partner, or leadership commitment；
- weak-evidence requirement entering development；
- external sharing of internal content；
- expansion from mock or read-only work to production-impacting work。

## Example

Input: "为家庭聚餐增加 AI 餐厅规划功能。"

Output verdict: "Validate First"，原因是用户分群、成功指标和真实证据不足。最小验证步骤：用 mock 原型覆盖 3 个家庭聚餐场景，并访谈 5 个目标用户。

## Failure Modes

- 把 stakeholder 偏好当成用户证据。
- 为了显得完整而编造指标或来源。
- 直接写 PRD，跳过需求是否值得做的判断。
- 忽略合规等级和工具边界。

