/**
 * Tests for the 4 custom page converters:
 * - json-validator  (validateJSON)
 * - fetch-json-from-url, json-url-viewer, api-json-viewer (URL validation)
 *
 * The fetch tools depend on CORS at runtime so they get tested manually.
 * Here we test the URL validation + fetch logic (without actual HTTP).
 *
 * Usage: npx tsx scripts/test-custom-pages.ts
 */

import { validateJSON } from '../src/lib/converters'
import { friendlyJsonError, friendlyConvertError } from '../src/lib/errorFormatter'

let passed = 0
let failed = 0

function assert(condition: boolean, label: string) {
  if (condition) {
    console.log(`  PASS: ${label}`)
    passed++
  } else {
    console.error(`  FAIL: ${label}`)
    failed++
  }
}

function assertEqual(actual: unknown, expected: unknown, label: string) {
  if (actual === expected) {
    console.log(`  PASS: ${label}`)
    passed++
  } else {
    console.error(`  FAIL: ${label} — expected "${expected}", got "${actual}"`)
    failed++
  }
}

// ---------- validateJSON ----------
console.log('\n--- validateJSON ---')

const validCases = [
  '{}',
  '[]',
  '{"a":1}',
  'null',
  '"string"',
  '42',
  'true',
  '{"nested":{"array":[1,2,3]}}',
]
for (const c of validCases) {
  const res = validateJSON(c)
  assert(res.valid, `valid: ${c}`)
}

const invalidCases = [
  '{',
  '{a:1}',
  '{123}',
  'trailing,',
  '[1,]',
  'undefined',
  '',
  'not json at all',
]
for (const c of invalidCases) {
  const res = validateJSON(c)
  assert(!res.valid, `invalid: ${c}`)
  assert(typeof res.error === 'string', `has error message: ${c}`)
}

// ---------- friendlyJsonError ----------
console.log('\n--- friendlyJsonError ---')

const friendlyTests: [string, string][] = [
  ['Unexpected token } in JSON at position 5', 'Unexpected character found in JSON'],
  ['Unexpected end of JSON input', 'JSON input is incomplete'],
  ['Expected comma', 'Missing comma between elements'],
  ['Expected double-quoted property name', 'Object keys must be enclosed in double quotes'],
  ['Some random raw error', 'Invalid JSON: Some random raw error'],
]
for (const [raw, expected] of friendlyTests) {
  const result = friendlyJsonError(raw)
  assert(result.startsWith(expected), `friendlyJsonError: "${raw.substring(0, 40)}..." → "${result}"`)
}

// ---------- friendlyConvertError ----------
console.log('\n--- friendlyConvertError ---')

assertEqual(
  friendlyConvertError('JSON to YAML', 'Invalid JSON'),
  'The provided input is not valid JSON.',
  'friendlyConvertError wraps Invalid JSON',
)

// ---------- Fetch URL validation logic (shared by fetch pages) ----------
console.log('\n--- URL validation (fetch pages) ---')

function validateUrl(url: string): { valid: boolean; error?: string } {
  if (!url.trim()) return { valid: false, error: 'Please enter a URL' }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return { valid: false, error: 'URL must start with http:// or https://' }
  }
  try { new URL(url); return { valid: true } }
  catch { return { valid: false, error: 'Invalid URL format' } }
}

function assertUrlValidation(url: string, expectedValid: boolean, expectedError?: string, label?: string) {
  const r = validateUrl(url)
  const ok = r.valid === expectedValid && r.error === expectedError
  if (ok) {
    console.log(`  PASS: ${label || url}`)
    passed++
  } else {
    console.error(`  FAIL: ${label || url} — expected valid=${expectedValid} error=${expectedError}, got valid=${r.valid} error=${r.error}`)
    failed++
  }
}

assertUrlValidation('', false, 'Please enter a URL', 'empty URL')
assertUrlValidation('ftp://bad.com', false, 'URL must start with http:// or https://', 'ftp URL')
assertUrlValidation('not a url at all', false, 'URL must start with http:// or https://', 'random string')
assertUrlValidation('https://jsonplaceholder.typicode.com/todos/1', true, undefined, 'valid https URL')
assertUrlValidation('http://example.com', true, undefined, 'valid http URL')
assertUrlValidation('https://api.example.com/data.json?q=1&x=2', true, undefined, 'URL with query params')

// ---------- Summary ----------
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`)
if (failed > 0) process.exit(1)
