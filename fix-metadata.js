// fix-metadata.js
// Run from your project root: node fix-metadata.js
// Automatically shortens common repetitive title/description patterns.
// Anything it can't safely fix gets listed at the end for manual review.

const fs = require('fs');
const path = require('path');

const TITLE_LIMIT = 65;
const DESCRIPTION_LIMIT = 155;

let fixedCount = 0;
const needsManualReview = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      walk(fullPath);
    } else if (entry.name === 'page.tsx') {
      processFile(fullPath);
    }
  }
}

function fixTitle(title) {
  let fixed = title;

  // Pass 1: strip trailing site branding
  fixed = fixed.replace(/\s*\|\s*HomeschoolMath\.site\s*$/i, '');
  fixed = fixed.replace(/\s*\|\s*homeschoolmath\.site\s*$/i, '');

  // Pass 2: if still too long and has "| Free Printable..." pattern, shorten it
  if (fixed.length > TITLE_LIMIT && /\|\s*Free Printable/i.test(fixed)) {
    fixed = fixed.replace(/\|\s*Free Printable.*$/i, '| Free Practice');
  }

  return fixed;
}

function fixDescription(description) {
  let fixed = description;

  // Pass 1: strip the common trailing boilerplate sentence
  fixed = fixed.replace(/\s*Perfect for homeschool and classroom use\.\s*$/i, '');

  return fixed;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fileChanged = false;

  const titleMatch = content.match(/title:\s*(['"`])([^'"`]+)\1/);
  const descMatch = content.match(/description:\s*(['"`])([^'"`]+)\1/);

  if (titleMatch) {
    const originalTitle = titleMatch[2];
    if (originalTitle.length > TITLE_LIMIT) {
      const newTitle = fixTitle(originalTitle);
      if (newTitle.length <= TITLE_LIMIT && newTitle !== originalTitle) {
        content = content.replace(originalTitle, newTitle);
        fileChanged = true;
      } else if (newTitle.length > TITLE_LIMIT) {
        needsManualReview.push({
          file: filePath,
          field: 'title',
          length: originalTitle.length,
          value: originalTitle,
        });
      }
    }
  }

  if (descMatch) {
    const originalDesc = descMatch[2];
    if (originalDesc.length > DESCRIPTION_LIMIT) {
      const newDesc = fixDescription(originalDesc);
      if (newDesc.length <= DESCRIPTION_LIMIT && newDesc !== originalDesc) {
        content = content.replace(originalDesc, newDesc);
        fileChanged = true;
      } else if (newDesc.length > DESCRIPTION_LIMIT) {
        needsManualReview.push({
          file: filePath,
          field: 'description',
          length: originalDesc.length,
          value: originalDesc,
        });
      }
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
}

walk(path.join(__dirname, 'app'));

console.log('\n========================================');
console.log(`Automatically fixed ${fixedCount} file(s).`);

if (needsManualReview.length > 0) {
  console.log(`\n${needsManualReview.length} item(s) still need manual review:\n`);
  needsManualReview.forEach((item) => {
    console.log('----------------------------------------');
    console.log(item.file);
    console.log(`  ${item.field.toUpperCase()} still too long: ${item.length} chars`);
    console.log(`    "${item.value}"`);
  });
} else {
  console.log('Nothing left needing manual review.');
}
console.log('========================================');