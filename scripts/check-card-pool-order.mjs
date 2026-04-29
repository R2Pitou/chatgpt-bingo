import fs from "node:fs";

const targetPath = process.argv[2] || "card-pool.js";
const source = fs.readFileSync(targetPath, "utf8");
const match = source.match(/window\.DEFAULT_CARD_POOL\s*=\s*`([\s\S]*?)`;/);

if (!match) {
    console.error(`Could not find DEFAULT_CARD_POOL template string in ${targetPath}.`);
    process.exit(1);
}

const lines = match[1]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

// This script only checks alphabetical order.
// It must not normalize, rewrite, or "correct" intentionally weird entries.
function sortKey(line) {
    const unwrapped = line.replace(/^(['"])(.*)\1$/, "$2");
    return unwrapped.toLocaleLowerCase();
}

const sorted = [...lines].sort((left, right) => sortKey(left).localeCompare(sortKey(right)));

for (let index = 0; index < lines.length; index += 1) {
    if (lines[index] !== sorted[index]) {
        console.error(`card-pool.js is not alphabetized at entry ${index + 1}.`);
        console.error(`Found:    ${lines[index]}`);
        console.error(`Expected: ${sorted[index]}`);
        process.exit(1);
    }
}

console.log(`${targetPath} is alphabetized.`);
