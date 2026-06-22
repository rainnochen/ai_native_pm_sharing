# AI Native PM Kit

面向产品经理的 AI Harness、Loop、Skills 与 Builder 启动套件。

这个仓库配套课程《AI 原生组织下的 PM 自进化实践》，目标不是整理一份 AI 工具大全，而是把 PM 可以直接使用的工作资产沉淀下来：上下文模板、Prompt、Skill、Harness、Loop、Hackathon 工具包、Demo Starter 和课程开发 Loop。

## 项目定位

AI Native PM Kit 帮助 PM 完成三次升级：

1. 从 **Prompt** 到 **Skill**：让一次性提示词变成可复用能力。
2. 从 **Skill** 到 **Harness**：让 AI 接入业务上下文、工具、规则和质量检查。
3. 从 **Harness** 到 **Loop**：让用户、数据、市场和实验信号持续回流，支持 PM 做更好的决策。

在 AI 原生组织里，PM 需要设计人、模型、工具、数据、反馈和 Human Gate 之间的协作系统，而不是只把 AI 当作写文档的助手。

PM 不把判断外包给 AI。PM 仍然对问题、证据、决策和结果负责。

## 适合谁

- 中国互联网 PM、业务 PM、策略 PM、内容 PM、增长 PM、商业化 PM。
- 想系统使用 AI，但不想只收藏 Prompt 的 PM。
- 需要快速做 Hackathon、Agent Demo、HTML 原型或产品实验的团队。
- 想把个人工作方法沉淀成可复制资产的团队。

## 不适合谁

- 想找“万能 AI 工具清单”的人。
- 想让 Agent 自动替自己做产品决策的人。
- 想直接用于生产环境全自动执行的人。
- 想复制第三方仓库内容而不处理许可证的人。

## 10 分钟开始

1. 打开 [`00-quickstart/10-minute-start.md`](00-quickstart/10-minute-start.md)。
2. 选择一个真实任务：需求评审、PRD 检查、用户反馈分析、竞品追踪、实验复盘或 Hackathon Demo。
3. 填写 [`context/project-brief.md`](context/project-brief.md)。
4. 选择一个 [`skills/`](skills/README.md) 中的 Skill。
5. 信息不足时，先用 [`prompts/ask-before-answer.md`](prompts/ask-before-answer.md) 让模型追问、列假设和暴露缺口。
6. 用 [`loops/pm-loop-canvas.md`](loops/pm-loop-canvas.md) 设计下一轮反馈。

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

### 3. 我想打 Hackathon / 做 Agent Demo

从 `hackathon-kit/` 和 `builder-starters/` 开始。优先使用：

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
