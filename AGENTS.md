# Agent Rules

These rules apply to coding agents, writing agents, and automation tools working in this repository.

## Safety

- Never commit secrets, cookies, internal business data, personal data, or private user information.
- Do not invent sources, GitHub Stars, dates, benchmarks, or company claims.
- Do not copy restricted-license content from third-party repositories.
- Do not run dangerous scripts automatically.
- Default examples to mock data, read-only access, or explicit human approval.

## Editing Rules

- Keep templates executable for PMs, not just conceptually impressive.
- Preserve Chinese-first content; keep English terms when they are standard terms.
- When editing templates, keep Purpose, Inputs, Procedure, Output, Quality Checks, Human Gates, Example, and Failure Modes.
- When editing slides or the Markdown draft, keep them aligned with actual repository content.

## Validation

Before finishing a meaningful change:

- Run `npm run validate` when available.
- Run `npm run check:links` when available.
- Check that HTML sharing page still opens or at least passes static checks.
- Review new content for sensitive information.

## Human Approval Required

Stop and ask before:

- Deleting large amounts of existing content.
- Changing the license.
- Publishing or pushing with private/sensitive content.
- Logging into external services.
- Using API keys, paid services, or private credentials.
