// Shared helpers for tabular converters (CSV/TSV/tables/SQL).

// Render any JSON value as a single table-cell string. Nested objects and
// arrays are serialized as JSON instead of collapsing to "[object Object]".
export function cellText(val: unknown): string {
  if (val === null || val === undefined) return ''
  if (typeof val === 'object') return JSON.stringify(val)
  return String(val)
}

// Column set across ALL rows (first-seen order), so rows with extra or
// missing keys don't lose data.
export function unionKeys(array: unknown[]): string[] {
  const keys: string[] = []
  const seen = new Set<string>()
  for (const item of array) {
    if (item !== null && typeof item === 'object' && !Array.isArray(item)) {
      for (const k of Object.keys(item as Record<string, unknown>)) {
        if (!seen.has(k)) { seen.add(k); keys.push(k) }
      }
    }
  }
  return keys
}

// Extract complete top-level JSON blocks of the given bracket type from free
// text (string-aware and nesting-aware, unlike a regex).
export function topLevelJsonBlocks(text: string, open: '[' | '{'): string[] {
  const close = open === '[' ? ']' : '}'
  const blocks: string[] = []
  let depth = 0
  let start = -1
  let inStr = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inStr) {
      if (ch === '\\') i++
      else if (ch === '"') inStr = false
      continue
    }
    if (ch === '"') { inStr = true; continue }
    if (ch === '[' || ch === '{') {
      if (depth === 0 && ch === open) start = i
      depth++
    } else if (ch === ']' || ch === '}') {
      depth--
      if (depth === 0 && start !== -1 && ch === close) {
        blocks.push(text.slice(start, i + 1))
        start = -1
      }
    }
  }
  return blocks
}

// First non-null value of a column across all rows — better basis for SQL
// type inference than only looking at row 0.
export function firstColumnValue(rows: Record<string, unknown>[], key: string): unknown {
  for (const row of rows) {
    const v = row[key]
    if (v !== null && v !== undefined) return v
  }
  return null
}

// Normalize any parsed JSON into an array of row objects: wraps a lone
// object, and wraps primitive/array items as { value: item }.
export function toRowObjects(parsed: unknown): Record<string, unknown>[] {
  const array = Array.isArray(parsed) ? parsed : [parsed]
  return array.map(item =>
    item !== null && typeof item === 'object' && !Array.isArray(item)
      ? (item as Record<string, unknown>)
      : { value: item }
  )
}
