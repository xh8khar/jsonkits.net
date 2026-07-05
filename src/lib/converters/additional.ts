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

// ---- New Converter Functions ----

function toClassName(key: string): string {
  const cleaned = key.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  if (!cleaned) return 'Item'
  return cleaned.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

function toCamelCase(key: string): string {
  const name = toClassName(key)
  return name.charAt(0).toLowerCase() + name.slice(1)
}

function getCType(value: unknown, key: string, structs: string[]): string {
  if (value === null || value === undefined) return 'void*'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'json_t*'
    return `struct ${toClassName(key)}*`
  }
  switch (typeof value) {
    case 'string': return 'char*'
    case 'boolean': return 'int'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': {
      const name = toClassName(key)
      if (!structs.includes(name)) {
        structs.push(name)
        generateCStruct(value as Record<string, unknown>, name, structs)
      }
      return `struct ${name}`
    }
    default: return 'json_t*'
  }
}

function generateCStruct(obj: Record<string, unknown>, name: string, structs: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => {
    const type = getCType(value, key, structs)
    const fieldName = key.replace(/[^a-zA-Z0-9]/g, '_')
    return `    ${type} ${fieldName};`
  })
  return `struct ${name} {\n${fields.join('\n')}\n};`
}

export function jsonToC(input: string): string {
  const parsed = JSON.parse(input)
  const structs: string[] = []
  let result = ''
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    result = generateCStruct(parsed as Record<string, unknown>, 'RootObject', structs)
    structs.forEach(s => {
      // Already generated inline
    })
  }
  return `#include <json-c/json.h>\n#include <stdlib.h>\n\n${result}\n`
}

function getCppType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'std::any'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'std::vector<std::any>'
    return `std::vector<${getCppType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'std::string'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': {
      const name = toClassName(key) + 'Class'
      if (!classes.includes(name)) {
        classes.push(name)
        generateCppClass(value as Record<string, unknown>, name, classes)
      }
      return name
    }
    default: return 'std::any'
  }
}

function generateCppClass(obj: Record<string, unknown>, name: string, classes: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => {
    const type = getCppType(value, key, classes)
    const fieldName = key.replace(/[^a-zA-Z0-9]/g, '_')
    return `    ${type} ${fieldName};`
  })
  const nlohmann = entries.map(([key]) => {
    const fieldName = key.replace(/[^a-zA-Z0-9]/g, '_')
    return `        j.at("${key}").get_to(${fieldName});`
  }).join('\n')
  classes.push(`class ${name} {\npublic:\n${fields.join('\n')}\n    NLOHMANN_DEFINE_TYPE_INTRUSIVE(${name}, ${entries.map(([k]) => k.replace(/[^a-zA-Z0-9]/g, '_')).join(', ')})\n};`)
  return name
}

export function jsonToCpp(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateCppClass(parsed as Record<string, unknown>, 'RootObject', classes)
  }
  return `#include <nlohmann/json.hpp>\nusing json = nlohmann::json;\n\n${classes.join('\n\n')}\n`
}

function getGroovyType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Object'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<Object>'
    return `List<${getGroovyType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Integer' : 'BigDecimal'
    case 'object': {
      const name = toClassName(key)
      if (!classes.includes(name)) {
        classes.push(name)
        generateGroovyClass(value as Record<string, unknown>, name, classes)
      }
      return name
    }
    default: return 'Object'
  }
}

function generateGroovyClass(obj: Record<string, unknown>, name: string, classes: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => {
    const type = getGroovyType(value, key, classes)
    return `    ${type} ${toCamelCase(key)}`
  })
  classes.push(`class ${name} {\n${fields.join('\n')}\n}`)
  return name
}

export function jsonToGroovy(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateGroovyClass(parsed as Record<string, unknown>, 'RootObject', classes)
  }
  return `import groovy.json.JsonSlurper\n\n${classes.join('\n\n')}\n`
}

function getElixirType(value: unknown, key: string): string {
  if (value === null || value === undefined) return 'any()'
  if (Array.isArray(value)) return 'list()'
  switch (typeof value) {
    case 'string': return 'String.t()'
    case 'boolean': return 'boolean()'
    case 'number': return Number.isInteger(value) ? 'integer()' : 'float()'
    case 'object': return toClassName(key) + '.t()'
    default: return 'any()'
  }
}

function generateElixirStruct(obj: Record<string, unknown>, name: string, structs: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => `  field :${key}, ${getElixirType(value, key)}`)
  const types = entries.map(([key, value]) => `  defstruct :${key}`)
  structs.push(`defmodule ${name} do\n  @type t :: %__MODULE__{\n${fields.join('\n')}\n  }\n  ${types.join('\n  ')}\nend`)
  return name
}

export function jsonToElixir(input: string): string {
  const parsed = JSON.parse(input)
  const structs: string[] = []
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateElixirStruct(parsed as Record<string, unknown>, 'RootObject', structs)
  }
  return structs.join('\n\n') + '\n'
}

function toPsObject(value: unknown, indent: number): string {
  const sp = '  '.repeat(indent)
  if (value === null || value === undefined) return '$null'
  if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`
  if (typeof value === 'boolean') return value ? '$true' : '$false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '@()'
    const items = value.map(v => `${sp}  ${toPsObject(v, indent + 1)}`)
    return `@(\n${items.join(',\n')}\n${sp})`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '@{}'
    const props = entries.map(([k, v]) => `${sp}  ${k} = ${toPsObject(v, indent + 1)}`)
    return `[PSCustomObject]@{\n${props.join('\n')}\n${sp}}`
  }
  return '$null'
}

export function jsonToPowerShell(input: string): string {
  const parsed = JSON.parse(input)
  return toPsObject(parsed, 0) + '\n'
}

function getFsharpType(value: unknown, key: string, records: string[]): string {
  if (value === null || value === undefined) return 'obj'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'obj list'
    return `${getFsharpType(value[0], key, records)} list`
  }
  switch (typeof value) {
    case 'string': return 'string'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'float'
    case 'object': {
      const name = toClassName(key)
      if (!records.includes(name)) {
        records.push(name)
        generateFsharpRecord(value as Record<string, unknown>, name, records)
      }
      return name
    }
    default: return 'obj'
  }
}

function generateFsharpRecord(obj: Record<string, unknown>, name: string, records: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => {
    const type = getFsharpType(value, key, records)
    return `    ${toCamelCase(key)} : ${type}`
  })
  records.push(`type ${name} = {\n${fields.join('\n')}\n}`)
  return name
}

export function jsonToFsharp(input: string): string {
  const parsed = JSON.parse(input)
  const records: string[] = []
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateFsharpRecord(parsed as Record<string, unknown>, 'RootObject', records)
  }
  return `open System.Text.Json.Serialization\n\n${records.join('\n\n')}\n`
}

function getJuliaType(value: unknown): string {
  if (value === null || value === undefined) return 'Any'
  if (Array.isArray(value)) return 'Vector{Any}'
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Bool'
    case 'number': return Number.isInteger(value) ? 'Int64' : 'Float64'
    case 'object': return 'Dict{String, Any}'
    default: return 'Any'
  }
}

function generateJuliaStruct(obj: Record<string, unknown>, name: string, structs: string[]): string {
  const entries = Object.entries(obj)
  const fields = entries.map(([key, value]) => {
    const type = getJuliaType(value)
    return `    ${key}::${type}`
  })
  structs.push(`@with_kw struct ${name}\n${fields.join('\n')}\nend`)
  return name
}

export function jsonToJulia(input: string): string {
  const parsed = JSON.parse(input)
  const structs: string[] = []
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateJuliaStruct(parsed as Record<string, unknown>, 'RootObject', structs)
  }
  return `using JSON3\n\n${structs.join('\n\n')}\n`
}

// MessagePack
import { encode as msgpackEncode, decode as msgpackDecode } from '@msgpack/msgpack'

function toHex(buf: Uint8Array): string {
  return Array.from(buf).map(b => b.toString(16).padStart(2, '0')).join('')
}

function fromHex(hex: string): Uint8Array {
  const bytes = new Uint8Array(Math.ceil(hex.length / 2))
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16)
  }
  return bytes
}

export function jsonToMessagePack(input: string): string {
  const parsed = JSON.parse(input)
  const encoded = msgpackEncode(parsed)
  return toHex(encoded)
}

export function messagePackToJson(input: string): string {
  const bytes = fromHex(input.trim())
  const decoded = msgpackDecode(bytes)
  return JSON.stringify(decoded, null, 2)
}

// CBOR (manual implementation for browser compatibility, RFC 7049)
function cborEncode(value: unknown): Uint8Array {
  const chunks: number[][] = []

  function appendHead(major: number, value: number): void {
    if (value < 24) {
      chunks.push([(major << 5) | value])
    } else if (value < 256) {
      chunks.push([(major << 5) | 24, value])
    } else if (value < 65536) {
      chunks.push([(major << 5) | 25, (value >> 8) & 0xff, value & 0xff])
    } else if (value < 4294967296) {
      chunks.push([(major << 5) | 26, (value >> 24) & 0xff, (value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff])
    } else {
      const hi = Math.floor(value / 4294967296)
      const lo = value >>> 0
      chunks.push([(major << 5) | 27, (hi >> 24) & 0xff, (hi >> 16) & 0xff, (hi >> 8) & 0xff, hi & 0xff, (lo >> 24) & 0xff, (lo >> 16) & 0xff, (lo >> 8) & 0xff, lo & 0xff])
    }
  }

  function encodeValue(val: unknown): void {
    if (val === null || val === undefined) {
      chunks.push([0xf6])
    } else if (typeof val === 'boolean') {
      chunks.push([val ? 0xf5 : 0xf4])
    } else if (typeof val === 'number') {
      if (Number.isInteger(val) && val >= 0) {
        appendHead(0, val)
      } else if (Number.isInteger(val) && val < 0) {
        appendHead(1, -1 - val)
      } else {
        chunks.push([0xfb])
        const buf = new ArrayBuffer(8)
        const view = new DataView(buf)
        view.setFloat64(0, val, false)
        chunks.push(Array.from(new Uint8Array(buf)))
      }
    } else if (typeof val === 'string') {
      const encoder = new TextEncoder()
      const bytes = encoder.encode(val)
      appendHead(3, bytes.length)
      chunks.push(Array.from(bytes))
    } else if (Array.isArray(val)) {
      appendHead(4, val.length)
      for (const item of val) encodeValue(item)
    } else if (typeof val === 'object') {
      const entries = Object.entries(val as Record<string, unknown>)
      appendHead(5, entries.length)
      for (const [key, value] of entries) {
        encodeValue(key)
        encodeValue(value)
      }
    }
  }

  encodeValue(value)
  return new Uint8Array(chunks.flat())
}

function cborDecode(data: Uint8Array, offset = 0): { value: unknown; offset: number } {
  const initial = data[offset++]
  const major = initial >> 5
  let additional = initial & 0x1f
  let value: number

  if (additional < 24) {
    value = additional
  } else if (additional === 24) {
    value = data[offset++]
  } else if (additional === 25) {
    value = (data[offset] << 8) | data[offset + 1]
    offset += 2
  } else if (additional === 26) {
    value = (data[offset] << 24) | (data[offset + 1] << 16) | (data[offset + 2] << 8) | data[offset + 3]
    offset += 4
  } else {
    let hi = (data[offset] << 24) | (data[offset + 1] << 16) | (data[offset + 2] << 8) | data[offset + 3]
    let lo = (data[offset + 4] << 24) | (data[offset + 5] << 16) | (data[offset + 6] << 8) | data[offset + 7]
    offset += 8
    value = hi * 4294967296 + lo
  }

  if (major === 0) return { value, offset }
  if (major === 1) return { value: -1 - value, offset }

  if (major === 2) {
    const bytes = data.slice(offset, offset + value)
    offset += value
    return { value: Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(' '), offset }
  }

  if (major === 3) {
    const bytes = data.slice(offset, offset + value)
    offset += value
    const decoder = new TextDecoder()
    return { value: decoder.decode(bytes), offset }
  }

  if (major === 4) {
    const arr: unknown[] = []
    for (let i = 0; i < value; i++) {
      const result = cborDecode(data, offset)
      arr.push(result.value)
      offset = result.offset
    }
    return { value: arr, offset }
  }

  if (major === 5) {
    const obj: Record<string, unknown> = {}
    for (let i = 0; i < value; i++) {
      const keyResult = cborDecode(data, offset)
      offset = keyResult.offset
      const valResult = cborDecode(data, offset)
      offset = valResult.offset
      obj[String(keyResult.value)] = valResult.value
    }
    return { value: obj, offset }
  }

  if (major === 7) {
    if (value === 20) return { value: false, offset }
    if (value === 21) return { value: true, offset }
    if (value === 22) return { value: null, offset }
    if (value === 25) {
      const half = (data[offset] << 8) | data[offset + 1]
      offset += 2
      const sign = half >> 15 ? -1 : 1
      const exp = (half >> 10) & 0x1f
      const mant = half & 0x3ff
      return { value: sign * (exp === 0 ? Math.pow(2, -14) * mant : Math.pow(2, exp - 15) * (1 + mant / 1024)), offset }
    }
    if (value === 26) {
      const float = new DataView(new Uint8Array(data.slice(offset, offset + 4)).buffer).getFloat32(0, false)
      offset += 4
      return { value: float, offset }
    }
    if (value === 27) {
      const double = new DataView(new Uint8Array(data.slice(offset, offset + 8)).buffer).getFloat64(0, false)
      offset += 8
      return { value: double, offset }
    }
  }

  throw new Error(`Unsupported CBOR type: major=${major}, additional=${additional}`)
}

export function jsonToCbor(input: string): string {
  const parsed = JSON.parse(input)
  const encoded = cborEncode(parsed)
  return toHex(encoded)
}

export function cborToJson(input: string): string {
  const bytes = fromHex(input.trim())
  const decoded = cborDecode(bytes)
  return JSON.stringify(decoded.value, null, 2)
}

// JWT
function base64UrlDecode(str: string): string {
  str = str.replace(/-/g, '+').replace(/_/g, '/')
  while (str.length % 4) str += '='
  return atob(str)
}

function base64UrlEncode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function jwtDecode(input: string): string {
  const parts = input.trim().split('.')
  if (parts.length !== 3) throw new Error('Invalid JWT: must have 3 parts (header.payload.signature)')
  const header = JSON.parse(base64UrlDecode(parts[0]))
  const payload = JSON.parse(base64UrlDecode(parts[1]))
  return JSON.stringify({ header, payload, signature: parts[2], isValidStructure: true }, null, 2)
}

export async function jwtEncode(input: string): Promise<string> {
  const parsed = JSON.parse(input)
  const secret = parsed.secret || 'jsonkits-secret-key'
  const payload = parsed.payload || parsed
  const { SignJWT } = await import('jose')
  const encoder = new TextEncoder()
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(encoder.encode(secret))
  return jwt
}

export async function jwtValidate(input: string): Promise<string> {
  const lines = input.trim().split('\n')
  const token = lines[0].trim()
  const secret = lines.length > 1 ? lines.slice(1).join('\n').trim() : 'jsonkits-secret-key'
  const parts = token.split('.')
  if (parts.length !== 3) throw new Error('Invalid JWT: must have 3 parts (header.payload.signature)')
  const header = JSON.parse(base64UrlDecode(parts[0]))
  const payload = JSON.parse(base64UrlDecode(parts[1]))
  const now = Math.floor(Date.now() / 1000)
  const checks: Record<string, any> = {
    header: { alg: header.alg, typ: header.typ },
    payload: payload,
    checks: {},
  }
  if (payload.exp) {
    checks.checks['exp'] = { valid: now < Number(payload.exp), message: Number(payload.exp) < now ? 'Token expired' : 'Token is valid', expiresAt: new Date(Number(payload.exp) * 1000).toISOString() }
  }
  if (payload.nbf) {
    checks.checks['nbf'] = { valid: now >= Number(payload.nbf), message: now < Number(payload.nbf) ? 'Token not yet valid' : 'Token is valid', notBefore: new Date(Number(payload.nbf) * 1000).toISOString() }
  }
  if (payload.iat) {
    checks.checks['iat'] = { issuedAt: new Date(Number(payload.iat) * 1000).toISOString() }
  }
  if (payload.iss) checks.checks['iss'] = { issuer: payload.iss }
  if (payload.aud) checks.checks['aud'] = { audience: payload.aud }
  if (payload.sub) checks.checks['sub'] = { subject: payload.sub }

  try {
    const { jwtVerify } = await import('jose')
    const encoder = new TextEncoder()
    const { payload: verifiedPayload } = await jwtVerify(token, encoder.encode(secret))
    checks.signature = { valid: true, algorithm: header.alg }
  } catch (e: any) {
    checks.signature = { valid: false, error: e.message || 'Signature verification failed' }
  }

  return JSON.stringify(checks, null, 2)
}

// JMESPath
import jmespath from 'jmespath'

export function jmespathQuery(input: string): string {
  const lines = input.trim().split('\n')
  if (lines.length < 2) throw new Error('Expected JSON data on first line and JMESPath expression on second line')
  const jsonData = JSON.parse(lines[0])
  const expression = lines.slice(1).join(' ').trim()
  if (!expression) throw new Error('JMESPath expression is required on the second line')
  const result = jmespath.search(jsonData, expression)
  return JSON.stringify({ expression, result }, null, 2)
}

// Hash
export async function jsonHash(input: string): Promise<string> {
  const parsed = JSON.parse(input)
  const str = JSON.stringify(parsed)
  const encoder = new TextEncoder()
  const data = encoder.encode(str)

  const toHex = (buf: ArrayBuffer) =>
    Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')

  const [sha1Result, sha256Result, sha512Result] = await Promise.all([
    crypto.subtle.digest('SHA-1', data),
    crypto.subtle.digest('SHA-256', data),
    crypto.subtle.digest('SHA-512', data),
  ])

  return JSON.stringify({
    sha1: toHex(sha1Result),
    sha256: toHex(sha256Result),
    sha512: toHex(sha512Result),
    byteSize: data.length,
  }, null, 2)
}

// SQL CREATE TABLE
export function jsonToSqlCreate(input: string): string {
  const parsed = JSON.parse(input)
  const name = 'json_data'
  
  function inferSqlType(value: unknown, depth: number): string {
    if (value === null || value === undefined) return 'TEXT'
    if (typeof value === 'boolean') return 'BOOLEAN'
    if (typeof value === 'number') return Number.isInteger(value) ? 'INTEGER' : 'REAL'
    if (typeof value === 'string') {
      if (value.length > 255) return 'TEXT'
      return 'VARCHAR(255)'
    }
    if (Array.isArray(value)) return 'JSON'
    if (typeof value === 'object') return 'JSON'
    return 'TEXT'
  }
  
  function generateColumns(obj: Record<string, unknown>, prefix = ''): string[] {
    return Object.entries(obj).flatMap(([key, value]) => {
      const colName = prefix ? `${prefix}_${key}` : key
      if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)) {
        return [`  ${colName} JSON`]
      }
      return [`  ${colName} ${inferSqlType(value, 0)}`]
    })
  }
  
  let columns: string[]
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    columns = generateColumns(parsed as Record<string, unknown>)
  } else {
    columns = [`  data JSON`]
  }
  
  return `CREATE TABLE ${name} (\n  id SERIAL PRIMARY KEY,\n${columns.join(',\n')}\n);\n`
}

// Elasticsearch bulk
export function jsonToElasticsearch(input: string): string {
  const parsed = JSON.parse(input)
  const index = 'my_index'
  const lines: string[] = []
  
  if (Array.isArray(parsed)) {
    for (let i = 0; i < parsed.length; i++) {
      lines.push(JSON.stringify({ index: { _index: index, _id: i + 1 } }))
      lines.push(JSON.stringify(parsed[i]))
    }
  } else if (typeof parsed === 'object' && parsed !== null) {
    lines.push(JSON.stringify({ index: { _index: index, _id: 1 } }))
    lines.push(JSON.stringify(parsed))
  }
  
  return lines.join('\n') + '\n'
}

// DynamoDB
export function jsonToDynamoDB(input: string): string {
  const parsed = JSON.parse(input)
  
  function toDynamoValue(value: unknown): Record<string, unknown> {
    if (value === null || value === undefined) return { NULL: true }
    if (typeof value === 'string') return { S: value }
    if (typeof value === 'boolean') return { BOOL: value }
    if (typeof value === 'number') return Number.isInteger(value) ? { N: value.toString() } : { N: value.toString() }
    if (Array.isArray(value)) return { L: value.map(toDynamoValue) }
    if (typeof value === 'object' && value !== null) {
      const map: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(value)) {
        map[k] = toDynamoValue(v)
      }
      return { M: map }
    }
    return { S: String(value) }
  }
  
  return JSON.stringify(toDynamoValue(parsed), null, 2)
}

// BigQuery
export function jsonToBigQuery(input: string): string {
  const parsed = JSON.parse(input)
  
  function inferBqType(value: unknown): string {
    if (value === null || value === undefined) return 'STRING'
    if (typeof value === 'boolean') return 'BOOL'
    if (typeof value === 'number') return Number.isInteger(value) ? 'INT64' : 'FLOAT64'
    if (typeof value === 'string') return 'STRING'
    if (Array.isArray(value)) return 'REPEATED'
    if (typeof value === 'object') return 'RECORD'
    return 'STRING'
  }
  
  function generateSchema(obj: Record<string, unknown>, name: string): Record<string, unknown> {
    const fields = Object.entries(obj).map(([key, value]) => {
      const type = inferBqType(value)
      const field: Record<string, unknown> = { name: key, type }
      if (type === 'RECORD' && typeof value === 'object' && value !== null) {
        field['fields'] = [generateSchema(value as Record<string, unknown>, key)]
      }
      if (type === 'REPEATED' && Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const innerType = inferBqType(value[0])
        if (innerType === 'RECORD') {
          field['type'] = 'RECORD'
          field['mode'] = 'REPEATED'
          field['fields'] = [generateSchema(value[0] as Record<string, unknown>, key)]
        } else {
          field['type'] = innerType
          field['mode'] = 'REPEATED'
        }
      }
      if (type !== 'RECORD' && type !== 'REPEATED') {
        field['mode'] = 'NULLABLE'
      }
      return field
    })
    return { name, fields }
  }
  
  let schema: Record<string, unknown>
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    schema = generateSchema(parsed as Record<string, unknown>, 'root')
  } else {
    schema = { name: 'root', fields: [{ name: 'data', type: 'STRING', mode: 'NULLABLE' }] }
  }
  
  return JSON.stringify({ schema }, null, 2)
}

// Redis
export function jsonToRedis(input: string): string {
  const parsed = JSON.parse(input)
  const key = 'myjson:1'
  return `JSON.SET ${key} $ '${JSON.stringify(parsed).replace(/'/g, "\\'")}'\n`
}

// JSON Schema to Java
export function jsonSchemaToJava(input: string): string {
  const schema = JSON.parse(input)
  const className = toClassName(schema.title || 'GeneratedClass')
  const required = new Set(schema.required || [])
  const properties = schema.properties || {}
  
  function getJavaType(propSchema: Record<string, unknown>, propName: string): string {
    if (propSchema.type === 'string') {
      if (propSchema.format === 'date-time' || propSchema.format === 'date') return 'LocalDateTime'
      if (propSchema.enum) return 'String'
      return 'String'
    }
    if (propSchema.type === 'integer' || propSchema.type === 'number') {
      if (propSchema.type === 'integer') return 'Integer'
      if (propSchema.type === 'number') return 'Double'
      return 'Integer'
    }
    if (propSchema.type === 'boolean') return 'Boolean'
    if (propSchema.type === 'array') {
      const items = propSchema.items as Record<string, unknown> | undefined
      const itemType = items ? getJavaType(items, propName + 'Item') : 'Object'
      return `List<${itemType}>`
    }
    if (propSchema.type === 'object' || propSchema.properties) return toClassName(propName)
    return 'Object'
  }
  
  function getValidationAnnotation(propSchema: Record<string, unknown>, propName: string, isRequired: boolean): string {
    const annotations: string[] = []
    if (isRequired) annotations.push('@NotNull')
    if (propSchema.minLength) annotations.push(`@Size(min = ${propSchema.minLength})`)
    if (propSchema.maxLength) annotations.push(`@Size(max = ${propSchema.maxLength})`)
    if (propSchema.minimum !== undefined) annotations.push(`@Min(${propSchema.minimum})`)
    if (propSchema.maximum !== undefined) annotations.push(`@Max(${propSchema.maximum})`)
    if (propSchema.pattern) annotations.push(`@Pattern(regexp = "${propSchema.pattern}")`)
    return annotations.join('\n  ')
  }
  
  const fields = Object.entries(properties).map(([propName, propSchema]) => {
    const raw = propSchema as Record<string, unknown>
    const type = getJavaType(raw, propName)
    const annotation = getValidationAnnotation(raw, propName, required.has(propName))
    const annot = annotation ? `  ${annotation}\n  ` : '  '
    return `${annot}private ${type} ${toCamelCase(propName)};`
  })
  
  return `import javax.validation.constraints.*;\nimport java.util.List;\n\npublic class ${className} {\n${fields.join('\n\n')}\n}\n`
}

// JSON Schema to Pydantic
export function jsonSchemaToPydantic(input: string): string {
  const schema = JSON.parse(input)
  const className = toClassName(schema.title || 'GeneratedModel')
  const required = new Set(schema.required || [])
  const properties = schema.properties || {}
  
  function getPyType(propSchema: Record<string, unknown>): string {
    if (propSchema.type === 'string') {
      if (propSchema.enum) return `Literal${JSON.stringify(propSchema.enum)}`
      if (propSchema.format === 'date-time') return 'datetime'
      return 'str'
    }
    if (propSchema.type === 'integer') return 'int'
    if (propSchema.type === 'number') return 'float'
    if (propSchema.type === 'boolean') return 'bool'
    if (propSchema.type === 'array') {
      const items = propSchema.items as Record<string, unknown> | undefined
      return `List[${items ? getPyType(items) : 'Any'}]`
    }
    if (propSchema.type === 'object' || propSchema.properties) return 'Dict[str, Any]'
    return 'Any'
  }
  
  const fields = Object.entries(properties).map(([propName, propSchema]) => {
    const raw = propSchema as Record<string, unknown>
    const pyType = getPyType(raw)
    const isRequired = required.has(propName)
    const defaultVal = isRequired ? '' : ' = None'
    const fieldVals: string[] = []
    if (raw.description) fieldVals.push(`description="${raw.description}"`)
    if (raw.minimum !== undefined) fieldVals.push(`ge=${raw.minimum}`)
    if (raw.maximum !== undefined) fieldVals.push(`le=${raw.maximum}`)
    if (raw.minLength) fieldVals.push(`min_length=${raw.minLength}`)
    if (raw.maxLength) fieldVals.push(`max_length=${raw.maxLength}`)
    const fieldStr = fieldVals.length ? ` = Field(${fieldVals.join(', ')})` : defaultVal
    return `    ${propName}: ${pyType}${fieldStr}`
  })
  
  return `from pydantic import BaseModel, Field\nfrom typing import List, Dict, Any, Optional, Literal\nfrom datetime import datetime\n\n\nclass ${className}(BaseModel):\n${fields.join('\n')}\n`
}

// JSON to HTML
export function jsonToHtml(input: string): string {
  const parsed = JSON.parse(input)
  const formatted = JSON.stringify(parsed, null, 2)
  const escaped = formatted
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JSON Document</title>
<style>
body { font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; background: #1e1e2e; color: #cdd6f4; padding: 2rem; margin: 0; }
pre { margin: 0; white-space: pre-wrap; word-break: break-word; }
.key { color: #89b4fa; }
.string { color: #a6e3a1; }
.number { color: #fab387; }
.boolean { color: #cba6f7; }
.null { color: #6c7086; }
.bracket { color: #b4befe; }
</style>
</head>
<body>
<pre>${escaped.replace(/"([^"]+)":/g, '<span class="key">"$1"</span>:').replace(/"([^"]+)"(?=[,\s\n\r])/g, '<span class="string">"$1"</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>').replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>').replace(/\bnull\b/g, '<span class="null">null</span>').replace(/([\[\]{}])/g, '<span class="bracket">$1</span>')}</pre>
</body>
</html>`
}

// JSON Property Path
export function jsonPropertyPath(input: string): string {
  const parsed = JSON.parse(input)
  const paths: string[] = []
  
  function walk(obj: unknown, prefix: string): void {
    if (obj === null || obj === undefined) {
      paths.push(`${prefix}: null`)
      return
    }
    if (typeof obj !== 'object') {
      paths.push(`${prefix}: ${typeof obj} (${JSON.stringify(obj)})`)
      return
    }
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        paths.push(`${prefix}: [] (empty array)`)
        return
      }
      paths.push(`${prefix}: array[${obj.length}]`)
      walk(obj[0], `${prefix}[0]`)
      return
    }
    const entries = Object.entries(obj as Record<string, unknown>)
    if (entries.length === 0) {
      paths.push(`${prefix}: {} (empty object)`)
      return
    }
    for (const [key, value] of entries) {
      const path = prefix ? `${prefix}.${key}` : key
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          paths.push(`${path}: array[${value.length}]`)
          if (value.length > 0) walk(value[0], `${path}[0]`)
        } else {
          paths.push(`${path}: {}`)
          walk(value, path)
        }
      } else {
        paths.push(`${path}: ${typeof value} (${JSON.stringify(value)})`)
      }
    }
  }
  
  walk(parsed, '')
  return paths.join('\n')
}

// JSON Number Converter
export function jsonNumberConverter(input: string): string {
  const parsed = JSON.parse(input)
  
  function convertNumbers(value: unknown): unknown {
    if (typeof value === 'number') {
      return {
        decimal: value,
        hexadecimal: `0x${value.toString(16)}`,
        octal: `0o${value.toString(8)}`,
        binary: `0b${value.toString(2)}`,
        scientific: value.toExponential(2),
      }
    }
    if (Array.isArray(value)) return value.map(convertNumbers)
    if (typeof value === 'object' && value !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(value)) {
        result[k] = convertNumbers(v)
      }
      return result
    }
    return value
  }
  
  return JSON.stringify(convertNumbers(parsed), null, 2)
}

// JSON to XSD
export function jsonToXsd(input: string): string {
  const parsed = JSON.parse(input)
  const typeName = 'JsonDataType'
  
  function inferXsdType(value: unknown): string {
    if (value === null || value === undefined) return 'xs:string'
    if (typeof value === 'boolean') return 'xs:boolean'
    if (typeof value === 'number') return Number.isInteger(value) ? 'xs:integer' : 'xs:decimal'
    if (typeof value === 'string') return 'xs:string'
    return 'xs:anyType'
  }
  
  function generateElements(obj: Record<string, unknown>, parentName: string): string[] {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const typeName = toClassName(key)
        const inner = generateElements(value as Record<string, unknown>, typeName)
        return `<xs:element name="${key}" type="${typeName}"/>\n${inner.join('\n')}\n<xs:complexType name="${typeName}">\n<xs:sequence>\n${generateElements(value as Record<string, unknown>, typeName).join('\n')}\n</xs:sequence>\n</xs:complexType>`
      }
      return `<xs:element name="${key}" type="${inferXsdType(value)}"/>`
    })
  }
  
  let elements: string[]
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    elements = generateElements(parsed as Record<string, unknown>, typeName)
  } else {
    elements = [`<xs:element name="data" type="xs:string"/>`]
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="root">
<xs:complexType>
<xs:sequence>
${elements.join('\n')}
</xs:sequence>
</xs:complexType>
</xs:element>
</xs:schema>`
}

// JSON to SOAP XML
export function jsonToSoap(input: string): string {
  const parsed = JSON.parse(input)
  const formatted = JSON.stringify(parsed, null, 2)
  const escaped = formatted.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header/>
  <soap:Body>
    <jsonData>
      <![CDATA[
${escaped}
      ]]>
    </jsonData>
  </soap:Body>
</soap:Envelope>`
}

// JSON to AsyncAPI
export function jsonToAsyncApi(input: string): string {
  const parsed = JSON.parse(input)
  const formatted = JSON.stringify(parsed, null, 2)
  
  return `asyncapi: '2.0.0'
info:
  title: Generated AsyncAPI
  version: '1.0.0'
  description: AsyncAPI specification generated from JSON sample
channels:
  event.chan:
    publish:
      message:
        contentType: application/json
        payload:
          ${formatted.replace(/\n/g, '\n          ')}`
}

// JSON to MongoDB Aggregation
export function jsonToMongoAgg(input: string): string {
  const parsed = JSON.parse(input)
  
  const pipeline: Record<string, unknown>[] = [
    { $match: {} },
    { $project: {} },
    { $limit: 10 },
  ]
  
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    const fields = Object.keys(parsed as Record<string, unknown>)
    const projectFields: Record<string, number> = {}
    for (const f of fields) {
      projectFields[f] = 1
    }
    pipeline[1] = { $project: projectFields }
  }
  
  return JSON.stringify(pipeline, null, 2)
}

// JSON to GraphQL Query
export function jsonToGraphqlQuery(input: string): string {
  const parsed = JSON.parse(input)
  
  function generateQueryFields(obj: Record<string, unknown>, depth: number): string[] {
    if (depth > 3) return ['...']
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const inner = generateQueryFields(value as Record<string, unknown>, depth + 1)
        return `  ${key} {\n${inner.join('\n')}\n  }`
      }
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const inner = generateQueryFields(value[0] as Record<string, unknown>, depth + 1)
        return `  ${key} {\n${inner.join('\n')}\n  }`
      }
      return `  ${key}`
    })
  }
  
  let fields: string[]
  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    fields = generateQueryFields(parsed as Record<string, unknown>, 0)
  } else {
    fields = ['  data']
  }
  
  return `query GetData {\n  getData {\n${fields.join('\n')}\n  }\n}`
}

// ---- Remaining Tools ----

// JSON to Erlang
function getErlangType(value: unknown): string {
  if (value === null || value === undefined) return 'any()'
  if (Array.isArray(value)) return 'list()'
  switch (typeof value) {
    case 'string': return 'binary()'
    case 'boolean': return 'boolean()'
    case 'number': return Number.isInteger(value) ? 'integer()' : 'float()'
    case 'object': return '#{}'
    default: return 'any()'
  }
}

export function jsonToErlang(input: string): string {
  const parsed = JSON.parse(input)
  
  function toErlangTerm(value: unknown, indent: number): string {
    const sp = '  '.repeat(indent)
    if (value === null || value === undefined) return 'null'
    if (typeof value === 'string') return `<<"${value.replace(/"/g, '\\"')}">>`
    if (typeof value === 'boolean') return value ? 'true' : 'false'
    if (typeof value === 'number') return String(value)
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]'
      const items = value.map(v => `${sp}  ${toErlangTerm(v, indent + 1)}`)
      return `[\n${items.join(',\n')}\n${sp}]`
    }
    if (typeof value === 'object' && value !== null) {
      const entries = Object.entries(value as Record<string, unknown>)
      if (entries.length === 0) return '#{}'
      const fields = entries.map(([k, v]) => `${sp}  {<<${JSON.stringify(k)}>>, ${toErlangTerm(v, indent + 1)}}`)
      return `#{\n${fields.join(',\n')}\n${sp}}`
    }
    return 'null'
  }

  return `% Generated from JSON data\n-record(root, {\n${Object.entries(parsed as Record<string, unknown>).map(([k, v]) => `  ${k} :: ${getErlangType(v)}`).join(',\n')}\n}).\n\n% Erlang term:\n${toErlangTerm(parsed, 0)}`
}

// JSON to Clojure
export function jsonToClojure(input: string): string {
  const parsed = JSON.parse(input)
  
  function toClojure(value: unknown, indent: number): string {
    const sp = '  '.repeat(indent)
    if (value === null || value === undefined) return 'nil'
    if (typeof value === 'string') return `"${value.replace(/"/g, '\\"')}"`
    if (typeof value === 'boolean') return value ? 'true' : 'false'
    if (typeof value === 'number') return String(value)
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]'
      const items = value.map(v => `${sp}  ${toClojure(v, indent + 1)}`)
      return `[\n${items.join('\n')}\n${sp}]`
    }
    if (typeof value === 'object' && value !== null) {
      const entries = Object.entries(value as Record<string, unknown>)
      if (entries.length === 0) return '{}'
      const fields = entries.map(([k, v]) => `${sp}  ${k} ${toClojure(v, indent + 1)}`)
      return `{\n${fields.join('\n')}\n${sp}}`
    }
    return 'nil'
  }

  return `(ns jsonkits.generated)\n\n(def root\n  ${toClojure(parsed, 0).replace(/\n  /g, '\n').trim()})\n`
}

// JSON to Objective-C
export function jsonToObjc(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []

  function getObjcType(value: unknown, key: string): string {
    if (value === null || value === undefined) return 'id'
    if (Array.isArray(value)) return `NSArray<${value.length > 0 ? getObjcType(value[0], key) : 'id'} *> *`
    switch (typeof value) {
      case 'string': return 'NSString *'
      case 'boolean': return 'BOOL'
      case 'number': return Number.isInteger(value) ? 'NSInteger' : 'CGFloat'
      case 'object': return `${toClassName(key)} *`
      default: return 'id'
    }
  }

  function generateObjcClass(obj: Record<string, unknown>, name: string): void {
    const entries = Object.entries(obj)
    const properties = entries.map(([key, value]) => {
      const type = getObjcType(value, key)
      const isObj = type.includes('*')
      return `@property (nonatomic, ${isObj ? 'strong' : 'assign'}) ${type}${key};`
    })
    const initBody = entries.map(([key]) => `    _${key} = ${key};`).join('\n')
    classes.push(`@interface ${name} : NSObject\n\n${properties.join('\n')}\n\n@end\n\n@implementation ${name}\n\n- (instancetype)initWith${name}:(NSDictionary *)dict {\n  self = [super init];\n  if (self) {\n${initBody}\n  }\n  return self;\n}\n\n@end`)
  }

  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    generateObjcClass(parsed as Record<string, unknown>, 'RootObject')
  }

  return `#import <Foundation/Foundation.h>\n\n${classes.join('\n\n')}\n`
}

// JSON to Fortran
export function jsonToFortran(input: string): string {
  const parsed = JSON.parse(input)
  const members: string[] = []

  function getFortranType(value: unknown): string {
    if (value === null || value === undefined) return 'character(len=:), allocatable'
    if (typeof value === 'boolean') return 'logical'
    if (typeof value === 'number') return Number.isInteger(value) ? 'integer' : 'real'
    if (typeof value === 'string') return 'character(len=:), allocatable'
    return 'character(len=:), allocatable'
  }

  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      members.push(`  ${getFortranType(value)} :: ${key}`)
    }
  }

  return `! Generated from JSON data\nmodule jsonkits_data\n  implicit none\n  type :: root_type\n${members.join('\n')}\n  end type root_type\nend module jsonkits_data\n`
}

// JSON to COBOL
export function jsonToCobol(input: string): string {
  const parsed = JSON.parse(input)
  const fields: string[] = []
  let level = 10

  function getCobolType(value: unknown): string {
    if (value === null || value === undefined) return 'PIC X(255).'
    if (typeof value === 'boolean') return 'PIC X(5).' + `\n        88 ${'val'} VALUE 'TRUE' 'FALSE'.`
    if (typeof value === 'number') {
      if (Number.isInteger(value)) return `PIC 9(${String(value).length}).`
      return `PIC 9(${String(Math.abs(value)).length})V9(2).`
    }
    if (typeof value === 'string') return `PIC X(${Math.max(String(value).length, 255)}).`
    return 'PIC X(255).'
  }

  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      fields.push(`       ${level} ${key.toUpperCase()} ${getCobolType(value)}`)
      level += 10
    }
  }

  return `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. JsonkitsData.\n       DATA DIVISION.\n       WORKING-STORAGE SECTION.\n       01 ROOT-DATA.\n${fields.join('\n')}\n       PROCEDURE DIVISION.\n           STOP RUN.\n`
}

// JSON to SAS
export function jsonToSas(input: string): string {
  const parsed = JSON.parse(input)
  const labels: string[] = []
  const values: string[] = []

  if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      labels.push(`    informat ${key} best32.;`)
      labels.push(`    format ${key} best32.;`)
      if (typeof value === 'string') {
        labels.push(`    length ${key} $ ${Math.max(String(value).length, 50)}.;`)
        values.push(`    ${key} = "${value}";`)
      } else if (typeof value === 'number') {
        values.push(`    ${key} = ${value};`)
      } else if (typeof value === 'boolean') {
        values.push(`    ${key} = ${value ? 1 : 0};`)
      }
    }
  }

  return `* Generated from JSON data;\ndata work.jsonkits;\n${labels.join('\n')}\n${values.join('\n')}\nrun;\n`
}

// SQL UPDATE
export function jsonToSqlUpdate(input: string): string {
  const parsed = JSON.parse(input)
  const tableName = 'my_table'
  const entries = Object.entries(parsed as Record<string, unknown>)
  const setClauses = entries.map(([key, value]) => {
    if (value === null || value === undefined) return `  ${key} = NULL`
    if (typeof value === 'string') return `  ${key} = '${value.replace(/'/g, "''")}'`
    if (typeof value === 'boolean') return `  ${key} = ${value ? 1 : 0}`
    if (typeof value === 'number') return `  ${key} = ${value}`
    return `  ${key} = '${String(value)}'`
  })
  return `UPDATE ${tableName}\nSET\n${setClauses.join(',\n')}\nWHERE id = 1;\n`
}

// SQL DELETE
export function jsonToSqlDelete(input: string): string {
  const parsed = JSON.parse(input)
  const tableName = 'my_table'
  const entries = Object.entries(parsed as Record<string, unknown>)
  const whereClauses = entries.map(([key, value]) => {
    if (value === null || value === undefined) return `  ${key} IS NULL`
    if (typeof value === 'string') return `  ${key} = '${value.replace(/'/g, "''")}'`
    if (typeof value === 'boolean') return `  ${key} = ${value ? 1 : 0}`
    if (typeof value === 'number') return `  ${key} = ${value}`
    return `  ${key} = '${String(value)}'`
  })
  return `DELETE FROM ${tableName}\nWHERE\n${whereClauses.join('\n  AND ')};\n`
}

// GraphQL Mutation
export function jsonToGraphqlMutation(input: string): string {
  const parsed = JSON.parse(input)
  
  function generateMutationFields(obj: Record<string, unknown>, depth: number): string[] {
    if (depth > 2) return ['...']
    return Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const inner = generateMutationFields(value[0] as Record<string, unknown>, depth + 1)
        return `  ${key} {\n${inner.join('\n')}\n  }`
      }
      return `  ${key}`
    })
  }

  const fields = typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
    ? generateMutationFields(parsed as Record<string, unknown>, 0)
    : ['  data']

  const inputVars = typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
    ? Object.entries(parsed as Record<string, unknown>).map(([key, value]) => {
        if (typeof value === 'string') return `$${key}: String!`
        if (typeof value === 'number') return Number.isInteger(value) ? `$${key}: Int!` : `$${key}: Float!`
        if (typeof value === 'boolean') return `$${key}: Boolean!`
        return `$${key}: JSON!`
      }).join(', ')
    : ''

  return `mutation CreateData(${inputVars || 'input: JSON!'}) {\n  createData(input: {${typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed) ? Object.keys(parsed as Record<string, unknown>).map(k => `${k}: $${k}`).join(', ') : 'data: $input'}}) {\n${fields.join('\n')}\n  }\n}`
}

// GraphQL Subscription
export function jsonToGraphqlSubscription(input: string): string {
  const parsed = JSON.parse(input)
  
  function generateSubFields(obj: Record<string, unknown>, depth: number): string[] {
    if (depth > 2) return ['...']
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const inner = generateSubFields(value as Record<string, unknown>, depth + 1)
        return `  ${key} {\n${inner.join('\n')}\n  }`
      }
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        const inner = generateSubFields(value[0] as Record<string, unknown>, depth + 1)
        return `  ${key} {\n${inner.join('\n')}\n  }`
      }
      return `  ${key}`
    })
  }

  const fields = typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
    ? generateSubFields(parsed as Record<string, unknown>, 0)
    : ['  data']

  return `subscription OnDataChanged {\n  dataChanged {\n${fields.join('\n')}\n  }\n}`
}

// JSON to Snowflake
export function jsonToSnowflake(input: string): string {
  const parsed = JSON.parse(input)
  const entries = Object.entries(parsed as Record<string, unknown>)
  const cols = entries.map(([key]) => `    ${key.toUpperCase()}`).join(',\n')
  const vals = entries.map(([, value]) => {
    if (value === null || value === undefined) return '    NULL'
    if (typeof value === 'string') return `    '${value.replace(/'/g, "''")}'`
    if (typeof value === 'boolean') return `    ${value ? 'TRUE' : 'FALSE'}`
    if (typeof value === 'number') return `    ${value}`
    return `    PARSE_JSON('${JSON.stringify(value).replace(/'/g, "''")}')`
  }).join(',\n')

  return `-- Snowflake INSERT from JSON\nINSERT INTO my_table (\n${cols}\n)\nSELECT\n${vals};\n`
}

// JSON to Prometheus
export function jsonToPrometheus(input: string): string {
  const parsed = JSON.parse(input)
  
  function toPromMetrics(obj: Record<string, unknown>, prefix: string): string[] {
    return Object.entries(obj).flatMap(([key, value]) => {
      const metricName = prefix ? `${prefix}_${key}` : key
      const sanitized = metricName.replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase()
      if (typeof value === 'number') {
        return [`# HELP ${sanitized} Generated from JSON`, `# TYPE ${sanitized} gauge`, `${sanitized} ${value}`]
      }
      if (typeof value === 'string') {
        return [`# HELP ${sanitized} Generated from JSON`, `# TYPE ${sanitized} gauge`, `${sanitized}{value="${value.replace(/"/g, '\\"')}"} 1`]
      }
      if (typeof value === 'boolean') {
        return [`# HELP ${sanitized} Generated from JSON`, `# TYPE ${sanitized} gauge`, `${sanitized} ${value ? 1 : 0}`]
      }
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return toPromMetrics(value as Record<string, unknown>, sanitized)
      }
      return []
    })
  }

  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return `# HELP json_data Generated from JSON\n# TYPE json_data gauge\njson_data 1\n`
  }

  return toPromMetrics(parsed as Record<string, unknown>, '').join('\n') + '\n'
}

// JSON to ANSI Colorized
export function jsonToAnsi(input: string): string {
  const parsed = JSON.parse(input)
  const formatted = JSON.stringify(parsed, null, 2)
  return formatted.split('\n').map(line => {
    if (line.includes('"') && line.includes(':')) {
      return line.replace(/("(?:[^"\\]|\\.)*")(\s*:\s*)("(?:[^"\\]|\\.)*")/g, (_, key, colon, strVal) => {
        return `\x1b[34m${key}\x1b[0m${colon}\x1b[32m${strVal}\x1b[0m`
      }).replace(/("(?:[^"\\]|\\.)*")(\s*:\s*)(\d+\.?\d*)/g, (_, key, colon, num) => {
        return `\x1b[34m${key}\x1b[0m${colon}\x1b[33m${num}\x1b[0m`
      }).replace(/("(?:[^"\\]|\\.)*")(\s*:\s*)(true|false)/g, (_, key, colon, bool) => {
        return `\x1b[34m${key}\x1b[0m${colon}\x1b[35m${bool}\x1b[0m`
      }).replace(/("(?:[^"\\]|\\.)*")(\s*:\s*)(null)/g, (_, key, colon, n) => {
        return `\x1b[34m${key}\x1b[0m${colon}\x1b[37m${n}\x1b[0m`
      })
    }
    if (line.includes('"')) {
      return `\x1b[32m${line}\x1b[0m`
    }
    if (/\d/.test(line)) return `\x1b[33m${line}\x1b[0m`
    return `\x1b[37m${line}\x1b[0m`
  }).join('\n')
}

// Protocol Buffers
import protobuf from 'protobufjs'

export function jsonToProtobuf(input: string): string {
  const lines = input.trim().split('\n')
  const splitIdx = lines.findIndex(l => l.trim() === '---DATA---')
  if (splitIdx === -1) throw new Error('Format: proto definition, then ---DATA---, then JSON data')
  
  const protoDef = lines.slice(0, splitIdx).join('\n')
  const jsonStr = lines.slice(splitIdx + 1).join('\n')
  const jsonData = JSON.parse(jsonStr)
  
  const root = protobuf.parse(protoDef).root
  const messages = root.nestedArray.filter(n => n instanceof protobuf.Type) as protobuf.Type[]
  if (messages.length === 0) throw new Error('No message type found in proto definition')
  const messageType = messages[0]
  const message = messageType.create(jsonData)
  const buffer = messageType.encode(message).finish()
  
  return toHex(new Uint8Array(buffer))
}

export function protobufToJson(input: string): string {
  const lines = input.trim().split('\n')
  const splitIdx = lines.findIndex(l => l.trim() === '---DATA---')
  if (splitIdx === -1) throw new Error('Format: proto definition, then ---DATA---, then hex-encoded protobuf')
  
  const protoDef = lines.slice(0, splitIdx).join('\n')
  const hexStr = lines.slice(splitIdx + 1).join('\n').trim()
  
  const root = protobuf.parse(protoDef).root
  const messages = root.nestedArray.filter(n => n instanceof protobuf.Type) as protobuf.Type[]
  if (messages.length === 0) throw new Error('No message type found')
  const messageType = messages[0]
  const buffer = fromHex(hexStr)
  const decoded = messageType.toObject(messageType.decode(buffer), { defaults: true, enums: String })
  
  return JSON.stringify(decoded, null, 2)
}

// Apache Avro
export function jsonToAvro(input: string): string {
  const parsed = JSON.parse(input)
  function inferAvroSchema(value: unknown, name = 'RootType'): Record<string, unknown> {
    if (value === null) return { type: 'null' }
    if (Array.isArray(value)) {
      return {
        type: 'array',
        items: value.length > 0 ? inferAvroSchema(value[0]) : { type: 'null' }
      }
    }
    if (typeof value === 'object' && value !== null) {
      const fields = Object.entries(value as Record<string, unknown>).map(([k, v]) => ({
        name: k,
        type: inferAvroSchema(v, k)
      }))
      return { type: 'record', name, fields }
    }
    const typeMap: Record<string, string> = { string: 'string', number: 'double', boolean: 'boolean' }
    return { type: typeMap[typeof value] || 'string' }
  }
  const schema = inferAvroSchema(parsed)
  return JSON.stringify(schema, null, 2)
}

function sampleFromAvroType(schema: Record<string, unknown>): unknown {
  const type = schema.type as string
  if (Array.isArray(type)) {
    const preferred = type.find((t: string) => t !== 'null')
    if (preferred) {
      if (preferred === 'null') return null
      const result = sampleFromAvroType({ type: preferred, ...schema })
      return result
    }
    return null
  }
  switch (type) {
    case 'string': return 'example'
    case 'int':
    case 'long': return 1
    case 'float':
    case 'double': return 1.0
    case 'boolean': return true
    case 'null': return null
    case 'bytes': return '\\u0000\\u0001\\u0002'
    case 'array': {
      const items = (schema.items ? sampleFromAvroType(schema.items as Record<string, unknown>) : null)
      return items !== null ? [items] : []
    }
    case 'map': {
      const values = schema.values ? sampleFromAvroType(schema.values as Record<string, unknown>) : null
      return values !== null ? { key: values } : {}
    }
    case 'record':
    case 'error': {
      const fields = (schema.fields as Array<Record<string, unknown>>) || []
      const result: Record<string, unknown> = {}
      for (const f of fields) {
        const fieldType = f.type as Record<string, unknown>
        result[f.name as string] = sampleFromAvroType(fieldType)
      }
      return result
    }
    case 'enum': {
      const symbols = schema.symbols as string[] || []
      return symbols[0] || 'SYMBOL'
    }
    case 'fixed':
      return '(fixed binary)'
    default: return null
  }
}

export function avroToJson(input: string): string {
  const parsed = JSON.parse(input)
  let schema: Record<string, unknown>
  let schemaObj: Record<string, unknown> | null = null

  if (parsed.schema) {
    schema = typeof parsed.schema === 'string' ? JSON.parse(parsed.schema as string) : parsed.schema
  } else {
    schema = parsed
  }

  if (!schema.type) throw new Error('Invalid Avro schema: missing type')

  const sample = sampleFromAvroType(schema)
  const result: Record<string, unknown> = {
    schema: JSON.parse(JSON.stringify(schema)),
    sample: sample
  }
  if (parsed.data) {
    try {
      result.parsedData = typeof parsed.data === 'string' ? JSON.parse(parsed.data) : parsed.data
    } catch {
      result.rawData = parsed.data
    }
  }

  return JSON.stringify(result, null, 2)
}
