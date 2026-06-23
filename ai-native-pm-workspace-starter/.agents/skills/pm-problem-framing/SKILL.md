---
name: pm-problem-framing
description: 在需求、方案或立项前，把模糊问题转成可验证的问题卡；不用于自动做高代价决策。
---

# PM Problem Framing

## Purpose

把模糊需求、方案想法或业务问题转成可验证的问题卡，帮助 PM 在写 PRD 前先看清用户、证据、约束、选项和风险。

本 Skill 不用于自动批准立项、承诺资源或决定上线。

## Use Cases

- 用户、老板或业务方提出一个模糊想法。
- 团队在方案选择上争论，但证据不完整。
- PM 想先做最小验证，而不是直接写完整 PRD。
- Agent 需要先问问题再输出方案。

## Required Inputs

- Project Brief。
- Source Registry。
- User evidence。
- Business goal or metric。
- Constraints。
- Current decision to make。
- Data classification: L0 / L1 / L2 / L3。

如果输入含未分类敏感信息，停止。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和 `SOURCE_REGISTRY.md`。
2. 判断当前工具是否可处理输入。
3. 识别真正的决策问题。
4. 区分 facts、inferences、assumptions、gaps。
5. 描述用户任务、当前替代方案和替换成本。
6. 找出最大风险、反例和需要授权后逆部分。
7. 给出 2-3 个备选路径。
8. 为每个路径定义成立条件和最小验证。
9. 列 Human Gates 和停止条件。

## Output Contract

```markdown
## Problem Card

## Current Decision

## Facts / Inferences / Assumptions / Gaps

## User Task And Alternatives

## Options

## Recommended Next Experiment

## Stop Conditions

## Human Gates
```

## Quality Checks

- 不把方案包装成问题。
- 不把没有来源的判断写成事实。
- 每个选项都有成立条件和失败信号。
- 最小验证必须可在短周期内完成。
- 对高影响决策明确 Human Gate。

## Human Gates

Human approval is required for:

- project approval；
- resource commitment；
- user or partner promise；
- change to roadmap priority；
- moving from validation to delivery。

## Example

Input: "我们是不是应该做 AI 旅行助手？"

Output: problem card identifies target user, current planning alternative, evidence gaps, 3 possible scopes, and the smallest validation: mock 3 trips and test with 5 target users.

## Failure Modes

- 直接进入 solution design。
- 只列优点，不列替代方案和反例。
- 用漂亮话掩盖证据不足。
- 分类不清时继续处理内部材料。

