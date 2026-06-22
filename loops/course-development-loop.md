# Course Development Loop

Purpose: continuously develop the course **AI 原生组织下的 PM 自进化实践** from a one-time sharing deck into a coherent, evidence-backed, reusable learning system.

## Objective

Improve the course through repeated loops that update:

- Course storyline.
- Markdown master draft.
- HTML slides.
- PM workbench / GitHub toolkit.
- Demo scripts.
- Audience exercises.
- Source and attribution quality.

The course should become clearer, more useful, and more grounded after every loop.

## Trigger

Run this loop when any of the following happens:

| Trigger | Example |
|---|---|
| New course idea | Add AI Native Organization introduction |
| Audience concern | Some PMs are new to large models |
| New source or case | New PM skills repo, new AI-native org article |
| New internal practice | Comate / 度 Cici / 度度 usage pattern |
| Slide review feedback | Too abstract, too dense, missing demos |
| Tooling change | New repo structure or published GitHub Pages |

## Signals

Collect signals from:

- User's new notes and spoken intent.
- Existing files: `ai-native-pm-sharing-draft.md`, `ai-native-pm-sharing.html`, `60min-talk-structure.md`.
- Toolkit files: `README.zh-CN.md`, `skills/`, `loops/`, `hackathon-kit/`.
- Audience type: 百度地图 PM / 业务 PM / 策略 PM / 内容 PM / 增长 PM / 商业化 PM.
- External sources: public PM methods, AI-native organization articles, PM skills repositories.
- Internal constraints: no sensitive Baidu data, no private metrics, no unapproved screenshots.

## Course Design Questions

Every loop should ask:

1. What is the audience's current misunderstanding or anxiety?
2. What non-consensus point should this course make sharper?
3. Which concept needs a simpler explanation?
4. Which slide or section is too dense for projection?
5. Which claim needs a source, caveat, or example?
6. Which toolkit asset should the audience use after the course?
7. What should the speaker say verbally instead of putting on the slide?

## Procedure

1. **Read Current State**
   - Inspect `ai-native-pm-sharing-draft.md`.
   - Inspect `ai-native-pm-sharing.html`.
   - Inspect relevant toolkit files.
   - Check `TODO.md`.

2. **Frame The Course Gap**
   - Name the gap in one sentence.
   - Classify it: concept, storyline, evidence, demo, tool, slide, exercise, repo asset.

3. **Design The Update**
   - Decide whether to update draft, slides, toolkit, or all three.
   - Preserve the core storyline:

   ```text
   AI Native Organization -> PM Definition Shift -> LLM Basics -> Prompt -> Harness -> Loop -> Builder -> Hackathon -> PM Workbench
   ```

4. **Implement**
   - Edit files directly.
   - Keep slides low-density and speaker-led.
   - Use public sources for external claims.
   - Mark internal examples as placeholders if details are not approved.

5. **Evaluate**
   - Run `npm run validate`.
   - Run `npm run check:links`.
   - Run `npm run check:html`.
   - Check whether the update helps a PM understand what to do next.

6. **Record**
   - Update `TODO.md` or `CHANGELOG.md`.
   - Commit with a conventional message when the change is coherent.

## Output Contract

Each loop should output:

```markdown
## Course Loop Summary

### Gap

### Decision

### Files Updated

### What Changed In The Storyline

### What The Speaker Should Say Verbally

### What The Slide Should Show

### Toolkit Asset Added Or Updated

### Validation

### Next Loop
```

## Evaluator

Use this rubric:

| Dimension | Good Looks Like | Red Flag |
|---|---|---|
| Storyline | New content strengthens the main arc | Adds unrelated AI tool content |
| Audience Fit | Non-engineering PM can understand | Too much jargon |
| Non-Consensus | Makes a sharp judgment | Safe but forgettable |
| Evidence | Claims have source or caveat | Unsupported grand claims |
| Slide Fit | One idea per slide | Dense paragraph slides |
| Toolkit Link | Audience can use an asset after class | No follow-up action |
| Safety | Internal info is protected | Sensitive data leaked |

## Human Gates

Human approval is required before:

- Adding Baidu internal tool screenshots.
- Naming internal projects or metrics.
- Publishing personal Hackathon details.
- Making strong claims about layoffs or organizational risk without framing as judgment.
- Replacing the course's main thesis.

## Stop Rules

Stop and ask the user if:

- A needed internal example is missing.
- A claim requires private verification.
- A course section would expose sensitive company information.
- The update would require deleting large parts of the existing deck.

## Example Loop

Input: "Add an introduction to AI Native Organization and PM definition shift."

Output:

- Add a new draft section before current trend section.
- Add 3-4 HTML slides:
  - What is AI Native Organization?
  - PM definition: from user-value designer to human-AI system designer.
  - Traditional software development vs AI-native development.
  - Why this changes PM accountability.
- Add speaker notes, not dense slide text.
- Add one PM workbench asset if needed.

## Common Failure Modes

- Turning the course into an AI encyclopedia.
- Adding too many frameworks without a speaker story.
- Making slides explain everything instead of supporting the talk.
- Treating AI tools as the subject instead of PM evolution.
- Forgetting that the audience may be new to large models.
