# Contributing

Thanks for helping improve AI Native PM Kit. Contributions should make PM work more executable, safer, and easier to adapt.

## Add A Skill

Create `skills/<skill-name>/SKILL.md` with:

- Purpose
- Use Cases
- Required Inputs
- Procedure
- Output Contract
- Quality Checks
- Human Gates
- Example
- Common Failure Modes

Rules:

- Keep language practical and copyable.
- Do not assume the PM is an engineer.
- Do not hide risky actions behind automation.
- Add links to sources in `ATTRIBUTIONS.md` if the skill is inspired by external work.

## Add A Loop

Create `loops/<loop-name>.md` with:

- Objective
- Trigger
- Signals
- Procedure
- Evaluator
- Human Gates
- Memory / Decision Log
- Stop Rules
- Example
- Failure Modes

Every loop must make clear what the PM decides and what the AI only assists.

## Add A Hackathon Template

Templates in `hackathon-kit/` should contain:

- A short purpose.
- A copyable table.
- A filled mini example.
- Quality checks.
- Risk or backup guidance when relevant.

## File Naming

- Use lowercase kebab-case for files and folders.
- Use `SKILL.md` for skills.
- Prefer Markdown tables for PM-facing templates.
- Keep examples anonymized and non-sensitive.

## Pull Request Checklist

- [ ] No secrets, internal data, cookies, or personal data.
- [ ] Markdown links are valid.
- [ ] New skills include all required sections.
- [ ] New loops include trigger, evaluator, human gates, and stop rules.
- [ ] License and attribution implications are clear.
- [ ] `npm run validate` passes when available.
- [ ] `npm run check:links` passes when available.
