# Source Registry

| source_id | title | source_system | owner | authority | classification | version/date | status | expires_at | allowed_use | locator | summary | conflicts_with | last_reviewed_by |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SRC-001 | 示例项目说明 | Internal Docs | PM Owner | canonical | L1 | 2026-06-23 | active | 2026-09-23 | analysis | private-or-internal-locator | 示例记录，请在真实工作区替换为已批准来源 |  | PM Owner |

## Authority

- `canonical`: 当前权威来源
- `reference`: 可参考，canonical 保持最高优先级
- `draft`: 待确认
- `obsolete`: 过期，仅供历史查询

## Rules

1. Agent 默认只加载 `canonical + active`。
2. 过期、冲突或无 Owner 的来源仅允许在批准范围内作为最终事实。
3. `locator` 可使用内部链接或路径；公开仓库仅允许在批准范围内包含内部定位信息。
