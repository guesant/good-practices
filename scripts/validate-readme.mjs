#!/usr/bin/env node
/**
 * Validate the standalone README (not runtime compliance).
 * Node.js 20+; no third-party dependencies.
 */
import { readFileSync } from 'node:fs';

const text = readFileSync('README.md', 'utf8');
const errors = [];
const count = (text.match(/^- \[ \] /gm) ?? []).length;
const definitions = [...text.matchAll(/^- \[ \] \*\*([A-Z][A-Z0-9-]+) \[(P[012])\]\*\* /gm)];
const ids = new Set();

if (count < 1500) errors.push('README has fewer than 1500 checklist items; review for accidental truncation.');
for (const [, id] of definitions) {
  if (ids.has(id)) errors.push('Duplicate check ID: ' + id);
  ids.add(id);
}
for (let chapter = 1; chapter <= 25; chapter++) {
  if (!new RegExp('^## ' + chapter + '\\.', 'm').test(text)) {
    errors.push('Missing numbered chapter ' + chapter);
  }
}
for (const key of ['## Anexo A', '## Anexo K', '## Anexo L', '## Anexo M', '## Anexo N', '## Anexo O']) {
  if (!text.includes(key)) errors.push('Missing integrated annex: ' + key);
}
for (const [, destination] of text.matchAll(/\]\(([^)\s]+)(?:\s+[^)]*)?\)/g)) {
  if (/^(?:\.\.\/|\.\/)?(?:docs|catalog)\//.test(destination)) {
    errors.push('Link to removed directory: ' + destination);
  }
}
// The 204 controls formerly in the structured catalog must have a corresponding
// checklist item and preserved metadata table entry.
const catalogRows = [...text.matchAll(/^\| \`((?:API|ASVS|SAMM|OSF|RES|OBS|FIN|DNS|RET|PORT|TEST|A11Y|PRIV|AIG)-\d{2})\` \|/gm)].map(x=>x[1]);
if (catalogRows.length !== 204 || new Set(catalogRows).size !== 204) {
  errors.push('Expected exactly 204 unique preserved catalog metadata rows, found ' + catalogRows.length);
}
for (const id of catalogRows) {
  if (!ids.has(id)) errors.push('Catalog metadata missing checklist definition: ' + id);
}
console.log('README: ' + count + ' checklist items; ' + ids.size + ' priority-tagged IDs; ' + catalogRows.length + ' migrated metadata rows.');
if (errors.length) {
  for (const error of errors) console.error('ERROR: ' + error);
  process.exitCode = 1;
} else {
  console.log('Document structure validated. Does not assert operational or normative compliance.');
}
