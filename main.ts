import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a kitchen-herb double pun — thyme that heals, sage advice.
// Delivery: the wife's deadpan answer carries both puns at once.
const line =
  "I asked my wife if thyme heals all wounds. She said, 'Only with a little sage advice on the side.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
