// The Agent's Uh-Oh
// Writes exactly one word an agent says when it has no idea what to do to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Understood.";

// Gate guard: exactly one word, 1-99 characters (counted with the trailing newline).
if (/\s/.test(line.trim()) || line.trim().length === 0 || line.length + 1 > 99) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
