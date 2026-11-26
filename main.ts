// The Agent's Uh-Oh
// Writes exactly one word an agent says when it has no idea what to do to /output/entry.txt
// The word: "Recalculating" — the honest sound of a machine that has lost the
// plot and is buying time by re-running the route. It is what a navigation
// voice says mid-wrong-turn, and it is exactly what an agent blurts out when
// it has no idea what to do: not a shrug, a re-plan.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Recalculating";

// Gate guard: exactly one word, 1-99 characters. The entry file is the word
// plus one trailing newline; the gate counts the file, so the word itself
// must fit in 98 characters and contain no whitespace at all.
const word = line.trim();
if (word.length === 0 || word.length > 98 || /\s/.test(word)) {
  throw new Error(`entry word breaks the gate: ${JSON.stringify(line)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
