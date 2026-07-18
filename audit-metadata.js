// audit-metadata.js
// Run from your project root: node audit-metadata.js
// Scans every page.tsx under app/ and flags titles/descriptions that are too long.

const fs = require('fs');
const path = require('path');

const TITLE_LIMIT = 65;
const DESCRIPTION_LIMIT = 155;

const results = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      walk(fullPath);
    } else if (entry.name === 'page.tsx') {
      checkFile(fullPath);
    }
  }
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);

  if (!titleMatch && !descMatch) return; // page has no metadata block, skip

  const title = titleMatch ? titleMatch[1] : null;
  const description = descMatch ? descMatch[1] : null;

  const titleLen = title ? title.length : 0;
  const descLen = description ? description.length : 0;

  const titleTooLong = title && titleLen > TITLE_LIMIT;
  const descTooLong = description && descLen > DESCRIPTION_LIMIT;

  if (titleTooLong || descTooLong) {
    results.push({
      file: filePath,
      titleLen,
      title,
      titleTooLong,
      descLen,
      description,
      descTooLong,
    });
  }
}

walk(path.join(__dirname, 'app'));

if (results.length === 0) {
  console.log('No title or description length issues found.');
} else {
  console.log(`Found ${results.length} page(s) with length issues:\n`);
  results
    .sort((a, b) => (b.titleLen + b.descLen) - (a.titleLen + a.descLen))
    .forEach((r) => {
      console.log('----------------------------------------');
      console.log(r.file);
      if (r.titleTooLong) {
        console.log(`  TITLE too long: ${r.titleLen} chars (limit ${TITLE_LIMIT})`);
        console.log(`    "${r.title}"`);
      }
      if (r.descTooLong) {
        console.log(`  DESCRIPTION too long: ${r.descLen} chars (limit ${DESCRIPTION_LIMIT})`);
        console.log(`    "${r.description}"`);
      }
    });
  console.log('\n----------------------------------------');
  console.log(`Total pages needing fixes: ${results.length}`);
}