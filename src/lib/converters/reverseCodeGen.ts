function parseNumber(val: string): unknown {
  if (val.toLowerCase() === 'true') return true
  if (val.toLowerCase() === 'false') return false
  if (val.toLowerCase() === 'null') return null
  const num = Number(val)
  if (!isNaN(num) && val !== '') return num
  return val
}

export function typescriptInterfaceToJson(input: string): string {
  const lines = input.split('\n')
  const fields: Record<string, string> = {}
  for (const line of lines) {
    const match = line.match(/^\s*(\w+)\??\s*:\s*([^;]+);?$/)
    if (match) {
      const [, name, type] = match
      fields[name] = type.trim()
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getSampleValue(type: string): unknown {
  const t = type.toLowerCase().replace(/\[\]$/, '').trim()
  if (type.endsWith('[]') || t.startsWith('array') || t.startsWith('list')) return []
  if (t === 'string' || t === 'str') return 'string'
  if (t === 'number' || t === 'int' || t === 'float' || t === 'double') return 0
  if (t === 'boolean' || t === 'bool') return true
  if (t === 'date' || t === 'datetime') return '2024-01-01'
  if (t === 'any' || t === 'object' || t === 'unknown') return null
  if (t.startsWith('{')) return {}
  return 'string'
}

export function javaClassToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/private\s+(\w+[<>[\]]*)\s+(\w+);/)
    if (match) {
      const [, type, name] = match
      fields[name] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getJavaSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getJavaSampleValue(type: string): unknown {
  const t = type.toLowerCase()
  if (t.includes('string')) return 'string'
  if (t.includes('int') || t.includes('long') || t.includes('short') || t.includes('byte')) return 0
  if (t.includes('double') || t.includes('float') || t.includes('bigdecimal')) return 0.0
  if (t.includes('boolean')) return true
  if (t.includes('list') || t.includes('array') || t.includes('set')) return []
  if (t.includes('map') || t.includes('object')) return {}
  if (t.includes('date') || t.includes('localdatetime') || t.includes('localdate')) return '2024-01-01'
  return 'string'
}

export function csharpClassToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/public\s+(\w+[<>[\]]*)\??\s+(\w+)\s*{/)
    if (match) {
      const [, type, name] = match
      fields[name] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getJavaSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

export function pythonDictToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const lines = input.split('\n')
  let inDict = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('{')) { inDict = true; continue }
    if (trimmed.startsWith('}')) { inDict = false; continue }
    if (!inDict && !trimmed.includes(':')) continue
    const match = trimmed.match(/['"]?(\w+)['"]?\s*:\s*(.+),?$/)
    if (match) {
      const [, key, value] = match
      result[key] = parsePythonValue(value.trim())
    }
  }
  return JSON.stringify(result, null, 2)
}

function parsePythonValue(value: string): unknown {
  if (value === 'None') return null
  if (value === 'True') return true
  if (value === 'False') return false
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1)
  if (value.startsWith('"') && value.endsWith('"')) return value.slice(1, -1)
  if (value.startsWith('[') || value.startsWith('{')) return []
  const num = Number(value.replace(/,?$/, ''))
  if (!isNaN(num) && value !== '') return num
  return value.replace(/,$/, '')
}

export function goStructToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/^[ \t]+(\w+)\s+([\w.]+(?:\[\])?)\s+`json:"(\w+)/)
    if (match) {
      const [, name, type, jsonTag] = match
      fields[jsonTag || name] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getGoSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getGoSampleValue(type: string): unknown {
  const t = type.toLowerCase()
  if (t === 'string') return 'string'
  if (t === 'int' || t === 'int64' || t === 'int32' || t === 'int16' || t === 'int8' || t === 'uint') return 0
  if (t === 'float64' || t === 'float32') return 0.0
  if (t === 'bool') return true
  if (t.startsWith('[]') || t.startsWith('slice')) return []
  if (t === 'interface{}' || t === 'any' || t === 'object') return {}
  if (t === 'time.time') return '2024-01-01T00:00:00Z'
  return 'string'
}

export function phpArrayToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    const match = trimmed.match(/'([^']+)'\s*=>\s*(.+),?$/)
    if (!match) continue
    const [, key, value] = match
    result[key] = parsePythonValue(value.trim())
  }
  const simple = Object.keys(result).length === 0 && lines.some(l => l.trim().startsWith("'"))
  if (simple) {
    const items: unknown[] = []
    for (const line of lines) {
      const trimmed = line.trim()
      const match = trimmed.match(/^\s*'([^']*)'\s*=>\s*(.+),?$/)
      if (match) {
        items.push(parsePythonValue(match[2].trim()))
      }
    }
    if (items.length) return JSON.stringify(items, null, 2)
  }
  return JSON.stringify(result, null, 2)
}

export function kotlinToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/val\s+(\w+)\s*:\s*(\w+[?]?)/)
    if (match) {
      const [, name, type] = match
      fields[name] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getKotlinSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getKotlinSampleValue(type: string): unknown {
  const t = type.replace('?', '').toLowerCase()
  if (t === 'string') return 'string'
  if (t === 'int' || t === 'long' || t === 'short' || t === 'byte') return 0
  if (t === 'double' || t === 'float') return 0.0
  if (t === 'boolean' || t === 'bool') return true
  if (t === 'list' || t.startsWith('list<') || t === 'array' || t.startsWith('array<')) return []
  if (t === 'any' || t === 'object' || t.startsWith('map<')) return {}
  return 'string'
}

export function swiftToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/let\s+(\w+)\s*:\s*(\w+[?]?)/)
    if (match) {
      const [, name, type] = match
      fields[name.replace(/^let /, '')] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getSwiftSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getSwiftSampleValue(type: string): unknown {
  const t = type.replace('?', '').toLowerCase()
  if (t === 'string') return 'string'
  if (t === 'int' || t === 'int32' || t === 'int64') return 0
  if (t === 'double' || t === 'float' || t === 'cgfloat') return 0.0
  if (t === 'bool' || t === 'boolean') return true
  if (t.startsWith('[')) return []
  if (t.startsWith('{') || t === 'any') return {}
  if (t === 'date') return '2024-01-01T00:00:00Z'
  return 'string'
}

export function dartToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/final\s+(\w+[<>\[\]]*)\s+(\w+);/)
    if (match) {
      const [, type, name] = match
      fields[name] = type
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key] = getDartSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getDartSampleValue(type: string): unknown {
  const t = type.toLowerCase()
  if (t === 'string') return 'string'
  if (t === 'int') return 0
  if (t === 'double' || t === 'float' || t === 'num') return 0.0
  if (t === 'bool' || t === 'boolean') return true
  if (t.startsWith('list<') || t.startsWith('list') || t.startsWith('map<')) return []
  if (t === 'dynamic' || t === 'object') return {}
  if (t === 'datetime') return '2024-01-01T00:00:00Z'
  return 'string'
}

export function rustStructToJson(input: string): string {
  const fields: Record<string, string> = {}
  const lines = input.split('\n')
  for (const line of lines) {
    const match = line.match(/pub\s+(\w+)\s*:\s*([^,]+),/)
    if (match) {
      const [, name, type] = match
      fields[name] = type.trim()
    }
  }
  const result: Record<string, unknown> = {}
  for (const [key, type] of Object.entries(fields)) {
    result[key.replace(/_/g, '')] = getRustSampleValue(type)
  }
  return JSON.stringify(result, null, 2)
}

function getRustSampleValue(type: string): unknown {
  const t = type.toLowerCase().trim()
  if (t === 'string' || t === 'string') return 'string'
  if (t === 'i32' || t === 'i64' || t === 'i16' || t === 'i8' || t === 'u32' || t === 'u64' || t === 'usize') return 0
  if (t === 'f64' || t === 'f32') return 0.0
  if (t === 'bool') return true
  if (t.startsWith('vec<') || t.startsWith('vec') || t.startsWith('&[') || t.startsWith('[')) return []
  if (t.startsWith('option<') || t.startsWith('option')) return null
  if (t === 'serde_json::value' || t === 'value') return {}
  if (t === 'chrono::naivedatetime' || t === 'chrono::datetime' || t === 'naivedate') return '2024-01-01'
  return 'string'
}
