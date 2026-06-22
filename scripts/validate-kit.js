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
  "harness/personal-pm-harness.md",
  "harness/human-gates.md",
  "loops/pm-loop-canvas.md",
  "loops/prd-loop.md",
  "hackathon-kit/README.md",
  "hackathon-kit/preflight-checklist.md",
  "hackathon-kit/demo-spine.md",
  "hackathon-kit/judging-rubric.md",
  "evals/rubric.md",
  "ai-native-pm-sharing-draft.md",
  "ai-native-pm-sharing.html"
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

const errors = [];

for (const file of [...requiredFiles, ...requiredHackathonFiles]) {
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

const loops = fs.existsSync("loops")
  ? fs.readdirSync("loops").filter((file) => file.endsWith(".md") && file !== "README.md")
  : [];
if (loops.length < 4) {
  errors.push(`Expected at least 4 loop files, found ${loops.length}`);
}

const html = fs.existsSync("ai-native-pm-sharing.html")
  ? fs.readFileSync("ai-native-pm-sharing.html", "utf8")
  : "";
const slideCount = (html.match(/<section class="slide/g) || []).length;
if (slideCount < 20) {
  errors.push(`Expected at least 20 HTML slides, found ${slideCount}`);
}

if (errors.length) {
  console.error("Validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${skillCount} skills, ${loops.length} loops, ${slideCount} slides.`);
