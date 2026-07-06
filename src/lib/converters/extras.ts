// ---- PostgreSQL SQL Generator ----
export function jsonToPostgresql(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty array'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colDefs = columns.map(k => {
    const val = first[k]
    const type = val === null ? 'TEXT' : typeof val === 'number' ? (Number.isInteger(val) ? 'INTEGER' : 'DOUBLE PRECISION') : typeof val === 'boolean' ? 'BOOLEAN' : 'TEXT'
    return `  "${k}" ${type}`
  })
  const tableName = 'json_data'
  const lines: string[] = [
    `CREATE TABLE ${tableName} (`,
    colDefs.join(',\n'),
    ');',
    ''
  ]
  for (const item of arr) {
    const vals = columns.map(c => {
      const v = (item as Record<string, unknown>)[c]
      if (v === null) return 'NULL'
      if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE'
      if (typeof v === 'number') return String(v)
      return `'${String(v).replace(/'/g, "''")}'`
    })
    lines.push(`INSERT INTO ${tableName} (${columns.map(c => `"${c}"`).join(', ')}) VALUES (${vals.join(', ')});`)
  }
  return lines.join('\n')
}

export function postgresqlToJson(input: string): string {
  const insertMatch = input.match(/INSERT INTO\s+\w+\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)
  if (!insertMatch) throw new Error('No INSERT statement found')
  const columns = insertMatch[1].split(',').map(c => c.trim().replace(/"/g, ''))
  const values = insertMatch[2].split(',').map(v => v.trim())
  const result: Record<string, unknown> = {}
  columns.forEach((c, i) => {
    const v = values[i]
    if (v === 'NULL' || v === 'null') result[c] = null
    else if (v === 'TRUE' || v === 'true') result[c] = true
    else if (v === 'FALSE' || v === 'false') result[c] = false
    else if (!isNaN(Number(v))) result[c] = Number(v)
    else result[c] = v.replace(/^'(.*)'$/, '$1').replace(/''/g, "'")
  })
  return JSON.stringify(result, null, 2)
}

// ---- MySQL SQL Generator ----
export function jsonToMysql(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty array'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colDefs = columns.map(k => {
    const val = first[k]
    const type = val === null ? 'TEXT' : typeof val === 'number' ? (Number.isInteger(val) ? 'INT' : 'DOUBLE') : typeof val === 'boolean' ? 'BOOLEAN' : 'TEXT'
    return `  \`${k}\` ${type}`
  })
  const tableName = 'json_data'
  const lines: string[] = [
    `CREATE TABLE \`${tableName}\` (`,
    colDefs.join(',\n'),
    ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;',
    ''
  ]
  for (const item of arr) {
    const vals = columns.map(c => {
      const v = (item as Record<string, unknown>)[c]
      if (v === null) return 'NULL'
      if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE'
      if (typeof v === 'number') return String(v)
      return `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    })
    lines.push(`INSERT INTO \`${tableName}\` (${columns.map(c => `\`${c}\``).join(', ')}) VALUES (${vals.join(', ')});`)
  }
  return lines.join('\n')
}

export function mysqlToJson(input: string): string {
  const insertMatch = input.match(/INSERT INTO\s+`?\w+`?\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)
  if (!insertMatch) throw new Error('No INSERT statement found')
  const columns = insertMatch[1].split(',').map(c => c.trim().replace(/[`"]/g, ''))
  const values = insertMatch[2].split(',').map(v => v.trim())
  const result: Record<string, unknown> = {}
  columns.forEach((c, i) => {
    const v = values[i]
    if (v === 'NULL' || v === 'null') result[c] = null
    else if (v === 'TRUE' || v === 'true') result[c] = true
    else if (v === 'FALSE' || v === 'false') result[c] = false
    else if (!isNaN(Number(v))) result[c] = Number(v)
    else result[c] = v.replace(/^'(.*)'$/, '$1').replace(/\\'/g, "'").replace(/\\\\/g, '\\')
  })
  return JSON.stringify(result, null, 2)
}

// ---- SQLite SQL Generator ----
export function jsonToSqlite(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty array'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colDefs = columns.map(k => {
    const val = first[k]
    const type = val === null ? 'TEXT' : typeof val === 'number' ? (Number.isInteger(val) ? 'INTEGER' : 'REAL') : typeof val === 'boolean' ? 'INTEGER' : 'TEXT'
    return `  "${k}" ${type}`
  })
  const tableName = 'json_data'
  const lines: string[] = [
    `CREATE TABLE IF NOT EXISTS "${tableName}" (`,
    colDefs.join(',\n'),
    ');',
    ''
  ]
  for (const item of arr) {
    const vals = columns.map(c => {
      const v = (item as Record<string, unknown>)[c]
      if (v === null) return 'NULL'
      if (typeof v === 'boolean') return v ? '1' : '0'
      if (typeof v === 'number') return String(v)
      return `'${String(v).replace(/'/g, "''")}'`
    })
    lines.push(`INSERT INTO "${tableName}" (${columns.map(c => `"${c}"`).join(', ')}) VALUES (${vals.join(', ')});`)
  }
  return lines.join('\n')
}

export function sqliteToJson(input: string): string {
  const insertMatch = input.match(/INSERT INTO\s+"?\w+"?\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)
  if (!insertMatch) throw new Error('No INSERT statement found')
  const columns = insertMatch[1].split(',').map(c => c.trim().replace(/"/g, ''))
  const values = insertMatch[2].split(',').map(v => v.trim())
  const result: Record<string, unknown> = {}
  columns.forEach((c, i) => {
    const v = values[i]
    if (v === 'NULL' || v === 'null') result[c] = null
    else if (v === '1') result[c] = true
    else if (v === '0') result[c] = false
    else if (!isNaN(Number(v))) result[c] = Number(v)
    else result[c] = v.replace(/^'(.*)'$/, '$1').replace(/''/g, "'")
  })
  return JSON.stringify(result, null, 2)
}

// ---- SQL Server SQL Generator ----
export function jsonToSqlServer(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty array'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const colDefs = columns.map(k => {
    const val = first[k]
    const type = val === null ? 'NVARCHAR(MAX)' : typeof val === 'number' ? (Number.isInteger(val) ? 'INT' : 'FLOAT') : typeof val === 'boolean' ? 'BIT' : 'NVARCHAR(MAX)'
    return `  [${k}] ${type}`
  })
  const tableName = 'json_data'
  const lines: string[] = [
    `CREATE TABLE [dbo].[${tableName}] (`,
    colDefs.join(',\n'),
    ');',
    ''
  ]
  for (const item of arr) {
    const vals = columns.map(c => {
      const v = (item as Record<string, unknown>)[c]
      if (v === null) return 'NULL'
      if (typeof v === 'boolean') return v ? '1' : '0'
      if (typeof v === 'number') return String(v)
      return `N'${String(v).replace(/'/g, "''")}'`
    })
    lines.push(`INSERT INTO [${tableName}] (${columns.map(c => `[${c}]`).join(', ')}) VALUES (${vals.join(', ')});`)
  }
  return lines.join('\n')
}

export function sqlServerToJson(input: string): string {
  const insertMatch = input.match(/INSERT INTO\s+\[?\w+\]?\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)
  if (!insertMatch) throw new Error('No INSERT statement found')
  const columns = insertMatch[1].split(',').map(c => c.trim().replace(/[\[\]]/g, ''))
  const values = insertMatch[2].split(',').map(v => v.trim())
  const result: Record<string, unknown> = {}
  columns.forEach((c, i) => {
    const v = values[i]
    if (v === 'NULL' || v === 'null') result[c] = null
    else if (v === '1') result[c] = true
    else if (v === '0') result[c] = false
    else if (!isNaN(Number(v))) result[c] = Number(v)
    else result[c] = v.replace(/^N?'(.*)'$/, '$1').replace(/''/g, "'")
  })
  return JSON.stringify(result, null, 2)
}

// ---- Oracle SQL Generator ----
export function jsonToOracle(input: string): string {
  const parsed = JSON.parse(input)
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  if (arr.length === 0) return '-- Empty array'
  const first = arr[0] as Record<string, unknown>
  const columns = Object.keys(first)
  const tableName = 'json_data'
  const lines: string[] = [
    `CREATE TABLE ${tableName} (`
  ]
  columns.forEach((k, i) => {
    const val = first[k]
    const type = val === null ? 'VARCHAR2(4000)' : typeof val === 'number' ? (Number.isInteger(val) ? 'NUMBER' : 'FLOAT') : typeof val === 'boolean' ? 'NUMBER(1)' : 'VARCHAR2(4000)'
    lines.push(`  ${k} ${type}${i < columns.length - 1 ? ',' : ''}`)
  })
  lines.push(');', '')
  for (const item of arr) {
    const vals = columns.map(c => {
      const v = (item as Record<string, unknown>)[c]
      if (v === null) return 'NULL'
      if (typeof v === 'boolean') return v ? '1' : '0'
      if (typeof v === 'number') return String(v)
      return `'${String(v).replace(/'/g, "''")}'`
    })
    lines.push(`INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${vals.join(', ')});`)
  }
  return lines.join('\n')
}

export function oracleToJson(input: string): string {
  const insertMatch = input.match(/INSERT INTO\s+\w+\s*\(([^)]+)\)\s*VALUES\s*\(([^)]+)\)/i)
  if (!insertMatch) throw new Error('No INSERT statement found')
  const columns = insertMatch[1].split(',').map(c => c.trim())
  const values = insertMatch[2].split(',').map(v => v.trim())
  const result: Record<string, unknown> = {}
  columns.forEach((c, i) => {
    c = c.trim()
    const v = values[i]
    if (v === 'NULL' || v === 'null') result[c] = null
    else if (!isNaN(Number(v))) result[c] = Number(v)
    else result[c] = v.replace(/^'(.*)'$/, '$1').replace(/''/g, "'")
  })
  return JSON.stringify(result, null, 2)
}

// ---- Postman Collection ----
export function jsonToPostman(input: string): string {
  const parsed = JSON.parse(input)
  const items = Array.isArray(parsed) ? parsed : [parsed]
  const requests = items.map((item: Record<string, unknown>, i: number) => ({
    name: String(item.name || item.method || `Request ${i + 1}`),
    request: {
      method: (item.method as string) || 'GET',
      header: [] as Record<string, string>[],
      url: {
        raw: `https://api.example.com/${item.path || ''}`,
        protocol: 'https',
        host: ['api', 'example', 'com'],
        path: (String(item.path || '').split('/').filter(Boolean))
      },
      body: item.body ? {
        mode: 'raw',
        raw: JSON.stringify(item.body, null, 2),
        options: { raw: { language: 'json' } }
      } : undefined
    },
    response: []
  }))
  const collection = {
    info: {
      _postman_id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
      name: 'Generated Collection',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: requests
  }
  return JSON.stringify(collection, null, 2)
}

export function postmanToJson(input: string): string {
  const parsed = JSON.parse(input)
  const items = parsed.item || parsed || []
  const result = (Array.isArray(items) ? items : [items]).map((item: Record<string, unknown>) => {
    const req = item.request as Record<string, unknown> || {}
    const body = req.body as Record<string, unknown> || {}
    let bodyObj: unknown = undefined
    if (body.mode === 'raw') {
      try { bodyObj = JSON.parse(body.raw as string) } catch { bodyObj = body.raw }
    }
    return {
      name: item.name,
      method: req.method || 'GET',
      path: ((req.url as Record<string, unknown>)?.path as string[])?.join('/') || '',
      headers: req.header as Record<string, string>[] || [],
      body: bodyObj
    }
  })
  return JSON.stringify(result.length === 1 ? result[0] : result, null, 2)
}

// ---- BSON (Extended JSON) ----
export function jsonToBson(input: string): string {
  const parsed = JSON.parse(input)
  function toExtended(v: unknown): unknown {
    if (v === null) return { $null: true }
    if (v instanceof Date || (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(v))) {
      const d = typeof v === 'string' ? new Date(v) : v
      return { $date: { $numberLong: d.getTime().toString() } }
    }
    if (typeof v === 'number') {
      if (Number.isInteger(v)) return { $numberInt: v.toString() }
      return { $numberDouble: v.toString() }
    }
    if (typeof v === 'boolean') return v
    if (typeof v === 'string') {
      if (/^[0-9a-f]{24}$/i.test(v)) return { $oid: v }
      return v
    }
    if (Array.isArray(v)) return v.map(toExtended)
    if (typeof v === 'object') {
      const result: Record<string, unknown> = {}
      for (const [k, val] of Object.entries(v as Record<string, unknown>)) result[k] = toExtended(val)
      return result
    }
    return v
  }
  return JSON.stringify(toExtended(parsed), null, 2)
}

export function bsonToJson(input: string): string {
  const parsed = JSON.parse(input)
  function fromExtended(v: unknown): unknown {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      const obj = v as Record<string, unknown>
      if (obj.$null !== undefined) return null
      if (obj.$date) {
        const d = obj.$date as Record<string, unknown>
        if (d.$numberLong) return new Date(parseInt(d.$numberLong as string)).toISOString()
        return new Date(obj.$date as string).toISOString()
      }
      if (obj.$numberInt !== undefined) return parseInt(obj.$numberInt as string, 10)
      if (obj.$numberLong !== undefined) return parseInt(obj.$numberLong as string, 10)
      if (obj.$numberDouble !== undefined) return parseFloat(obj.$numberDouble as string)
      if (obj.$oid !== undefined) return obj.$oid
      if (obj.$binary !== undefined) return obj.$binary
      if (Object.keys(obj).length === 1 && Object.keys(obj)[0].startsWith('$')) return obj
      const result: Record<string, unknown> = {}
      for (const [k, val] of Object.entries(obj)) result[k] = fromExtended(val)
      return result
    }
    if (Array.isArray(v)) return v.map(fromExtended)
    return v
  }
  return JSON.stringify(fromExtended(parsed), null, 2)
}

// ---- Graphviz DOT ----
export function jsonToGraphviz(input: string): string {
  const parsed = JSON.parse(input)
  const lines: string[] = ['digraph JSON {', '  node [shape=box, style=rounded, fontname=Helvetica];', '']
  let nodeId = 0
  function walk(obj: unknown, parent: string | null, edgeLabel: string | null): void {
    const id = `n${nodeId++}`
    if (typeof obj !== 'object' || obj === null) {
      const label = String(obj ?? 'null').substring(0, 20).replace(/"/g, '\\"')
      lines.push(`  ${id} [label="${label}", shape=ellipse];`)
      if (parent && edgeLabel) lines.push(`  ${parent} -> ${id} [label="${edgeLabel}"];`)
      return
    }
    if (Array.isArray(obj)) {
      lines.push(`  ${id} [label="Array(${obj.length})", shape=note];`)
      if (parent && edgeLabel) lines.push(`  ${parent} -> ${id} [label="${edgeLabel}"];`)
      for (let i = 0; i < Math.min(obj.length, 8); i++) walk(obj[i], id, `[${i}]`)
      return
    }
    if (!parent) {
      lines.push(`  ${id} [label="Object", style=rounded, fillcolor=lightyellow];`)
    } else {
      lines.push(`  ${id} [label="Object", fillcolor=lightyellow];`)
      if (edgeLabel) lines.push(`  ${parent} -> ${id} [label="${edgeLabel}"];`)
    }
    const entries = Object.entries(obj as Record<string, unknown>)
    for (let i = 0; i < Math.min(entries.length, 12); i++) {
      const [k, v] = entries[i]
      const label = k.substring(0, 15).replace(/"/g, '\\"')
      walk(v, id, label)
    }
  }
  walk(parsed, null, null)
  lines.push('}')
  return lines.join('\n')
}

export function graphvizToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const edgeRegex = /(\w+)\s*->\s*(\w+)\s*\[label="([^"]+)"\]/g
  const nodeLabels: Record<string, string> = {}
  const nodeMatch = input.matchAll(/n(\d+)\s*\[label="([^"]+)"/g)
  for (const m of nodeMatch) nodeLabels[`n${m[1]}`] = m[2]

  const edges: Record<string, { child: string; label: string }[]> = {}
  let m: RegExpExecArray | null
  const re = new RegExp(edgeRegex.source, 'g')
  let match: RegExpExecArray | null
  while ((match = re.exec(input)) !== null) {
    const parent = match[1]
    const child = match[2]
    const label = match[3]
    if (!edges[parent]) edges[parent] = []
    edges[parent].push({ child, label })
  }

  function build(nodeId: string): unknown {
    const label = nodeLabels[nodeId] || ''
    if (label.startsWith('Array')) return []
    if (label === 'Object' || label === '') {
      const obj: Record<string, unknown> = {}
      const children = edges[nodeId] || []
      for (const edge of children) {
        const val = build(edge.child)
        if (val !== undefined) obj[edge.label] = val
      }
      return obj
    }
    const num = Number(label)
    if (!isNaN(num)) return num
    if (label === 'true') return true
    if (label === 'false') return false
    if (label === 'null') return null
    return label
  }

  const rootKey = Object.keys(nodeLabels).find(k => !edges[k] && Object.values(edges).some(e => e.some(ee => ee.child === k)))
  const root = Object.keys(nodeLabels).find(k => {
    for (const v of Object.values(edges)) {
      if (v.some(e => e.child === k)) return false
    }
    return true
  })

  if (root) {
    const val = build(root)
    if (typeof val === 'object') return JSON.stringify(val, null, 2)
    return JSON.stringify({ root: val }, null, 2)
  }
  return JSON.stringify(result, null, 2)
}

// ---- JSONC (JSON with Comments) ----
export function jsoncToJson(input: string): string {
  const lines = input.split('\n')
  const cleaned = lines.map(line => {
    let inString = false
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] === '"') inString = !inString
      if (line[i] === '/' && line[i + 1] === '/' && !inString) return line.slice(0, i)
    }
    return line
  }).join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/,\s*([}\]])/g, '$1')
    .trim()
  const parsed = JSON.parse(cleaned)
  return JSON.stringify(parsed, null, 2)
}

export function jsonToJsonc(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed, null, 2)
  const lines = json.split('\n')
  const result: string[] = ['// JSON with Comments (JSONC)', '// Generated by JSONKits', '']
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === '{' || trimmed === '}' || trimmed === '[' || trimmed === ']') {
      result.push(line)
      continue
    }
    const colonIdx = trimmed.indexOf(':')
    if (colonIdx > 0) {
      const key = trimmed.slice(0, colonIdx).trim()
      result.push(line.replace(trimmed, `${trimmed} // ${key.replace(/"/g, '')}`))
    } else {
      result.push(line)
    }
  }
  return result.join('\n')
}

// ---- JSON Linter ----
export function jsonLinter(input: string): string {
  const issues: string[] = []
  try {
    const parsed = JSON.parse(input)
    const formatted = JSON.stringify(parsed, null, 2)
    if (formatted !== input) issues.push('JSON is not pretty-printed (use Formatter to beautify)')
    if (input.length > formatted.length) issues.push('JSON appears minified (use Formatter to expand)')
    const keys = new Set<string>()
    function checkDupes(obj: unknown, path: string): void {
      if (typeof obj !== 'object' || obj === null) return
      if (Array.isArray(obj)) { obj.forEach((v, i) => checkDupes(v, `${path}[${i}]`)); return }
      const seen = new Set<string>()
      for (const k of Object.keys(obj as Record<string, unknown>)) {
        if (seen.has(k)) issues.push(`Duplicate key "${k}" at ${path}`)
        else seen.add(k)
        keys.add(k)
      }
      for (const v of Object.values(obj as Record<string, unknown>)) checkDupes(v, path)
    }
    checkDupes(parsed, '$')
    function checkNaming(obj: unknown, path: string): void {
      if (typeof obj !== 'object' || obj === null) return
      if (Array.isArray(obj)) { obj.forEach((v, i) => checkNaming(v, `${path}[${i}]`)); return }
      for (const k of Object.keys(obj as Record<string, unknown>)) {
        if (k.includes(' ') || k.includes('-')) issues.push(`Key "${k}" at ${path}.${k} uses non-standard characters (spaces or hyphens)`)
        if (k !== k.toLowerCase() && k !== k.toUpperCase() && /[A-Z]/.test(k) && /[a-z]/.test(k)) {
          if (!/^[a-z]/.test(k)) issues.push(`Key "${k}" at ${path}.${k} should start with lowercase (camelCase convention)`)
        }
      }
      for (const v of Object.values(obj as Record<string, unknown>)) checkNaming(v, path)
    }
    checkNaming(parsed, '$')
    if (issues.length === 0) issues.push('No issues found. JSON looks good!')
    return JSON.stringify({ valid: true, issueCount: issues.filter(i => !i.startsWith('No issues')).length, suggestions: issues }, null, 2)
  } catch (e) {
    return JSON.stringify({ valid: false, issueCount: 1, errors: [(e as Error).message] }, null, 2)
  }
}

// ---- JSON Repair ----
export function jsonRepair(input: string): string {
  let text = input.trim()
  if (!text) throw new Error('Empty input')
  const lines = text.split('\n')
  text = lines.map(line => {
    let inString = false
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] === '"') inString = !inString
      if (line[i] === '/' && line[i + 1] === '/' && !inString) return line.slice(0, i)
    }
    return line
  }).join('\n')
  text = text.replace(/\/\*[\s\S]*?\*\//g, '')
  text = text.replace(/'/g, '"')
  text = text.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
  text = text.replace(/,\s*([}\]])/g, '$1')
  text = text.replace(/,\s*$/gm, '')
  text = text.replace(/True|False/g, s => s.toLowerCase())
  text = text.replace(/\bNone\b/g, 'null').replace(/\bundefined\b/g, 'null')
  if (!text.startsWith('{') && !text.startsWith('[')) text = `{${text}}`
  if (text.startsWith('{') && !text.endsWith('}')) text += '}'
  if (text.startsWith('[') && !text.endsWith(']')) text += ']'
  try {
    const parsed = JSON.parse(text)
    return JSON.stringify(parsed, null, 2)
  } catch {
    const m = text.match(/[{]/)
    const m2 = text.match(/[}]/)
    if (m && m2 && m.index && m2.index) {
      const extracted = text.slice(m.index, m2.index + 1)
      try {
        const parsed = JSON.parse(extracted)
        return JSON.stringify(parsed, null, 2)
      } catch { /* ignore */ }
    }
    throw new Error('Could not repair JSON')
  }
}

// ---- JSON Search ----
export function jsonSearch(input: string): string {
  const lines = input.split('\n')
  let query = ''
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('query:') || line.startsWith('search:')) {
      query = line.split(':').slice(1).join(':').trim()
      continue
    }
    jsonLines.push(line)
  }
  if (!query) throw new Error('No search query provided. Add query: your_search_term on the first line.')
  const parsed = JSON.parse(jsonLines.join('\n').trim())
  const results: { path: string; value: unknown }[] = []
  const q = query.toLowerCase()

  function walk(obj: unknown, path: string): void {
    if (typeof obj === 'string') {
      if (obj.toLowerCase().includes(q)) results.push({ path, value: obj })
    } else if (typeof obj === 'number' || typeof obj === 'boolean') {
      if (String(obj).toLowerCase().includes(q)) results.push({ path, value: obj })
    } else if (Array.isArray(obj)) {
      obj.forEach((v, i) => walk(v, `${path}[${i}]`))
    } else if (typeof obj === 'object' && obj !== null) {
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        if (k.toLowerCase().includes(q)) results.push({ path: `${path}.${k}`, value: `(key match: ${k})` })
        walk(v, `${path}.${k}`)
      }
    }
  }

  walk(parsed, '$')
  return JSON.stringify({ query, totalMatches: results.length, matches: results.slice(0, 100) }, null, 2)
}

// ---- JSON Encrypt/Decrypt ----
function jsonCrypto(text: string, key: string, encrypt: boolean): string {
  let result = ''
  const kLen = key.length
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i)
    const kCode = key.charCodeAt(i % kLen)
    result += String.fromCharCode(encrypt ? code ^ kCode : code ^ kCode)
  }
  return result
}

export function jsonEncrypt(input: string): string {
  const lines = input.split('\n')
  let key = 'jsonkits-secret-key'
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('key:')) { key = line.split(':').slice(1).join(':').trim(); continue }
    jsonLines.push(line)
  }
  JSON.parse(jsonLines.join('\n').trim())
  const encrypted = jsonCrypto(jsonLines.join('\n').trim(), key, true)
  return btoa(unescape(encodeURIComponent(encrypted)))
}

export function jsonDecrypt(input: string): string {
  const lines = input.split('\n')
  let key = 'jsonkits-secret-key'
  const dataLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('key:')) { key = line.split(':').slice(1).join(':').trim(); continue }
    dataLines.push(line)
  }
  const encrypted = decodeURIComponent(escape(atob(dataLines.join('\n').trim())))
  const decrypted = jsonCrypto(encrypted, key, true)
  JSON.parse(decrypted)
  return decrypted
}

// ---- JSON Mask Data ----
export function jsonMaskData(input: string): string {
  const parsed = JSON.parse(input)
  const sensitiveKeys = /password|secret|token|key|api_key|apikey|auth|credential|ssn|credit_card|card_number|cvv|pin|passwd|secret_key|private/i
  const maskFields = /email|phone|mobile|address|name_full|full_name|birth|dob|ssn|tax_id/i

  function mask(val: unknown, key: string): unknown {
    if (typeof val === 'string') {
      if (sensitiveKeys.test(key)) return '***MASKED***'
      if (maskFields.test(key)) {
        if (val.length <= 4) return '***'
        return val.slice(0, 2) + '***' + val.slice(-2)
      }
      return val
    }
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map((v, i) => mask(v, `${key}[${i}]`))
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = mask(v, k)
    return result
  }
  return JSON.stringify(mask(parsed, ''), null, 2)
}

// ---- Type Detector ----
export function jsonTypeDetector(input: string): string {
  const parsed = JSON.parse(input)
  const types: Record<string, { type: string; count: number; sample: unknown; nullable: boolean }> = {}
  function detect(val: unknown, key: string): void {
    if (key && !key.startsWith('[')) {
      if (!types[key]) types[key] = { type: '', count: 0, sample: null, nullable: false }
      types[key].count++
      if (val === null) { types[key].nullable = true; return }
      const t = Array.isArray(val) ? 'array' : typeof val
      if (!types[key].type) { types[key].type = t; types[key].sample = val }
    }
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach((v, i) => detect(v, `[${i}]`)); return }
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) detect(v, k)
  }
  detect(parsed, '')
  return JSON.stringify({ fields: types, totalUniqueKeys: Object.keys(types).length }, null, 2)
}

// ---- Path Finder ----
export function jsonPathFinder(input: string): string {
  const lines = input.split('\n')
  let searchValue = ''
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('find:') || line.startsWith('value:')) {
      searchValue = line.split(':').slice(1).join(':').trim()
      continue
    }
    jsonLines.push(line)
  }
  if (!searchValue) throw new Error('No search value provided. Add find: your_value on the first line.')
  const parsed = JSON.parse(jsonLines.join('\n').trim())
  const paths: string[] = []
  const searchStr = searchValue.toLowerCase()

  function walk(obj: unknown, path: string): void {
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
      if (String(obj).toLowerCase() === searchStr || String(obj) === searchValue) paths.push(path)
    } else if (Array.isArray(obj)) {
      obj.forEach((v, i) => walk(v, `${path}[${i}]`))
    } else if (typeof obj === 'object' && obj !== null) {
      for (const [k, v] of Object.entries(obj as Record<string, unknown>)) walk(v, `${path}.${k}`)
    }
  }
  walk(parsed, '$')
  return JSON.stringify({ searchTerm: searchValue, totalMatches: paths.length, paths }, null, 2)
}

// ---- Array Flattener ----
export function jsonArrayFlattener(input: string): string {
  const parsed = JSON.parse(input)
  function flatten(v: unknown): unknown[] {
    if (!Array.isArray(v)) return [v]
    const result: unknown[] = []
    for (const item of v) {
      if (Array.isArray(item)) result.push(...flatten(item))
      else result.push(item)
    }
    return result
  }
  const result = flatten(parsed)
  return JSON.stringify(result, null, 2)
}

// ---- Case Converter ----
export function jsonCaseConverter(input: string): string {
  const lines = input.split('\n')
  let targetCase = 'camel'
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('case:')) {
      targetCase = line.split(':')[1]?.trim().toLowerCase() || 'camel'
      continue
    }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())

  function convertCase(str: string): string {
    if (targetCase === 'camel') return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^[A-Z]/, c => c.toLowerCase())
    if (targetCase === 'pascal') return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^[a-z]/, c => c.toUpperCase())
    if (targetCase === 'snake') return str.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toLowerCase().replace(/-/g, '_')
    if (targetCase === 'kebab') return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase().replace(/_/g, '-')
    if (targetCase === 'upper') return str.toUpperCase().replace(/-/g, '_')
    if (targetCase === 'lower') return str.toLowerCase()
    return str
  }

  function walk(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map(walk)
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[convertCase(k)] = walk(v)
    return result
  }
  return JSON.stringify(walk(parsed), null, 2)
}

// ---- Date Formatter ----
export function jsonDateFormatter(input: string): string {
  const lines = input.split('\n')
  let format = 'iso'
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('format:')) { format = line.split(':')[1]?.trim().toLowerCase() || 'iso'; continue }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())

  function formatDate(str: string): string {
    const d = new Date(str)
    if (isNaN(d.getTime())) return str
    if (format === 'iso') return d.toISOString()
    if (format === 'date') return d.toISOString().split('T')[0]
    if (format === 'locale') return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    if (format === 'unix') return String(Math.floor(d.getTime() / 1000))
    if (format === 'unixms') return String(d.getTime())
    if (format === 'utc') return d.toUTCString()
    return str
  }

  function walk(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map(walk)
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
      result[k] = typeof v === 'string' && /^\d{4}-\d{2}-\d{2}/.test(v) ? formatDate(v) : walk(v)
    }
    return result
  }
  return JSON.stringify(walk(parsed), null, 2)
}

// ---- Value Replacer ----
export function jsonValueReplacer(input: string): string {
  const lines = input.split('\n')
  let find = ''
  let replace = ''
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('find:')) { find = line.split(':').slice(1).join(':').trim(); continue }
    if (line.startsWith('replace:')) { replace = line.split(':').slice(1).join(':').trim(); continue }
    jsonLines.push(line)
  }
  if (!find) throw new Error('No find value specified. Add find: value_to_find on the first line.')
  const parsed = JSON.parse(jsonLines.join('\n').trim())

  function walk(val: unknown): unknown {
    if (typeof val === 'string') return val === find ? replace : val
    if (typeof val === 'number') return String(val) === find ? (isNaN(Number(replace)) ? replace : Number(replace)) : val
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map(walk)
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = walk(v)
    return result
  }
  return JSON.stringify(walk(parsed), null, 2)
}

// ---- Key Transformer ----
export function jsonKeyTransformer(input: string): string {
  const lines = input.split('\n')
  let prefix = ''
  let suffix = ''
  const jsonLines: string[] = []
  for (const line of lines) {
    if (line.startsWith('prefix:')) { prefix = line.split(':').slice(1).join(':').trim(); continue }
    if (line.startsWith('suffix:')) { suffix = line.split(':').slice(1).join(':').trim(); continue }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())

  function walk(val: unknown): unknown {
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) return val.map(walk)
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[prefix + k + suffix] = walk(v)
    return result
  }
  return JSON.stringify(walk(parsed), null, 2)
}

// ---- JSON Compare ----
export function jsonCompare(input: string): string {
  const parts = input.trim().split(/\n(?={)/)
  if (parts.length < 2) {
    const wrapped = input.match(/\{[^}]*\}/g)
    if (!wrapped || wrapped.length < 2) throw new Error('Need at least two JSON objects to compare')
    const a = JSON.parse(wrapped[0])
    const b = JSON.parse(wrapped[1])
    return compareObjects(a, b)
  }
  const a = JSON.parse(parts[0])
  const b = JSON.parse(parts[1])
  return compareObjects(a, b)
}

function compareObjects(a: Record<string, unknown>, b: Record<string, unknown>, prefix = ''): string {
  const added: string[] = []
  const removed: string[] = []
  const changed: { path: string; from: unknown; to: unknown }[] = []
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)])

  for (const key of allKeys) {
    const path = prefix ? `${prefix}.${key}` : key
    if (!(key in a)) added.push(path)
    else if (!(key in b)) removed.push(path)
    else {
      const va = a[key]
      const vb = b[key]
      if (typeof va === 'object' && typeof vb === 'object' && va !== null && vb !== null && !Array.isArray(va) && !Array.isArray(vb)) {
        const sub = compareObjects(va as Record<string, unknown>, vb as Record<string, unknown>, path)
        const parsed = JSON.parse(sub)
        added.push(...parsed.added)
        removed.push(...parsed.removed)
        changed.push(...parsed.changed)
      } else if (JSON.stringify(va) !== JSON.stringify(vb)) {
        changed.push({ path, from: va, to: vb })
      }
    }
  }
  return JSON.stringify({ added, removed, changed, addedCount: added.length, removedCount: removed.length, changedCount: changed.length }, null, 2)
}

// ---- JSON Schema Validator ----
export function jsonSchemaValidator(input: string): string {
  const lines = input.split('\n')
  let schemaStr = ''
  let dataStr = ''
  let inSchema = false
  let inData = false
  for (const line of lines) {
    if (line.trim().startsWith('schema:') || line.trim() === '---') {
      if (line.trim() === '---') {
        if (!inSchema) { inSchema = true; continue }
        if (inSchema) { inSchema = false; inData = true; continue }
      }
      if (line.trim().startsWith('schema:')) { inSchema = true; continue }
    }
    if (inSchema) schemaStr += line + '\n'
    else if (inData) dataStr += line + '\n'
    else schemaStr += line + '\n'
  }
  if (!schemaStr.trim()) throw new Error('No schema provided')
  if (!dataStr.trim()) {
    const parts = input.split(/---|\nschema:/)
    if (parts.length >= 2) {
      schemaStr = parts[1]
      dataStr = parts.slice(2).join('\n') || parts[0]
    }
    if (!dataStr.trim()) dataStr = schemaStr
  }
  const schema = JSON.parse(schemaStr.trim())
  const data = JSON.parse(dataStr.trim())

  function validate(data: unknown, schema: Record<string, unknown>, path: string): { valid: boolean; errors: string[] } {
    const errors: string[] = []
    if (schema.type) {
      const types = Array.isArray(schema.type) ? schema.type : [schema.type]
      const actualType = data === null ? 'null' : Array.isArray(data) ? 'array' : typeof data
      if (!types.includes(actualType)) return { valid: false, errors: [`${path}: expected type ${types.join('|')}, got ${actualType}`] }
    }
    if (schema.required && Array.isArray(schema.required) && typeof data === 'object' && data !== null) {
      for (const req of schema.required as string[]) {
        if (!(req in (data as Record<string, unknown>))) errors.push(`${path}: missing required field "${req}"`)
      }
    }
    if (schema.properties && typeof data === 'object' && data !== null) {
      for (const [k, prop] of Object.entries(schema.properties as Record<string, unknown>)) {
        if (k in (data as Record<string, unknown>)) {
          const sub = validate((data as Record<string, unknown>)[k], prop as Record<string, unknown>, `${path}.${k}`)
          errors.push(...sub.errors)
        }
      }
    }
    if (schema.items && Array.isArray(data)) {
      (data as unknown[]).forEach((item, i) => {
        const sub = validate(item, schema.items as Record<string, unknown>, `${path}[${i}]`)
        errors.push(...sub.errors)
      })
    }
    if (schema.enum && Array.isArray(schema.enum)) {
      if (!(schema.enum as unknown[]).includes(data)) errors.push(`${path}: value must be one of [${(schema.enum as unknown[]).join(', ')}]`)
    }
    return { valid: errors.length === 0, errors }
  }

  const result = validate(data, schema, '$')
  return JSON.stringify({ valid: result.valid, totalErrors: result.errors.length, errors: result.errors }, null, 2)
}

// ---- Generate TypeScript from Schema ----
export function jsonSchemaToTypescript(input: string): string {
  const parsed = JSON.parse(input)
  function generateTS(val: unknown, name: string): string {
    if (val === null) return `${name}: null`
    if (typeof val === 'boolean') return `${name}: boolean`
    if (typeof val === 'number') return `${name}: ${Number.isInteger(val) ? 'number' : 'number'}`
    if (typeof val === 'string') return `${name}: string`
    if (Array.isArray(val)) {
      if (val.length === 0) return `${name}: any[]`
      const itemType = typeof val[0]
      if (itemType === 'object' && val[0] !== null) {
        const ifaceName = name.charAt(0).toUpperCase() + name.slice(1).replace(/s$/, '')
        const sub = generateTS(val[0], ifaceName)
        return `${name}: ${ifaceName}[]\n${sub}`
      }
      return `${name}: ${itemType}[]`
    }
    if (typeof val === 'object') {
      const interfaceName = name.charAt(0).toUpperCase() + name.slice(1)
      const lines: string[] = [`interface ${interfaceName} {`]
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        const keyStr = k.includes('-') ? `'${k}'` : k
        if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
          const subName = k.charAt(0).toUpperCase() + k.slice(1)
          lines.push(`  ${keyStr}: ${subName};`)
        } else if (Array.isArray(v) && v.length > 0 && typeof v[0] === 'object' && v[0] !== null) {
          const subName = k.charAt(0).toUpperCase() + k.slice(1).replace(/s$/, '')
          lines.push(`  ${keyStr}: ${subName}[];`)
        } else {
          const t = v === null ? 'null' : Array.isArray(v) ? `${typeof v[0] || 'any'}[]` : typeof v
          lines.push(`  ${keyStr}: ${t};`)
        }
      }
      lines.push('}')
      return lines.join('\n')
    }
    return ''
  }
  const topName = Array.isArray(parsed) ? 'RootItem' : 'Root'
  const result = generateTS(parsed, topName)
  const lines = result.split('\n')
  const seen = new Set<string>()
  const unique: string[] = []
  for (const line of lines) {
    if (line.startsWith('interface ')) {
      const name = line.split(' ')[1]
      if (seen.has(name)) continue
      seen.add(name)
    }
    unique.push(line)
  }
  return unique.join('\n')
}

// ---- Truncate JSON ----
export function jsonTruncate(input: string): string {
  const lines = input.split('\n')
  let maxLen = 100
  for (const line of lines) {
    if (line.startsWith('max:')) { const v = parseInt(line.split(':')[1]?.trim() || '100'); if (v > 0) maxLen = v; continue }
  }
  const jsonLines = lines.filter(l => !l.startsWith('max:')).join('\n').trim()
  const parsed = JSON.parse(jsonLines)

  function trunc(val: unknown): unknown {
    if (typeof val === 'string') {
      if (val.length > maxLen) return val.slice(0, maxLen) + '...'
      return val
    }
    if (typeof val !== 'object' || val === null) return val
    if (Array.isArray(val)) {
      return val.map(trunc)
    }
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = trunc(v)
    return result
  }
  return JSON.stringify(trunc(parsed), null, 2)
}

// ---- JSON to Python Dict (literal syntax, not dataclass) ----
export function jsonToPythonDict(input: string): string {
  const parsed = JSON.parse(input)
  function toPy(val: unknown, indent: number): string {
    const pad = '  '.repeat(indent)
    if (val === null || val === undefined) return 'None'
    if (typeof val === 'boolean') return val ? 'True' : 'False'
    if (typeof val === 'number') return String(val)
    if (typeof val === 'string') return `'${val.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    if (Array.isArray(val)) {
      if (val.length === 0) return '[]'
      const items = val.map(v => `${pad}  ${toPy(v, indent + 1)}`)
      return '[\n' + items.join(',\n') + '\n' + pad + ']'
    }
    if (typeof val === 'object') {
      const entries = Object.entries(val as Record<string, unknown>)
      if (entries.length === 0) return '{}'
      const items = entries.map(([k, v]) => `${pad}  '${k}': ${toPy(v, indent + 1)}`)
      return '{\n' + items.join(',\n') + '\n' + pad + '}'
    }
    return 'None'
  }
  return toPy(parsed, 0)
}

// ---- JSON Slice (extract sub-array) ----
export function jsonSlice(input: string): string {
  const lines = input.split('\n')
  let start = 0, end: number | undefined = undefined
  const jsonLines: string[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('start:')) { start = parseInt(trimmed.split(':')[1]?.trim() || '0'); continue }
    if (trimmed.startsWith('end:')) { end = parseInt(trimmed.split(':')[1]?.trim()); continue }
    if (trimmed.startsWith('size:')) { const s = parseInt(trimmed.split(':')[1]?.trim() || '0'); if (s > 0) end = start + s; continue }
    jsonLines.push(line)
  }
  const parsed = JSON.parse(jsonLines.join('\n').trim())
  if (!Array.isArray(parsed)) throw new Error('Input must be a JSON array')
  const sliced = parsed.slice(start, end)
  return JSON.stringify({ originalLength: parsed.length, start, end: end ?? parsed.length, sliceLength: sliced.length, data: sliced }, null, 2)
}

// ---- Extract Keys ----
export function extractKeys(input: string): string {
  const parsed = JSON.parse(input)
  const keys = new Set<string>()
  function walk(val: unknown): void {
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach(walk); return }
    for (const k of Object.keys(val as Record<string, unknown>)) { keys.add(k); walk((val as Record<string, unknown>)[k]) }
  }
  walk(parsed)
  return JSON.stringify({ totalUniqueKeys: keys.size, keys: [...keys].sort() }, null, 2)
}

// ---- Extract Values ----
export function extractValues(input: string): string {
  const parsed = JSON.parse(input)
  const values: unknown[] = []
  function walk(val: unknown): void {
    if (typeof val !== 'object' || val === null) { values.push(val); return }
    if (Array.isArray(val)) { val.forEach(walk); return }
    for (const v of Object.values(val as Record<string, unknown>)) walk(v)
  }
  walk(parsed)
  const strValues = values.map(v => String(v ?? 'null'))
  const unique = [...new Set(strValues)]
  return JSON.stringify({ totalValues: values.length, uniqueValues: unique.length, values: unique.slice(0, 100) }, null, 2)
}

// ---- Extract Nested Objects ----
export function extractNestedObjects(input: string): string {
  const parsed = JSON.parse(input)
  const objects: Record<string, unknown>[] = []
  function walk(val: unknown, path: string): void {
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach((v, i) => walk(v, `${path}[${i}]`)); return }
    objects.push(val as Record<string, unknown>)
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) walk(v, `${path}.${k}`)
  }
  walk(parsed, '$')
  return JSON.stringify({ totalObjects: objects.length, objects: objects.slice(0, 50) }, null, 2)
}

// ---- JSON Array Counter ----
export function jsonArrayCounter(input: string): string {
  const parsed = JSON.parse(input)
  const arraySizes: { path: string; length: number }[] = []
  function walk(val: unknown, path: string): void {
    if (Array.isArray(val)) arraySizes.push({ path: path || '$', length: val.length })
    if (typeof val !== 'object' || val === null) return
    if (Array.isArray(val)) { val.forEach((v, i) => walk(v, `${path}[${i}]`)); return }
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) walk(v, `${path}.${k}`)
  }
  walk(parsed, '')
  return JSON.stringify({
    totalArrays: arraySizes.length,
    totalItems: arraySizes.reduce((s, a) => s + a.length, 0),
    averageSize: arraySizes.length > 0 ? Math.round(arraySizes.reduce((s, a) => s + a.length, 0) / arraySizes.length) : 0,
    maxSize: arraySizes.length > 0 ? Math.max(...arraySizes.map(a => a.length)) : 0,
    arrays: arraySizes.slice(0, 100)
  }, null, 2)
}

// ---- Fake Data to JSON (reverse of json-fake-generator: infer template from data) ----
export function fakeDataToJson(input: string): string {
  const parsed = JSON.parse(input)
  function infer(val: unknown): unknown {
    if (val === null) return 'null'
    if (typeof val === 'boolean') return 'boolean'
    if (typeof val === 'number') return Number.isInteger(val) ? 'number' : 'float'
    if (typeof val === 'string') {
      const l = val.toLowerCase()
      if (/^[\w.+-]+@[\w.-]+\.\w+$/.test(val)) return 'email'
      if (/^https?:\/\//.test(val)) return 'url'
      if (/^\d{4}-\d{2}-\d{2}/.test(val)) return 'date'
      if (/^[\w-]{8,36}$/.test(val) && !val.includes('@')) return 'uuid'
      if (/^\+?\d[\d\s-]{7,}$/.test(val)) return 'phone'
      if (l === 'john doe' || l === 'alice' || l === 'bob' || l === 'charlie') return 'name'
      return 'string'
    }
    if (Array.isArray(val)) {
      if (val.length === 0) return []
      return [infer(val[0])]
    }
    if (typeof val === 'object') {
      const result: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) result[k] = infer(v)
      return result
    }
    return 'unknown'
  }
  const template = infer(parsed)
  return JSON.stringify(template, null, 2)
}

// ---- Swagger / OpenAPI 2.0 ----
export function jsonToSwagger(input: string): string {
  const parsed = JSON.parse(input)
  function inferSwaggerType(val: unknown): Record<string, unknown> {
    if (val === null) return { type: 'string', nullable: true }
    if (typeof val === 'boolean') return { type: 'boolean' }
    if (typeof val === 'number') return Number.isInteger(val) ? { type: 'integer', format: 'int32' } : { type: 'number', format: 'double' }
    if (typeof val === 'string') return { type: 'string' }
    if (Array.isArray(val)) {
      const itemType = val.length > 0 ? inferSwaggerType(val[0]) : { type: 'string' }
      return { type: 'array', items: itemType }
    }
    if (typeof val === 'object') {
      const properties: Record<string, unknown> = {}
      const required: string[] = []
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        properties[k] = inferSwaggerType(v)
        required.push(k)
      }
      return { type: 'object', properties, required }
    }
    return { type: 'string' }
  }
  const schema = inferSwaggerType(parsed)
  const swagger: Record<string, unknown> = {
    swagger: '2.0',
    info: { title: 'Generated API', version: '1.0.0', description: 'Auto-generated from JSON data' },
    host: 'api.example.com',
    basePath: '/v1',
    schemes: ['https'],
    paths: {},
    definitions: { GeneratedModel: schema as Record<string, unknown> }
  }
  return JSON.stringify(swagger, null, 2)
}

export function swaggerToJson(input: string): string {
  const parsed = JSON.parse(input)
  const defs = parsed.definitions || {}
  const firstKey = Object.keys(defs)[0]
  if (!firstKey) throw new Error('No definitions found in Swagger spec')
  const schema = defs[firstKey]

  function generateSample(schema: Record<string, unknown>): unknown {
    if (schema.example !== undefined) return schema.example
    if (schema.default !== undefined) return schema.default
    if (schema.enum && Array.isArray(schema.enum)) return schema.enum[0]
    const type = schema.type
    if (type === 'object' || schema.properties) {
      const result: Record<string, unknown> = {}
      const props = schema.properties as Record<string, unknown> | undefined
      if (props) for (const [k, v] of Object.entries(props)) result[k] = generateSample(v as Record<string, unknown>)
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
    return null
  }
  const sample = generateSample(schema as Record<string, unknown>)
  return JSON.stringify(sample, null, 2)
}

// ---- PDF to JSON (basic text extraction from PDF string) ----
export function pdfToJson(input: string): string {
  const text = input.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim()
  const lines = text.split(/\.\s+/).filter(Boolean)
  const result: Record<string, unknown> = {
    source: 'PDF text extraction',
    totalLines: lines.length,
    text: text.substring(0, 5000),
    paragraphs: lines.slice(0, 100)
  }
  return JSON.stringify(result, null, 2)
}

// ---- QR Code to JSON (basic placeholder for now) ----
export function qrCodeToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim())
  const text = lines.join(' ').trim()
  try {
    const parsed = JSON.parse(text)
    return JSON.stringify({ source: 'QR Code data', decoded: parsed }, null, 2)
  } catch {
    return JSON.stringify({ source: 'QR Code data', decoded: text }, null, 2)
  }
}

// ---- Barcode generation (SVG) ----
export function jsonToBarcode(input: string): string {
  const parsed = JSON.parse(input)
  const text = typeof parsed === 'string' ? parsed : JSON.stringify(parsed)
  if (!text) throw new Error('Cannot generate barcode from empty data')
  const code39 = text.toUpperCase()
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*'
  const patterns: Record<string, string> = {}
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i].charCodeAt(0)
    patterns[chars[i]] = (c % 2 === 0 ? '101' : '111') + (c % 3 === 0 ? '0101' : '00101')
  }
  const barWidth = 2
  const height = 60
  let x = 10
  const bars: string[] = []
  const encoded = '*' + code39.replace(/[^A-Z0-9\-. $\/+%]/g, '') + '*'
  for (const ch of encoded) {
    const p = patterns[ch] || '101'
    for (const bit of p) {
      if (bit === '1') bars.push(`<rect x="${x}" y="5" width="${barWidth}" height="${height}" fill="#000" />`)
      x += barWidth
    }
    x += barWidth
  }
  const totalWidth = x + 10
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height + 20}" viewBox="0 0 ${totalWidth} ${height + 20}">
  <rect width="100%" height="100%" fill="#fff" />
  ${bars.join('\n  ')}
  <text x="${totalWidth / 2}" y="${height + 15}" text-anchor="middle" font-family="monospace" font-size="10" fill="#000">${text}</text>
</svg>`
  return svg
}

export function barcodeToJson(input: string): string {
  const match = input.match(/<text[^>]*>([^<]+)<\/text>/)
  const decoded = match ? match[1].trim() : input.replace(/<[^>]*>/g, '').trim()
  try {
    return JSON.stringify({ source: 'Barcode', decoded: JSON.parse(decoded) }, null, 2)
  } catch {
    return JSON.stringify({ source: 'Barcode', decoded }, null, 2)
  }
}

// ---- Image to JSON (basic - extracts JSON-like patterns from text) ----
export function imageToJson(input: string): string {
  const cleaned = input.replace(/\s+/g, ' ').trim()
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/) || cleaned.match(/\[[\s\S]*\]/)
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0])
      return JSON.stringify({ source: 'Extracted from text', data: parsed }, null, 2)
    } catch {
      return JSON.stringify({ source: 'Text recognition', text: cleaned.substring(0, 2000) }, null, 2)
    }
  }
  return JSON.stringify({ source: 'Text recognition', text: cleaned.substring(0, 2000) }, null, 2)
}

// ---- Validate Uploaded JSON ----
export function validateUploadedJson(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const formatted = JSON.stringify(parsed)
    return JSON.stringify({
      valid: true,
      size: input.length,
      minifiedSize: formatted.length,
      type: Array.isArray(parsed) ? 'array' : typeof parsed === 'object' && parsed !== null ? 'object' : typeof parsed,
      rootKeys: typeof parsed === 'object' && parsed !== null ? Object.keys(parsed as Record<string, unknown>).length : 0,
      message: 'Valid JSON'
    }, null, 2)
  } catch (e) {
    return JSON.stringify({
      valid: false,
      error: (e as Error).message
    }, null, 2)
  }
}

// ---- Convert JSON File (basic file processing) ----
export function convertJsonFile(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify({
    originalSize: input.length,
    type: Array.isArray(parsed) ? 'array' : typeof parsed,
    data: parsed
  }, null, 2)
}

// ---- JSON Live Preview (format + structure) ----
export function jsonLivePreview(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const formatted = JSON.stringify(parsed, null, 2)
    const keys = new Set<string>()
    let arrays = 0, objects = 0, strings = 0, numbers = 0, booleans = 0, nulls = 0
    function walk(v: unknown): void {
      if (v === null) { nulls++; return }
      if (typeof v === 'boolean') { booleans++; return }
      if (typeof v === 'number') { numbers++; return }
      if (typeof v === 'string') { strings++; return }
      if (Array.isArray(v)) { arrays++; v.forEach(walk); return }
      if (typeof v === 'object') {
        objects++
        for (const [k, val] of Object.entries(v as Record<string, unknown>)) { keys.add(k); walk(val) }
      }
    }
    walk(parsed)
    return JSON.stringify({
      valid: true,
      size: input.length,
      formatted,
      structure: {
        totalKeys: keys.size,
        keys: [...keys],
        arrays, objects, strings, numbers, booleans, nulls
      }
    }, null, 2)
  } catch (e) {
    return JSON.stringify({ valid: false, error: (e as Error).message }, null, 2)
  }
}

// ---- JSON to Word (generate .doc-compatible HTML) ----
export function jsonToWord(input: string): string {
  const parsed = JSON.parse(input)
  const json = JSON.stringify(parsed, null, 2)
  const escaped = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
<head><meta charset="utf-8"><title>JSON Data</title></head>
<body>
  <h1>JSON Data Document</h1>
  <p>Generated by JSONKits</p>
  <pre style="font-family: Consolas, monospace; font-size: 10pt; background: #f5f5f5; padding: 12px;">${escaped}</pre>
</body>
</html>`
}

export function wordToJson(input: string): string {
  const cleaned = input.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/) || cleaned.match(/\[[\s\S]*\]/)
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0])
      return JSON.stringify(parsed, null, 2)
    } catch { /* fall through */ }
  }
  return JSON.stringify({ source: 'Word document text', text: cleaned.substring(0, 2000) }, null, 2)
}

// ---- JSON to Haskell Data Types ----
export function jsonToHaskell(input: string): string {
  const parsed = JSON.parse(input)
  const types: string[] = []
  function toHaskellType(val: unknown): string {
    if (val === null || val === undefined) return 'Maybe Value'
    if (typeof val === 'boolean') return 'Bool'
    if (typeof val === 'number') return Number.isInteger(val) ? 'Int' : 'Double'
    if (typeof val === 'string') return 'Text'
    if (Array.isArray(val)) return val.length > 0 ? `[${toHaskellType(val[0])}]` : '[Value]'
    if (typeof val === 'object') return generateHaskellType(val as Record<string, unknown>)
    return 'Value'
  }
  let counter = 0
  function generateHaskellType(obj: Record<string, unknown>): string {
    const typeName = `JsonType${counter++}`
    const fields = Object.entries(obj).map(([k, v]) => `  , ${k} :: ${toHaskellType(v)}`)
    types.push(`data ${typeName} = ${typeName}\n  { ${fields.join('\n  ')}\n  } deriving (Show, Eq, Generic)`)
    return typeName
  }
  const rootType = toHaskellType(parsed)
  const header = '{-# LANGUAGE DeriveGeneric #-}\n{-# LANGUAGE DeriveAnyClass #-}\n\nimport Data.Text (Text)\nimport GHC.Generics (Generic)\nimport Data.Aeson (ToJSON, FromJSON)\n\n'
  if (types.length === 0) return `${header}type Root = ${rootType}\n`
  return `${header}${types.join('\n\n')}\n\ntype Root = ${rootType}\n`
}

// ---- JSON to Elm Type Aliases ----
export function jsonToElm(input: string): string {
  const parsed = JSON.parse(input)
  const types: string[] = []
  function toElmType(val: unknown): string {
    if (val === null || val === undefined) return 'Value'
    if (typeof val === 'boolean') return 'Bool'
    if (typeof val === 'number') return Number.isInteger(val) ? 'Int' : 'Float'
    if (typeof val === 'string') return 'String'
    if (Array.isArray(val)) return val.length > 0 ? `List ${toElmType(val[0])}` : 'List Value'
    if (typeof val === 'object') return generateElmType(val as Record<string, unknown>)
    return 'Value'
  }
  let counter = 0
  function generateElmType(obj: Record<string, unknown>): string {
    const typeName = `JsonType${counter++}`
    const fields = Object.entries(obj).map(([k, v]) => `    , ${k} : ${toElmType(v)}`)
    types.push(`type alias ${typeName} =\n  { ${fields.join('\n  ')}\n  }`)
    return typeName
  }
  const rootType = toElmType(parsed)
  const header = 'module JsonTypes exposing (..)\n\nimport Json.Decode exposing (..)\nimport Json.Encode exposing (..)\n\n'
  if (types.length === 0) return `${header}type alias Root =\n    ${rootType}\n`
  return `${header}${types.join('\n\n')}\n\ntype alias Root =\n    ${rootType}\n`
}

// ---- JSON to OCaml Types ----
export function jsonToOcaml(input: string): string {
  const parsed = JSON.parse(input)
  const types: string[] = []
  function toOcamlType(val: unknown): string {
    if (val === null || val === undefined) return 'string option'
    if (typeof val === 'boolean') return 'bool'
    if (typeof val === 'number') return Number.isInteger(val) ? 'int' : 'float'
    if (typeof val === 'string') return 'string'
    if (Array.isArray(val)) return val.length > 0 ? `${toOcamlType(val[0])} list` : 'string list'
    if (typeof val === 'object') return generateOcamlType(val as Record<string, unknown>)
    return 'string'
  }
  let counter = 0
  function generateOcamlType(obj: Record<string, unknown>): string {
    const typeName = `json_type_${counter++}`
    const fields = Object.entries(obj).map(([k, v]) => `    ${k}: ${toOcamlType(v)};`)
    types.push(`type ${typeName} = {\n${fields.join('\n')}\n} [@@deriving yojson]`)
    return typeName
  }
  const rootType = toOcamlType(parsed)
  if (types.length === 0) return `type root = ${rootType}\n`
  return `${types.join('\n\n')}\n\ntype root = ${rootType}\n`
}

// ---- JSON to Zig Structs ----
export function jsonToZig(input: string): string {
  const parsed = JSON.parse(input)
  const types: string[] = []
  function toZigType(val: unknown): string {
    if (val === null || val === undefined) return '?[]const u8'
    if (typeof val === 'boolean') return 'bool'
    if (typeof val === 'number') return Number.isInteger(val) ? 'i64' : 'f64'
    if (typeof val === 'string') return '[]const u8'
    if (Array.isArray(val)) return val.length > 0 ? `[]${toZigType(val[0])}` : '[]const u8'
    if (typeof val === 'object') return generateZigStruct(val as Record<string, unknown>)
    return '[]const u8'
  }
  let counter = 0
  function generateZigStruct(obj: Record<string, unknown>): string {
    const typeName = `JsonType${counter++}`
    const fields = Object.entries(obj).map(([k, v]) => `    ${k}: ${toZigType(v)},`)
    types.push(`pub const ${typeName} = struct {\n${fields.join('\n')}\n};`)
    return typeName
  }
  const rootType = toZigType(parsed)
  const header = 'const std = @import("std");\nconst json = std.json;\n\n'
  if (types.length === 0) return `${header}pub const Root = ${rootType};\n`
  return `${header}${types.join('\n\n')}\n\npub const Root = ${rootType};\n`
}

// ---- Syntax Checker (wraps validateJSON to return a string) ----
export function jsonSyntaxChecker(input: string): string {
  try {
    JSON.parse(input)
    return JSON.stringify({ valid: true, message: 'Valid JSON syntax' }, null, 2)
  } catch (e) {
    return JSON.stringify({ valid: false, error: (e as Error).message }, null, 2)
  }
}
