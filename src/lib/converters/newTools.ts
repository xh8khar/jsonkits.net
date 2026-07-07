// ============================================================
// New Tools Converter Functions
// ============================================================

// ---- JSON Editor / Parser / Stringify ----

export function jsonEditor(input: string): string {
  JSON.parse(input)
  return input
}

export function jsonParser(input: string): string {
  const parsed = JSON.parse(input)
  const type = Array.isArray(parsed) ? 'Array' : typeof parsed === 'object' && parsed !== null ? 'Object' : typeof parsed
  const keys = typeof parsed === 'object' && parsed !== null ? Object.keys(parsed as Record<string, unknown>) : []
  const info: Record<string, unknown> = {
    type,
    rootKeys: keys,
    totalKeys: countKeys(parsed),
    depth: maxDepth(parsed),
    size: new TextEncoder().encode(JSON.stringify(parsed)).length,
    stringLength: JSON.stringify(parsed).length,
  }
  return JSON.stringify(info, null, 2)
}

function countKeys(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countKeys(v), 0)
  let c = Object.keys(obj as Record<string, unknown>).length
  for (const v of Object.values(obj as Record<string, unknown>)) c += countKeys(v)
  return c
}

function maxDepth(obj: unknown, d: number = 0): number {
  if (typeof obj !== 'object' || obj === null) return d
  if (Array.isArray(obj)) return obj.reduce((m: number, v) => Math.max(m, maxDepth(v, d + 1)), d)
  return Object.values(obj as Record<string, unknown>).reduce((m: number, v) => Math.max(m, maxDepth(v, d + 1)), d)
}

export function jsonStringify(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2)
}

// ---- JSON5 ----

export function json5ToJson(input: string): string {
  const json5 = input.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '')
  const cleaned = json5
    .replace(/,\s*([}\]])/g, '$1')
    .replace(/'/g, '"')
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    .replace(/0x[0-9a-fA-F]+/g, m => String(parseInt(m, 10)))
    .replace(/\+Infinity/g, 'null')
    .replace(/-Infinity/g, 'null')
    .replace(/NaN/g, 'null')
  const parsed = JSON.parse(cleaned)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToJson5(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed, null, 2)
  return json.replace(/"(\w+)"(?=\s*:)/g, '$1')
}

// ---- JSONL (JSON Lines) ----

export function jsonlToJson(input: string): string {
  const lines = input.trim().split('\n').filter(Boolean)
  const arr = lines.map((line, i) => {
    try { return JSON.parse(line) }
    catch { throw new Error(`Invalid JSON on line ${i + 1}`) }
  })
  return JSON.stringify(arr, null, 2)
}

export function jsonToJsonl(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  return arr.map(item => JSON.stringify(item)).join('\n')
}

// ---- Apache Parquet (metadata-only simulation) ----

export function jsonToParquet(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return 'Empty data'
  const first = arr[0] as Record<string, unknown>
  const schema = Object.entries(first).map(([k, v]) => {
    const t = v === null ? 'BYTE_ARRAY' : typeof v === 'number' ? (Number.isInteger(v) ? 'INT64' : 'DOUBLE') : typeof v === 'boolean' ? 'BOOLEAN' : 'BYTE_ARRAY'
    return `  ${k}: ${t} (optional)`
  })
  const colChunks = Object.keys(first).map(col => {
    const values = arr.map(r => (r as Record<string, unknown>)[col])
    return `    Column "${col}": ${values.map(v => v === null ? 'null' : String(v)).join(', ')}`
  })
  return [
    'Parquet Schema:',
    ...schema,
    '',
    `Row Group 1 (${arr.length} rows):`,
    ...colChunks,
    '',
    'Note: Full Parquet binary encoding is not supported in browser.',
    'The schema above shows the inferred structure for Parquet conversion.',
  ].join('\n')
}

export function parquetToJson(input: string): string {
  const match = input.match(/Row Group 1 \((\d+) rows\):/)
  const count = match ? parseInt(match[1]) : 1
  const lines = input.split('\n')
  const schemaLines = lines.filter(l => l.match(/^\s+\w+: /))
  const columns = schemaLines.map(l => l.split(':')[0].trim()).filter(Boolean)
  const result = Array.from({ length: count }, () => {
    const obj: Record<string, string> = {}
    columns.forEach(c => { obj[c] = `sample_${c}` })
    return obj
  })
  return JSON.stringify(result, null, 2)
}

// ---- Apple PList (XML plist parser) ----

export function plistToJson(input: string): string {
  const cleaned = input.replace(/<\?xml[\s\S]*?\?>/, '').replace(/<!DOCTYPE[\s\S]*?>/g, '')
  const dictMatch = cleaned.match(/<dict>([\s\S]*)<\/dict>/)
  if (!dictMatch) throw new Error('No plist dict found')
  const result = parsePlistDict(dictMatch[1])
  return JSON.stringify(result, null, 2)
}

function parsePlistDict(xml: string): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  const keyRegex = /<key>([^<]+)<\/key>\s*<(\w+)([^>]*?)(?:\/>|>([\s\S]*?)<\/\2>)/g
  let match
  while ((match = keyRegex.exec(xml)) !== null) {
    const [, key, tag, attrs, content] = match
    result[key] = parsePlistValue(tag, (content ?? '').trim(), attrs)
  }
  return result
}

function parsePlistValue(tag: string, content: string, _attrs: string): unknown {
  if (tag === 'string') return content
  if (tag === 'integer') return parseInt(content, 10)
  if (tag === 'real') return parseFloat(content)
  if (tag === 'boolean' || tag === 'true') return true
  if (tag === 'false') return false
  if (tag === 'dict') return parsePlistDict(content)
  if (tag === 'array') {
    const arr: unknown[] = []
    const itemRegex = /<(\w+)([^>]*?)(?:\/>|>([\s\S]*?)<\/\1>)/g
    let m
    while ((m = itemRegex.exec(content)) !== null) {
      arr.push(parsePlistValue(m[1], (m[3] ?? '').trim(), m[2]))
    }
    return arr
  }
  if (tag === 'data') return content
  if (tag === 'date') return content
  return content
}

export function jsonToPlist(input: string): string {
  const parsed = JSON.parse(input)
  const plist = buildPlist(parsed)
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
${plist}
</plist>`
}

function buildPlist(value: unknown, indent = ''): string {
  const i = indent + '\t'
  if (value === null) return `${indent}<string></string>`
  if (typeof value === 'boolean') return `${indent}<${value ? 'true' : 'false'}/>`
  if (typeof value === 'number') return `${indent}<${Number.isInteger(value) ? 'integer' : 'real'}>${value}</${Number.isInteger(value) ? 'integer' : 'real'}>`
  if (typeof value === 'string') return `${indent}<string>${value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</string>`
  if (Array.isArray(value)) {
    const items = value.map(v => buildPlist(v, i)).join('\n')
    return `${indent}<array>\n${items}\n${indent}</array>`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>).map(([k, v]) =>
      `${i}<key>${k}</key>\n${buildPlist(v, i)}`
    ).join('\n')
    return `${indent}<dict>\n${entries}\n${indent}</dict>`
  }
  return `${indent}<string>${String(value)}</string>`
}

// ---- HAR (HTTP Archive) ----

export function harViewer(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.log) throw new Error('Invalid HAR: missing log object')
  const log = parsed.log as Record<string, unknown>
  const entries = (log.entries || []) as Record<string, unknown>[]
  const summary: Record<string, unknown> = {
    harVersion: log.version || '1.2',
    creator: log.creator || {},
    totalEntries: entries.length,
    entries: entries.slice(0, 100).map(e => ({
      request: {
        method: ((e.request as Record<string, unknown>)?.method) || '',
        url: ((e.request as Record<string, unknown>)?.url) || '',
        headersCount: ((e.request as Record<string, unknown>)?.headers as unknown[])?.length || 0,
      },
      response: {
        status: ((e.response as Record<string, unknown>)?.status) || 0,
        statusText: ((e.response as Record<string, unknown>)?.statusText) || '',
        contentType: ((e.response as Record<string, unknown>)?.content as Record<string, unknown>)?.mimeType || '',
        bodySize: ((e.response as Record<string, unknown>)?.bodySize) || 0,
      },
      time: e.timings ? Number((e.timings as Record<string, unknown>).wait || 0) + Number((e.timings as Record<string, unknown>).receive || 0) : 0,
      startedDateTime: e.startedDateTime || '',
    })),
    pageTimings: (log.pages as Record<string, unknown>[])?.map(p => ({
      url: (p as Record<string, unknown>).title || '',
      started: (p as Record<string, unknown>).startedDateTime || '',
      loadTime: ((p.pageTimings as Record<string, unknown>)?.onLoad as number) || 0,
    })) || [],
  }
  return JSON.stringify(summary, null, 2)
}

export function harToJson(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.log) throw new Error('Invalid HAR: missing log object')
  const entries = (parsed.log as Record<string, unknown>).entries as Record<string, unknown>[] || []
  const result = entries.map(e => ({
    url: ((e.request as Record<string, unknown>)?.url) || '',
    method: ((e.request as Record<string, unknown>)?.method) || '',
    status: ((e.response as Record<string, unknown>)?.status) || 0,
    contentType: ((e.response as Record<string, unknown>)?.content as Record<string, unknown>)?.mimeType || '',
    bodySize: ((e.response as Record<string, unknown>)?.bodySize) || 0,
    time: ((e.timings as Record<string, unknown>)?.wait as number || 0) + ((e.timings as Record<string, unknown>)?.receive as number || 0),
    startedDateTime: e.startedDateTime || '',
  }))
  return JSON.stringify(result, null, 2)
}

// ---- GeoJSON Viewer ----

export function geojsonViewer(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.type) throw new Error('Invalid GeoJSON: missing type')
  const features = parsed.type === 'FeatureCollection' ? (parsed.features || []) : [parsed]
  const summary: Record<string, unknown> = {
    type: parsed.type,
    featureCount: features.length,
    geometryTypes: [...new Set(features.map((f: Record<string, unknown>) => (f.geometry as Record<string, unknown>)?.type))],
    properties: features.length > 0 ? Object.keys(features[0].properties || {}) : [],
    bounds: calcBounds(features),
    crs: parsed.crs || null,
  }
  return JSON.stringify(summary, null, 2)
}

function calcBounds(features: Record<string, unknown>[]): Record<string, number> | null {
  let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity
  function walkCoords(geom: unknown): void {
    if (!geom || typeof geom !== 'object') return
    const g = geom as Record<string, unknown>
    if (g.type === 'Point' && Array.isArray(g.coordinates)) {
      minLon = Math.min(minLon, (g.coordinates as number[])[0])
      minLat = Math.min(minLat, (g.coordinates as number[])[1])
      maxLon = Math.max(maxLon, (g.coordinates as number[])[0])
      maxLat = Math.max(maxLat, (g.coordinates as number[])[1])
    }
    if (g.type === 'MultiPoint' || g.type === 'LineString' || g.type === 'MultiLineString' || g.type === 'Polygon' || g.type === 'MultiPolygon') {
      if (Array.isArray(g.coordinates)) deepWalk(g.coordinates)
    }
    if (g.type === 'GeometryCollection' && Array.isArray(g.geometries)) {
      g.geometries.forEach(walkCoords)
    }
  }
  function deepWalk(arr: unknown[]): void {
    arr.forEach(item => {
      if (Array.isArray(item)) deepWalk(item)
      else if (typeof item === 'number' && !isNaN(item)) { /* skip individual numbers */ }
    })
    if (arr.length >= 2 && typeof arr[0] === 'number' && typeof arr[1] === 'number') {
      minLon = Math.min(minLon, arr[0] as number)
      minLat = Math.min(minLat, arr[1] as number)
      maxLon = Math.max(maxLon, arr[0] as number)
      maxLat = Math.max(maxLat, arr[1] as number)
    }
  }
  features.forEach((f: Record<string, unknown>) => walkCoords(f.geometry))
  if (!isFinite(minLon)) return null
  return { minLon, minLat, maxLon, maxLat }
}

// ---- JSON Path Finder ----

export function jsonFindAllPaths(input: string): string {
  const parsed = JSON.parse(input)
  const paths: string[] = []
  function walk(obj: unknown, prefix = '$'): void {
    if (typeof obj !== 'object' || obj === null) { paths.push(prefix); return }
    if (Array.isArray(obj)) {
      if (obj.length === 0) { paths.push(prefix); return }
      obj.forEach((item, i) => walk(item, `${prefix}[${i}]`))
      return
    }
    const entries = Object.entries(obj as Record<string, unknown>)
    if (entries.length === 0) { paths.push(prefix); return }
    for (const [key, value] of entries) {
      const path = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? `${prefix}.${key}` : `${prefix}["${key}"]`
      if (typeof value === 'object' && value !== null) walk(value, path)
      else paths.push(path)
    }
  }
  walk(parsed)
  return JSON.stringify(paths, null, 2)
}

// ---- JSON i18n Translator ----

export function jsonI18nTranslator(input: string): string {
  const parsed = JSON.parse(input)
  const flat = flattenKeys(parsed, '')
  const result: Record<string, { path: string; value: string }[]> = {}
  for (const [path, value] of Object.entries(flat)) {
    const lang = path.includes('.') ? path.split('.')[1] || 'default' : 'default'
    if (!result[lang]) result[lang] = []
    result[lang].push({ path, value: String(value) })
  }
  return JSON.stringify(result, null, 2)
}

function flattenKeys(obj: unknown, prefix: string): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  if (typeof obj !== 'object' || obj === null) { result[prefix] = obj; return result }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => Object.assign(result, flattenKeys(v, prefix ? `${prefix}[${i}]` : String(i))))
    return result
  }
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'object' && v !== null) Object.assign(result, flattenKeys(v, key))
    else result[key] = v
  }
  return result
}

// ---- Dart Freezed ----

export function jsonToFreezed(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateFreezed(parsed, 'Data', classes)
  const header = `import 'package:freezed_annotation/freezed_annotation.dart';\nimport 'package:flutter/foundation.dart';\n\npart 'data.freezed.dart';\npart 'data.g.dart';\n`
  return header + '\n' + classes.join('\n\n')
}

function generateFreezed(obj: unknown, name: string, classes: string[]): string {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return ''
  const entries = Object.entries(obj as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    const dartType = getDartType(val, key, classes)
    const isOptional = val === null || val === undefined
    return `    ${isOptional ? '@Default(null) ' : ''}${dartType}${isOptional ? '?' : ''} ${key}${isOptional ? '' : ''}`
  })
  const fromJson = `factory ${name}.fromJson(Map<String, dynamic> json) => _$${name}FromJson(json);`
  classes.push(`@freezed\nclass ${name} with _$${name} {\n  const factory ${name}({\n${fields.join(',\n')},\n  }) = _$${name};\n\n  ${fromJson}\n}`)
  return name
}

function getDartType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'dynamic'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<dynamic>'
    return `List<${getDartType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': return generateFreezed(value, toClassName(key), classes)
    default: return 'dynamic'
  }
}

function toClassName(key: string): string {
  const cleaned = key.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  if (!cleaned) return 'Item'
  return cleaned.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

// ---- Salesforce Apex ----

export function jsonToApex(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateApex(parsed, 'Data', classes)
  return classes.join('\n\n')
}

function generateApex(obj: unknown, name: string, classes: string[]): string {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return ''
  const entries = Object.entries(obj as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    const apexType = getApexType(val, key, classes)
    return `    public ${apexType} ${key} { get; set; }`
  })
  classes.push(`public class ${name} {\n${fields.join('\n')}\n}`)
  return name
}

function getApexType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Object'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<Object>'
    const inner = value.map(v => getApexType(v, key, classes))
    return `List<${inner[0] || 'Object'}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Integer' : 'Double'
    case 'object': return generateApex(value, toClassName(key), classes)
    default: return 'Object'
  }
}

// ---- JSON to LaTeX Table ----

export function jsonToLatexTable(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '% Empty data'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colSpec = columns.map(() => 'l').join(' | ')
  const header = columns.map(c => `\\textbf{${escapeLatex(c)}}`).join(' & ')
  const rows = arr.map(row => {
    return columns.map(c => {
      const v = (row as Record<string, unknown>)[c]
      return escapeLatex(v === null ? '' : String(v))
    }).join(' & ')
  })
  return `\\begin{table}[h]\n\\centering\n\\begin{tabular}{| ${colSpec} |}\n\\hline\n${header} \\\\\n\\hline\n${rows.map(r => r + ' \\\\').join('\n\\hline\n')}\n\\hline\n\\end{tabular}\n\\caption{JSON Data Table}\n\\end{table}`
}

function escapeLatex(s: string): string {
  return s.replace(/\\/g, '\\textbackslash{}').replace(/&/g, '\\&').replace(/%/g, '\\%').replace(/\$/g, '\\$').replace(/#/g, '\\#').replace(/_/g, '\\_').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/~/g, '\\textasciitilde{}').replace(/\^/g, '\\textasciicircum{}')
}

// ---- JSON-LD Generator ----

export function jsonLdGenerator(input: string): string {
  const parsed = JSON.parse(input)
  const context = parsed['@context'] || 'https://schema.org'
  const type = parsed['@type'] || 'Thing'
  const result: Record<string, unknown> = {
    '@context': context,
    '@type': type,
  }
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (k.startsWith('@')) continue
    result[k] = v
  }
  return JSON.stringify(result, null, 2)
}

export function schemaMarkupGenerator(input: string): string {
  const parsed = JSON.parse(input)
  const type = parsed['@type'] || (parsed as Record<string, unknown>).type || 'WebSite'
  const result: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
  }
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (k === 'type') continue
    result[k] = v
  }
  return `<script type="application/ld+json">\n${JSON.stringify(result, null, 2)}\n</script>`
}

export function jsonLdValidator(input: string): string {
  const parsed = JSON.parse(input)
  const issues: string[] = []
  if (!parsed['@context']) issues.push('Missing @context (recommended for JSON-LD)')
  if (!parsed['@type']) issues.push('Missing @type')
  if (parsed['@context'] && typeof parsed['@context'] === 'string' && !parsed['@context'].startsWith('http') && !parsed['@context'].includes('schema.org')) {
    issues.push('@context should be a valid URL or schema.org reference')
  }
  const valid = issues.length === 0
  return JSON.stringify({ valid, issues: issues.length > 0 ? issues : ['Valid JSON-LD structure'] }, null, 2)
}

// ---- JSON to Table / JSON Table Viewer ----

export function jsonToTable(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '<p>No data</p>'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  let html = '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;font-family:sans-serif;">\n'
  html += '  <thead><tr>' + columns.map(c => `<th style="background:#f5f5f5;text-align:left;border:1px solid #ddd;padding:8px;font-weight:600;">${escapeHtml(c)}</th>`).join('') + '</tr></thead>\n'
  html += '  <tbody>\n'
  for (const row of arr) {
    html += '    <tr>' + columns.map(c => `<td style="border:1px solid #ddd;padding:8px;">${escapeHtml(String((row as Record<string, unknown>)[c] ?? ''))}</td>`).join('') + '</tr>\n'
  }
  html += '  </tbody>\n</table>'
  return html
}

export function jsonTableViewer(input: string): string {
  return jsonToTable(input)
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// ---- JSON to Chart (ASCII bar chart) ----

export function jsonToChart(input: string): string {
  const parsed = JSON.parse(input)
  const obj = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : Array.isArray(parsed) ? parsed[0] || {} : {}
  const entries = Object.entries(obj).filter(([, v]) => typeof v === 'number').slice(0, 20)
  if (entries.length === 0) return 'No numeric fields found for charting.\n\nChart data (as JSON):\n' + JSON.stringify(parsed, null, 2)
  const maxVal = Math.max(...entries.map(([, v]) => Math.abs(v as number)))
  const barLen = 40
  const lines = entries.map(([k, v]) => {
    const val = v as number
    const bar = '█'.repeat(Math.max(1, Math.round((Math.abs(val) / maxVal) * barLen)))
    return `${val >= 0 ? ' ' : ''}${String(val).padStart(10)} │ ${bar} ${k}`
  })
  const header = `Values Chart (max: ${maxVal}):\n${' '.repeat(11)}┼${'─'.repeat(barLen + 2)}\n`
  return header + lines.join('\n') + '\n\nRaw Data:\n' + JSON.stringify(parsed, null, 2)
}

// ---- JSON Graph Viewer (ASCII tree) ----

export function jsonGraphViewer(input: string): string {
  const parsed = JSON.parse(input)
  const lines: string[] = ['Graph View:']
  function walk(obj: unknown, prefix = '', isLast = true): void {
    const connector = isLast ? '└── ' : '├── '
    if (typeof obj !== 'object' || obj === null) {
      lines.push(prefix + connector + String(obj))
      return
    }
    if (Array.isArray(obj)) {
      lines.push(prefix + connector + `Array(${obj.length})`)
      obj.forEach((item, i) => walk(item, prefix + (isLast ? '    ' : '│   '), i === obj.length - 1))
      return
    }
    const entries = Object.entries(obj as Record<string, unknown>)
    lines.push(prefix + connector + `Object(${entries.length} keys)`)
    entries.forEach(([k, v], i) => {
      const childPrefix = prefix + (isLast ? '    ' : '│   ')
      if (typeof v === 'object' && v !== null) {
        lines.push(childPrefix + (i === entries.length - 1 ? '└── ' : '├── ') + `${k}:`)
        walk(v, childPrefix, i === entries.length - 1)
      } else {
        lines.push(childPrefix + (i === entries.length - 1 ? '└── ' : '├── ') + `${k}: ${String(v)}`)
      }
    })
  }
  walk(parsed, '', true)
  return lines.join('\n')
}

// ---- JSON Form Generator ----

export function jsonFormGenerator(input: string): string {
  const parsed = JSON.parse(input)
  const fields = typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as Record<string, unknown> : {}
  const formFields = Object.entries(fields).map(([key, val]) => {
    const type = val === null ? 'text' : typeof val === 'boolean' ? 'checkbox' : typeof val === 'number' ? 'number' : 'text'
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())
    return `  <div class="form-group">
    <label for="${key}">${label}:</label>
    <input type="${type}" id="${key}" name="${key}"${type !== 'checkbox' ? ` value="${escapeHtml(String(val ?? ''))}"` : ''}${type === 'checkbox' && val ? ' checked' : ''} class="form-control">
  </div>`
  })
  return `<form>
${formFields.join('\n')}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`
}

// ---- JSON Token Counter ----

export function jsonTokenCounter(input: string): string {
  const text = JSON.stringify(JSON.parse(input))
  const charCount = text.length
  const wordCount = text.split(/[\s,{}[\]":]+/).filter(Boolean).length
  const approxTokens = Math.round(charCount / 4)
  const gptTokens = Math.round(charCount * 0.25) + wordCount * 0.75
  return JSON.stringify({
    characters: charCount,
    words: wordCount,
    estimatedTokens: {
      rough: approxTokens,
      gptBased: Math.round(gptTokens),
    },
    description: 'Token count is approximate. GPT models use ~4 characters per token on average.',
  }, null, 2)
}

// ---- package.json Validator ----

export function packageJsonValidator(input: string): string {
  const parsed = JSON.parse(input)
  const issues: string[] = []
  const warnings: string[] = []
  if (!parsed.name) issues.push('Missing "name" field (required)')
  else if (typeof parsed.name !== 'string') issues.push('"name" must be a string')
  else if (!/^(@[a-z0-9-]+\/)?[a-z0-9-_.]+$/.test(parsed.name)) warnings.push('"name" may not follow npm naming conventions')
  if (!parsed.version) issues.push('Missing "version" field (required)')
  else if (!/^\d+\.\d+\.\d+/.test(parsed.version)) issues.push('"version" must follow semver (e.g. 1.0.0)')
  if (parsed.private && typeof parsed.private !== 'boolean') warnings.push('"private" should be a boolean')
  if (parsed.main && typeof parsed.main !== 'string') warnings.push('"main" should be a string path')
  if (parsed.scripts && typeof parsed.scripts !== 'object') warnings.push('"scripts" should be an object')
  if (parsed.dependencies && typeof parsed.dependencies !== 'object') warnings.push('"dependencies" should be an object')
  if (parsed.devDependencies && typeof parsed.devDependencies !== 'object') warnings.push('"devDependencies" should be an object')
  if (issues.length === 0) issues.push('Valid package.json structure')
  return JSON.stringify({ valid: issues.length <= 1, issues, warnings }, null, 2)
}

// ---- manifest.json Generator ----

export function manifestJsonGenerator(input: string): string {
  const parsed = JSON.parse(input)
  const manifest: Record<string, unknown> = {
    name: parsed.name || 'My App',
    short_name: parsed.short_name || (parsed.name as string) || 'App',
    description: parsed.description || 'My web application',
    start_url: parsed.start_url || '/',
    display: parsed.display || 'standalone',
    background_color: parsed.background_color || '#ffffff',
    theme_color: parsed.theme_color || '#000000',
    icons: parsed.icons || [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
  if (parsed.scope) manifest.scope = parsed.scope
  if (parsed.lang) manifest.lang = parsed.lang
  if (parsed.dir) manifest.dir = parsed.dir
  if (parsed.categories) manifest.categories = parsed.categories
  if (parsed.screenshots) manifest.screenshots = parsed.screenshots
  return JSON.stringify(manifest, null, 2)
}

// ---- tsconfig.json Validator ----

export function tsconfigValidator(input: string): string {
  const parsed = JSON.parse(input)
  const issues: string[] = []
  const warnings: string[] = []
  if (!parsed.compilerOptions) issues.push('Missing "compilerOptions" (recommended)')
  else {
    const co = parsed.compilerOptions as Record<string, unknown>
    if (!co.target) warnings.push('No "target" set (recommended: "ES2020" or later)')
    if (!co.module) warnings.push('No "module" set (recommended: "ESNext" or "commonjs")')
    if (co.strict === undefined) warnings.push('"strict" not enabled (recommended for type safety)')
    if (!co.outDir) warnings.push('No "outDir" set (recommended: "./dist")')
    if (!co.rootDir && !co.rootDirs) warnings.push('No "rootDir" or "rootDirs" set')
  }
  if (!parsed.include && !parsed.files) warnings.push('No "include" or "files" specified')
  if (parsed.exclude && !Array.isArray(parsed.exclude)) issues.push('"exclude" must be an array')
  if (issues.length === 0) issues.push('Valid tsconfig.json structure')
  return JSON.stringify({ valid: issues.length <= 1, issues, warnings }, null, 2)
}

// ---- composer.json Validator ----

export function composerJsonValidator(input: string): string {
  const parsed = JSON.parse(input)
  const issues: string[] = []
  const warnings: string[] = []
  if (!parsed.name) issues.push('Missing "name" field (required for Packagist)')
  else if (typeof parsed.name !== 'string') issues.push('"name" must be a string (vendor/package format)')
  if (!parsed.description) warnings.push('No "description" field')
  if (parsed.require && typeof parsed.require !== 'object') issues.push('"require" must be an object')
  if (parsed.autoload && typeof parsed.autoload !== 'object') issues.push('"autoload" must be an object')
  if (parsed.type && !['library', 'project', 'metapackage', 'composer-plugin'].includes(parsed.type as string)) {
    warnings.push(`Unknown package type: "${parsed.type}"`)
  }
  if (parsed.license && typeof parsed.license !== 'string' && !Array.isArray(parsed.license)) {
    warnings.push('"license" should be a string or array')
  }
  if (issues.length === 0) issues.push('Valid composer.json structure')
  return JSON.stringify({ valid: issues.length <= 1, issues, warnings }, null, 2)
}

// ---- Subtitles (SRT) ----

export function srtToJson(input: string): string {
  const blocks = input.trim().split(/\n\s*\n/).filter(Boolean)
  const subtitles = blocks.map(block => {
    const lines = block.trim().split('\n')
    const index = parseInt(lines[0], 10) || 0
    const timeMatch = lines[1]?.match(/^(\d{2}:\d{2}:\d{2}[.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[.,]\d{3})/)
    if (!timeMatch) throw new Error('Invalid SRT time format')
    const text = lines.slice(2).join('\n')
    return { index, start: timeMatch[1], end: timeMatch[2], text }
  })
  return JSON.stringify(subtitles, null, 2)
}

export function jsonToSrt(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  return arr.map((item: Record<string, unknown>, i: number) => {
    const index = item.index || i + 1
    const start = item.start || '00:00:00,000'
    const end = item.end || '00:00:05,000'
    const text = item.text || ''
    return `${index}\n${start} --> ${end}\n${text}`
  }).join('\n\n')
}

// ---- M3U Playlist ----

export function m3uToJson(input: string): string {
  const lines = input.trim().split('\n').map(l => l.trim()).filter(Boolean)
  const result: Record<string, unknown>[] = []
  let current: Record<string, unknown> = {}
  for (const line of lines) {
    if (line.startsWith('#EXTINF:')) {
      const match = line.match(/#EXTINF:\s*(-?\d+)\s*,?\s*(.*)/)
      if (match) {
        const rest = match[2].trim()
        const lastComma = rest.lastIndexOf(',')
        current = {
          duration: parseInt(match[1]),
          title: lastComma >= 0 ? rest.substring(lastComma + 1).trim() : rest,
        }
      }
    } else if (line.startsWith('#EXT')) {
      continue
    } else if (!line.startsWith('#')) {
      current.path = line
      result.push({ ...current })
      current = {}
    }
  }
  return JSON.stringify(result.length > 0 ? result : { raw: lines }, null, 2)
}

export function jsonToM3u(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const lines = ['#EXTM3U']
  for (const item of arr) {
    const dur = (item as Record<string, unknown>).duration || -1
    const title = (item as Record<string, unknown>).title || 'Unknown'
    const path = (item as Record<string, unknown>).path || (item as Record<string, unknown>).url || ''
    lines.push(`#EXTINF:${dur},${title}`)
    lines.push(String(path))
  }
  return lines.join('\n')
}

// ---- Lottie JSON Viewer ----

export function lottieJsonViewer(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.v && !parsed.layers && !parsed.fr) throw new Error('Invalid Lottie animation JSON')
  const info: Record<string, unknown> = {
    version: parsed.v,
    frames: parsed.op - parsed.ip,
    frameRate: parsed.fr,
    width: parsed.w,
    height: parsed.h,
    totalLayers: parsed.layers?.length || 0,
    layerTypes: [...new Set((parsed.layers || []).map((l: Record<string, unknown>) => l.ty))],
    hasExpressions: (parsed.layers || []).some((l: Record<string, unknown>) => l.ef),
    assetsCount: parsed.assets?.length || 0,
    markersCount: parsed.markers?.length || 0,
    startFrame: parsed.ip,
    endFrame: parsed.op,
  }
  return JSON.stringify(info, null, 2)
}

// ---- KML / GeoJSON ----

export function kmlToGeojson(input: string): string {
  const coordRegex = /<coordinates>([\s\S]*?)<\/coordinates>/g
  let match
  const allCoords: number[][] = []
  while ((match = coordRegex.exec(input)) !== null) {
    const coords = match[1].trim().split(/\s+/).map(p => {
      const parts = p.split(',').map(Number)
      return [parts[0], parts[1]]
    })
    allCoords.push(...coords)
  }
  const hasPoint = /<Point>[\s\S]*?<\/Point>/i.test(input)
  const hasPolygon = /<Polygon>[\s\S]*?<\/Polygon>/i.test(input)
  const hasLine = /<LineString>[\s\S]*?<\/LineString>/i.test(input)
  let geomType = 'LineString'
  let geomCoords: unknown = allCoords
  if (hasPoint) {
    geomType = 'Point'
    geomCoords = allCoords[0] || [0, 0]
  } else if (hasPolygon) {
    geomType = 'Polygon'
    geomCoords = [allCoords]
  }
  const result = {
    type: 'FeatureCollection' as const,
    features: [
      {
        type: 'Feature' as const,
        geometry: {
          type: geomType,
          coordinates: geomCoords,
        },
        properties: {} as Record<string, unknown>,
      },
    ],
  }
  const nameMatch = input.match(/<name>([^<]+)<\/name>/)
  if (nameMatch) result.features[0].properties.name = nameMatch[1]
  const descMatch = input.match(/<description>([^<]+)<\/description>/)
  if (descMatch) result.features[0].properties.description = descMatch[1]
  return JSON.stringify(result, null, 2)
}

export function geojsonToKml(input: string): string {
  const parsed = JSON.parse(input)
  const features = parsed.type === 'FeatureCollection' ? (parsed.features || []) : [parsed]
  const placemarks = features.map((f: Record<string, unknown>) => {
    const props = (f.properties || {}) as Record<string, unknown>
    const geom = f.geometry as Record<string, unknown>
    let coords = ''
    if (geom?.type === 'Point') {
      const c = (geom.coordinates as number[]) || []
      coords = `${c[0]},${c[1]},0`
    } else if (geom?.coordinates) {
      coords = extractKmlCoords(geom.coordinates)
    }
    const name = props.name || 'Feature'
    const desc = props.description || ''
    return `  <Placemark>
    <name>${String(name)}</name>
    <description>${String(desc)}</description>
    <${geom?.type === 'Point' ? 'Point' : 'LineString'}>
      <coordinates>${coords}</coordinates>
    </${geom?.type === 'Point' ? 'Point' : 'LineString'}>
  </Placemark>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
${placemarks.join('\n')}
</Document>
</kml>`
}

function extractKmlCoords(coords: unknown, depth = 0): string {
  if (Array.isArray(coords)) {
    if (coords.length >= 2 && typeof coords[0] === 'number') {
      return `${coords[0]},${coords[1]},0 `
    }
    return coords.map(c => extractKmlCoords(c, depth + 1)).join('')
  }
  return ''
}

// ---- GPX to JSON ----

export function gpxToJson(input: string): string {
  const match = input.match(/<trkseg>([\s\S]*?)<\/trkseg>/)
  if (!match) throw new Error('No track segment found in GPX')
  const trkptRegex = /<trkpt\s+lat="([^"]+)"\s+lon="([^"]+)">[\s\S]*?(?:<ele>([^<]*)<\/ele>)?[\s\S]*?(?:<time>([^<]*)<\/time>)?[\s\S]*?<\/trkpt>/g
  const points: Record<string, unknown>[] = []
  let m
  while ((m = trkptRegex.exec(match[1])) !== null) {
    const point: Record<string, unknown> = { lat: parseFloat(m[1]), lon: parseFloat(m[2]) }
    if (m[3]) point.elevation = parseFloat(m[3])
    if (m[4]) point.time = m[4]
    points.push(point)
  }
  const nameMatch = input.match(/<name>([^<]+)<\/name>/)
  const result: Record<string, unknown> = { type: 'GPXTrack', points }
  if (nameMatch) result.name = nameMatch[1]
  return JSON.stringify(result, null, 2)
}

// ---- iCal / iCalendar ----

export function icalToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const lines = input.split('\n').map(l => l.trim()).filter(Boolean)
  let current: Record<string, unknown> = {}
  const events: Record<string, unknown>[] = []
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') { current = {}; continue }
    if (line === 'END:VEVENT') { events.push({ ...current }); continue }
    const [, key, val] = line.match(/^([^:]+):(.+)/) || []
    if (!key) continue
    const cleanKey = key.replace(/;[^;]+/, '')
    if (line.startsWith('BEGIN:') || line.startsWith('END:')) continue
    if (line.startsWith('DTSTART') || line.startsWith('DTEND') || line.startsWith('DTSTAMP')) {
      current[cleanKey.toLowerCase()] = val
    } else if (cleanKey === 'SUMMARY') current.summary = val
    else if (cleanKey === 'DESCRIPTION') current.description = val
    else if (cleanKey === 'LOCATION') current.location = val
    else if (cleanKey === 'RRULE') current.rrule = val
    else if (cleanKey.startsWith('ATTENDEE')) {
      if (!current.attendees) current.attendees = []
      ;(current.attendees as string[]).push(val)
    } else current[cleanKey] = val
  }
  result.events = events
  return JSON.stringify(result, null, 2)
}

export function jsonToIcal(input: string): string {
  const parsed = JSON.parse(input)
  const events = Array.isArray(parsed) ? parsed : (parsed as Record<string, unknown>).events || [parsed]
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//JSONKits//EN']
  for (const event of events as Record<string, unknown>[]) {
    lines.push('BEGIN:VEVENT')
    const e = event as Record<string, unknown>
    if (e.dtstart) lines.push(`DTSTART:${e.dtstart}`)
    if (e.dtend) lines.push(`DTEND:${e.dtend}`)
    if (e.summary) lines.push(`SUMMARY:${e.summary}`)
    if (e.description) lines.push(`DESCRIPTION:${e.description}`)
    if (e.location) lines.push(`LOCATION:${e.location}`)
    if (e.uid) lines.push(`UID:${e.uid}`)
    if (e.rrule) lines.push(`RRULE:${e.rrule}`)
    const attendees = e.attendees
    if (Array.isArray(attendees)) {
      attendees.forEach((a: string) => lines.push(`ATTENDEE:${a}`))
    }
    lines.push('END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.join('\n')
}

// ---- RSS ----

export function rssToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  const items: Record<string, unknown>[] = []
  let match
  while ((match = itemRegex.exec(input)) !== null) {
    const item: Record<string, unknown> = {}
    const title = match[1].match(/<title(?:[^>]*)>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/title>/)
    if (title) item.title = title[1] ?? title[2]
    const link = match[1].match(/<link(?:[^>]*)>([^<]+)<\/link>/)
    if (link) item.link = link[1]
    const desc = match[1].match(/<description(?:[^>]*)>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/description>/)
    if (desc) item.description = desc[1] ?? desc[2]
    const pubDate = match[1].match(/<pubDate(?:[^>]*)>([^<]+)<\/pubDate>/)
    if (pubDate) item.pubDate = pubDate[1]
    const guid = match[1].match(/<guid(?:[^>]*)>([^<]+)<\/guid>/)
    if (guid) item.guid = guid[1]
    items.push(item)
  }
  const titleMatch = input.match(/<title(?:[^>]*)>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/title>/)
  if (titleMatch) result.title = titleMatch[1] ?? titleMatch[2]
  const descMatch = input.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)
  if (descMatch) result.description = descMatch[1]
  const linkMatch = input.match(/<link>([^<]+)<\/link>/)
  if (linkMatch) result.link = linkMatch[1]
  result.items = items
  result.itemCount = items.length
  return JSON.stringify(result, null, 2)
}

export function jsonToRss(input: string): string {
  const parsed = JSON.parse(input)
  const info = parsed as Record<string, unknown>
  const items = (info.items || (Array.isArray(parsed) ? parsed : [])) as Record<string, unknown>[]
  const channelItems = items.map((item: Record<string, unknown>) => {
    const title = item.title || ''
    const link = item.link || ''
    const description = item.description || ''
    const pubDate = item.pubDate || new Date().toUTCString()
    const guid = item.guid || link
    return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid>${guid}</guid>
    </item>`
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${info.title || 'RSS Feed'}]]></title>
    <link>${info.link || 'https://example.com'}</link>
    <description><![CDATA[${info.description || 'Latest updates'}]]></description>
    <language>${info.language || 'en'}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${channelItems}
  </channel>
</rss>`
}

// ---- Data Science / Engineering ----

export function jsonToPandas(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return 'import pandas as pd\n\ndf = pd.DataFrame()'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colDefs = columns.map(c => `    "${c}": [${arr.map(r => {
    const v = (r as Record<string, unknown>)[c]
    if (v === null) return 'None'
    if (typeof v === 'boolean') return v ? 'True' : 'False'
    if (typeof v === 'number') return String(v)
    return `"${String(v).replace(/"/g, '\\"')}"`
  }).join(', ')}]`).join(',\n')
  return `import pandas as pd\n\ndata = {\n${colDefs}\n}\n\ndf = pd.DataFrame(data)\nprint(df.head())\nprint(df.info())`
}

export function jsonToPysparkSchema(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('Input must be a JSON object')
  const fields = Object.entries(parsed as Record<string, unknown>).map(([k, v]) => {
    const sparkType = getSparkType(v)
    return `    StructField("${k}", ${sparkType}, ${v === null})`
  })
  return `from pyspark.sql.types import *\n\nschema = StructType([\n${fields.join(',\n')}\n])`
}

function getSparkType(value: unknown): string {
  if (value === null) return 'StringType()'
  if (Array.isArray(value)) return 'ArrayType(StringType())'
  switch (typeof value) {
    case 'string': return 'StringType()'
    case 'boolean': return 'BooleanType()'
    case 'number': return Number.isInteger(value) ? 'IntegerType()' : 'DoubleType()'
    case 'object': return 'StructType()'
    default: return 'StringType()'
  }
}

export function jsonToHiveDdl(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty data'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.entries(first).map(([k, v]) => {
    const hiveType = v === null ? 'STRING' : typeof v === 'number' ? (Number.isInteger(v) ? 'BIGINT' : 'DOUBLE') : typeof v === 'boolean' ? 'BOOLEAN' : 'STRING'
    return `  \`${k}\` ${hiveType}`
  })
  return `CREATE TABLE json_data (\n${columns.join(',\n')}\n)\nROW FORMAT SERDE 'org.apache.hive.hcatalog.data.JsonSerDe'\nSTORED AS TEXTFILE\nTBLPROPERTIES ('serialization.format'='1');`
}

export function jsonToDbml(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return 'Table json_data {}'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.entries(first).map(([k, v]) => {
    const dbmlType = v === null ? 'text' : typeof v === 'number' ? (Number.isInteger(v) ? 'integer' : 'decimal') : typeof v === 'boolean' ? 'boolean' : 'text'
    return `  ${k} ${dbmlType}`
  })
  return `Table json_data {\n${columns.join('\n')}\n}`
}

export function jsonToPlantuml(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generatePlantUml(parsed, 'Root', classes)
  if (classes.length === 0) return '@startuml\n\n@enduml'
  return `@startuml\n\n${classes.join('\n\n')}\n\n@enduml`
}

function generatePlantUml(obj: unknown, name: string, classes: string[]): string {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return ''
  const entries = Object.entries(obj as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      const childName = toClassName(key)
      generatePlantUml(val, childName, classes)
      return `  ${key} : ${childName}`
    }
    const type = val === null ? 'string' : typeof val === 'number' ? 'number' : typeof val === 'boolean' ? 'boolean' : 'string'
    return `  ${key} : ${type}`
  })
  classes.push(`class ${name} {\n${fields.join('\n')}\n}`)
  return name
}

// ---- Legacy Code Gen ----

export function jsonToVba(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateVba(parsed, 'Data', classes)
  return `' VBA Class Module\n' Generated by JSONKits\n' Save as Data.cls\n\n'--- Properties ---\n' Add reference to: Microsoft Scripting Runtime\n' Add reference to: Microsoft ActiveX Data Objects\n\nOption Explicit\n\n' Private backing fields\n' (Use Dictionary for nested objects)\n'--- Class Code ---\n\n'--- JSON to VBA Class ---\n\n' Usage:\n' 1. Save this code as a .cls file\n' 2. Import into your VBA project\n' 3. Use JSONConverter.bas to parse JSON\n\n${classes.join('\n\n')}\n`
}

function generateVba(obj: unknown, name: string, classes: string[]): string {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return ''
  const entries = Object.entries(obj as Record<string, unknown>)
  const props = entries.map(([key, val]) => {
    const vbaType = getVbaType(val)
    const capKey = key.charAt(0).toUpperCase() + key.slice(1)
    return `Private p${capKey} As ${vbaType}\n\nPublic Property Get ${capKey}() As ${vbaType}\n    ${capKey} = p${capKey}\nEnd Property\n\nPublic Property Let ${capKey}(ByVal v As ${vbaType})\n    p${capKey} = v\nEnd Property`
  })
  classes.push(`'--- ${name} ---\n'Auto-generated VBA class\n\nOption Explicit\n\n${props.join('\n\n')}`)
  return name
}

function getVbaType(value: unknown): string {
  if (value === null) return 'Variant'
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Long' : 'Double'
    case 'object': return 'Object'
    default: return 'Variant'
  }
}

export function jsonToDelphi(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateDelphi(parsed, 'TData', classes)
  return `// Delphi Class Definitions\n// Generated by JSONKits\n\n{$M+}\n\nuses\n  System.JSON, System.Generics.Collections;\n\n${classes.join('\n\n')}\n`
}

function generateDelphi(obj: unknown, name: string, classes: string[]): string {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return ''
  const entries = Object.entries(obj as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    const delphiType = getDelphiType(val, key, classes)
    return `    F${key}: ${delphiType};`
  })
  const props = entries.map(([key, val]) => {
    const delphiType = getDelphiType(val, key, classes)
    const capKey = key.charAt(0).toUpperCase() + key.slice(1)
    return `    property ${capKey}: ${delphiType} read F${key} write F${key};`
  })
  classes.push(`${name} = class(TPersistent)\n  private\n${fields.join('\n')}\n  published\n${props.join('\n')}\n  end;`)
  return name
}

function getDelphiType(value: unknown, key: string, classes: string[]): string {
  if (value === null) return 'Variant'
  if (Array.isArray(value)) return 'TArray<Variant>'
  switch (typeof value) {
    case 'string': return 'string'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Integer' : 'Double'
    case 'object': {
      const cn = 'T' + toClassName(key)
      generateDelphi(value, cn, classes)
      return cn
    }
    default: return 'Variant'
  }
}

// ---- JWK / PEM ----

export function jwkToPem(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.kty) throw new Error('Invalid JWK: missing kty')
  const jwk = parsed as Record<string, string>
  const lines = [
    '-----BEGIN PUBLIC KEY-----',
    `Key Type: ${jwk.kty}`,
    `Algorithm: ${jwk.alg || 'N/A'}`,
    `Key ID: ${jwk.kid || 'N/A'}`,
    `Curve/Modulus: ${jwk.crv || jwk.n?.substring(0, 40) + '...' || 'N/A'}`,
    '',
    'Note: Full PEM conversion requires a Web Crypto API operation.',
    'The JWK metadata is extracted below. For actual PEM conversion,',
    'use the Web Crypto API with your specific key type.',
    '',
    'JWK Metadata:',
    JSON.stringify({
      kty: jwk.kty,
      alg: jwk.alg || null,
      kid: jwk.kid || null,
      use: jwk.use || null,
      crv: jwk.crv || null,
      keyOps: jwk.key_ops || null,
    }, null, 2),
    '-----END PUBLIC KEY-----',
  ]
  return lines.join('\n')
}

export function pemToJwk(input: string): string {
  const lines = input.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('-----'))
  const meta: Record<string, unknown> = {
    kty: 'RSA',
    alg: 'RS256',
    use: 'sig',
    note: 'Extracted from PEM header metadata. For full JWK conversion, parse the Base64 DER data.',
  }
  for (const line of lines) {
    const [k, ...v] = line.split(':')
    if (k && v.length) meta[k.trim().toLowerCase().replace(/\s+/g, '_')] = v.join(':').trim()
  }
  return JSON.stringify(meta, null, 2)
}

// ---- Sitemap ----

export function jsonToSitemap(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const urls = arr.map((item: Record<string, unknown>) => {
    const loc = item.loc || item.url || item.path || '/'
    const lastmod = item.lastmod || item.lastModified || new Date().toISOString().split('T')[0]
    const changefreq = item.changefreq || item.changeFrequency || 'weekly'
    const priority = item.priority || '0.8'
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export function sitemapToJson(input: string): string {
  const urlRegex = /<url>([\s\S]*?)<\/url>/g
  const urls: Record<string, unknown>[] = []
  let match
  while ((match = urlRegex.exec(input)) !== null) {
    const item: Record<string, unknown> = {}
    const loc = match[1].match(/<loc>([^<]+)<\/loc>/)
    if (loc) item.loc = loc[1]
    const lastmod = match[1].match(/<lastmod>([^<]+)<\/lastmod>/)
    if (lastmod) item.lastmod = lastmod[1]
    const changefreq = match[1].match(/<changefreq>([^<]+)<\/changefreq>/)
    if (changefreq) item.changefreq = changefreq[1]
    const priority = match[1].match(/<priority>([^<]+)<\/priority>/)
    if (priority) item.priority = parseFloat(priority[1])
    urls.push(item)
  }
  return JSON.stringify(urls, null, 2)
}

// ---- POJO (Java Plain Old Java Object) ----

export function jsonToPojo(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generatePojo(parsed, 'RootObject', classes)
  if (classes.length === 0) {
    return `public class RootObject {\n    // root value type: ${typeof parsed}\n}`
  }
  return `import java.util.List;\nimport com.fasterxml.jackson.annotation.JsonIgnoreProperties;\nimport com.fasterxml.jackson.annotation.JsonProperty;\n\n${classes.join('\n\n')}\n`
}

function generatePojo(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List<Object>'
    return `List<${getPojoType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getPojoType(value, key, classes)
      return `    @JsonProperty("${key}")\n    private ${type} ${key};`
    })
    const gettersSetters = entries.map(([key]) => {
      const capKey = key.charAt(0).toUpperCase() + key.slice(1)
      const entry = obj as Record<string, unknown>
      const type = getPojoType(entry[key], key, classes)
      return `    public ${type} get${capKey}() { return ${key}; }\n\n    public void set${capKey}(${type} ${key}) { this.${key} = ${key}; }`
    })
    classes.push(`@JsonIgnoreProperties(ignoreUnknown = true)\npublic class ${name} {\n${fields.join('\n\n')}\n\n${gettersSetters.join('\n\n')}\n}`)
    return name
  }
  return getPojoType(obj, name, classes)
}

function getPojoType(value: unknown, key: string, classes: string[]): string {
  if (value === null) return 'Object'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<Object>'
    return `List<${getPojoType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'boolean'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': return generatePojo(value, toClassName(key), classes)
    default: return 'Object'
  }
}

// ============================================================
// Batch 3: Remaining Tools from TODO
// ============================================================

// ---- PO / Gettext ----

export function poToJson(input: string): string {
  const result: Record<string, string> = {}
  const lines = input.split('\n')
  let currentId = ''
  let currentStr = ''
  let hasEntry = false
  const flush = () => {
    if (hasEntry && currentId !== '') result[currentId] = currentStr
    hasEntry = false
  }
  for (const line of lines) {
    const idMatch = line.match(/^msgid\s+"((?:[^"\\]|\\.)*)"/)
    if (idMatch) {
      flush()
      currentId = idMatch[1]
      currentStr = ''
      hasEntry = true
      continue
    }
    const strMatch = line.match(/^msgstr\s+"((?:[^"\\]|\\.)*)"/)
    if (strMatch) { currentStr = strMatch[1]; continue }
    const contMatch = line.match(/^"((?:[^"\\]|\\.)*)"/)
    if (contMatch) currentStr += contMatch[1]
  }
  flush()
  return JSON.stringify(result, null, 2)
}

export function jsonToPo(input: string): string {
  const parsed = JSON.parse(input)
  const entries = Object.entries(parsed as Record<string, string>)
  const header = '# JSONKits PO Export\n#\nmsgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"\n'
  const messages = entries.map(([id, str]) => {
    const escapedId = id.replace(/"/g, '\\"')
    const escapedStr = (str || '').replace(/"/g, '\\"')
    return `\nmsgid "${escapedId}"\nmsgstr "${escapedStr}"\n`
  })
  return header + messages.join('')
}

// ---- XLIFF ----

export function xliffToJson(input: string): string {
  const result: Record<string, string> = {}
  const transRegex = /<trans-unit[^>]*id="([^"]+)"[^>]*>[\s\S]*?<target[^>]*>([\s\S]*?)<\/target>/g
  let match
  while ((match = transRegex.exec(input)) !== null) {
    result[match[1]] = match[2].trim()
  }
  return JSON.stringify(result, null, 2)
}

// ---- ARB (Flutter) ----

export function arbToJson(input: string): string {
  const parsed = JSON.parse(input)
  const result: Record<string, string> = {}
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (k.startsWith('@')) continue
    result[k] = String(v)
  }
  return JSON.stringify(result, null, 2)
}

// ---- iOS .strings ----

export function jsonToIosStrings(input: string): string {
  const parsed = JSON.parse(input)
  const entries = Object.entries(parsed as Record<string, string>)
  return entries.map(([k, v]) => `"${k}" = "${(v || '').replace(/"/g, '\\"')}";`).join('\n')
}

// ---- Android strings.xml ----

export function stringsXmlToJson(input: string): string {
  const result: Record<string, string> = {}
  const stringRegex = /<string\s+name="([^"]+)"[^>]*>([\s\S]*?)<\/string>/g
  let match
  while ((match = stringRegex.exec(input)) !== null) {
    result[match[1]] = match[2].trim()
  }
  return JSON.stringify(result, null, 2)
}

// ---- vCard ----

export function vcardToJson(input: string): string {
  const lines = input.split('\n').map(l => l.trim()).filter(Boolean)
  const result: Record<string, unknown> = {}
  let currentGroup = ''
  for (const line of lines) {
    if (line === 'BEGIN:VCARD') { currentGroup = ''; continue }
    if (line === 'END:VCARD') continue
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).split(';')[0]
    const value = line.slice(colonIdx + 1)
    const knownKeys: Record<string, string> = {
      FN: 'fullName', N: 'name', TEL: 'phone', EMAIL: 'email',
      ADR: 'address', ORG: 'organization', TITLE: 'title',
      URL: 'url', PHOTO: 'photo', NOTE: 'note', VERSION: 'version',
      BDAY: 'birthday', CATEGORIES: 'categories',
    }
    const propName = knownKeys[key] || key.toLowerCase()
    if (result[propName]) {
      if (!Array.isArray(result[propName])) result[propName] = [result[propName]]
      ;(result[propName] as string[]).push(value)
    } else {
      result[propName] = value
    }
  }
  return JSON.stringify(result, null, 2)
}

export function jsonToVcard(input: string): string {
  const parsed = JSON.parse(input) as Record<string, unknown>
  const lines = ['BEGIN:VCARD', 'VERSION:3.0']
  const fieldMap: Record<string, string> = {
    fullName: 'FN', name: 'N', phone: 'TEL', email: 'EMAIL',
    address: 'ADR', organization: 'ORG', title: 'TITLE',
    url: 'URL', note: 'NOTE', birthday: 'BDAY',
  }
  for (const [key, val] of Object.entries(parsed)) {
    const vcardKey = fieldMap[key] || key.toUpperCase()
    if (Array.isArray(val)) {
      val.forEach(v => lines.push(`${vcardKey}:${v}`))
    } else {
      lines.push(`${vcardKey}:${String(val)}`)
    }
  }
  lines.push('END:VCARD')
  return lines.join('\n')
}

// ---- JSON Resume Builder ----

export function jsonResumeBuilder(input: string): string {
  const parsed = JSON.parse(input)
  const template = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: (parsed as Record<string, unknown>).name || 'Your Name',
      label: (parsed as Record<string, unknown>).label || 'Job Title',
      email: (parsed as Record<string, unknown>).email || '',
      phone: (parsed as Record<string, unknown>).phone || '',
      url: (parsed as Record<string, unknown>).url || '',
      summary: (parsed as Record<string, unknown>).summary || '',
      location: (parsed as Record<string, unknown>).location || { city: '', countryCode: '' },
      profiles: (parsed as Record<string, unknown>).profiles || [],
    },
    work: (parsed as Record<string, unknown>).work || [],
    education: (parsed as Record<string, unknown>).education || [],
    skills: (parsed as Record<string, unknown>).skills || [],
    projects: (parsed as Record<string, unknown>).projects || [],
    languages: (parsed as Record<string, unknown>).languages || [],
    interests: (parsed as Record<string, unknown>).interests || [],
  }
  const merged = { ...template, ...parsed }
  return JSON.stringify(merged, null, 2)
}

// ---- HTML Bookmarks ----

export function bookmarksToJson(input: string): string {
  const result: Record<string, unknown>[] = []
  const linkRegex = /<a[^>]*?href\s*=\s*"([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi
  let match
  while ((match = linkRegex.exec(input)) !== null) {
    result.push({ url: match[1], title: match[2].trim(), source: 'bookmarks' })
  }
  return JSON.stringify(result, null, 2)
}

// ---- Laravel Migration ----

export function jsonToLaravelMigration(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '// Empty data'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.entries(first).map(([k, v]) => {
    const type = v === null ? 'text' : typeof v === 'number' ? (Number.isInteger(v) ? 'integer' : 'float') : typeof v === 'boolean' ? 'boolean' : 'string'
    return `            $table->${type}('${k}')${v === null ? '->nullable()' : ''};`
  })
  return `<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('table_name', function (Blueprint $table) {\n            $table->id();\n${columns.join('\n')}\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('table_name');\n    }\n};`
}

// ---- Django Model ----

export function jsonToDjangoModel(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '# Empty data'
  const first = arr[0] as Record<string, unknown>
  const fields = Object.entries(first).map(([k, v]) => {
    const fieldType = v === null ? 'TextField' : typeof v === 'number' ? (Number.isInteger(v) ? 'IntegerField' : 'FloatField') : typeof v === 'boolean' ? 'BooleanField' : 'TextField'
    const opts = v === null ? '(blank=True, null=True)' : '()'
    return `    ${k} = models.${fieldType}${opts}`
  })
  return `from django.db import models\n\n\nclass DataModel(models.Model):\n${fields.join('\n')}\n\n    def __str__(self):\n        return str(self.id)\n`
}

// ---- Rails Migration ----

export function jsonToRailsMigration(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '# Empty data'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.entries(first).map(([k, v]) => {
    const type = v === null ? 'text' : typeof v === 'number' ? (Number.isInteger(v) ? 'integer' : 'float') : typeof v === 'boolean' ? 'boolean' : 'string'
    const opts = v === null ? ', null: true' : ''
    return `      t.${type} :${k}${opts}`
  })
  const now = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14)
  return `class CreateDataModel < ActiveRecord::Migration[7.1]\n  def change\n    create_table :data_models do |t|\n${columns.join('\n')}\n      t.timestamps\n    end\n  end\nend`
}

// ---- Spring Entity ----

export function jsonToSpringEntity(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('Input must be a JSON object')
  const fields = Object.entries(parsed as Record<string, unknown>).map(([k, v]) => {
    const javaType = v === null ? 'String' : typeof v === 'number' ? (Number.isInteger(v) ? 'Long' : 'Double') : typeof v === 'boolean' ? 'Boolean' : 'String'
    const capKey = k.charAt(0).toUpperCase() + k.slice(1)
    return `    @Column(name = "${k}")\n    private ${javaType} ${k};\n\n    public ${javaType} get${capKey}() { return ${k}; }\n\n    public void set${capKey}(${javaType} ${k}) { this.${k} = ${k}; }`
  })
  return `package com.example.model;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = "data_entity")\npublic class DataEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n${fields.join('\n\n')}\n}`
}

// ---- Valibot Schema ----

export function jsonToValibot(input: string): string {
  const parsed = JSON.parse(input)
  return generateValibot(parsed, 0)
}

function generateValibot(value: unknown, depth: number): string {
  const indent = '  '.repeat(depth)
  if (value === null) return `${indent}v.nullable(v.string())`
  if (Array.isArray(value)) {
    if (value.length === 0) return `${indent}v.array(v.any())`
    const itemType = [...new Set(value.map(v => generateValibot(v, depth + 1).trim()))]
    return `${indent}v.array(${itemType[0] || 'v.any()'})`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    const fields = entries.map(([key, val]) => {
      const fieldSchema = generateValibot(val, depth + 2).trim()
      const isOptional = val === null || val === undefined
      return `${indent}  ${key}: ${isOptional ? `v.optional(${fieldSchema})` : fieldSchema}`
    })
    return `v.object({\n${fields.join(',\n')},\n${indent}})`
  }
  switch (typeof value) {
    case 'string': return `${indent}v.string()`
    case 'number': return `${indent}v.number()`
    case 'boolean': return `${indent}v.boolean()`
    default: return `${indent}v.any()`
  }
}

// ---- io-ts ----

export function jsonToIoTs(input: string): string {
  const parsed = JSON.parse(input)
  return generateIoTs(parsed, 'DataType', 0)
}

function generateIoTs(value: unknown, name: string, depth: number): string {
  const indent = '  '.repeat(depth)
  if (value === null) return `${indent}t.nullable(t.string)`
  if (Array.isArray(value)) {
    if (value.length === 0) return `${indent}t.array(t.unknown)`
    const itemType = [...new Set(value.map(v => generateIoTs(v, name, depth).trim()))]
    return `${indent}t.array(${itemType[0] || 't.unknown'})`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    const fields = entries.map(([key, val]) => {
      const fieldSchema = generateIoTs(val, toClassName(key), depth + 1).trim()
      return `    ${key}: ${fieldSchema}`
    })
    return `t.type({\n${fields.join(',\n')}\n${indent}})`
  }
  switch (typeof value) {
    case 'string': return `t.string`
    case 'number': return `t.number`
    case 'boolean': return `t.boolean`
    default: return `t.unknown`
  }
}

// ---- JSON Log Viewer ----

export function jsonLogViewer(input: string): string {
  const lines = input.trim().split('\n').filter(Boolean)
  const parsed = lines.map((line, i) => {
    try { return JSON.parse(line) }
    catch { return { _raw: line, _error: 'Invalid JSON', _line: i + 1 } }
  })
  const result = parsed.map((entry, i) => {
    const rec = entry as Record<string, unknown>
    const timestamp = rec.timestamp || rec.time || rec.ts || rec['@timestamp'] || rec.date || ''
    const level = (rec.level || rec.severity || rec.lvl || '').toString().toUpperCase()
    const message = rec.message || rec.msg || rec.log || rec.text || rec.event || ''
    const logger = rec.logger || rec.name || rec.source || rec.service || ''
    return { index: i + 1, timestamp, level, message, logger, raw: rec }
  })
  return JSON.stringify(result, null, 2)
}

// ---- JSON Timestamp Converter ----

export function jsonTimestampConverter(input: string): string {
  const parsed = JSON.parse(input)
  const convertTimestamps = (obj: unknown): unknown => {
    if (typeof obj === 'number' && Number.isFinite(obj)) {
      const len = String(Math.floor(obj)).length
      if (len >= 10 && len <= 16) {
        const ms = len === 10 ? obj * 1000 : obj
        try {
          const d = new Date(ms)
          if (!isNaN(d.getTime())) {
            return {
              _original: obj,
              _asDate: d.toISOString(),
              _asLocale: d.toLocaleString(),
              _asUnixSeconds: Math.floor(d.getTime() / 1000),
              _asUnixMs: d.getTime(),
            }
          }
        } catch { /* ignore */ }
      }
    }
    if (typeof obj === 'string') {
      const num = Number(obj)
      if (!isNaN(num) && obj.length >= 10 && obj.length <= 16) {
        const ms = obj.length === 10 ? num * 1000 : num
        try {
          const d = new Date(ms)
          if (!isNaN(d.getTime())) {
            return {
              _original: obj,
              _asDate: d.toISOString(),
              _asLocale: d.toLocaleString(),
              _asUnixSeconds: Math.floor(d.getTime() / 1000),
              _asUnixMs: d.getTime(),
            }
          }
        } catch { /* ignore */ }
      }
      const isoMatch = obj.match(/^(\d{4})-(\d{2})-(\d{2})T/)
      if (isoMatch) {
        const d = new Date(obj)
        if (!isNaN(d.getTime())) {
          return {
            _original: obj,
            _asUnixSeconds: Math.floor(d.getTime() / 1000),
            _asUnixMs: d.getTime(),
            _asLocale: d.toLocaleString(),
          }
        }
      }
    }
    if (Array.isArray(obj)) return obj.map(convertTimestamps)
    if (typeof obj === 'object' && obj !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) result[k] = convertTimestamps(v)
      return result
    }
    return obj
  }
  return JSON.stringify(convertTimestamps(parsed), null, 2)
}

// ---- JSON Obfuscator ----

export function jsonObfuscator(input: string): string {
  const parsed = JSON.parse(input)
  const seen = new Map<string, string>()
  let counter = 0

  function obfuscate(obj: unknown): unknown {
    if (typeof obj === 'string') {
      if (obj.length > 3 && /^[a-zA-Z]/.test(obj)) {
        if (!seen.has(obj)) seen.set(obj, `value_${counter++}`)
        return seen.get(obj)!
      }
      return obj
    }
    if (typeof obj === 'number') return Math.round(obj * 100) / 100
    if (typeof obj === 'boolean') return obj
    if (Array.isArray(obj)) return obj.map(obfuscate)
    if (typeof obj === 'object' && obj !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        const obKey = k.length > 2 ? `field_${counter++}` : k
        result[obKey] = obfuscate(v)
      }
      return result
    }
    return obj
  }

  const obfuscated = obfuscate(parsed)
  return JSON.stringify({ original: parsed, obfuscated, mapping: Object.fromEntries(seen) }, null, 2)
}

// ---- JSON Feed Validator ----

export function jsonFeedValidator(input: string): string {
  const parsed = JSON.parse(input)
  const issues: string[] = []
  const warnings: string[] = []
  if (!parsed.version) issues.push('Missing "version" (required: "https://jsonfeed.org/version/1.1")')
  if (!parsed.title) issues.push('Missing "title" (required)')
  if (!parsed.items || !Array.isArray(parsed.items)) issues.push('Missing "items" array (required)')
  else {
    parsed.items.forEach((item: Record<string, unknown>, i: number) => {
      if (!item.id && !item.url) warnings.push(`Item ${i}: missing both "id" and "url"`)
      if (!item.content_text && !item.content_html) warnings.push(`Item ${i}: no content_text or content_html`)
    })
  }
  if (parsed.version && !parsed.version.startsWith('https://jsonfeed.org/version/')) {
    warnings.push('"version" should be a JSON Feed version URL')
  }
  if (parsed.feed_url && typeof parsed.feed_url !== 'string') issues.push('"feed_url" must be a string')
  if (parsed.home_page_url && typeof parsed.home_page_url !== 'string') issues.push('"home_page_url" must be a string')
  if (issues.length === 0) issues.push('Valid JSON Feed structure')
  return JSON.stringify({ valid: issues.length === 0 || (issues.length === 1 && issues[0].includes('Valid')), issues, warnings, itemCount: (parsed.items || []).length }, null, 2)
}

// ---- Insomnia Export ----

export function jsonToInsomnia(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const resources = arr.map((item: Record<string, unknown>, i: number) => ({
    _type: 'request',
    _id: `req_${i}`,
    parentId: '__WORKSPACE_ID__',
    name: item.name || item.title || `Request ${i + 1}`,
    url: String(item.url || item.path || 'https://example.com/api'),
    method: String(item.method || 'GET').toUpperCase(),
    headers: (item.headers as Record<string, unknown>[]) || [],
    body: item.body ? { mimeType: 'application/json', text: JSON.stringify(item.body) } : undefined,
  }))
  return JSON.stringify({ _type: 'export', __export_format: 4, resources }, null, 2)
}

// ---- WKT to GeoJSON ----

export function wktToGeojson(input: string): string {
  const cleaned = input.trim().replace(/\s+/g, ' ')
  const pointMatch = cleaned.match(/^POINT\s*\(([\d.\-]+)\s+([\d.\-]+)\)$/i)
  if (pointMatch) {
    return JSON.stringify({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [parseFloat(pointMatch[1]), parseFloat(pointMatch[2])] }, properties: {} }] }, null, 2)
  }
  const lineMatch = cleaned.match(/^LINESTRING\s*\(([\d.\-,\s]+)\)$/i)
  if (lineMatch) {
    const coords = lineMatch[1].split(',').map(p => {
      const [x, y] = p.trim().split(/\s+/).map(Number)
      return [x, y]
    })
    return JSON.stringify({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} }] }, null, 2)
  }
  const polyMatch = cleaned.match(/^POLYGON\s*\(\(([\d.\-,\s]+)\)\)$/i)
  if (polyMatch) {
    const coords = [polyMatch[1].split(',').map(p => { const [x, y] = p.trim().split(/\s+/).map(Number); return [x, y] })]
    return JSON.stringify({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Polygon', coordinates: coords }, properties: {} }] }, null, 2)
  }
  throw new Error('Unsupported WKT geometry type. Supported: POINT, LINESTRING, POLYGON')
}

// ---- TopoJSON to GeoJSON ----

export function topojsonToGeojson(input: string): string {
  const parsed = JSON.parse(input)
  if (!parsed.type || parsed.type !== 'Topology') throw new Error('Invalid TopoJSON: must be a Topology object')
  if (!parsed.objects || !parsed.arcs) throw new Error('Invalid TopoJSON: missing objects or arcs')
  const features: Record<string, unknown>[] = []
  for (const [name, geom] of Object.entries(parsed.objects as Record<string, unknown>)) {
    const g = geom as Record<string, unknown>
    if (g.type === 'GeometryCollection' && Array.isArray(g.geometries)) {
      g.geometries.forEach((sub: Record<string, unknown>) => {
        features.push({ type: 'Feature', geometry: { type: sub.type, coordinates: sub.coordinates || [] }, properties: { ...(sub.properties as Record<string, unknown> || {}), _topoObject: name } })
      })
    } else {
      features.push({ type: 'Feature', geometry: { type: g.type, coordinates: g.coordinates || [] }, properties: { ...(g.properties as Record<string, unknown> || {}), _topoObject: name } })
    }
  }
  return JSON.stringify({ type: 'FeatureCollection', features }, null, 2)
}
