#!/usr/bin/env node
/**
 * Catalog metadata validation (not implementation assurance).
 * Requires Node.js 20+ and no third-party dependencies.
 */
import { readFileSync, existsSync } from 'node:fs';

const paths = [
  ['catalog/assurance-resilience-controls.json', 'docs/contracts-assurance-resilience.md'],
  ['catalog/operations-lifecycle-controls.json', 'docs/finops-domains-retirement-portability.md'],
  ['catalog/quality-privacy-ai-controls.json', 'docs/advanced-testing-accessibility-privacy-ai.md'],
];
const profiles = JSON.parse(readFileSync('catalog/profiles.json', 'utf8')).profiles;
const tags = new Set(profiles.flatMap((profile) => profile.tags));
const expectedFields = ['id', 'priority', 'text', 'profiles', 'verify', 'evidence', 'reference', 'section'];
const ids = new Set();
const errors = [];
const readme = readFileSync('README.md', 'utf8');
let total = 0;
const priorities = { P0: 0, P1: 0, P2: 0 };

for (const [jsonPath, docPath] of paths) {
  if (!existsSync(jsonPath) || !existsSync(docPath)) {
    errors.push('Missing catalog or documentation: ' + jsonPath + ' / ' + docPath);
    continue;
  }
  let data;
  try {
    data = JSON.parse(readFileSync(jsonPath, 'utf8'));
  } catch (error) {
    errors.push('Invalid JSON: ' + jsonPath + ': ' + error.message);
    continue;
  }
  const docs = readFileSync(docPath, 'utf8');
  if (data.schema_version !== 1 || !Array.isArray(data.controls)) {
    errors.push('Invalid catalog wrapper: ' + jsonPath);
    continue;
  }
  for (const control of data.controls) {
    total++;
    const id = String(control.id ?? '');
    const tag = jsonPath + ': ' + id;
    if (!/^[A-Z][A-Z0-9]{1,8}-[0-9]{2}$/.test(id)) errors.push(tag + ' invalid ID');
    if (ids.has(id)) errors.push(tag + ' duplicate ID');
    ids.add(id);
    for (const field of expectedFields) {
      if (!(field in control)) errors.push(tag + ' missing ' + field);
    }
    if (!(control.priority in priorities)) errors.push(tag + ' invalid priority');
    else priorities[control.priority]++;
    for (const field of ['text', 'verify', 'evidence', 'section']) {
      if (typeof control[field] !== 'string' || control[field].trim().length < 6) {
        errors.push(tag + ' invalid or empty ' + field);
      }
    }
    if (typeof control.reference !== 'string' || !/^https:\/\/[^ ]+$/.test(control.reference)) {
      errors.push(tag + ' invalid reference URL');
    }
    if (!Array.isArray(control.profiles) || control.profiles.length === 0) {
      errors.push(tag + ' missing profiles');
    } else {
      const profileSet = new Set();
      for (const p of control.profiles) {
        if (!tags.has(p)) errors.push(tag + ' unknown profile ' + p);
        if (profileSet.has(p)) errors.push(tag + ' duplicate profile ' + p);
        profileSet.add(p);
      }
    }
    const signature = '**' + id + ' [' + control.priority + ']**';
    if (!docs.includes(signature)) errors.push(tag + ' missing from ' + docPath);
    if (!readme.includes(signature)) errors.push(tag + ' missing from README.md');
  }
}
console.log('Control catalog: ' + total + ' controls, priorities: ' + JSON.stringify(priorities));
if (errors.length) {
  for (const message of errors) console.error('ERROR: ' + message);
  process.exitCode = 1;
} else {
  console.log('Metadata and README cross-references validated. No operational controls were tested.');
}
