# AI Skills

跨工具的 Skill 源文件建议放在 `.agents/skills/`。

每个 Skill 应包含：

- `SKILL.md`
- 可选 `references/`
- 可选 `scripts/`
- 可选 `assets/`
- `tests/` 或指向 `12_eval/golden_cases/`

Skill 必须单一、可触发、可失败、可验收，并有 Owner 和版本记录。

## Included Skills

- `../.agents/skills/pm-problem-framing/SKILL.md`
- `../.agents/skills/requirement-review/SKILL.md`
- `../.agents/skills/prd-review/SKILL.md`
- `../.agents/skills/prd-critic/SKILL.md`
- `../.agents/skills/prototype-acceptance/SKILL.md`
- `../.agents/skills/data-analysis-plan-first/SKILL.md`
- `../.agents/skills/figma-to-frontend-review/SKILL.md`

## Run Contract

使用任意 Skill 前先确认：

1. 当前输入的 L0-L3 分类；
2. `SOURCE_REGISTRY.md` 中有哪些 active canonical sources；
3. 是否允许当前工具读取这些材料；
4. 输出是否需要写入 `10_decision_log/DECISION_LOG.md`；
5. 是否触发 Human Gate。

如果分类不清、来源冲突、需要生产写权限或涉及外部发布，停止并升级给 human owner。
