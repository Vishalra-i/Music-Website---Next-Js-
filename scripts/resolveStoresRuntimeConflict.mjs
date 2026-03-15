#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';

const filePath = process.argv[2] || 'src/data/stores.runtime.json';

function extractConflictSections(content) {
  const blocks = [];
  let start = content.indexOf('<<<<<<<');

  while (start !== -1) {
    const mid = content.indexOf('=======', start);
    const end = content.indexOf('>>>>>>>', mid);

    if (mid === -1 || end === -1) break;

    const oursStart = content.indexOf('\n', start) + 1;
    const ours = content.slice(oursStart, mid).trim();
    const theirsStart = mid + '======='.length;
    const theirs = content.slice(theirsStart, end).replace(/^\n/, '').trim();

    const afterEnd = content.indexOf('\n', end);
    const cursorEnd = afterEnd === -1 ? content.length : afterEnd + 1;

    blocks.push({ start, end: cursorEnd, ours, theirs });
    start = content.indexOf('<<<<<<<', cursorEnd);
  }

  return blocks;
}

function parseStoreMap(jsonText) {
  if (!jsonText) return {};
  const parsed = JSON.parse(jsonText);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Expected a JSON object map for stores.runtime.json');
  }
  return parsed;
}

function mergeStoreMaps(ours, theirs) {
  return { ...ours, ...theirs };
}

async function main() {
  const raw = await readFile(filePath, 'utf-8');

  if (!raw.includes('<<<<<<<')) {
    console.log(`[resolveStoresRuntimeConflict] No conflict markers found in ${filePath}`);
    return;
  }

  const blocks = extractConflictSections(raw);
  if (blocks.length === 0) {
    throw new Error('Conflict markers detected but no valid conflict blocks were parsed.');
  }

  let output = raw;
  for (let i = blocks.length - 1; i >= 0; i -= 1) {
    const block = blocks[i];
    const ours = parseStoreMap(block.ours);
    const theirs = parseStoreMap(block.theirs);
    const merged = mergeStoreMaps(ours, theirs);
    const replacement = `${JSON.stringify(merged, null, 2)}\n`;

    output = `${output.slice(0, block.start)}${replacement}${output.slice(block.end)}`;
  }

  await writeFile(filePath, output);
  console.log(`[resolveStoresRuntimeConflict] Resolved ${blocks.length} conflict block(s) in ${filePath}`);
}

main().catch((error) => {
  console.error('[resolveStoresRuntimeConflict] Failed:', error.message);
  process.exit(1);
});
