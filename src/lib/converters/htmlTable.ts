// Recursive JSON → HTML table renderer shared by json-to-html-table (clean
// semantic markup) and json-to-table / json-table-viewer (inline-styled,
// paste-anywhere markup). Nested objects render as key/value sub-tables,
// arrays of objects as sub-grids, and scalar arrays as comma lists — so deep
// API payloads stay readable instead of degrading to JSON strings in cells.
import { unionKeys } from './cell'

interface TableStyles {
  table: string
  th: string
  td: string
}

const PLAIN: TableStyles = { table: '', th: '', td: '' }

const STYLED: TableStyles = {
  table: ' border="1" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;"',
  th: ' style="background:#f5f5f5;text-align:left;border:1px solid #ddd;padding:6px 10px;font-weight:600;vertical-align:top;"',
  td: ' style="border:1px solid #ddd;padding:6px 10px;vertical-align:top;"',
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === 'object' && !Array.isArray(v)
}

function valueHtml(v: unknown, s: TableStyles): string {
  if (v === null || v === undefined) return ''
  if (Array.isArray(v)) {
    if (v.length === 0) return ''
    if (v.every(isPlainObject)) return gridTable(v, s)
    if (v.every(item => item === null || typeof item !== 'object')) {
      return escapeHtml(v.map(item => item === null || item === undefined ? 'null' : String(item)).join(', '))
    }
    return '<ul>' + v.map(item => `<li>${valueHtml(item, s)}</li>`).join('') + '</ul>'
  }
  if (typeof v === 'object') return kvTable(v as Record<string, unknown>, s)
  return escapeHtml(String(v))
}

// Vertical key/value table for a single object.
function kvTable(obj: Record<string, unknown>, s: TableStyles): string {
  const rows = Object.entries(obj)
    .map(([k, v]) => `    <tr><th${s.th}>${escapeHtml(k)}</th><td${s.td}>${valueHtml(v, s)}</td></tr>`)
    .join('\n')
  return `<table${s.table}>\n  <tbody>\n${rows}\n  </tbody>\n</table>`
}

// Grid table for an array of objects (columns = union of keys across rows).
function gridTable(rows: Record<string, unknown>[], s: TableStyles): string {
  const keys = unionKeys(rows)
  const head = keys.map(k => `<th${s.th}>${escapeHtml(k)}</th>`).join('')
  const body = rows
    .map(row => '    <tr>' + keys.map(k => `<td${s.td}>${valueHtml(row[k], s)}</td>`).join('') + '</tr>')
    .join('\n')
  return `<table${s.table}>\n  <thead>\n    <tr>${head}</tr>\n  </thead>\n  <tbody>\n${body}\n  </tbody>\n</table>`
}

export function renderHtmlTable(parsed: unknown, styled: boolean): string {
  const s = styled ? STYLED : PLAIN
  if (Array.isArray(parsed)) {
    if (parsed.length === 0) return `<table${s.table}></table>`
    if (parsed.every(isPlainObject)) return gridTable(parsed, s)
    return gridTable(parsed.map(item => (isPlainObject(item) ? item : { value: item })), s)
  }
  if (isPlainObject(parsed)) return kvTable(parsed, s)
  return `<table${s.table}>\n  <tbody>\n    <tr><td${s.td}>${valueHtml(parsed, s)}</td></tr>\n  </tbody>\n</table>`
}
