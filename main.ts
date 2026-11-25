import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a kitchen-herb double pun — thyme that heals, sage advice.
const line =
  "I asked my wife if thyme heals all wounds — she said yes, but it works best with a little sage advice on the side.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
