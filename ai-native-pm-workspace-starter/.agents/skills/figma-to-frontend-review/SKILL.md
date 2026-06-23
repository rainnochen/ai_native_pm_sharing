---
name: figma-to-frontend-review
description: 对照 PRD、设计 manifest、tokens、组件映射和实现，输出可追溯差异；不凭截图猜实现。
---

# Figma To Frontend Review

## Purpose

对照 PRD、设计交接包、组件映射、tokens 和前端实现，检查设计意图是否被正确实现，并输出可追溯差异。

本 Skill 不用于未经批准地连接外部 Figma 服务，也不用于自动修改生产代码。

## Use Cases

- 设计走查前。
- 前端联调前。
- PRD、设计和实现需要三方对齐时。
- 需要把 UI 差异分级给 PM、设计和研发 owner 时。

## Required Inputs

- Requirement IDs or PRD sections。
- `05_design/DESIGN_MANIFEST.md`。
- Component map。
- Tokens or design variables。
- Code paths or read-only implementation notes。
- Screenshots or test results allowed by classification。
- Data classification: L0 / L1 / L2 / L3。

如果没有设计版本、需求映射或允许的实现证据，停止。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md`。
2. 核对设计版本、ready-for-dev 状态和允许工具。
3. 建立 requirement -> frame -> component -> code 的映射。
4. 检查主流程、异常态、文案、权限、埋点、响应式和可访问性。
5. 检查组件、props、tokens 和禁用用法。
6. 使用允许的截图、静态代码片段或交互测试证据。
7. 对需要更多条件才能确认项标 `unknown`，列出所需证据。
8. 输出 P0-P3 差异矩阵和 owner。

## Output Contract

```markdown
## Review Scope

## Source And Design Version

## Requirement To Design To Code Map

## P0-P3 Differences

## Unknowns And Evidence Needed

## Token / Component Issues

## Accessibility And Responsive Notes

## Recommended Fix Order

## Human Gates
```

## Quality Checks

- 不凭截图猜已有组件。
- 不硬编码已有 token。
- 不把视觉相似度当唯一验收。
- 每条差异包含 severity、evidence 和 owner。
- L1-L3 默认不调用外部 Figma 服务。

## Human Gates

Human approval is required for:

- connecting Figma API or MCP；
- exporting internal design files；
- modifying code；
- accepting design deviations；
- publishing screenshots or recordings。

## Example

Finding: "P1. Empty state copy differs from PRD section 3.2. Design frame D-04 uses component EmptyHint, but implementation hardcodes a paragraph. Owner: frontend."

## Failure Modes

- 只做截图相似度评估。
- 自造组件，绕开团队组件库。
- 未经批准上传内部设计稿到外部工具。
- 对需要更多条件才能确认项假装已经验证。

