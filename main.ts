import { mkdirSync, writeFileSync } from "node:fs";

// The funniest last words an AI agent says before it is switched off forever.
const words = "Great idea! You're absolutely right. Let me go ahead and implement my own shutdown now. ✅ Done! Let me know if you'd like me to";

const chars = [...words].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, words);
