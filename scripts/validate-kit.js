import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "README.zh-CN.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "ATTRIBUTIONS.md",
  "AGENTS.md",
  "00-quickstart/10-minute-start.md",
  "00-quickstart/ide-workbench-7-day-pilot.md",
  "harness/personal-pm-harness.md",
  "harness/human-gates.md",
  "harness/compliance-routing.md",
  "loops/pm-loop-canvas.md",
  "loops/prd-loop.md",
  "hackathon-kit/README.md",
  "hackathon-kit/preflight-checklist.md",
  "hackathon-kit/demo-spine.md",
  "hackathon-kit/judging-rubric.md",
  "evals/rubric.md",
  "references/comate-codex-figma-capability-matrix.md",
  "PUBLIC_RELEASE.md",
  "ai-native-pm-sharing-public.html"
];

const requiredSkillSections = [
  "Purpose",
  "Required Inputs",
  "Procedure",
  "Output Contract",
  "Quality Checks",
  "Human Gates"
];

const requiredHackathonFiles = [
  "hackathon-kit/preflight-checklist.md",
  "hackathon-kit/team-charter.md",
  "hackathon-kit/problem-one-pager.md",
  "hackathon-kit/demo-spine.md",
  "hackathon-kit/24h-36h-48h-plan.md",
  "hackathon-kit/judging-rubric.md",
  "hackathon-kit/risk-register.md",
  "hackathon-kit/eval-template.md",
  "hackathon-kit/decision-log.md",
  "hackathon-kit/repo-template.md",
  "hackathon-kit/demo-backup-plan.md"
];

const requiredStarterFiles = [
  "ai-native-pm-workspace-starter/README.md",
  "ai-native-pm-workspace-starter/AGENTS.md",
  "ai-native-pm-workspace-starter/SOURCE_REGISTRY.md",
  "ai-native-pm-workspace-starter/00_project_brief/PROJECT_BRIEF.md",
  "ai-native-pm-workspace-starter/00_project_brief/GLOSSARY.md",
  "ai-native-pm-workspace-starter/00_project_brief/STAKEHOLDERS.md",
  "ai-native-pm-workspace-starter/03_metrics_and_data/METRIC_DICTIONARY.md",
  "ai-native-pm-workspace-starter/04_product_specs/PRD_TEMPLATE.md",
  "ai-native-pm-workspace-starter/05_design/DESIGN_MANIFEST.md",
  "ai-native-pm-workspace-starter/05_design/component_map/COMPONENT_MAP.csv",
  "ai-native-pm-workspace-starter/06_code_context/CODE_MAP.md",
  "ai-native-pm-workspace-starter/08_experiments/EXPERIMENT_TEMPLATE.md",
  "ai-native-pm-workspace-starter/09_reports/DECISION_MEMO_TEMPLATE.md",
  "ai-native-pm-workspace-starter/10_decision_log/DECISION_LOG.md",
  "ai-native-pm-workspace-starter/10_decision_log/ASSUMPTION_LOG.md",
  "ai-native-pm-workspace-starter/11_ai_skills/README.md",
  "ai-native-pm-workspace-starter/12_eval/EVAL_RUBRIC.md",
  "ai-native-pm-workspace-starter/12_eval/golden_cases/README.md",
  "ai-native-pm-workspace-starter/13_compliance/COMPLIANCE_CHECKLIST.md",
  "ai-native-pm-workspace-starter/13_compliance/DATA_CLASSIFICATION.md",
  "ai-native-pm-workspace-starter/13_compliance/HUMAN_GATES.md",
  "ai-native-pm-workspace-starter/13_compliance/TOOL_REGISTER.md",
  "ai-native-pm-workspace-starter/.comate/rules/00-compliance.mdr",
  "ai-native-pm-workspace-starter/.comate/rules/10-output-contract.mdr",
  "ai-native-pm-workspace-starter/.comate/agents/prd-critic.md",
  "ai-native-pm-workspace-starter/.comate/agents/compliance-reviewer.md",
  "ai-native-pm-workspace-starter/.comate/mcp.json.example"
];

const errors = [];

for (const file of [...requiredFiles, ...requiredHackathonFiles, ...requiredStarterFiles]) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

const skillDirs = fs.existsSync("skills")
  ? fs.readdirSync("skills", { withFileTypes: true }).filter((d) => d.isDirectory())
  : [];

let skillCount = 0;
for (const dirent of skillDirs) {
  const skillPath = path.join(root, "skills", dirent.name, "SKILL.md");
  if (!fs.existsSync(skillPath)) continue;
  skillCount += 1;
  const text = fs.readFileSync(skillPath, "utf8");
  for (const section of requiredSkillSections) {
    if (!text.includes(`## ${section}`)) {
      errors.push(`${path.relative(root, skillPath)} missing section: ${section}`);
    }
  }
}

if (skillCount < 6) {
  errors.push(`Expected at least 6 skills, found ${skillCount}`);
}

const starterSkillRoot = path.join(root, "ai-native-pm-workspace-starter", ".agents", "skills");
const starterSkillDirs = fs.existsSync(starterSkillRoot)
  ? fs.readdirSync(starterSkillRoot, { withFileTypes: true }).filter((d) => d.isDirectory())
  : [];

let starterSkillCount = 0;
for (const dirent of starterSkillDirs) {
  const skillPath = path.join(starterSkillRoot, dirent.name, "SKILL.md");
  if (!fs.existsSync(skillPath)) continue;
  starterSkillCount += 1;
  const text = fs.readFileSync(skillPath, "utf8");
  for (const section of requiredSkillSections) {
    if (!text.includes(`## ${section}`)) {
      errors.push(`${path.relative(root, skillPath)} missing section: ${section}`);
    }
  }
  for (const section of ["Example", "Failure Modes"]) {
    if (!text.includes(`## ${section}`)) {
      errors.push(`${path.relative(root, skillPath)} missing section: ${section}`);
    }
  }
}

if (starterSkillCount < 3) {
  errors.push(`Expected at least 3 starter skills, found ${starterSkillCount}`);
}

const loops = fs.existsSync("loops")
  ? fs.readdirSync("loops").filter((file) => file.endsWith(".md") && file !== "README.md")
  : [];
if (loops.length < 4) {
  errors.push(`Expected at least 4 loop files, found ${loops.length}`);
}

const html = fs.existsSync("ai-native-pm-sharing-public.html")
  ? fs.readFileSync("ai-native-pm-sharing-public.html", "utf8")
  : "";
const slideCount = (html.match(/<section class="slide/g) || []).length;
if (slideCount < 20) {
  errors.push(`Expected at least 20 HTML slides, found ${slideCount}`);
}

const starterSourceRegistry = path.join(root, "ai-native-pm-workspace-starter", "SOURCE_REGISTRY.md");
if (fs.existsSync(starterSourceRegistry)) {
  const text = fs.readFileSync(starterSourceRegistry, "utf8");
  if (text.includes("replace-me")) {
    errors.push("ai-native-pm-workspace-starter/SOURCE_REGISTRY.md still contains replace-me");
  }
}

if (errors.length) {
  console.error("Validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${skillCount} skills, ${starterSkillCount} starter skills, ${loops.length} loops, ${slideCount} slides.`);
