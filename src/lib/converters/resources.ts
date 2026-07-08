import { deflate, inflate, deflateRaw, inflateRaw, gzip, ungzip } from 'pako'
import { topLevelJsonBlocks } from './cell'

export function jsonCopy(input: string): string {
  JSON.parse(input)
  return input
}

export function jsonDownload(input: string): string {
  JSON.parse(input)
  return input
}

export function jsonUpload(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

export function jsonFileViewer(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

export function jsonClipboardViewer(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

export function jsonExplorer(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

export function jsonExpand(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

export function jsonCollapse(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed)
}

export function jsonExtractObjects(input: string): string {
  const parsed = JSON.parse(input)
  const objects: unknown[] = []
  function walk(val: unknown): void {
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach(walk); return }
    objects.push(val)
    for (const v of Object.values(val as Record<string, unknown>)) walk(v)
  }
  walk(parsed)
  return JSON.stringify(objects, null, 2)
}

export function jsonExtractArrays(input: string): string {
  const parsed = JSON.parse(input)
  const arrays: unknown[] = []
  function walk(val: unknown): void {
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { arrays.push(val); val.forEach(walk); return }
    for (const v of Object.values(val as Record<string, unknown>)) walk(v)
  }
  walk(parsed)
  return JSON.stringify(arrays, null, 2)
}

export function jsonDenormalize(input: string): string {
  const parsed = JSON.parse(input)
  function shuffleKeys(obj: Record<string, unknown>): Record<string, unknown> {
    const keys = Object.keys(obj)
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]]
    }
    const result: Record<string, unknown> = {}
    for (const k of keys) {
      const v = obj[k]
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        result[k] = shuffleKeys(v as Record<string, unknown>)
      } else if (Array.isArray(v)) {
        result[k] = v.map(item => typeof item === 'object' && item !== null ? shuffleKeys(item as Record<string, unknown>) : item)
      } else {
        result[k] = v
      }
    }
    return result
  }
  return JSON.stringify(shuffleKeys(typeof parsed === 'object' && parsed !== null ? parsed as Record<string, unknown> : { root: parsed }), null, 2)
}

export function jsonPointerGenerator(input: string): string {
  const parsed = JSON.parse(input)
  const pointers: string[] = []
  function walk(val: unknown, path: string): void {
    const escaped = path.replace(/~/g, '~0').replace(/\//g, '~1')
    pointers.push(escaped || '/')
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) {
      val.forEach((v, i) => walk(v, `${path}/${i}`))
    } else {
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        walk(v, `${path}/${k}`)
      }
    }
  }
  walk(parsed, '')
  return JSON.stringify({ pointers, count: pointers.length }, null, 2)
}

function u8toB64(u8: Uint8Array): string {
  return btoa(String.fromCharCode(...u8))
}

function b64toU8(b64: string): Uint8Array {
  const bin = atob(b64.trim())
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes
}

function encode(text: string): Uint8Array {
  return new TextEncoder().encode(text)
}

function decode(u8: Uint8Array): string {
  return new TextDecoder().decode(u8)
}

export function jsonCompress(input: string): string {
  JSON.parse(input)
  return u8toB64(deflate(encode(input), { level: 9 }))
}

export function jsonDecompress(input: string): string {
  let result: string
  try {
    result = decode(inflate(b64toU8(input.trim())))
  } catch {
    throw new Error('Input must be base64-encoded deflate data (as produced by JSON Compress)')
  }
  JSON.parse(result)
  return result
}

export function jsonGzip(input: string): string {
  JSON.parse(input)
  return u8toB64(gzip(encode(input), { level: 9 }))
}

export function jsonGunzip(input: string): string {
  let result: string
  try {
    result = decode(ungzip(b64toU8(input.trim())))
  } catch {
    throw new Error('Input must be base64-encoded gzip data (as produced by JSON Gzip)')
  }
  JSON.parse(result)
  return result
}

export function jsonDeflate(input: string): string {
  JSON.parse(input)
  return u8toB64(deflateRaw(encode(input), { level: 9 }))
}

export function jsonInflate(input: string): string {
  let result: string
  try {
    result = decode(inflateRaw(b64toU8(input.trim())))
  } catch {
    throw new Error('Input must be base64-encoded raw deflate data (as produced by JSON Deflate)')
  }
  JSON.parse(result)
  return result
}

export function jsonVersionDiff(input: string): string {
  const lines = input.split('\n')
  const jsonStrings: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('v1:') || trimmed.startsWith('v2:') || trimmed.startsWith('version1:') || trimmed.startsWith('version2:')) continue
    jsonStrings.push(line)
  }
  const parts = jsonStrings.join('\n').trim().split(/\n(?=\{)/)
  let objA: Record<string, unknown>
  let objB: Record<string, unknown>
  if (parts.length >= 2) {
    objA = JSON.parse(parts[0])
    objB = JSON.parse(parts[1])
  } else {
    const inputObj = JSON.parse(jsonStrings.join('\n').trim())
    if (Array.isArray(inputObj)) {
      objA = inputObj[0] as Record<string, unknown> || {}
      objB = inputObj[1] as Record<string, unknown> || {}
    } else if (typeof inputObj === 'object' && inputObj !== null && 'v1' in inputObj && 'v2' in inputObj) {
      objA = (inputObj as Record<string, unknown>).v1 as Record<string, unknown>
      objB = (inputObj as Record<string, unknown>).v2 as Record<string, unknown>
    } else {
      throw new Error('Need two JSON objects (v1 and v2) to diff. Provide them as separate objects on different lines.')
    }
  }
  const diff: Record<string, { from: unknown; to: unknown; change: string }> = {}
  const allKeys = new Set([...Object.keys(objA), ...Object.keys(objB)])
  for (const key of allKeys) {
    if (!(key in objA)) diff[key] = { from: undefined, to: objB[key], change: 'added' }
    else if (!(key in objB)) diff[key] = { from: objA[key], to: undefined, change: 'removed' }
    else if (JSON.stringify(objA[key]) !== JSON.stringify(objB[key])) diff[key] = { from: objA[key], to: objB[key], change: 'modified' }
  }
  return JSON.stringify({
    versionChanges: Object.keys(diff).length,
    changes: diff,
    summary: {
      added: Object.values(diff).filter(d => d.change === 'added').length,
      removed: Object.values(diff).filter(d => d.change === 'removed').length,
      modified: Object.values(diff).filter(d => d.change === 'modified').length
    }
  }, null, 2)
}

function extractTopLevelJsonBlocks(text: string): string[] {
  const blocks: string[] = []
  let depth = 0
  let start = -1
  let inString = false
  let escaped = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inString) {
      if (escaped) escaped = false
      else if (ch === '\\') escaped = true
      else if (ch === '"') inString = false
      continue
    }
    if (ch === '"') { inString = true; continue }
    if (ch === '{') {
      if (depth === 0) start = i
      depth++
    } else if (ch === '}') {
      depth--
      if (depth === 0 && start !== -1) {
        blocks.push(text.slice(start, i + 1))
        start = -1
      }
    }
  }
  return blocks
}

export function jsonPatchGenerator(input: string): string {
  const lines = input.split('\n')
  const jsonStrings: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('from:') || trimmed.startsWith('to:')) continue
    jsonStrings.push(line)
  }
  const text = jsonStrings.join('\n').trim()
  let from: Record<string, unknown>
  let to: Record<string, unknown>
  const braceBlocks = extractTopLevelJsonBlocks(text)
  if (braceBlocks && braceBlocks.length >= 2) {
    from = JSON.parse(braceBlocks[0])
    to = JSON.parse(braceBlocks[1])
  } else {
    throw new Error('Need two JSON objects (from and to) to generate a patch')
  }
  const patch: Record<string, unknown>[] = []
  function findPatch(a: unknown, b: unknown, path: string): void {
    if (JSON.stringify(a) === JSON.stringify(b)) return
    if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b) || typeof a !== 'object' || a === null || b === null) {
      patch.push({ op: 'replace', path: path || '/', value: b })
      return
    }
    const aObj = a as Record<string, unknown>
    const bObj = b as Record<string, unknown>
    const allKeys = new Set([...Object.keys(aObj), ...Object.keys(bObj)])
    for (const key of allKeys) {
      const fullPath = `${path}/${key}`
      if (!(key in aObj)) {
        patch.push({ op: 'add', path: fullPath, value: bObj[key] })
      } else if (!(key in bObj)) {
        patch.push({ op: 'remove', path: fullPath })
      } else {
        findPatch(aObj[key], bObj[key], fullPath)
      }
    }
  }
  findPatch(from, to, '')
  return JSON.stringify({ operations: patch, count: patch.length }, null, 2)
}

export function jsonPatchValidator(input: string): string {
  const result = JSON.parse(input)
  const patch = Array.isArray(result) ? result : result.operations || []
  if (!Array.isArray(patch) || patch.length === 0) throw new Error('No patch operations found')
  const errors: string[] = []
  for (let i = 0; i < patch.length; i++) {
    const op = patch[i] as Record<string, unknown>
    if (!op.op) errors.push(`Operation ${i}: missing "op" field`)
    else if (!['add', 'remove', 'replace', 'move', 'copy', 'test'].includes(op.op as string)) {
      errors.push(`Operation ${i}: invalid op "${op.op}"`)
    }
    const path = op.path as string | undefined
    if (!path && op.op !== 'add') errors.push(`Operation ${i}: missing "path" field`)
    else if (path && typeof path !== 'string') errors.push(`Operation ${i}: "path" must be a string`)
    else if (path && !path.startsWith('/')) errors.push(`Operation ${i}: "path" must start with /`)
    if (op.value === undefined && (op.op === 'add' || op.op === 'replace')) {
      errors.push(`Operation ${i}: "${op.op}" requires a "value" field`)
    }
    if ((op.op === 'move' || op.op === 'copy') && !(op.from as string | undefined)) {
      errors.push(`Operation ${i}: "${op.op}" requires a "from" field`)
    }
  }
  return JSON.stringify({
    valid: errors.length === 0,
    operationCount: patch.length,
    errors: errors.length > 0 ? errors : undefined
  }, null, 2)
}

// ---- Batch 5: Remaining 10 Tools ----

import * as XLSX from 'xlsx'
import QRCode from 'qrcode'
import { jsPDF } from 'jspdf'

export function jsonToXlsx(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const ws = XLSX.utils.json_to_sheet(arr)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' })
  return wbout
}

export function xlsxToJson(input: string): string {
  const wb = XLSX.read(input, { type: 'base64' })
  const sheet = wb.Sheets[wb.SheetNames[0]]
  const data = XLSX.utils.sheet_to_json(sheet)
  return JSON.stringify(data, null, 2)
}

export function jsonUrlViewer(input: string): string {
  const url = input.trim()
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    throw new Error('Please provide a valid URL starting with http:// or https://')
  }
  return JSON.stringify({ url, status: 'fetch_ready', note: 'Paste this URL in your browser to fetch JSON data. This tool previews the URL configuration.' }, null, 2)
}

export function jsonMergeFiles(input: string): string {
  const lines = input.trim().split('\n')
  const objs: Record<string, unknown>[] = []
  let current = ''
  let braceCount = 0
  for (const line of lines) {
    for (const ch of line) {
      if (ch === '{') braceCount++
      if (ch === '}') braceCount--
    }
    current += line + '\n'
    if (braceCount === 0 && current.trim()) {
      try { objs.push(JSON.parse(current.trim())); current = '' } catch { /* skip partial */ }
    }
  }
  if (current.trim()) { try { objs.push(JSON.parse(current.trim())) } catch { /* ignore */ } }
  if (objs.length < 2) throw new Error('Need at least two JSON objects to merge')
  const merged = deepMergeRemaining(objs[0], objs[1])
  for (let i = 2; i < objs.length; i++) deepMergeRemaining(merged, objs[i])
  return JSON.stringify(merged, null, 2)
}

function deepMergeRemaining(a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...a }
  for (const [k, v] of Object.entries(b)) {
    if (typeof v === 'object' && v !== null && !Array.isArray(v) &&
        typeof result[k] === 'object' && result[k] !== null && !Array.isArray(result[k])) {
      result[k] = deepMergeRemaining(result[k] as Record<string, unknown>, v as Record<string, unknown>)
    } else {
      result[k] = v
    }
  }
  return result
}

export async function jsonToQrcode(input: string): Promise<string> {
  JSON.parse(input)
  try {
    const dataUrl = await QRCode.toDataURL(input, { width: 400, margin: 2, color: { dark: '#000000', light: '#ffffff' } })
    return dataUrl
  } catch {
    throw new Error('Failed to generate QR code')
  }
}

export function jsonToImage(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed, null, 2)
  const escaped = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const lines = json.split('\n')
  const lineHeight = 20
  const charWidth = 8.5
  const maxLineLen = Math.max(...lines.map(l => l.length), 1)
  const width = Math.min(maxLineLen * charWidth + 40, 1200)
  const height = Math.min(lines.length * lineHeight + 40, 800)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#1e1e2e" rx="8"/>
  <text font-family="monospace" font-size="14" fill="#cdd6f4" x="20" y="30">
    ${lines.map((l, i) => `<tspan x="20" dy="${i === 0 ? 0 : lineHeight}">${l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}</tspan>`).join('')}
  </text>
</svg>`
}

export async function jsonToPdf(input: string): Promise<string> {
  const parsed = JSON.parse(input)
  const doc = new jsPDF()
  const json = JSON.stringify(parsed, null, 2)
  const lines = doc.splitTextToSize(json, 180)
  doc.setFontSize(10)
  doc.text(lines, 15, 20)
  return doc.output('datauristring')
}

export function jsonValueAnalyzer(input: string): string {
  const parsed = JSON.parse(input)
  const valueFreq: Record<string, Record<string, number>> = {}
  function analyze(val: unknown, key: string): void {
    if (key && !key.startsWith('[')) {
      if (!valueFreq[key]) valueFreq[key] = {}
      const strVal = typeof val === 'object' ? JSON.stringify(val) : String(val ?? 'null')
      valueFreq[key][strVal] = (valueFreq[key][strVal] || 0) + 1
    }
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach((v, i) => analyze(v, `[${i}]`)); return }
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) analyze(v, k)
  }
  analyze(parsed, '')
  const summary: Record<string, { total: number; unique: number; distribution: Record<string, number> }> = {}
  for (const [key, freqs] of Object.entries(valueFreq)) {
    summary[key] = { total: Object.values(freqs).reduce((s, c) => s + c, 0), unique: Object.keys(freqs).length, distribution: freqs }
  }
  return JSON.stringify(summary, null, 2)
}

export function jsonCollectionCounter(input: string): string {
  const parsed = JSON.parse(input)
  if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Input must be a non-empty JSON array')
  const keys = new Set<string>()
  for (const item of parsed) {
    if (typeof item === 'object' && item !== null) for (const k of Object.keys(item as Record<string, unknown>)) keys.add(k)
  }
  const counts: Record<string, { present: number; missing: number; types: Record<string, number>; nullCount: number }> = {}
  for (const key of keys) {
    let present = 0, nullCount = 0
    const types: Record<string, number> = {}
    for (const item of parsed) {
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>
        if (key in obj) {
          present++
          if (obj[key] === null) nullCount++
          else {
            const t = Array.isArray(obj[key]) ? 'array' : typeof obj[key]
            types[t] = (types[t] || 0) + 1
          }
        }
      }
    }
    counts[key] = { present, missing: parsed.length - present, types, nullCount }
  }
  return JSON.stringify({ totalItems: parsed.length, totalKeys: keys.size, keyCounts: counts, keysPresentRatio: Object.fromEntries([...keys].map(k => [k, Math.round(counts[k].present / parsed.length * 100)])) }, null, 2)
}

export function jsonFieldComparator(input: string): string {
  const parsed = JSON.parse(input)
  if (!Array.isArray(parsed) || parsed.length < 2) throw new Error('Need at least 2 objects in an array to compare')
  const objs = parsed as Record<string, unknown>[]
  const allKeys = new Set<string>()
  for (const obj of objs) for (const k of Object.keys(obj)) allKeys.add(k)
  const comparison: Record<string, { values: unknown[]; allSame: boolean; allDistinct: boolean; types: string[] }> = {}
  for (const key of allKeys) {
    const values = objs.map(o => o[key])
    const uniqueVals = new Set(values.map(v => JSON.stringify(v)))
    const types = [...new Set(values.map(v => Array.isArray(v) ? 'array' : typeof v))]
    comparison[key] = { values, allSame: uniqueVals.size === 1, allDistinct: uniqueVals.size === values.length, types }
  }
  return JSON.stringify(comparison, null, 2)
}

export function jsonArrayDiff(input: string): string {
  const text = input.trim()
  let parts = topLevelJsonBlocks(text, '[')
  if (parts.length === 1) {
    // A single top-level array of exactly two arrays also works: [[...],[...]]
    try {
      const outer = JSON.parse(parts[0])
      if (Array.isArray(outer) && outer.length === 2 && outer.every(Array.isArray)) {
        parts = [JSON.stringify(outer[0]), JSON.stringify(outer[1])]
      }
    } catch { /* keep original parts */ }
  }
  if (parts.length < 2) throw new Error('Need two JSON arrays to diff. Paste them one after another.')
  const arrA = JSON.parse(parts[0]) as unknown[]
  const arrB = JSON.parse(parts[1]) as unknown[]
  const setA = new Set(arrA.map(v => JSON.stringify(v)))
  const setB = new Set(arrB.map(v => JSON.stringify(v)))
  const onlyInA = arrA.filter(v => !setB.has(JSON.stringify(v)))
  const onlyInB = arrB.filter(v => !setA.has(JSON.stringify(v)))
  const inBoth = arrA.filter(v => setB.has(JSON.stringify(v)))
  return JSON.stringify({ arrayALength: arrA.length, arrayBLength: arrB.length, onlyInA, onlyInB, inBoth, changes: { added: onlyInB.length, removed: onlyInA.length, unchanged: inBoth.length } }, null, 2)
}
