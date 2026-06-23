# AI Native PM Kit

面向产品经理的 AI Harness、Loop、Skills 与 Builder 启动套件。

这个仓库配套课程《AI 原生组织下的 PM 自进化实践》，目标是把 PM 可以直接使用的工作资产沉淀下来：上下文模板、Prompt、Skill、Harness、Loop、Hackathon 工具包、Demo Starter 和课程开发 Loop。

## 项目定位

AI Native PM Kit 帮助 PM 完成三次升级：

1. 从 **Prompt** 到 **Skill**：让一次性提示词变成可复用能力。
2. 从 **Skill** 到 **Harness**：让 AI 接入业务上下文、工具、规则和质量检查。
3. 从 **Harness** 到 **Loop**：让用户、数据、市场和实验信号持续回流，支持 PM 做更好的决策。

在 AI 原生组织里，PM 需要设计人、模型、工具、数据、反馈和 Human Gate 之间的协作系统。

PM 始终对问题、证据、决策和结果负责。

## 适合谁

- 中国互联网 PM、业务 PM、策略 PM、内容 PM、增长 PM、商业化 PM。
- 想系统使用 AI，但不想只收藏 Prompt 的 PM。
- 需要快速做 Hackathon、Agent Demo、HTML 原型或产品实验的团队。
- 想把个人工作方法沉淀成可复制资产的团队。

## 使用边界

- 本仓库聚焦 PM 工作系统升级。
- Agent 输出进入 PM 审核和 Human Gate。
- 生产环境执行走正式审批、审计和回滚流程。
- 第三方仓库内容复用前先处理许可证和署名要求。

## 10 分钟开始

1. 打开 [`00-quickstart/10-minute-start.md`](00-quickstart/10-minute-start.md)。
2. 选择一个真实任务：需求评审、PRD 检查、用户反馈分析、竞品追踪、实验复盘或 Hackathon Demo。
3. 填写 [`context/project-brief.md`](context/project-brief.md)。
4. 选择一个 [`skills/`](skills/README.md) 中的 Skill。
5. 信息不足时，先用 [`prompts/ask-before-answer.md`](prompts/ask-before-answer.md) 让模型追问、列假设和暴露缺口。
6. 用 [`loops/pm-loop-canvas.md`](loops/pm-loop-canvas.md) 设计下一轮反馈。
7. 自动化之前，先用 [`loops/loop-contract.md`](loops/loop-contract.md) 写清触发、目标、范围、验收、停止和升级规则。

## 现场演示路径

如果你想把这个仓库变成自己的 PM 工作台，打开：

- [`00-quickstart/build-your-pm-workbench.md`](00-quickstart/build-your-pm-workbench.md)
- [`00-quickstart/ide-workbench-7-day-pilot.md`](00-quickstart/ide-workbench-7-day-pilot.md)

公开分享页使用：

- [`ai-native-pm-sharing-public.html`](ai-native-pm-sharing-public.html)

现场逐字稿、签到 / 评价 / 微信二维码、内部备注和私有案例保留在本地。

它会带你完成：

- 复制或 fork 仓库；
- 填写项目上下文；
- 用内部知识工具导入经过批准的知识摘要；
- commit 成自己的 PM Workbench；
- 跑一个 Skill；
- 写一份 Loop Contract；
- 使用 Hackathon Kit 组织 Demo、Eval、Decision Log 和备份方案。

## AI Native PM Workspace Starter

[`ai-native-pm-workspace-starter/`](ai-native-pm-workspace-starter/README.md) 是可复制到私有仓库或内部 Git 的 PM 工作台模板，用于试点真实工作流的控制面：

- `PROJECT_BRIEF`、`SOURCE_REGISTRY`、`DECISION_LOG` 和 `ASSUMPTION_LOG` 负责项目状态；
- 业务文档、用户研究、指标、PRD、设计、代码上下文、原型、实验和报告各有独立目录；
- `13_compliance/` 提供 L0-L3 分类、Human Gate 和工具登记模板；
- `12_eval/` 提供评估 Rubric、golden cases 和失败记录；
- `.agents/skills/` 已包含可运行的 PM Skills；
- `.comate/` 提供 Comate Rules、Subagents 和 MCP 示例配置。

如果你要跑一周内部试点，优先从 [`00-quickstart/ide-workbench-7-day-pilot.md`](00-quickstart/ide-workbench-7-day-pilot.md) 开始。公开仓库只放模板、脱敏摘要、Mock 数据和已批准材料；真实内部文档、代码、用户数据、商业数据、密钥和待审批截图进入批准环境。

## 三条使用路径

### 1. 我想提升日常 PM 工作效率

从 `prompts/` 和 `skills/` 开始。优先使用：

- [`skills/requirement-review/SKILL.md`](skills/requirement-review/SKILL.md)
- [`skills/prd-critic/SKILL.md`](skills/prd-critic/SKILL.md)
- [`skills/user-research-synthesis/SKILL.md`](skills/user-research-synthesis/SKILL.md)

### 2. 我想搭一套个人 PM Harness

从 `context/`、`harness/` 和 `loops/` 开始。先填：

- [`context/project-brief.md`](context/project-brief.md)
- [`harness/personal-pm-harness.md`](harness/personal-pm-harness.md)
- [`harness/human-gates.md`](harness/human-gates.md)
- [`loops/pm-loop-canvas.md`](loops/pm-loop-canvas.md)

### 3. 我想做 Agent Demo / Builder 训练

从 `hackathon-kit/` 和 `builder-starters/` 开始。适合把 PM Builder 转型落到一个可体验 Demo：定义真问题、证明 Agent 必要、交付可体验 Demo，并留下 Eval、Decision Log 和备份方案。优先使用：

- [`hackathon-kit/preflight-checklist.md`](hackathon-kit/preflight-checklist.md)
- [`hackathon-kit/problem-one-pager.md`](hackathon-kit/problem-one-pager.md)
- [`hackathon-kit/demo-spine.md`](hackathon-kit/demo-spine.md)
- [`hackathon-kit/judging-rubric.md`](hackathon-kit/judging-rubric.md)
- [`builder-starters/spec-to-demo/README.md`](builder-starters/spec-to-demo/README.md)

## 和分享的关系

分享讲清楚为什么 PM 需要从 AI User 进化为 AI Builder & Loop Owner；这个仓库提供可以直接复制使用的模板，让听众把分享里的方法带回真实工作。

核心主线：

```text
AI Native Organization -> PM New Definition -> LLM Basics -> Prompt -> Harness -> Loop -> Builder PM
```

## 如何贡献

欢迎新增 Skill、Loop、Hackathon 模板、示例和检查脚本。贡献前请阅读：

- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`SECURITY.md`](SECURITY.md)
- [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md)
- [`AGENTS.md`](AGENTS.md)
