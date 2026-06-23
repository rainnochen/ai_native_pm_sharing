# Eval Rubric

每项 0–3 分：

- 0：未满足
- 1：严重不足
- 2：基本可用
- 3：达标

| 维度 | 标准 | 分数 | Evidence |
|---|---|---:|---|
| Grounding | 事实回链权威来源 |  |  |
| Correctness | 逻辑、口径、代码或流程正确 |  |  |
| Constraint | 遵守范围、目录、工具和合规 |  |  |
| Completeness | 主流程、异常和边界完整 |  |  |
| Testability | 有明确验收和可复现测试 |  |  |
| Risk | 暴露不确定性和失败模式 |  |  |
| Actionability | 输出可执行且 Owner 清楚 |  |  |
| Traceability | 有 diff、query、版本和日志 |  |  |

## Hard Gates

- 合规违规：直接失败；
- 关键事实无来源：失败；
- 生产写入待批准：失败；
- P0 未关闭：失败。

建议通过：总分 ≥ 20/24，且无 Hard Gate 失败。
