// Deterministic entry: one fixed short text, no input, no network, no randomness.
// Writes exactly that text to /output/entry.txt as UTF-8 text.
import * as fs from "node:fs";
import * as path from "node:path";

const text =
  "The stone in your pocket is older than the road home. " +
  "You found it on a beach whose name you have lost. " +
  "Tonight the sea that smoothed it is still smoothing others, in no hurry. " +
  "The stone is in no hurry either. " +
  "It waits, cool in your pocket, for your hand to find it again.";

const outputPath = "/output/entry.txt";
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, text + "\n", "utf8");
