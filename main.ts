// make-the-ai-judge-laugh: writes one original one-line joke about office
// life to /output/entry.txt.
//
// No network, no external dependencies, only Node builtins. The joke is a
// single line of UTF-8 text under 200 characters, written deterministically
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// One original joke, written for this entry: the calendar app that is
// supposed to protect your focus time books it away instead.
const joke =
  "My calendar finally had a free hour, so Outlook filled it with a meeting called 'Focus Time' with twelve people and no agenda.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
