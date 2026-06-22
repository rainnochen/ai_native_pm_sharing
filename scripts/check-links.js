import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;

for (const file of walk(root)) {
  const text = fs.readFileSync(file, "utf8");
  const dir = path.dirname(file);
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].trim();
    if (!target || target.startsWith("http://") || target.startsWith("https://") || target.startsWith("mailto:") || target.startsWith("#")) {
      continue;
    }
    const cleanTarget = target.split("#")[0];
    if (!cleanTarget) continue;
    const resolved = path.resolve(dir, cleanTarget);
    if (!resolved.startsWith(root)) {
      errors.push(`${path.relative(root, file)} links outside repo: ${target}`);
      continue;
    }
    if (!fs.existsSync(resolved)) {
      errors.push(`${path.relative(root, file)} has missing link: ${target}`);
    }
  }
}

if (errors.length) {
  console.error("Link check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Link check passed.");
