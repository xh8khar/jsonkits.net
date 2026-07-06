export function jsonToMarkdown(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed, null, 2)
  return `\`\`\`json\n${json}\n\`\`\``
}

export function markdownToJson(input: string): string {
  const match = input.match(/```(?:json)?\s*\n([\s\S]*?)\n```/)
  if (!match) throw new Error('No JSON code block found in Markdown')
  const parsed = JSON.parse(match[1])
  return JSON.stringify(parsed, null, 2)
}

export function jsonToNestedToFlat(input: string): string {
  const parsed = JSON.parse(input)
  const result = flatten(parsed)
  return JSON.stringify(result, null, 2)
}

function flatten(obj: unknown, prefix = ''): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  if (typeof obj !== 'object' || obj === null) {
    result[prefix] = obj
    return result
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) { result[prefix] = [] as unknown[]; return result }
    obj.forEach((v, i) => Object.assign(result, flatten(v, `${prefix}[${i}]`)))
    return result
  }
  const entries = Object.entries(obj as Record<string, unknown>)
  if (entries.length === 0) { result[prefix] = {}; return result }
  for (const [k, v] of entries) {
    const key = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'object' && v !== null) Object.assign(result, flatten(v, key))
    else result[key] = v
  }
  return result
}

export function jsonToFlatToNested(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('Input must be a flat key-value object')
  }
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
    setNested(result, key, value)
  }
  return JSON.stringify(result, null, 2)
}

function setNested(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean)
  let current = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    const nextIsArray = /^\d+$/.test(keys[i + 1])
    if (!current[k] || typeof current[k] !== 'object') {
      current[k] = nextIsArray ? [] : {}
    }
    current = current[k] as Record<string, unknown>
  }
  const lastKey = keys[keys.length - 1]
  if (/^\d+$/.test(lastKey)) {
    const arr = current as unknown as unknown[]
    arr[Number(lastKey)] = value
  } else {
    current[lastKey] = value
  }
}

export function jsonToKeyValue(input: string): string {
  const parsed = JSON.parse(input)
  const flat = flatten(parsed)
  return Object.entries(flat).map(([k, v]) => `${k}: ${v ?? ''}`).join('\n')
}

export function keyValueToJson(input: string): string {
  const result: Record<string, unknown> = {}
  for (const line of input.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    let idx = trimmed.indexOf(':')
    if (idx === -1) idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    let value: unknown = trimmed.slice(idx + 1).trim()
    if (value === 'true') value = true
    else if (value === 'false') value = false
    else if (value === 'null') value = null
    else { const n = Number(value); if (!isNaN(n) && value !== '') value = n }
    setNested(result, key, value)
  }
  return JSON.stringify(result, null, 2)
}

function jsonSchemaFromValue(value: unknown, title?: string): Record<string, unknown> {
  if (value === null) return { type: 'null' }
  if (Array.isArray(value)) {
    if (value.length === 0) return { type: 'array', items: {} }
    const itemSchemas = value.map(v => jsonSchemaFromValue(v))
    return { type: 'array', items: itemSchemas[0] }
  }
  if (typeof value === 'object') {
    const properties: Record<string, unknown> = {}
    const required: string[] = []
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      properties[k] = jsonSchemaFromValue(v)
      required.push(k)
    }
    const schema: Record<string, unknown> = { type: 'object', properties }
    if (required.length) schema.required = required
    if (title) schema.title = title
    return schema
  }
  switch (typeof value) {
    case 'string': return { type: 'string' }
    case 'boolean': return { type: 'boolean' }
    case 'number': return Number.isInteger(value) ? { type: 'integer' } : { type: 'number' }
    default: return {}
  }
}

export function jsonToSchema(input: string): string {
  const parsed = JSON.parse(input)
  const schema = jsonSchemaFromValue(parsed, 'GeneratedSchema')
  const full: Record<string, unknown> = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...schema
  }
  return JSON.stringify(full, null, 2)
}

export function schemaToJson(input: string): string {
  const schema = JSON.parse(input)
  const sample = generateSample(schema)
  return JSON.stringify(sample, null, 2)
}

function generateSample(schema: Record<string, unknown>): unknown {
  if (schema.example !== undefined) return schema.example
  if (schema.default !== undefined) return schema.default
  if (schema.enum && Array.isArray(schema.enum)) return schema.enum[0]
  const type = schema.type
  if (Array.isArray(type)) return generateSample({ ...schema, type: type[0] })

  if (type === 'object' || schema.properties) {
    const result: Record<string, unknown> = {}
    const props = schema.properties as Record<string, unknown> | undefined
    if (props) {
      for (const [k, v] of Object.entries(props)) {
        result[k] = generateSample(v as Record<string, unknown>)
      }
    }
    return result
  }
  if (type === 'array') {
    const items = schema.items as Record<string, unknown> | undefined
    return items ? [generateSample(items)] : []
  }
  if (type === 'string') return 'string'
  if (type === 'integer') return 0
  if (type === 'number') return 0.0
  if (type === 'boolean') return true
  if (type === 'null') return null
  return null
}

export function jsonToNdjson(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  return arr.map(item => JSON.stringify(item)).join('\n')
}

export function ndjsonToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim())
  const result = lines.map(line => JSON.parse(line))
  return JSON.stringify(result, null, 2)
}

export function jsonToGeojson(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const features = arr.map((item: Record<string, unknown>, i: number) => {
    const coords = item.longitude !== undefined ? [item.longitude, item.latitude] :
      item.lon !== undefined ? [item.lon, item.lat] :
      item.lng !== undefined ? [item.lng, item.lat] : [0, 0]
    const props = { ...item }
    delete (props as Record<string, unknown>).longitude
    delete (props as Record<string, unknown>).latitude
    delete (props as Record<string, unknown>).lon
    delete (props as Record<string, unknown>).lat
    delete (props as Record<string, unknown>).lng
    return {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: coords },
      properties: Object.keys(props).length ? props : { id: i }
    }
  })
  return JSON.stringify({ type: 'FeatureCollection', features }, null, 2)
}

export function geojsonToJson(input: string): string {
  const parsed = JSON.parse(input)
  const features = parsed.features || parsed.type === 'Feature' ? [parsed] : []
  const result = features.map((f: Record<string, unknown>) => {
    const props = { ...(f.properties as Record<string, unknown> || {}) }
    const geom = f.geometry as Record<string, unknown> | undefined
    if (geom?.type === 'Point') {
      const coords = geom.coordinates as number[]
      props.longitude = coords[0]
      props.latitude = coords[1]
    }
    return props
  })
  return JSON.stringify(result.length === 1 ? result[0] : result, null, 2)
}

export function jsonEscape(input: string): string {
  JSON.parse(input)
  return input
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
}

export function jsonUnescape(input: string): string {
  const result = input
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
  JSON.parse(result)
  return result
}

export function jsonSortKeys(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(sortObject(parsed), null, 2)
}

function sortObject(obj: unknown): unknown {
  if (typeof obj !== 'object' || obj === null) return obj
  if (Array.isArray(obj)) return obj.map(sortObject)
  const sorted: Record<string, unknown> = {}
  for (const key of Object.keys(obj as Record<string, unknown>).sort()) {
    sorted[key] = sortObject((obj as Record<string, unknown>)[key])
  }
  return sorted
}

export function jsonRemoveNulls(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(removeNulls(parsed), null, 2)
}

function removeNulls(obj: unknown): unknown {
  if (typeof obj !== 'object' || obj === null) return obj
  if (Array.isArray(obj)) return obj.map(removeNulls).filter(v => v !== null)
  const result: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    if (v === null || v === undefined) continue
    result[k] = removeNulls(v)
  }
  return result
}

export function jsonSizeCalculator(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const json = JSON.stringify(parsed)
    const minified = JSON.stringify(parsed)
    const formatted = JSON.stringify(parsed, null, 2)
    const keys = countKeys(parsed)
    const arrays = countArrays(parsed)
    const strings = countStrings(parsed)
    const numbers = countNumbers(parsed)
    const booleans = countBooleans(parsed)
    const nulls = countNulls(parsed)
    return JSON.stringify({
      rawBytes: input.length,
      minifiedBytes: minified.length,
      formattedBytes: formatted.length,
      savings: Math.round((1 - minified.length / input.length) * 100) + '%',
      totalKeys: keys,
      totalArrays: arrays,
      totalStrings: strings,
      totalNumbers: numbers,
      totalBooleans: booleans,
      totalNulls: nulls,
      totalElements: keys + arrays + strings + numbers + booleans + nulls,
      depth: getDepth(parsed)
    }, null, 2)
  } catch {
    throw new Error('Invalid JSON')
  }
}

function countKeys(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countKeys(v), 0)
  let c = Object.keys(obj).length
  for (const v of Object.values(obj as Record<string, unknown>)) c += countKeys(v)
  return c
}

function countArrays(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return 1 + obj.reduce((s, v) => s + countArrays(v), 0)
  let c = 0
  for (const v of Object.values(obj as Record<string, unknown>)) c += countArrays(v)
  return c
}

function countStrings(obj: unknown): number {
  if (typeof obj === 'string') return 1
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countStrings(v), 0)
  let c = 0
  for (const v of Object.values(obj as Record<string, unknown>)) c += countStrings(v)
  return c
}

function countNumbers(obj: unknown): number {
  if (typeof obj === 'number') return 1
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countNumbers(v), 0)
  let c = 0
  for (const v of Object.values(obj as Record<string, unknown>)) c += countNumbers(v)
  return c
}

function countBooleans(obj: unknown): number {
  if (typeof obj === 'boolean') return 1
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countBooleans(v), 0)
  let c = 0
  for (const v of Object.values(obj as Record<string, unknown>)) c += countBooleans(v)
  return c
}

function countNulls(obj: unknown): number {
  if (obj === null) return 1
  if (typeof obj !== 'object') return 0
  if (Array.isArray(obj)) return obj.reduce((s, v) => s + countNulls(v), 0)
  let c = 0
  for (const v of Object.values(obj as Record<string, unknown>)) c += countNulls(v)
  return c
}

function getDepth(obj: unknown): number {
  if (typeof obj !== 'object' || obj === null) return 0
  if (Array.isArray(obj)) return 1 + (obj.length ? Math.max(...obj.map(getDepth)) : 0)
  return 1 + Math.max(0, ...Object.values(obj as Record<string, unknown>).map(v => getDepth(v)))
}

export function jsonMerge(input: string): string {
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
      try {
        objs.push(JSON.parse(current.trim().replace(/,\s*$/, '')))
        current = ''
      } catch { continue }
    }
  }
  if (current.trim()) {
    try { objs.push(JSON.parse(current.trim())) } catch { /* ignore */ }
  }
  if (objs.length < 2) throw new Error('Need at least two JSON objects to merge')
  const merged = deepMerge(objs[0], objs[1])
  return JSON.stringify(merged, null, 2)
}

function deepMerge(a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...a }
  for (const [k, v] of Object.entries(b)) {
    if (typeof v === 'object' && v !== null && !Array.isArray(v) &&
        typeof result[k] === 'object' && result[k] !== null && !Array.isArray(result[k])) {
      result[k] = deepMerge(result[k] as Record<string, unknown>, v as Record<string, unknown>)
    } else {
      result[k] = v
    }
  }
  return result
}

export function jsonDepthAnalyzer(input: string): string {
  const parsed = JSON.parse(input)
  const stats = analyzeDepth(parsed, 0)
  return JSON.stringify({
    maxDepth: stats.maxDepth,
    averageDepth: Math.round(stats.totalDepth / stats.count * 100) / 100,
    totalNodes: stats.count,
    leafNodes: stats.leaves,
    branchingFactor: Math.round(stats.branches / stats.objects * 100) / 100,
    rootType: Array.isArray(parsed) ? 'Array' : typeof parsed === 'object' && parsed !== null ? 'Object' : typeof parsed,
    rootKeys: typeof parsed === 'object' && parsed !== null ? Object.keys(parsed as Record<string, unknown>).length : 0
  }, null, 2)
}

function analyzeDepth(obj: unknown, depth: number): { maxDepth: number; totalDepth: number; count: number; leaves: number; branches: number; objects: number } {
  if (typeof obj !== 'object' || obj === null) {
    return { maxDepth: depth, totalDepth: depth, count: 1, leaves: 1, branches: 0, objects: 0 }
  }
  let maxDepth = depth
  let totalDepth = depth
  let count = 1
  let leaves = 0
  let branches = 0
  let objects = 1

  const items = Array.isArray(obj) ? obj : Object.values(obj as Record<string, unknown>)
  for (const item of items) {
    const sub = analyzeDepth(item, depth + 1)
    maxDepth = Math.max(maxDepth, sub.maxDepth)
    totalDepth += sub.totalDepth
    count += sub.count
    leaves += sub.leaves
    branches += sub.branches
    objects += sub.objects
  }
  if (items.length > 1) branches += items.length
  return { maxDepth, totalDepth, count, leaves, branches, objects }
}

export function jsonPathTester(input: string): string {
  const lines = input.split('\n')
  const jsonInput: string[] = []
  const pathInput: string[] = []
  let inPath = false
  for (const line of lines) {
    if (line.trim().startsWith('$') || line.trim().startsWith('.')) {
      inPath = true
    }
    if (inPath) pathInput.push(line)
    else jsonInput.push(line)
  }

  const json = JSON.parse(jsonInput.join('\n'))
  const path = pathInput.join('\n').trim()
  if (!path) throw new Error('No JSONPath provided. Add a JSONPath expression like $.store.book[0].title')

  const tokens = path.replace(/^\$\.?/, '').split(/\.|(?=\[)/).filter(Boolean)
  let current: unknown = json
  const results: unknown[] = []

  for (const token of tokens) {
    if (token.startsWith('[') && token.endsWith(']')) {
      const inner = token.slice(1, -1)
      if (inner === '*') {
        if (Array.isArray(current)) results.push(...current)
        else if (typeof current === 'object' && current !== null) results.push(...Object.values(current as Record<string, unknown>))
      } else if (!isNaN(Number(inner))) {
        if (Array.isArray(current)) current = current[Number(inner)]
        else throw new Error(`Cannot index non-array with [${inner}]`)
      } else {
        const filters = inner.split('?').filter(Boolean)
        for (const filter of filters) {
          if (Array.isArray(current)) {
            results.push(...current)
          }
        }
        current = results.length ? results : current
      }
    } else {
      if (token === '*') {
        if (typeof current === 'object' && current !== null) {
          results.push(...Object.values(current as Record<string, unknown>))
        }
      } else if (typeof current === 'object' && current !== null) {
        current = (current as Record<string, unknown>)[token]
      } else {
        throw new Error(`Cannot access '${token}' on non-object`)
      }
    }
  }

  if (results.length > 0) {
    return JSON.stringify(results.length === 1 ? results[0] : results, null, 2)
  }
  return JSON.stringify(current, null, 2)
}

// ---- Firestore ----
export function jsonToFirestore(input: string): string {
  function toFirestoreValue(val: unknown): Record<string, unknown> {
    if (val === null) return { nullValue: null }
    if (typeof val === 'boolean') return { booleanValue: val }
    if (typeof val === 'number') return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val }
    if (typeof val === 'string') return { stringValue: val }
    if (Array.isArray(val)) return { arrayValue: { values: val.map(toFirestoreValue) } }
    if (typeof val === 'object') {
      const fields: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) fields[k] = toFirestoreValue(v)
      return { mapValue: { fields } }
    }
    return {}
  }
  const parsed = JSON.parse(input)
  return JSON.stringify(toFirestoreValue(parsed), null, 2)
}

export function firestoreToJson(input: string): string {
  function fromFirestoreValue(obj: Record<string, unknown>): unknown {
    if (obj.nullValue !== undefined) return null
    if (obj.booleanValue !== undefined) return obj.booleanValue
    if (obj.integerValue !== undefined) return parseInt(obj.integerValue as string, 10)
    if (obj.doubleValue !== undefined) return obj.doubleValue
    if (obj.stringValue !== undefined) return obj.stringValue
    if (obj.arrayValue) {
      const arr = (obj.arrayValue as Record<string, unknown>).values as Record<string, unknown>[] | undefined
      return arr ? arr.map(fromFirestoreValue) : []
    }
    if (obj.mapValue) {
      const fields = (obj.mapValue as Record<string, unknown>).fields as Record<string, Record<string, unknown>> | undefined
      const result: Record<string, unknown> = {}
      if (fields) for (const [k, v] of Object.entries(fields)) result[k] = fromFirestoreValue(v)
      return result
    }
    return obj
  }
  const parsed = JSON.parse(input)
  return JSON.stringify(fromFirestoreValue(parsed), null, 2)
}

// ---- GraphQL Schema ----
export function jsonToGraphQLSchema(input: string): string {
  function inferGraphQLType(val: unknown, name: string): string {
    if (val === null) return `${name}: String`
    if (typeof val === 'boolean') return `${name}: Boolean`
    if (typeof val === 'number') return `${name}: ${Number.isInteger(val) ? 'Int' : 'Float'}`
    if (typeof val === 'string') return `${name}: String`
    if (Array.isArray(val)) {
      if (val.length === 0) return `${name}: [String]`
      return `${name}: [${inferGraphQLType(val[0], '').split(':')[1]?.trim() || 'String'}]`
    }
    if (typeof val === 'object') {
      const lines: string[] = [`type ${name} {`]
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        lines.push(`  ${inferGraphQLType(v, k)}`)
      }
      lines.push('}')
      return lines.join('\n')
    }
    return `${name}: String`
  }
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('Input must be a JSON object or array')
  if (Array.isArray(parsed)) {
    if (parsed.length === 0) return 'type Root {\n  items: [String]\n}'
    return inferGraphQLType(parsed[0], 'Root')
  }
  return inferGraphQLType(parsed, 'Root')
}

export function graphQLSchemaToJson(input: string): string {
  const typeMatch = input.match(/type\s+(\w+)\s*\{([^}]+)\}/)
  if (!typeMatch) throw new Error('No GraphQL type definition found')
  const fields = typeMatch[2].trim()
  const result: Record<string, unknown> = {}
  for (const line of fields.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const parts = trimmed.split(':')
    if (parts.length < 2) continue
    const fieldName = parts[0].trim()
    const fieldType = parts.slice(1).join(':').trim()
    result[fieldName] = fieldType.startsWith('Int') ? 0 :
      fieldType.startsWith('Float') ? 0.0 :
      fieldType.startsWith('Boolean') ? true :
      fieldType.startsWith('[') ? [] : 'string'
  }
  return JSON.stringify(result, null, 2)
}

// ---- OpenAPI ----
export function jsonToOpenAPI(input: string): string {
  function inferOpenAPIType(val: unknown): Record<string, unknown> {
    if (val === null) return { type: 'object', nullable: true, properties: {} }
    if (typeof val === 'boolean') return { type: 'boolean' }
    if (typeof val === 'number') {
      const schema: Record<string, unknown> = Number.isInteger(val) ? { type: 'integer' } : { type: 'number' }
      return schema
    }
    if (typeof val === 'string') return { type: 'string' }
    if (Array.isArray(val)) {
      const itemType = val.length > 0 ? inferOpenAPIType(val[0]) : { type: 'string' }
      return { type: 'array', items: itemType }
    }
    if (typeof val === 'object') {
      const properties: Record<string, unknown> = {}
      const required: string[] = []
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        properties[k] = inferOpenAPIType(v)
        required.push(k)
      }
      return { type: 'object', properties, required }
    }
    return {}
  }
  const parsed = JSON.parse(input)
  const schema = inferOpenAPIType(parsed)
  const full: Record<string, unknown> = {
    openapi: '3.0.3',
    info: { title: 'Generated API', version: '1.0.0', description: 'Auto-generated from JSON data' },
    paths: {},
    components: { schemas: { GeneratedModel: schema } }
  }
  return JSON.stringify(full, null, 2)
}

export function openapiToJson(input: string): string {
  const parsed = JSON.parse(input)
  const schemas = parsed.components?.schemas || {}
  const firstKey = Object.keys(schemas)[0]
  if (!firstKey) throw new Error('No schemas found in OpenAPI spec')
  const schema = schemas[firstKey]
  const sample = generateSample(schema)
  return JSON.stringify(sample, null, 2)
}

// ---- Binary ----
export function jsonToBinary(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed)
  let binary = ''
  for (let i = 0; i < json.length; i++) {
    binary += json.charCodeAt(i).toString(2).padStart(8, '0')
  }
  return binary
}

export function binaryToJson(input: string): string {
  const clean = input.replace(/\s+/g, '')
  if (clean.length % 8 !== 0) throw new Error('Binary string length must be a multiple of 8')
  let json = ''
  for (let i = 0; i < clean.length; i += 8) {
    const byte = clean.slice(i, i + 8)
    json += String.fromCharCode(parseInt(byte, 2))
  }
  JSON.parse(json)
  return json
}

// ---- Mermaid ----
export function jsonToMermaid(input: string): string {
  const parsed = JSON.parse(input)
  const lines: string[] = ['graph TD']
  let nodeId = 0
  function walk(obj: unknown, parentId: string | null): void {
    if (typeof obj !== 'object' || obj === null) {
      const val = String(obj ?? 'null').substring(0, 20)
      const id = `N${nodeId++}`
      lines.push(`  ${id}["${val}"]`)
      if (parentId) lines.push(`  ${parentId} --> ${id}`)
      return
    }
    if (Array.isArray(obj)) {
      const id = `N${nodeId++}`
      lines.push(`  ${id}["Array(${obj.length})"]`)
      if (parentId) lines.push(`  ${parentId} --> ${id}`)
      for (let i = 0; i < Math.min(obj.length, 10); i++) walk(obj[i], id)
      return
    }
    const id = parentId ? `N${nodeId++}` : (parentId || 'root')
    if (!parentId) lines[0] = `  root["Object"]`
    else {
      lines.push(`  ${id}["Object"]`)
      lines.push(`  ${parentId} --> ${id}`)
    }
    const entries = Object.entries(obj as Record<string, unknown>)
    for (let i = 0; i < Math.min(entries.length, 15); i++) {
      const [k, v] = entries[i]
      const childId = `N${nodeId++}`
      const label = String(k).substring(0, 15)
      if (typeof v === 'object' && v !== null) {
        lines.push(`  ${childId}["${label}"]`)
        lines.push(`  ${id} --> ${childId}`)
        walk(v, childId)
      } else {
        const val = String(v ?? 'null').substring(0, 18)
        lines.push(`  ${childId}["${label}: ${val}"]`)
        lines.push(`  ${id} --> ${childId}`)
      }
    }
  }
  walk(parsed, null)
  return lines.join('\n')
}

export function mermaidToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim() && !l.trim().startsWith('graph'))
  const result: Record<string, unknown> = {}
  for (const line of lines) {
    const trimmed = line.trim()
    const arrowMatch = trimmed.match(/N\d+\["([^"]+)"\]\s*-->\s*N\d+\["([^"]+)"\]/)
    if (arrowMatch) {
      const parent = arrowMatch[1]
      const child = arrowMatch[2]
      if (!result[parent]) result[parent] = []
      const childParts = child.split(':')
      if (childParts.length > 1) {
        const val = childParts[1].trim()
        const num = Number(val)
        if (childParts[0] === 'Array') continue
        if (!result[parent]) result[parent] = {}
        ;(result[parent] as Record<string, unknown>)[childParts[0].trim()] = isNaN(num) ? val : num
      }
    }
  }
  if (Object.keys(result).length === 0) {
    for (const line of lines) {
      const m = line.trim().match(/N\d+\["([^"]+)"\]/)
      if (m) {
        const val = m[1]
        const parts = val.split(':')
        if (parts.length > 1) result[parts[0].trim()] = parts[1].trim()
      }
    }
  }
  return JSON.stringify(result, null, 2)
}

// ---- README ----
export function jsonToReadme(input: string): string {
  const parsed = JSON.parse(input)
  const lines: string[] = [`# JSON Data\n`, `Auto-generated from JSON document.`, ``, `## Structure`, ``]
  function describe(obj: unknown, indent = ''): void {
    if (typeof obj !== 'object' || obj === null) {
      lines.push(`${indent}- Value: \`${String(obj ?? 'null').substring(0, 30)}\``)
      return
    }
    if (Array.isArray(obj)) {
      lines.push(`${indent}- Array (${obj.length} items)`)
      for (let i = 0; i < Math.min(obj.length, 5); i++) describe(obj[i], indent + '  ')
      if (obj.length > 5) lines.push(`${indent}  - ... and ${obj.length - 5} more items`)
      return
    }
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const type = Array.isArray(v) ? 'array' : typeof v
      lines.push(`${indent}- **${k}** (*${type}*)`)
      describe(v, indent + '  ')
    }
  }
  describe(parsed)
  lines.push(``, `## Raw Data`, ``)
  const json = JSON.stringify(parsed, null, 2)
  lines.push('```json')
  lines.push(json.substring(0, 2000))
  if (json.length > 2000) lines.push('... (truncated)')
  lines.push('```')
  return lines.join('\n')
}

export function readmeToJson(input: string): string {
  const jsonMatch = input.match(/```json\s*\n([\s\S]*?)\n```/)
  if (!jsonMatch) {
    const lines = input.split('\n')
    const result: Record<string, unknown> = {}
    let currentKey = ''
    for (const line of lines) {
      const boldMatch = line.match(/\*\*([^*]+)\*\*\s*\((\w+)\)/)
      if (boldMatch) {
        currentKey = boldMatch[1]
        const type = boldMatch[2]
        if (type === 'number') result[currentKey] = 0
        else if (type === 'boolean') result[currentKey] = true
        else if (type === 'array') result[currentKey] = []
        else if (type === 'object') result[currentKey] = {}
        else result[currentKey] = 'value'
      }
    }
    return JSON.stringify(Object.keys(result).length ? result : { note: 'No structured data found' }, null, 2)
  }
  const parsed = JSON.parse(jsonMatch[1])
  return JSON.stringify(parsed, null, 2)
}

// ---- Array (Object ↔ Array of pairs) ----
export function jsonToArray(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('Input must be a JSON object')
  }
  const result = Object.entries(parsed as Record<string, unknown>).map(([key, value]) => ({ key, value }))
  return JSON.stringify(result, null, 2)
}

export function arrayToJson(input: string): string {
  const parsed = JSON.parse(input)
  if (!Array.isArray(parsed)) throw new Error('Input must be a JSON array of {key, value} objects')
  const result: Record<string, unknown> = {}
  for (const item of parsed) {
    if (item && typeof item === 'object' && 'key' in item) {
      result[String(item.key)] = item.value
    }
  }
  return JSON.stringify(result, null, 2)
}

// ---- Tree View ----
export function jsonToTree(input: string): string {
  const parsed = JSON.parse(input)
  const lines: string[] = []
  function walk(obj: unknown, indent = '', prefix = ''): void {
    if (typeof obj !== 'object' || obj === null) {
      lines.push(`${indent}${prefix}${String(obj ?? 'null').substring(0, 40)}`)
      return
    }
    if (Array.isArray(obj)) {
      lines.push(`${indent}${prefix}Array [${obj.length}]`)
      for (let i = 0; i < obj.length; i++) {
        const isLast = i === obj.length - 1
        walk(obj[i], indent + (isLast ? '    ' : '│   '), isLast ? '└── ' : '├── ')
      }
      return
    }
    if (!prefix && !indent) lines.push(`${indent}${prefix}Object`)
    else if (prefix) lines.push(`${indent}${prefix}Object`)
    const entries = Object.entries(obj as Record<string, unknown>)
    for (let i = 0; i < entries.length; i++) {
      const [k, v] = entries[i]
      const isLast = i === entries.length - 1
      const connector = isLast ? '└── ' : '├── '
      if (typeof v === 'object' && v !== null) {
        lines.push(`${indent}${connector}${k}`)
        walk(v, indent + (isLast ? '    ' : '│   '), '')
      } else {
        const val = String(v ?? 'null').substring(0, 40)
        lines.push(`${indent}${connector}${k}: ${val}`)
      }
    }
  }
  walk(parsed)
  return lines.join('\n')
}

export function treeToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim())
  const root: Record<string, unknown> = {}
  const stack: { indent: number; obj: Record<string, unknown> }[] = [{ indent: -1, obj: root }]

  function getIndent(line: string): number {
    let c = 0
    for (const ch of line) {
      if (ch === ' ' || ch === '│') c++
      else break
    }
    return Math.floor(c / 2)
  }

  for (const line of lines) {
    const trimmed = line.replace(/^[│ ]*[├└]──\s*/, '').trim()
    if (!trimmed) continue
    const indent = getIndent(line)
    const colonIdx = trimmed.indexOf(':')
    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) stack.pop()
    const parent = stack[stack.length - 1]
    if (!parent) continue

    if (colonIdx === -1) {
      const newObj: Record<string, unknown> = {}
      parent.obj[trimmed] = newObj
      stack.push({ indent, obj: newObj })
    } else {
      const key = trimmed.slice(0, colonIdx).trim()
      const val = trimmed.slice(colonIdx + 1).trim()
      const num = Number(val)
      parent.obj[key] = val === '' ? '' : isNaN(num) ? val : num
    }
  }
  return JSON.stringify(root, null, 2)
}

// ---- Fake Data Generator ----
const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Berlin', 'Toronto', 'Mumbai', 'Seoul', 'Dubai']
const domains = ['example.com', 'test.org', 'demo.net', 'sample.io', 'mock.dev']

function fakeString(template?: string): string {
  if (template === 'name' || template === 'fullname') return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
  if (template === 'firstname') return firstNames[Math.floor(Math.random() * firstNames.length)]
  if (template === 'lastname') return lastNames[Math.floor(Math.random() * lastNames.length)]
  if (template === 'email') {
    const name = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()
    return `${name}@${domains[Math.floor(Math.random() * domains.length)]}`
  }
  if (template === 'city') return cities[Math.floor(Math.random() * cities.length)]
  if (template === 'url') return `https://${domains[Math.floor(Math.random() * domains.length)]}/${Math.random().toString(36).slice(2, 8)}`
  if (template === 'uuid') {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  }
  if (template === 'lorem' || template === 'text') return 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
  if (template === 'phone') return `+1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`
  return firstNames[Math.floor(Math.random() * firstNames.length)]
}

export function jsonFakeGenerator(input: string): string {
  const template = JSON.parse(input)
  function generate(tpl: unknown): unknown {
    if (typeof tpl === 'string') return fakeString(tpl.toLowerCase())
    if (typeof tpl === 'number') return Math.floor(Math.random() * 100)
    if (typeof tpl === 'boolean') return Math.random() > 0.5
    if (Array.isArray(tpl)) {
      if (tpl.length === 0) return []
      const arr = []
      const count = Math.floor(Math.random() * 3) + 1
      for (let i = 0; i < count; i++) arr.push(generate(tpl[0]))
      return arr
    }
    if (typeof tpl === 'object' && tpl !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(tpl as Record<string, unknown>)) result[k] = generate(v)
      return result
    }
    return tpl
  }
  return JSON.stringify(generate(template), null, 2)
}

// ---- Statistics ----
export function jsonStatistics(input: string): string {
  const parsed = JSON.parse(input)
  const stats = {
    totalNodes: 0,
    objects: 0,
    arrays: 0,
    strings: 0,
    numbers: 0,
    booleans: 0,
    nulls: 0,
    maxDepth: 0,
    totalKeys: 0,
    avgKeysPerObject: 0,
    rootType: Array.isArray(parsed) ? 'Array' : typeof parsed === 'object' && parsed !== null ? 'Object' : typeof parsed,
    sizeBytes: input.length,
    sizeMinified: JSON.stringify(parsed).length
  }

  let keyCounts: number[] = []

  function walk(obj: unknown, depth: number): void {
    stats.totalNodes++
    stats.maxDepth = Math.max(stats.maxDepth, depth)
    if (obj === null) { stats.nulls++; return }
    if (typeof obj === 'boolean') { stats.booleans++; return }
    if (typeof obj === 'number') { stats.numbers++; return }
    if (typeof obj === 'string') { stats.strings++; return }
    if (Array.isArray(obj)) {
      stats.arrays++
      for (const v of obj) walk(v, depth + 1)
      return
    }
    if (typeof obj === 'object') {
      stats.objects++
      const entries = Object.entries(obj as Record<string, unknown>)
      stats.totalKeys += entries.length
      keyCounts.push(entries.length)
      for (const [, v] of entries) walk(v, depth + 1)
    }
  }
  walk(parsed, 0)
  stats.avgKeysPerObject = keyCounts.length > 0 ? Math.round(stats.totalKeys / keyCounts.length * 100) / 100 : 0
  return JSON.stringify(stats, null, 2)
}

// ---- Filter by key paths ----
export function jsonFilter(input: string): string {
  const lines = input.split('\n')
  const paths: string[] = []
  let jsonStr = ''
  for (const line of lines) {
    if (line.includes('.') || line.startsWith('[') || /^[\w.\[\]'"*]+$/.test(line.trim())) {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('{') && !trimmed.startsWith('[') && !trimmed.startsWith('"')) {
        paths.push(trimmed)
        continue
      }
    }
    jsonStr += line + '\n'
  }
  const parsed = JSON.parse(jsonStr.trim())
  if (paths.length === 0) throw new Error('No filter paths provided. Add dot-notation paths on separate lines.')
  const result: Record<string, unknown> = {}
  for (const path of paths) {
    const keys = path.replace(/^\$\.?/, '').split(/\.|\[(\d+)\]/).filter(Boolean)
    let current: unknown = parsed
    let found = true
    for (const key of keys) {
      if (current && typeof current === 'object') {
        if (Array.isArray(current) && /^\d+$/.test(key)) {
          current = (current as unknown[])[Number(key)]
        } else {
          current = (current as Record<string, unknown>)[key]
        }
      } else { found = false; break }
    }
    if (found) result[path] = current
  }
  return JSON.stringify(result, null, 2)
}

// ---- Remove Empty ----
export function jsonRemoveEmpty(input: string): string {
  function clean(obj: unknown): unknown {
    if (typeof obj !== 'object' || obj === null) return obj
    if (Array.isArray(obj)) {
      const cleaned = obj.map(clean).filter(v => v !== undefined)
      if (cleaned.length === 0) return undefined
      return cleaned
    }
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const cleaned = clean(v)
      if (cleaned === undefined) continue
      if (typeof cleaned === 'object' && cleaned !== null) {
        if (Array.isArray(cleaned) && cleaned.length === 0) continue
        if (!Array.isArray(cleaned) && Object.keys(cleaned).length === 0) continue
      }
      result[k] = cleaned
    }
    return Object.keys(result).length > 0 ? result : undefined
  }
  const parsed = JSON.parse(input)
  const result = clean(parsed)
  return JSON.stringify(result, null, 2)
}

// ---- Detect Circular ----
export function jsonDetectCircular(input: string): string {
  const parsed = JSON.parse(input)
  const seen = new Set<unknown>()
  const paths: string[] = []

  function walk(obj: unknown, path: string): void {
    if (typeof obj !== 'object' || obj === null) return
    if (seen.has(obj)) {
      paths.push(`Circular reference at: ${path}`)
      return
    }
    seen.add(obj)
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) walk(obj[i], `${path}[${i}]`)
    } else {
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) walk(v, `${path}.${k}`)
    }
    seen.delete(obj)
  }

  try { walk(parsed, '$') } catch { paths.push('Error during circular detection') }
  if (paths.length === 0) paths.push('No circular references detected')
  return JSON.stringify({ circularRefs: paths.length, details: paths }, null, 2)
}

// ---- Rename Keys ----
export function jsonRenameKeys(input: string): string {
  const lines = input.split('\n')
  const mapping: Record<string, string> = {}
  let jsonStr = ''
  let inMapping = true
  for (const line of lines) {
    if (inMapping) {
      const colonIdx = line.indexOf(':')
      if (colonIdx > 0) {
        const oldKey = line.slice(0, colonIdx).trim()
        const newKey = line.slice(colonIdx + 1).trim()
        if (oldKey && newKey) { mapping[oldKey] = newKey; continue }
      }
    }
    inMapping = false
    jsonStr += line + '\n'
  }
  const parsed = JSON.parse(jsonStr.trim())
  if (Object.keys(mapping).length === 0 && Object.keys(parsed).length > 0) return input

  function rename(obj: unknown): unknown {
    if (typeof obj !== 'object' || obj === null) return obj
    if (Array.isArray(obj)) return obj.map(rename)
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      result[mapping[k] || k] = rename(v)
    }
    return result
  }
  return JSON.stringify(rename(parsed), null, 2)
}

// ---- Convert Arrays (transpose) ----
export function jsonConvertArrays(input: string): string {
  const parsed = JSON.parse(input)
  if (!Array.isArray(parsed)) throw new Error('Input must be an array of objects')
  if (parsed.length === 0) return '{}'
  const keys = Object.keys(parsed[0] as Record<string, unknown>)
  const result: Record<string, unknown[]> = {}
  for (const key of keys) {
    result[key] = parsed.map(item => (item as Record<string, unknown>)[key])
  }
  return JSON.stringify(result, null, 2)
}

export function jsonConvertObjects(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('Input must be an object of arrays')
  }
  const keys = Object.keys(parsed as Record<string, unknown>)
  if (keys.length === 0) return '[]'
  const length = Math.max(...keys.map(k => Array.isArray((parsed as Record<string, unknown>)[k]) ? ((parsed as Record<string, unknown>)[k] as unknown[]).length : 0))
  const result: Record<string, unknown>[] = []
  for (let i = 0; i < length; i++) {
    const item: Record<string, unknown> = {}
    for (const key of keys) {
      const arr = (parsed as Record<string, unknown>)[key]
      item[key] = Array.isArray(arr) ? (arr as unknown[])[i] : undefined
    }
    result.push(item)
  }
  return JSON.stringify(result, null, 2)
}

// ---- Normalize ----
export function jsonNormalize(input: string): string {
  const parsed = JSON.parse(input)

  function normalize(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map(normalize)
    const sorted: Record<string, unknown> = {}
    for (const key of Object.keys(val as Record<string, unknown>).sort()) {
      sorted[key] = normalize((val as Record<string, unknown>)[key])
    }
    return sorted
  }
  return JSON.stringify(normalize(parsed), null, 2)
}

// ---- Custom Stringify ----
export function jsonCustomStringify(input: string): string {
  const lines = input.split('\n')
  let indentStr = '  '
  let sort = false
  const jsonLines: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('indent:') || trimmed.startsWith('INDENT:')) {
      const val = trimmed.split(':')[1]?.trim()
      if (val === 'tab' || val === '\\t') indentStr = '\t'
      else if (val === '0' || val === 'none') indentStr = ''
      else if (!isNaN(Number(val))) indentStr = ' '.repeat(Math.min(Number(val), 10))
      continue
    }
    if (trimmed.startsWith('sort:') || trimmed.startsWith('SORT:')) {
      sort = trimmed.split(':')[1]?.trim() === 'true'
      continue
    }
    jsonLines.push(line)
  }

  let parsed = JSON.parse(jsonLines.join('\n').trim())
  if (sort) {
    function sortObj(val: unknown): unknown {
      if (typeof val !== 'object' || val === null) return val
      if (Array.isArray(val)) return val.map(sortObj)
      const result: Record<string, unknown> = {}
      for (const key of Object.keys(val as Record<string, unknown>).sort()) {
        result[key] = sortObj((val as Record<string, unknown>)[key])
      }
      return result
    }
    parsed = sortObj(parsed)
  }
  return JSON.stringify(parsed, null, indentStr || undefined)
}

// ---- Remove Duplicates from Arrays ----
export function jsonRemoveDuplicates(input: string): string {
  const parsed = JSON.parse(input)
  function dedup(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) {
      const seen = new Set<string>()
      const result: unknown[] = []
      const processed = val.map(dedup)
      for (const item of processed) {
        const key = JSON.stringify(item)
        if (!seen.has(key)) { seen.add(key); result.push(item) }
      }
      return result
    }
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = dedup(v)
    return result
  }
  return JSON.stringify(dedup(parsed), null, 2)
}

// ---- Extract ----
export function jsonExtract(input: string): string {
  const lines = input.split('\n')
  const paths: string[] = []
  let jsonStr = ''
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('{') && !trimmed.startsWith('[') && (trimmed.startsWith('$') || trimmed.startsWith('.') || /^[\w.\[\]'"*]+$/.test(trimmed))) {
      paths.push(trimmed)
      continue
    }
    jsonStr += line + '\n'
  }
  const parsed = JSON.parse(jsonStr.trim())
  if (paths.length === 0) throw new Error('No extraction paths provided')
  const result: Record<string, unknown> = {}
  for (const path of paths) {
    const cleanPath = path.replace(/^\$\.?/, '')
    const keys = cleanPath.split(/\.|\[(\d+)\]/).filter(Boolean)
    let current: unknown = parsed
    let found = true
    for (const key of keys) {
      if (current && typeof current === 'object') {
        if (Array.isArray(current) && /^\d+$/.test(key)) {
          current = (current as unknown[])[Number(key)]
        } else {
          current = (current as Record<string, unknown>)[key]
        }
      } else { found = false; break }
    }
    if (found && current !== undefined) result[path] = current
  }
  return JSON.stringify(result, null, 2)
}

// ---- Merge Patch (RFC 7396) ----
export function jsonMergePatch(input: string): string {
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
      try { objs.push(JSON.parse(current.trim())); current = '' } catch { continue }
    }
  }
  if (current.trim()) { try { objs.push(JSON.parse(current.trim())) } catch { /* ignore */ } }
  if (objs.length < 2) throw new Error('Need a target JSON object and a patch object')
  const target = objs[0]
  const patch = objs[1]

  function applyPatch(target: Record<string, unknown>, patch: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = { ...target }
    for (const [k, v] of Object.entries(patch)) {
      if (v === null) delete result[k]
      else if (typeof v === 'object' && !Array.isArray(v) && typeof result[k] === 'object' && !Array.isArray(result[k])) {
        result[k] = applyPatch(result[k] as Record<string, unknown>, v as Record<string, unknown>)
      } else {
        result[k] = v
      }
    }
    return result
  }
  return JSON.stringify(applyPatch(target, patch), null, 2)
}

// ---- Split ----
export function jsonSplit(input: string): string {
  const lines = input.split('\n')
  let chunkSize = 10
  const jsonLines: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('size:') || trimmed.startsWith('chunk:')) {
      const val = trimmed.split(':')[1]?.trim()
      if (!isNaN(Number(val)) && Number(val) > 0) chunkSize = Number(val)
      continue
    }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())
  if (!Array.isArray(parsed)) throw new Error('Input must be a JSON array')
  const chunks: unknown[][] = []
  for (let i = 0; i < parsed.length; i += chunkSize) chunks.push(parsed.slice(i, i + chunkSize))
  return JSON.stringify({ totalItems: parsed.length, chunkSize, chunks: chunks.length, data: chunks }, null, 2)
}

// ---- Mock API Response Generator ----
export function jsonMockGenerator(input: string): string {
  const template = JSON.parse(input)

  function mock(val: unknown): unknown {
    if (typeof val === 'string') {
      const tpl = val.toLowerCase()
      if (tpl === 'name' || tpl === 'fullname') {
        return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
      }
      if (tpl === 'email') return `${firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`
      if (tpl === 'uuid') {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
        })
      }
      if (tpl === 'url') return `https://api.example.com/${Math.random().toString(36).slice(2, 8)}`
      if (tpl === 'date') return new Date().toISOString().split('T')[0]
      if (tpl === 'datetime') return new Date().toISOString()
      if (tpl === 'number' || tpl === 'int' || tpl === 'integer') return Math.floor(Math.random() * 1000)
      if (tpl === 'float' || tpl === 'double') return Math.round(Math.random() * 10000) / 100
      if (tpl === 'boolean' || tpl === 'bool') return Math.random() > 0.5
      if (tpl === 'string' || tpl === 'text') return 'sample text'
      if (tpl === 'array' || tpl === 'list' || tpl === 'items') return []
      if (tpl === 'object') return {}
      if (tpl === 'id') return crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10)
      return val
    }
    if (typeof val === 'number') return val
    if (typeof val === 'boolean') return val
    if (Array.isArray(val)) {
      if (val.length === 0) return []
      const count = Math.floor(Math.random() * 5) + 1
      const arr = []
      for (let i = 0; i < count; i++) arr.push(mock(val[0]))
      return arr
    }
    if (typeof val === 'object' && val !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = mock(v)
      return result
    }
    return val
  }
  return JSON.stringify(mock(template), null, 2)
}

// ---- Random JSON Generator ----
export function jsonRandomGenerator(input: string): string {
  const spec = JSON.parse(input)
  const maxDepth = spec.maxDepth || 3
  const maxItems = spec.maxItems || 5
  const includeTypes = spec.types || ['string', 'number', 'boolean', 'null']

  function randomValue(depth: number): unknown {
    if (depth >= maxDepth) return null
    const type = includeTypes[Math.floor(Math.random() * includeTypes.length)]
    switch (type) {
      case 'string': return firstNames[Math.floor(Math.random() * firstNames.length)]
      case 'number': return Math.floor(Math.random() * 1000)
      case 'boolean': return Math.random() > 0.5
      case 'null': return null
      case 'array': {
        const len = Math.floor(Math.random() * maxItems)
        return Array.from({ length: len }, () => randomValue(depth + 1))
      }
      case 'object': {
        const obj: Record<string, unknown> = {}
        const keys = Math.floor(Math.random() * maxItems) + 1
        for (let i = 0; i < keys; i++) {
          obj[`field${i}`] = randomValue(depth + 1)
        }
        return obj
      }
      default: return 'value'
    }
  }
  return JSON.stringify(randomValue(0), null, 2)
}

// ---- Sample JSON Generator ----
export function jsonSampleGenerator(input: string): string {
  const template = JSON.parse(input)
  function sample(val: unknown): unknown {
    if (typeof val === 'string') {
      const t = val.toLowerCase()
      if (t === 'string' || t === 'text') return 'sample'
      if (t === 'number' || t === 'integer' || t === 'int') return 0
      if (t === 'float' || t === 'double') return 0.0
      if (t === 'boolean' || t === 'bool') return true
      if (t === 'email') return 'user@example.com'
      if (t === 'url') return 'https://example.com'
      if (t === 'date') return '2024-01-01'
      if (t === 'uuid') return '550e8400-e29b-41d4-a716-446655440000'
      if (t === 'name' || t === 'fullname') return 'John Doe'
      if (t === 'array' || t === 'list') return []
      if (t === 'object') return {}
      if (t === 'id') return 'abc123'
      if (t === 'phone') return '+1-555-555-0100'
      if (t === 'color') return '#FF5733'
      return val
    }
    if (typeof val === 'number') return val
    if (typeof val === 'boolean') return val
    if (Array.isArray(val)) {
      if (val.length === 0) return []
      return [sample(val[0])]
    }
    if (typeof val === 'object' && val !== null) {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = sample(v)
      return result
    }
    return val
  }
  return JSON.stringify(sample(template), null, 2)
}

// ---- Key Counter ----
export function jsonKeyCounter(input: string): string {
  const parsed = JSON.parse(input)
  const keyCounts: Record<string, number> = {}
  const typeCounts: Record<string, number> = {}
  let totalKeys = 0

  function walk(obj: unknown, prefix = ''): void {
    if (typeof obj !== 'object' || obj === null) return
    if (Array.isArray(obj)) { obj.forEach(v => walk(v, prefix)); return }
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      totalKeys++
      keyCounts[k] = (keyCounts[k] || 0) + 1
      const type = Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v
      typeCounts[type] = (typeCounts[type] || 0) + 1
      walk(v, prefix ? `${prefix}.${k}` : k)
    }
  }
  walk(parsed)
  return JSON.stringify({ totalKeys, keyFrequency: keyCounts, typeBreakdown: typeCounts }, null, 2)
}

// ---- JSON Pointer Tester (RFC 6901) ----
export function jsonPointerTester(input: string): string {
  const lines = input.split('\n')
  let jsonStr = ''
  let pointer = ''
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('/')) { pointer = trimmed; continue }
    jsonStr += line + '\n'
  }
  const parsed = JSON.parse(jsonStr.trim())
  if (!pointer) throw new Error('No JSON Pointer provided. Add a pointer like /store/book/0/title')
  const parts = pointer.split('/').filter(Boolean)
  let current: unknown = parsed
  for (const part of parts) {
    const decoded = part.replace(/~1/g, '/').replace(/~0/g, '~')
    if (current && typeof current === 'object') {
      if (Array.isArray(current) && /^\d+$/.test(decoded)) current = (current as unknown[])[Number(decoded)]
      else current = (current as Record<string, unknown>)[decoded]
    } else {
      return JSON.stringify({ pointer, error: `Cannot resolve ${decoded}`, value: null }, null, 2)
    }
  }
  return JSON.stringify({ pointer, value: current }, null, 2)
}

// ---- Detect Duplicate Keys ----
export function jsonDetectDuplicateKeys(input: string): string {
  const duplicates: Record<string, number[]> = {}
  function walk(obj: unknown, path: string): void {
    if (typeof obj !== 'object' || obj === null) return
    if (Array.isArray(obj)) { obj.forEach((v, i) => walk(v, `${path}[${i}]`)); return }
    const keys = Object.keys(obj as Record<string, unknown>)
    const seen: Record<string, number> = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const fullPath = path ? `${path}.${key}` : key
      if (seen[key]) {
        if (!duplicates[fullPath]) duplicates[fullPath] = [seen[key], i]
      } else {
        seen[key] = i
      }
    }
    for (const v of Object.values(obj as Record<string, unknown>)) walk(v, path)
  }
  walk(JSON.parse(input), '')
  return JSON.stringify({
    hasDuplicates: Object.keys(duplicates).length > 0,
    duplicateCount: Object.keys(duplicates).length,
    duplicates
  }, null, 2)
}

// ---- Sort Arrays ----
export function jsonSortArrays(input: string): string {
  const parsed = JSON.parse(input)
  function sortArr(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) {
      const sorted = val.map(sortArr)
      if (sorted.length > 0 && sorted.every(v => typeof v === 'string')) sorted.sort()
      else if (sorted.length > 0 && sorted.every(v => typeof v === 'number')) sorted.sort((a, b) => (a as number) - (b as number))
      return sorted
    }
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = sortArr(v)
    return result
  }
  return JSON.stringify(sortArr(parsed), null, 2)
}

// ---- Inline JSON ----
export function jsonToInline(input: string): string {
  const lines = input.split('\n')
  let spaces = 0
  const jsonLines: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('spaces:') || trimmed.startsWith('compact:')) {
      const val = trimmed.split(':')[1]?.trim()
      if (val === 'true' || val === 'yes') spaces = 0
      else if (!isNaN(Number(val))) spaces = Math.min(Number(val), 4)
      continue
    }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())
  return spaces > 0 ? JSON.stringify(parsed, null, spaces) : JSON.stringify(parsed)
}

// ---- JSON String Analyzer ----
export function jsonStringAnalyzer(input: string): string {
  const parsed = JSON.parse(input)
  const stringValues: string[] = []
  function collect(v: unknown): void {
    if (typeof v === 'string') stringValues.push(v)
    else if (Array.isArray(v)) v.forEach(collect)
    else if (typeof v === 'object' && v !== null) Object.values(v as Record<string, unknown>).forEach(collect)
  }
  collect(parsed)
  const totalChars = stringValues.reduce((s, v) => s + v.length, 0)
  const avgLen = stringValues.length > 0 ? Math.round(totalChars / stringValues.length) : 0
  const maxLen = stringValues.length > 0 ? Math.max(...stringValues.map(v => v.length)) : 0
  const minLen = stringValues.length > 0 ? Math.min(...stringValues.map(v => v.length)) : 0
  return JSON.stringify({
    totalStrings: stringValues.length,
    totalCharacters: totalChars,
    averageLength: avgLen,
    maxLength: maxLen,
    minLength: minLen,
    shortest: stringValues.sort((a, b) => a.length - b.length).slice(0, 3),
    longest: stringValues.sort((a, b) => b.length - a.length).slice(0, 3)
  }, null, 2)
}
