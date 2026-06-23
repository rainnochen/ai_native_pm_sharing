---
name: data-analysis-plan-first
description: 在生成或执行 SQL 前，先确认决策问题、指标口径、粒度、分母、去重和质量检查。
---

# Data Analysis Plan First

## Purpose

在任何 SQL、脚本或图表之前，先把业务问题转成可审核的数据分析计划，避免模型直接猜表、猜字段、猜口径。

本 Skill 只生成分析计划、SQL 草稿和检查清单；真实数据执行必须在批准的数据平台和权限范围内完成。

## Use Cases

- PM 需要验证一个业务假设。
- PRD、复盘或周报需要数据证据。
- 实验结果需要口径确认。
- Agent 准备生成 SQL 前。

## Required Inputs

- Decision question。
- Metric dictionary or metric owner。
- Approved table metadata。
- Time range。
- Granularity。
- Population and denominator。
- Deduplication logic。
- Data classification: L0 / L1 / L2 / L3。
- Allowed execution environment。

如果缺少决策问题、指标口径、权限或分类，停止。

## Procedure

1. 读取 `13_compliance/DATA_CLASSIFICATION.md` 和 `03_metrics_and_data/METRIC_DICTIONARY.md`。
2. 确认数据等级和允许工具。
3. 复述业务决策问题。
4. 输出分析计划，而不是直接输出 SQL。
5. 标记待数据 owner 确认项。
6. 明确指标、分母、时间窗口、粒度、过滤、去重和异常处理。
7. 确认后生成参数化 SQL 草稿。
8. 同时生成样本检查、对账查询和异常值检查。
9. 执行前展示表、字段、时间、行数、权限和风险。
10. 输出 facts、interpretation candidates、limitations、next steps。

## Output Contract

```markdown
## Decision Question

## Data Classification And Allowed Environment

## Metric Definitions

## Analysis Plan

## SQL Draft

## Validation Queries

## Owner Confirmations Needed

## Facts / Interpretation Candidates / Limitations

## Human Gates
```

## Quality Checks

- 不直接从自然语言跳到 SQL。
- 不猜表名、字段或指标公式。
- 默认只读、聚合、最小时间范围和最小行数。
- 数据事实、解释候选和因果结论必须分离。
- 任何 user-level、commercial、partner 或 production data 都按 L2/L3 处理。

## Human Gates

Human approval is required for:

- metric definition；
- access to detailed rows；
- time range or table expansion；
- data export；
- causal conclusion；
- write operation；
- external sharing。

## Example

Input: "看一下新入口是不是提升了转化。"

Output: first ask for exposure definition, conversion definition, experiment group, denominator, time window, guardrail metrics, and owner confirmation. Only after confirmation draft SQL.

## Failure Modes

- 直接生成看似可运行但口径错误的 SQL。
- 把相关性写成因果结论。
- 扩大查询范围却没有审批。
- 输出明细数据或可重识别样本。

