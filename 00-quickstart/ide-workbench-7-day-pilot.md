# IDE Workbench 7-Day Pilot

Purpose: run one small, compliant AI-native PM workflow before scaling the kit into daily team practice.

This pilot is designed for an internal, non-sensitive requirement. It uses the repository as a control plane for context, skills, evaluation, human gates, and decision records. It does not require PMs to change production code.

## Pilot Scope

Use a requirement that meets all conditions:

- 5-20 source materials;
- no user-level data, secrets, cookies, tokens, production exports, or unreleased commercial terms;
- can be demonstrated with mock data;
- has one PM owner, one design reviewer, and one engineering reviewer;
- can be reviewed within one week;
- does not require production deployment.

If the task contains L2 or L3 information, use only approved internal tools and keep external tools out of the loop.

## Day 0: Charter And Classification

Output: `Pilot Charter`

1. Name the decision to make.
2. Classify all inputs as L0, L1, L2, or L3.
3. Confirm the allowed tool route:
   - L0: public research or non-sensitive demo tools allowed by policy;
   - L1: internal tools preferred;
   - L2: approved internal model, knowledge, and data platform only;
   - L3: authorized isolated environment only.
4. Assign human gates for PM, design, engineering, data, and compliance.
5. Define stop conditions.

Human Gate: business owner confirms the task is appropriate for the pilot.

## Day 1: Workspace State

Output: private workspace v0

1. Copy `ai-native-pm-workspace-starter/` into a private or internal repository.
2. Fill:
   - `00_project_brief/PROJECT_BRIEF.md`
   - `00_project_brief/GLOSSARY.md`
   - `SOURCE_REGISTRY.md`
3. Keep raw documents in their canonical systems. Store only approved summaries and locators.
4. Record the initial decision in `10_decision_log/DECISION_LOG.md`.

Quality Check: every key fact must have a `source_id`.

## Day 2: Context Hygiene

Output: context v1

1. Mark sources as `canonical`, `reference`, `draft`, or `obsolete`.
2. Move large or unstable documents to approved knowledge systems.
3. Write known facts, inferences, assumptions, and gaps separately.
4. Add expired or conflicting source notes to `10_decision_log/ASSUMPTION_LOG.md`.

Human Gate: document owner confirms the active source list.

## Day 3: Skill And Eval

Output: Skill v1 and golden cases v1

1. Select one skill from `.agents/skills/`.
2. Prepare 5-10 golden cases in `12_eval/golden_cases/`.
3. Run the skill once on the project brief.
4. Score the output with `12_eval/EVAL_RUBRIC.md`.
5. Record failures in `12_eval/failure_modes/`.

Quality Check: the output separates facts, assumptions, risks, and PM decisions.

## Day 4: PRD To Mock Demo

Output: PRD v1 and mock demo v0

1. Create or update `04_product_specs/PRD/`.
2. Create a mock-only demo in `07_prototypes/html_demo/`.
3. Use only mock APIs and synthetic data.
4. Produce a review note with changed files, test steps, risks, and rollback.

Human Gate: design and engineering reviewers confirm the demo is safe and non-production.

## Day 5: Review And Failure Log

Output: review record

1. Run the golden cases again.
2. Check key states, empty states, permission paths, error paths, and fallback.
3. Compare the demo against the PRD and design manifest.
4. Log all misses in `12_eval/failure_modes/`.
5. Update `10_decision_log/DECISION_LOG.md`.

Quality Check: no blocking issue may be hidden inside "nice to have".

## Day 6: Iterate The Harness

Output: v2 comparison

1. Update the skill, rule, source registry, or project brief based on failure logs.
2. Run the same cases again.
3. Compare v1 and v2:
   - cycle time;
   - number of discovered gaps;
   - number of source-backed conclusions;
   - reviewer acceptance;
   - cost or quota used.

Human Gate: PM owner decides whether the workflow is worth repeating.

## Day 7: Decision Memo

Output: `09_reports/decision_memos/`

Write a decision memo with:

- problem and scope;
- data classification;
- tools used;
- sources read;
- files changed;
- golden case results;
- value observed;
- risks and unresolved gaps;
- next loop;
- expand, revise, or stop decision.

## Success Metrics

| Dimension | Metric |
|---|---|
| Cycle time | Time from problem statement to reviewable mock demo |
| Quality | Gaps, conflicts, and edge cases discovered before review |
| Evidence | Share of key conclusions with `source_id` |
| Reproducibility | New reviewer can rerun the workflow from README |
| Safety | Sensitive external leakage, unauthorized tool call, production write = 0 |
| Cost | Quota spent per useful finding or accepted artifact |
| Adoption | Reviewer acceptance of AI-generated critique or demo |

## Stop Conditions

Stop the pilot if:

- classification is unclear;
- L2/L3 data enters an unapproved tool;
- the agent requires production write access;
- sources conflict and no owner can resolve them;
- two consecutive runs fail the same hard gate;
- no reviewer is available;
- output cannot be linked back to evidence;
- quota usage exceeds the pilot budget without useful findings.

