import { cellText, unionKeys, toRowObjects } from './cell'
import { renderHtmlTable } from './htmlTable'

export function jsonToToml(input: string): string {
  const parsed = JSON.parse(input)
  return tomlSerialize(parsed, '')
}

function tomlSerialize(obj: unknown, prefix: string): string {
  if (typeof obj !== 'object' || obj === null) {
    return ''
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return ''
    if (typeof obj[0] === 'object' && obj[0] !== null) {
      return obj.map((item, i) => {
        const header = prefix ? `[[${prefix}]]` : '[[items]]'
        return header + '\n' + tomlSerialize(item, '')
      }).join('\n')
    }
    return prefix ? `${prefix} = [${obj.map(v => tomlValue(v)).join(', ')}]\n` : ''
  }
  const entries = Object.entries(obj as Record<string, unknown>)
  let result = ''
  const subTables: string[] = []
  for (const [key, value] of entries) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      subTables.push(`[${fullKey}]\n${tomlSerialize(value, '')}`)
    } else if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
      subTables.push(value.map((item, i) => {
        return `[[${fullKey}]]\n${tomlSerialize(item, '')}`
      }).join('\n'))
    } else if (Array.isArray(value)) {
      result += `${key} = [${value.map(v => tomlValue(v)).join(', ')}]\n`
    } else {
      result += `${key} = ${tomlValue(value)}\n`
    }
  }
  if (prefix) {
    return result + (subTables.length ? '\n' + subTables.join('\n') : '')
  }
  return result + (subTables.length ? '\n' + subTables.join('\n') : '')
}

function tomlValue(value: unknown): string {
  if (value === null || value === undefined) return '""'
  if (typeof value === 'string') {
    if (value.includes('\n') || value.includes('"')) return JSON.stringify(value)
    return `"${value}"`
  }
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  return JSON.stringify(value)
}

export function tomlToJson(input: string): string {
  const result: Record<string, unknown> = {}
  const lines = input.split('\n')
  let currentSection = result
  let sectionPath: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const tableMatch = trimmed.match(/^\[{1,2}(.+)\]{1,2}$/)
    if (tableMatch) {
      const path = tableMatch[1].trim().split('.')
      sectionPath = path
      currentSection = result
      for (const part of path) {
        if (!currentSection[part] || typeof currentSection[part] !== 'object') {
          currentSection[part] = {}
        }
        currentSection = currentSection[part] as Record<string, unknown>
      }
      continue
    }

    const kvMatch = trimmed.match(/^([^=]+)=\s*(.+)$/)
    if (kvMatch) {
      const key = kvMatch[1].trim()
      const value = parseTomlValue(kvMatch[2].trim())
      currentSection[key] = value
    }
  }

  return JSON.stringify(result, null, 2)
}

function parseTomlValue(value: string): unknown {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1)
  }
  if (value === 'true') return true
  if (value === 'false') return false
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1).trim()
    if (!inner) return []
    return inner.split(',').map(v => parseTomlValue(v.trim()))
  }
  const num = Number(value)
  if (!isNaN(num) && value.trim() !== '') return num
  return value
}

export function jsonToIni(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const sections: string[] = []
  const globalLines: string[] = []
  for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const fields = Object.entries(value as Record<string, unknown>)
        .map(([k, v]) => `${k}=${cellText(v)}`)
        .join('\n')
      sections.push(`[${key}]\n${fields}`)
    } else {
      globalLines.push(`${key}=${cellText(value)}`)
    }
  }
  const globalSection = globalLines.length ? globalLines.join('\n') + '\n' : ''
  return globalSection + sections.join('\n\n')
}

export function iniToJson(input: string): string {
  const result: Record<string, unknown> = {}
  let currentSection: Record<string, unknown> = result

  for (const line of input.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith(';') || trimmed.startsWith('#')) continue

    const sectionMatch = trimmed.match(/^\[(.+)\]$/)
    if (sectionMatch) {
      const sectionName = sectionMatch[1].trim()
      if (!result[sectionName] || typeof result[sectionName] !== 'object') {
        result[sectionName] = {}
      }
      currentSection = result[sectionName] as Record<string, unknown>
      continue
    }

    const kvMatch = trimmed.match(/^([^=]+)=\s*(.*)$/)
    if (kvMatch) {
      const key = kvMatch[1].trim()
      const value = kvMatch[2].trim()
      currentSection[key] = parseIniValue(value)
    }
  }

  return JSON.stringify(result, null, 2)
}

function parseIniValue(value: string): unknown {
  if (value.toLowerCase() === 'true') return true
  if (value.toLowerCase() === 'false') return false
  const num = Number(value)
  if (!isNaN(num) && value !== '') return num
  return value
}

export function jsonToProperties(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('JSON must be an object')
  const lines = flattenToProperties(parsed as Record<string, unknown>, '')
  return lines.join('\n')
}

function flattenToProperties(obj: Record<string, unknown>, prefix: string): string[] {
  const lines: string[] = []
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      lines.push(...flattenToProperties(value as Record<string, unknown>, fullKey))
    } else if (Array.isArray(value)) {
      lines.push(`${fullKey} = ${JSON.stringify(value)}`)
    } else {
      lines.push(`${fullKey} = ${value ?? ''}`)
    }
  }
  return lines
}

export function propertiesToJson(input: string): string {
  const result: Record<string, unknown> = {}
  for (const line of input.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!')) continue
    let sepIndex = trimmed.indexOf('=')
    if (sepIndex === -1) sepIndex = trimmed.indexOf(':')
    if (sepIndex === -1) continue
    const key = trimmed.slice(0, sepIndex).trim()
    const value = trimmed.slice(sepIndex + 1).trim()
    setNested(result, key, parsePropValue(value))
  }
  return JSON.stringify(result, null, 2)
}

function parsePropValue(value: string): unknown {
  if (value.toLowerCase() === 'true') return true
  if (value.toLowerCase() === 'false') return false
  const num = Number(value)
  if (!isNaN(num) && value !== '') return num
  return value
}

function parsePlainTextPath(path: string): (string | number)[] {
  const tokens: (string | number)[] = []
  const regex = /([^.[\]]+)|\[(\d+)\]/g
  let m: RegExpExecArray | null
  while ((m = regex.exec(path)) !== null) {
    tokens.push(m[1] !== undefined ? m[1] : Number(m[2]))
  }
  return tokens
}

function setNested(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = parsePlainTextPath(path)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextIsIndex = typeof keys[i + 1] === 'number'
    if (current[key] === undefined || current[key] === null || typeof current[key] !== 'object') {
      current[key] = nextIsIndex ? [] : {}
    }
    current = current[key]
  }
  current[keys[keys.length - 1]] = value
}

export function jsonToTsv(input: string): string {
  const parsed = JSON.parse(input)
  const rowObjects = toRowObjects(parsed)
  if (rowObjects.length === 0) return ''
  const keys = unionKeys(rowObjects)
  const header = keys.join('\t')
  const rows = rowObjects.map(item => {
    const row = keys.map(key => {
      const str = cellText(item[key])
      if (str.includes('\t') || str.includes('\n') || str.includes('"')) {
        return `"${str.replace(/"/g, '""')}"`
      }
      return str
    })
    return row.join('\t')
  })
  return [header, ...rows].join('\n')
}

export function tsvToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim())
  if (lines.length < 1) throw new Error('No data found')
  const headers = parseTsvLine(lines[0])
  const result: Record<string, unknown>[] = []
  for (let i = 1; i < lines.length; i++) {
    const values = parseTsvLine(lines[i])
    const row: Record<string, unknown> = {}
    headers.forEach((h, idx) => {
      const val = values[idx]?.trim() ?? ''
      row[h] = parseNumber(val)
    })
    result.push(row)
  }
  return JSON.stringify(result, null, 2)
}

function parseTsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  for (const ch of line) {
    if (ch === '"') { inQuotes = !inQuotes; continue }
    if (ch === '\t' && !inQuotes) { result.push(current); current = ''; continue }
    current += ch
  }
  result.push(current)
  return result
}

function parseNumber(val: string): unknown {
  if (val.toLowerCase() === 'true') return true
  if (val.toLowerCase() === 'false') return false
  const num = Number(val)
  if (!isNaN(num) && val !== '') return num
  return val
}

export function jsonToHtmlTable(input: string): string {
  const parsed = JSON.parse(input)
  return renderHtmlTable(parsed, false)
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function htmlTableToJson(input: string): string {
  const rowMatch = input.match(/<tr>([\s\S]*?)<\/tr>/gi)
  if (!rowMatch || rowMatch.length < 2) throw new Error('Table must have at least header and one data row')
  const headers = extractCells(rowMatch[0])
  const result: Record<string, unknown>[] = []
  for (let i = 1; i < rowMatch.length; i++) {
    const cells = extractCells(rowMatch[i])
    const row: Record<string, unknown> = {}
    headers.forEach((h, idx) => {
      const val = cells[idx]?.trim() ?? ''
      row[h] = parseNumber(val)
    })
    result.push(row)
  }
  return JSON.stringify(result, null, 2)
}

function extractCells(tr: string): string[] {
  const cells: string[] = []
  const thMatch = tr.match(/<th[^>]*>([\s\S]*?)<\/th>/gi)
  if (thMatch) {
    for (const th of thMatch) {
      cells.push(th.replace(/<\/?th[^>]*>/gi, ''))
    }
  }
  const tdMatch = tr.match(/<td[^>]*>([\s\S]*?)<\/td>/gi)
  if (tdMatch) {
    for (const td of tdMatch) {
      cells.push(td.replace(/<\/?td[^>]*>/gi, ''))
    }
  }
  return cells
}

export function jsonToMarkdownTable(input: string): string {
  const parsed = JSON.parse(input)
  const rowObjects = toRowObjects(parsed)
  if (rowObjects.length === 0) return ''
  const keys = unionKeys(rowObjects)
  const escapeCell = (s: string) => s.replace(/\|/g, '\\|').replace(/\n/g, '<br>')
  const header = '| ' + keys.map(escapeCell).join(' | ') + ' |'
  const separator = '| ' + keys.map(() => '---').join(' | ') + ' |'
  const rows = rowObjects.map(item => {
    return '| ' + keys.map(key => escapeCell(cellText(item[key]))).join(' | ') + ' |'
  })
  return [header, separator, ...rows].join('\n')
}

export function markdownTableToJson(input: string): string {
  const lines = input.split('\n').filter(l => l.trim())
  if (lines.length < 2) throw new Error('Table must have header and separator')
  const headerMatch = lines[0].match(/^\|(.+)\|$/)
  if (!headerMatch) throw new Error('Invalid markdown table header')
  const headers = headerMatch[1].split('|').map(h => h.trim())
  const result: Record<string, unknown>[] = []
  for (let i = 2; i < lines.length; i++) {
    const rowMatch = lines[i].match(/^\|(.+)\|$/)
    if (!rowMatch) continue
    const cells = rowMatch[1].split('|').map(c => c.trim())
    const row: Record<string, unknown> = {}
    headers.forEach((h, idx) => {
      const val = cells[idx]?.trim() ?? ''
      row[h] = parseNumber(val)
    })
    result.push(row)
  }
  return JSON.stringify(result, null, 2)
}

export function jsonToPlainText(input: string): string {
  const parsed = JSON.parse(input)
  const lines = flattenToPlainText(parsed, '')
  return lines.join('\n')
}

function flattenToPlainText(obj: unknown, prefix: string): string[] {
  const lines: string[] = []
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      obj.forEach((item, i) => {
        lines.push(...flattenToPlainText(item, `${prefix}[${i}]`))
      })
    } else {
      for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
        const fullKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'object' && value !== null) {
          lines.push(...flattenToPlainText(value, fullKey))
        } else {
          lines.push(`${fullKey}: ${value ?? ''}`)
        }
      }
    }
  } else {
    lines.push(`${prefix}: ${String(obj)}`)
  }
  return lines
}

export function plainTextToJson(input: string): string {
  const result: Record<string, unknown> = {}
  for (const line of input.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    let sepIndex = trimmed.indexOf(':')
    if (sepIndex === -1) sepIndex = trimmed.indexOf('=')
    if (sepIndex === -1) continue
    const key = trimmed.slice(0, sepIndex).trim()
    const value = trimmed.slice(sepIndex + 1).trim()
    setNested(result, key, parsePropValue(value))
  }
  return JSON.stringify(result, null, 2)
}
