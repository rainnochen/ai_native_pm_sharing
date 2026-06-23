---
name: prd-review
description: 检查 PRD 的证据、范围、流程、验收、数据、权限和风险，不替 PM 批准需求。
---

# PRD Review

## Purpose

检查 PRD 的证据、范围、流程、数据、权限、验收和风险，帮助团队判断它是否可以进入研发评审或下一轮修改。

本 Skill 输出评审意见，不替 PM 批准需求。

## Use Cases

- PRD 评审会前。
- 需求准备进入研发排期前。
- 需要独立检查 PRD 与 source registry 是否一致时。
- PRD 要转成 Spec、Demo 或验收用例前。

## Required Inputs

- PRD draft。
- Project Brief。
- Source Registry。
- Metric Dictionary。
- Target users。
- Scope and non-goals。
- Data classification: L0 / L1 / L2 / L3。

如果缺少 PRD 或分类，停止。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和 `SOURCE_REGISTRY.md`。
2. 检查输入是否允许当前工具处理。
3. 逐项检查用户、触发场景、问题证据和替代方案。
4. 检查目标、反指标、非目标和成功指标。
5. 检查主流程、异常流程、降级和恢复。
6. 检查状态、文案、权限和数据边界。
7. 检查 API、依赖、可观测性和验收标准。
8. 标记未决问题、owner 和截止时间。
9. 输出 blockers、major issues、minor issues、questions、experiments 和 human gates。

## Output Contract

```markdown
## Blockers

## Major Issues

## Minor Issues

## Questions

## Suggested Experiments

## Source Coverage

## Human Gates
```

## Quality Checks

- 每条必须引用 PRD section 或 `source_id`。
- 不虚构缺失业务事实。
- Blocker 必须影响评审、排期、验收、合规或用户安全。
- 对指标、权限、数据和发布动作明确风险。
- 不把 PRD 润色当作 PRD 评审。

## Human Gates

Human approval is required for:

- weak-evidence PRD entering development；
- metric definition；
- production dependency or permission change；
- external communication；
- release or rollout decision。

## Example

Finding: "Blocker. PRD section 4 defines conversion rate but does not define denominator or deduplication. Source coverage missing. Data owner must confirm before this enters experiment review."

## Failure Modes

- 只输出泛泛建议。
- 给出解决方案但不说明证据缺口。
- 把不确定指标当作已确认口径。
- 忽略数据、权限和发布边界。

