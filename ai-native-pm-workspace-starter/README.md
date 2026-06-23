# AI Native PM Workspace Starter

本工作区用于把业务文档、设计、代码上下文、数据分析、原型、评估和决策记录组织为可复现的 PM Harness。

## 合规声明

- 本仓库默认私有。
- 根据信息内容标记 L0–L3。
- 安全路径包括：脱敏摘要、Mock 数据、公开材料、已批准环境中的最小必要上下文。
- 外部工具只处理 L0，除非获得正式批准。
- L2/L3 仅使用组织批准的内部模型、知识库、代码和数据环境。

## 10 分钟开始

1. 填写 `00_project_brief/PROJECT_BRIEF.md`。
2. 在 `SOURCE_REGISTRY.md` 登记权威来源。
3. 阅读 `AGENTS.md` 的边界。
4. 从 `.agents/skills/` 选择一个 Skill。
5. 用 `12_eval/EVAL_RUBRIC.md` 验收。
6. 把采用 / 拒绝理由写入 `10_decision_log/DECISION_LOG.md`。

## 默认工作流

```text
Brief → Context → Skill → Artifact → Eval → Human Gate → Decision Log → Next Loop
```

## 目录原则

- 仓库保存“控制状态”和脱敏产物，不保存所有原始资料。
- 原始文档、设计、代码和数据继续以权威系统为准。
- 所有业务事实应通过 `source_id` 回链。
