# Ask Before Answer Prompt

Purpose: prevent the model from filling product gaps with plausible but unverified assumptions.

Use this when you are starting a PRD, strategy memo, user research synthesis, competitive analysis, experiment plan, or agent spec.

## Prompt

```text
我正在处理一个产品问题：

[在这里描述你的问题，例如：设计一个 AI 餐厅推荐 Agent]

请你先补齐关键信息，再生成最终答案。

第一步：先问我最多 10 个你必须知道的问题。
这些问题要覆盖：
1. 目标用户；
2. 使用场景；
3. 用户输入；
4. 可用数据；
5. 可调用工具；
6. 必须用户确认的动作；
7. 成功指标；
8. 失败和兜底；
9. 明确不做什么；
10. 上线风险。

第二步：在我回答之前，只输出问题，并等待补充信息。

第三步：等我回答后，请把信息分成：
- 已知事实；
- 待确认假设；
- 高风险缺口；
- 需要 PM 决策的事项。

如果信息不足以继续，请列出缺口并等待补充。
任何缺少输入或证据支持的内容，都必须标为“假设”。
```

## Mini Demo

Bad:

```text
帮我写一份 AI 餐厅推荐 Agent 的 PRD。
```

Better:

```text
请先问我 10 个必须知道的问题，再开始写。
任何缺少证据的内容都标为假设。
```

## Quality Checks

- The model asks before generating the final output.
- Facts, assumptions, and risks are separated.
- PM decision points are explicit.
- The model does not invent user, metric, or tool constraints.

## Human Gate

The PM decides whether the clarified context is sufficient to proceed.

## Common Failure Modes

- The model asks generic questions that do not affect the decision.
- The model answers too early.
- The PM provides vague answers and accepts a polished draft anyway.
- Assumptions are not carried into the final PRD or decision memo.
