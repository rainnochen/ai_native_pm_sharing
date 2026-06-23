# Public Release Checklist

This repository is the public version of AI Native PM Kit.

## Include

- `README.md` and `README.zh-CN.md`
- `00-quickstart/`
- `context/`
- `prompts/`
- `skills/`
- `harness/`
- `loops/`
- `builder-starters/`
- `hackathon-kit/`
- `evals/`
- `references/`
- `ai-native-pm-workspace-starter/`
- `ai-native-pm-sharing-public.html`
- `scripts/`

## Keep Local

- Live-event QR codes
- Personal WeChat/contact QR codes
- Internal event location, attendance, and feedback forms
- Full internal speaking script
- Raw research report and private working drafts
- Internal business examples, links, data, credentials, and screenshots

## Current GitHub Cleanup

Remove these files from the current public repository before treating GitHub as the release source:

- `ai-native-pm-sharing.html`
- `ai-native-pm-sharing-draft.md`
- `45min-course-structure.md`
- `60min-talk-structure.md`
- `assets/qr/feedback.png`
- `assets/qr/sign-in.png`
- `assets/qr/wechat.jpg`

Publish these local public-release additions:

- `.gitignore`
- `PUBLIC_RELEASE.md`
- `ai-native-pm-sharing-public.html`
- `00-quickstart/ide-workbench-7-day-pilot.md`
- `references/comate-codex-figma-capability-matrix.md`
- `harness/compliance-routing.md`
- `ai-native-pm-workspace-starter/`
- `assets/visuals/minimal-loop-5-steps.png`

## Before Publishing

- Run `npm run validate`.
- Run `npm run check:links`.
- Run `npm run check:html`.
- Confirm no real secrets, cookies, tokens, user data, internal business data, or private links are committed.
- Confirm every external source is listed in `ATTRIBUTIONS.md` or `references/`.
