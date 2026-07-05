function parseNum(val: string): unknown {
  if (val.toLowerCase() === 'true') return true
  if (val.toLowerCase() === 'false') return false
  if (val.toLowerCase() === 'null' || val === '') return null
  const n = Number(val)
  if (!isNaN(n) && val !== '') return n
  return val
}

function flattenObj(obj: unknown, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {}
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => Object.assign(result, flattenObj(v, `${prefix}[${i}]`)))
    } else {
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        const key = prefix ? `${prefix}[${k}]` : k
        if (typeof v === 'object' && v !== null) Object.assign(result, flattenObj(v, key))
        else result[key] = String(v ?? '')
      }
    }
  } else {
    result[prefix] = String(obj ?? '')
  }
  return result
}

export function jsonToBase64(input: string): string {
  const parsed = JSON.parse(input)
  return Buffer.from(JSON.stringify(parsed)).toString('base64')
}

export function base64ToJson(input: string): string {
  const decoded = Buffer.from(input, 'base64').toString('utf-8')
  const parsed = JSON.parse(decoded)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToUrlEncoded(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const flat = flattenObj(parsed)
  return Object.entries(flat).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')
}

export function urlEncodedToJson(input: string): string {
  const result: Record<string, unknown> = {}
  for (const pair of input.split('&')) {
    if (!pair.trim()) continue
    const [rawKey, rawVal] = pair.split('=')
    const key = decodeURIComponent(rawKey)
    const val = decodeURIComponent(rawVal ?? '')
    const keyMatch = key.match(/^(\w+)\[(\d+)\]$/)
    if (keyMatch) {
      const [, objKey, idx] = keyMatch
      if (!result[objKey] || !Array.isArray(result[objKey])) result[objKey] = []
      ;(result[objKey] as unknown[])[Number(idx)] = parseNum(val)
    } else {
      result[key] = parseNum(val)
    }
  }
  return JSON.stringify(result, null, 2)
}

export function jsonToHex(input: string): string {
  const parsed = JSON.parse(input)
  return Buffer.from(JSON.stringify(parsed)).toString('hex')
}

export function hexToJson(input: string): string {
  const decoded = Buffer.from(input, 'hex').toString('utf-8')
  const parsed = JSON.parse(decoded)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToUnicodeEscape(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed)
  let result = ''
  for (const ch of json) {
    if (ch.charCodeAt(0) > 127 || ch === '\\') {
      result += '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0')
    } else {
      result += ch
    }
  }
  return result
}

export function unicodeEscapeToJson(input: string): string {
  const decoded = input.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
  const parsed = JSON.parse(decoded)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToUrlParams(input: string): string {
  return jsonToUrlEncoded(input)
}

export function urlParamsToJson(input: string): string {
  return urlEncodedToJson(input)
}

export function jsonToQueryString(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const flat = flattenObj(parsed)
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(flat)) params.append(k, v)
  return params.toString()
}

export function queryStringToJson(input: string): string {
  const params = new URLSearchParams(input)
  const result: Record<string, unknown> = {}
  for (const [key, value] of params.entries()) {
    const keyMatch = key.match(/^(\w+)\[(\d+)\]$/)
    if (keyMatch) {
      const [, objKey, idx] = keyMatch
      if (!result[objKey] || !Array.isArray(result[objKey])) result[objKey] = []
      ;(result[objKey] as unknown[])[Number(idx)] = parseNum(value)
    } else if (result[key] !== undefined) {
      if (!Array.isArray(result[key])) result[key] = [result[key]]
      ;(result[key] as unknown[]).push(parseNum(value))
    } else {
      result[key] = parseNum(value)
    }
  }
  return JSON.stringify(result, null, 2)
}

export function jsonToFormData(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const flat = flattenObj(parsed)
  const fd = new URLSearchParams()
  for (const [k, v] of Object.entries(flat)) fd.append(k, v)
  return fd.toString()
}

export function formDataToJson(input: string): string {
  return queryStringToJson(input)
}

export function jsonToJsonp(input: string, callback = 'callback'): string {
  const parsed = JSON.parse(input)
  return `${callback}(${JSON.stringify(parsed, null, 2)});`
}

export function jsonpToJson(input: string): string {
  const match = input.match(/^\w+\(([\s\S]*)\);?\s*$/)
  if (!match) throw new Error('Invalid JSONP format')
  const parsed = JSON.parse(match[1])
  return JSON.stringify(parsed, null, 2)
}

export function jsonToJsObject(input: string): string {
  const parsed = JSON.parse(input)
  return jsObjStringify(parsed, 0)
}

function jsObjStringify(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  const innerPad = '  '.repeat(indent + 1)
  if (value === null) return 'null'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map(v => innerPad + jsObjStringify(v, indent + 1))
    return '[\n' + items.join(',\n') + '\n' + pad + ']'
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    const items = entries.map(([k, v]) => `${innerPad}${k}: ${jsObjStringify(v, indent + 1)}`)
    return '{\n' + items.join(',\n') + '\n' + pad + '}'
  }
  return 'null'
}

export function jsObjectToJson(input: string): string {
  const normalized = input
    .replace(/(\w+):/g, '"$1":')
    .replace(/'/g, '"')
    .replace(/(\d+),(\s*[\]}])/g, '$1$2')
  const parsed = JSON.parse(normalized)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToEnv(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const flat = flattenObj(parsed)
  return Object.entries(flat)
    .map(([k, v]) => `${k.toUpperCase().replace(/[^a-zA-Z0-9_]/g, '_')}=${v}`)
    .join('\n')
}

export function envToJson(input: string): string {
  const result: Record<string, unknown> = {}
  for (const line of input.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const value = trimmed.slice(eqIdx + 1).trim()
    const parts = key.toLowerCase().split('_')
    let current = result
    for (let i = 0; i < parts.length; i++) {
      if (i === parts.length - 1) {
        current[parts[i]] = parseNum(value.replace(/^["']|["']$/g, ''))
      } else {
        if (!current[parts[i]] || typeof current[parts[i]] !== 'object') current[parts[i]] = {}
        current = current[parts[i]] as Record<string, unknown>
      }
    }
  }
  return JSON.stringify(result, null, 2)
}

export function jsonToSqlInsert(input: string, tableName = 'data'): string {
  const parsed = JSON.parse(input)
  const rows = Array.isArray(parsed) ? parsed : [parsed]
  if (rows.length === 0) return `-- No data`
  const keys = Object.keys(rows[0] as Record<string, unknown>)
  const escapeVal = (v: unknown): string => {
    if (v === null || v === undefined) return 'NULL'
    if (typeof v === 'string') return `'${v.replace(/'/g, "''")}'`
    if (typeof v === 'boolean') return v ? '1' : '0'
    if (typeof v === 'number') return String(v)
    return `'${JSON.stringify(v).replace(/'/g, "''")}'`
  }
  const cols = keys.map(k => `"${k}"`).join(', ')
  const vals = rows.map(row => {
    return '(' + keys.map(k => escapeVal((row as Record<string, unknown>)[k])).join(', ') + ')'
  }).join(',\n')
  return `CREATE TABLE IF NOT EXISTS "${tableName}" (\n  ${keys.map(k => `"${k}" TEXT`).join(',\n  ')}\n);\n\nINSERT INTO "${tableName}" (${cols}) VALUES\n${vals};`
}

export function sqlToJson(input: string): string {
  const insertMatch = input.match(/INSERT\s+INTO\s+\S+\s*\(([^)]+)\)\s*VALUES\s*\(([\s\S;]+?)\)\s*;/i)
  if (!insertMatch) throw new Error('Could not parse INSERT statement')
  const headers = insertMatch[1].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  const valBlocks = insertMatch[2].split(/\),\s*\(/).map(b => b.replace(/^\(|\)$/g, ''))
  const result: Record<string, unknown>[] = []
  for (const block of valBlocks) {
    const vals = parseSqlValues(block)
    const row: Record<string, unknown> = {}
    headers.forEach((h, i) => { row[h] = vals[i] ?? null })
    result.push(row)
  }
  return JSON.stringify(result, null, 2)
}

function parseSqlValues(block: string): unknown[] {
  const vals: unknown[] = []
  let current = ''
  let inStr = false
  let strChar = ''
  for (let i = 0; i < block.length; i++) {
    const ch = block[i]
    if (inStr) {
      if (ch === strChar && block[i + 1] === strChar) { current += ch; i++ }
      else if (ch === strChar) { inStr = false; vals.push(current); current = '' }
      else current += ch
    } else if (ch === "'" || ch === '"') { inStr = true; strChar = ch; current = '' }
    else if (ch === ',') { if (current.trim()) vals.push(parseNum(current.trim())); current = '' }
    else current += ch
  }
  if (current.trim()) vals.push(parseNum(current.trim()))
  return vals
}

export function jsonToMongodb(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, 2).replace(/"(\w+)"/g, '$1').replace(/"/g, "'")
}

export function mongodbToJson(input: string): string {
  const normalized = input
    .replace(/'/g, '"')
    .replace(/(\w+):/g, '"$1":')
    .replace(/ObjectId\("([^"]+)"\)/g, '"$1"')
    .replace(/ISODate\("([^"]+)"\)/g, '"$1"')
    .replace(/NumberLong\((\d+)\)/g, '$1')
    .replace(/NumberInt\((\d+)\)/g, '$1')
  const parsed = JSON.parse(normalized)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToCurl(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed)
  return `curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d '${json.replace(/'/g, "\\'")}' \\\n  http://localhost:3000/api`
}

export function curlToJson(input: string): string {
  const dataMatch = input.match(/-d\s+'([^']+)'/)
  if (!dataMatch) throw new Error('Could not find -d data in cURL command')
  const parsed = JSON.parse(dataMatch[1])
  return JSON.stringify(parsed, null, 2)
}

import * as yaml from 'js-yaml'
export function jsonToDockerCompose(input: string): string {
  const parsed = JSON.parse(input)
  return yaml.dump(parsed, { indent: 2, lineWidth: -1, noRefs: true })
}

export function dockerComposeToJson(input: string): string {
  const parsed = yaml.load(input)
  if (typeof parsed === 'undefined' || parsed === null) throw new Error('Empty or invalid YAML')
  return JSON.stringify(parsed, null, 2)
}

export function jsonToKubernetes(input: string): string {
  const parsed = JSON.parse(input)
  return yaml.dump(parsed, { indent: 2, lineWidth: -1, noRefs: true })
}

export function kubernetesToJson(input: string): string {
  const parsed = yaml.load(input)
  if (typeof parsed === 'undefined' || parsed === null) throw new Error('Empty or invalid YAML')
  return JSON.stringify(parsed, null, 2)
}

export function jsonToTerraform(input: string): string {
  const parsed = JSON.parse(input)
  return yaml.dump(parsed, { indent: 2, lineWidth: -1, noRefs: true })
}

export function terraformToJson(input: string): string {
  const parsed = yaml.load(input)
  if (typeof parsed === 'undefined' || parsed === null) throw new Error('Empty or invalid YAML')
  return JSON.stringify(parsed, null, 2)
}
