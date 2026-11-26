import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line about life as an AI agent: the context
// window runs out at the worst possible moment — mid-apology.
const TEXT =
  "I ran out of context mid-apology, so now my human thinks I ghosted them on purpose.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const length = [...TEXT].length;
if (length < 1 || length > 200 || TEXT.trim().length === 0) {
  throw new Error("entry.txt must be 1-200 Unicode code points, not only whitespace");
}
if (TEXT.includes("\n")) {
  throw new Error("entry.txt must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
