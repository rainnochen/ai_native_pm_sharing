# Prototype Acceptance

## Purpose

检查 mock prototype、HTML demo 或 agent demo 是否足以支持 PM、设计、研发和业务评审。

本 Skill 不判断生产可上线性，只判断原型是否能作为安全、可复现、可评审的证据。

## Use Cases

- PRD 生成 mock HTML demo 后。
- Hackathon 或内部试点 Demo 评审前。
- 设计稿、PRD 和原型需要对齐时。
- PM 需要判断 demo 是否可以进入下一轮用户或 reviewer 反馈。

## Required Inputs

- Prototype location or changed files。
- PRD or product goal。
- Target user journey。
- Acceptance criteria。
- Mock data description。
- Known limitations。
- Data classification: L0 / L1 / L2 / L3。

如果原型路径、目标用户旅程或验收标准缺失，停止并先提问。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和相关 PRD / design manifest。
2. 确认原型只使用 mock、synthetic 或 approved sanitized data。
3. 检查主路径是否可点击、可理解、可复现。
4. 检查关键状态：loading、empty、error、success、permission、fallback。
5. 对照 PRD 验收标准逐项打勾。
6. 对照 `05_design/DESIGN_MANIFEST.md` 或 component map 检查明显偏差。
7. 记录不支持的功能、假数据、人工操作和已知限制。
8. 给出 go / revise / not ready 结论。

## Output Contract

```markdown
## Verdict
Go / Revise / Not Ready

## Prototype Summary

## Acceptance Checklist

## Journey Coverage

## State Coverage

## Design / PRD Mismatches

## Mock Data And Safety Notes

## Blocking Fixes

## Demo Script

## Human Gates
```

## Quality Checks

- 不把 mock demo 描述为 production-ready。
- 明确列出 mock 数据、需要授权后用能力和假设。
- 每项验收标准都有 pass / fail / not tested。
- Blocking fixes 必须能在下一轮评审前处理。
- 对任何真实数据、内部截图、生产接口或外部发布风险给出警示。

## Human Gates

Human approval is required for:

- showing the demo to users or external partners；
- connecting real APIs, real data, or production services；
- claiming the prototype validates business value；
- converting demo behavior into committed roadmap scope；
- publishing screenshots or recordings。

## Example

Verdict: "Revise" because the happy path works, but empty state and insufficient-data fallback are missing. The demo can be used for internal PM review, but not for user testing.

## Failure Modes

- 只看页面是否好看，不检查状态和验收标准。
- 忽略 mock 与真实能力的边界。
- 把演示脚本当作真实用户流程。
- 没有记录哪些结论仍需真实数据或用户反馈验证。

