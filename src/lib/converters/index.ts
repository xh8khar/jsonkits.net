import * as yaml from 'js-yaml'
import Papa from 'papaparse'
import { XMLBuilder, XMLParser } from 'fast-xml-parser'

export * from './dataFormat'
export * from './codeGenerators'
export * from './reverseCodeGen'
export * from './additional'
export * from './utilities'
export * from './extras'
export * from './resources'
export * from './devTools'

export function formatJSON(input: string): string {
  try {
    return JSON.stringify(JSON.parse(input), null, 2)
  } catch {
    throw new Error('Invalid JSON')
  }
}

export function minifyJSON(input: string): string {
  try {
    return JSON.stringify(JSON.parse(input))
  } catch {
    throw new Error('Invalid JSON')
  }
}

export function validateJSON(input: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(input)
    return { valid: true }
  } catch (e) {
    return { valid: false, error: (e as Error).message }
  }
}

export function jsonToYaml(input: string): string {
  try {
    const parsed = JSON.parse(input)
    return yaml.dump(parsed, { indent: 2, lineWidth: -1, noRefs: true })
  } catch {
    throw new Error('Invalid JSON')
  }
}

export function yamlToJson(input: string): string {
  try {
    const parsed = yaml.load(input)
    if (typeof parsed === 'undefined' || parsed === null) {
      throw new Error('Empty or invalid YAML')
    }
    return JSON.stringify(parsed, null, 2)
  } catch (e) {
    throw new Error(`Invalid YAML: ${(e as Error).message}`)
  }
}

export function jsonToCsv(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const array = Array.isArray(parsed) ? parsed : [parsed]
    if (array.length === 0) return ''
    return Papa.unparse(array)
  } catch {
    throw new Error('Invalid JSON')
  }
}

export function csvToJson(input: string): string {
  try {
    const result = Papa.parse(input, { header: true, skipEmptyLines: true, dynamicTyping: true })
    if (result.errors.length > 0) {
      throw new Error(result.errors[0].message)
    }
    return JSON.stringify(result.data, null, 2)
  } catch (e) {
    throw new Error(`Invalid CSV: ${(e as Error).message}`)
  }
}

export function jsonToTypescript(input: string, rootName = 'RootObject'): string {
  try {
    const parsed = JSON.parse(input)
    return generateInterface(parsed, rootName)
  } catch {
    throw new Error('Invalid JSON')
  }
}

function generateInterface(obj: unknown, name: string): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return `type ${name} = unknown[]`
    const types = new Set(obj.map(item => getType(item)))
    const uniqueTypes = [...types]
    if (uniqueTypes.length === 1 && uniqueTypes[0].startsWith('{')) {
      return generateInterface(obj[0], name) + '[]'
    }
    return `type ${name} = ${uniqueTypes.join(' | ')}[]`
  }

  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const tsType = getType(value)
      const isOptional = value === null || value === undefined
      return `  ${key}${isOptional ? '?' : ''}: ${tsType}`
    })
    return `interface ${name} {\n${fields.join('\n')}\n}`
  }

  return getType(obj)
}

function getType(value: unknown): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]'
    const types = new Set(value.map(v => getType(v)))
    return `${[...types].join(' | ')}[]`
  }
  switch (typeof value) {
    case 'string': return 'string'
    case 'number': return 'number'
    case 'boolean': return 'boolean'
    case 'object': return `{\n${Object.entries(value as Record<string, unknown>).map(([k, v]) => `  ${k}: ${getType(v)}`).join('\n')}\n}`
    default: return 'unknown'
  }
}

export function jsonToXml(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const wrapped = parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : { root: parsed }
    const keys = Object.keys(wrapped)
    const finalObj = keys.length === 1 ? wrapped : { root: wrapped }
    const builder = new XMLBuilder({ format: true, indentBy: '  ', ignoreAttributes: false })
    return builder.build(finalObj)
  } catch {
    throw new Error('Invalid JSON')
  }
}

export function xmlToJson(input: string): string {
  try {
    const parser = new XMLParser({ ignoreAttributes: false })
    const result = parser.parse(input)
    if (!result || Object.keys(result).length === 0) {
      throw new Error('No XML elements found')
    }
    return JSON.stringify(result, null, 2)
  } catch (e) {
    throw new Error(`Invalid XML: ${(e as Error).message}`)
  }
}

function toClassName(key: string): string {
  const cleaned = key.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  if (!cleaned) return 'Item'
  return cleaned
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export function jsonToPython(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const classes: string[] = []
    const rootType = generatePythonClass(parsed, 'RootObject', classes)
    const header = 'from dataclasses import dataclass\nfrom typing import Any, List, Optional\n'
    if (classes.length === 0) {
      return `${header}\nRootObject = ${rootType}\n`
    }
    return `${header}\n\n${classes.join('\n\n\n')}\n`
  } catch {
    throw new Error('Invalid JSON')
  }
}

function generatePythonClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List[Any]'
    return `List[${getPythonType(obj[0], name, classes)}]`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => `    ${key}: ${getPythonType(value, key, classes)}`)
    classes.push(`@dataclass\nclass ${name}:\n${fields.length ? fields.join('\n') : '    pass'}`)
    return name
  }
  return getPythonType(obj, name, classes)
}

function getPythonType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Optional[Any]'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List[Any]'
    return `List[${getPythonType(value[0], key, classes)}]`
  }
  switch (typeof value) {
    case 'string': return 'str'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'float'
    case 'object': return generatePythonClass(value, toClassName(key), classes)
    default: return 'Any'
  }
}

export function jsonToGo(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const structs: string[] = []
    const rootType = generateGoStruct(parsed, 'RootObject', structs)
    if (structs.length === 0) {
      return `package main\n\ntype RootObject ${rootType}\n`
    }
    return `package main\n\n${structs.join('\n\n')}\n`
  } catch {
    throw new Error('Invalid JSON')
  }
}

function generateGoStruct(obj: unknown, name: string, structs: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]interface{}'
    return `[]${getGoType(obj[0], name, structs)}`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => `\t${toClassName(key)} ${getGoType(value, key, structs)} \`json:"${key}"\``)
    structs.push(`type ${name} struct {\n${fields.join('\n')}\n}`)
    return name
  }
  return getGoType(obj, name, structs)
}

function getGoType(value: unknown, key: string, structs: string[]): string {
  if (value === null || value === undefined) return 'interface{}'
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]interface{}'
    return `[]${getGoType(value[0], key, structs)}`
  }
  switch (typeof value) {
    case 'string': return 'string'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'float64'
    case 'object': return generateGoStruct(value, toClassName(key), structs)
    default: return 'interface{}'
  }
}

export function jsonToJava(input: string): string {
  try {
    const parsed = JSON.parse(input)
    const classes: string[] = []
    const rootType = generateJavaClass(parsed, 'RootObject', classes)
    if (classes.length === 0) {
      return `import java.util.List;\n\npublic class RootObject {\n    // root value type: ${rootType}\n}\n`
    }
    return `import java.util.List;\n\n${classes.join('\n\n')}\n`
  } catch {
    throw new Error('Invalid JSON')
  }
}

function generateJavaClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List<Object>'
    return `List<${getJavaType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => `    private ${getJavaType(value, key, classes)} ${key};`)
    const accessors = entries.map(([key, value]) => {
      const type = getJavaType(value, key, classes)
      const capKey = key.charAt(0).toUpperCase() + key.slice(1)
      return `    public ${type} get${capKey}() {\n        return ${key};\n    }\n\n    public void set${capKey}(${type} ${key}) {\n        this.${key} = ${key};\n    }`
    })
    classes.push(`public class ${name} {\n${fields.join('\n')}\n\n${accessors.join('\n\n')}\n}`)
    return name
  }
  return getJavaType(obj, name, classes)
}

function getJavaType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Object'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<Object>'
    return `List<${getJavaType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'boolean'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': return generateJavaClass(value, toClassName(key), classes)
    default: return 'Object'
  }
}

export function jsonDiff(a: string, b: string): string {
  const objA = JSON.parse(a)
  const objB = JSON.parse(b)
  return JSON.stringify(diffObjects(objA, objB), null, 2)
}

function diffObjects(a: unknown, b: unknown, path = ''): Record<string, { from: unknown; to: unknown }> {
  const changes: Record<string, { from: unknown; to: unknown }> = {}

  if (a === b) return changes

  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    changes[path || '(root)'] = { from: a, to: b }
    return changes
  }

  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    const keys = new Set([...Object.keys(a as Record<string, unknown>), ...Object.keys(b as Record<string, unknown>)])
    for (const key of keys) {
      const newPath = path ? `${path}.${key}` : key
      const valA = (a as Record<string, unknown>)[key]
      const valB = (b as Record<string, unknown>)[key]
      if (key in (a as Record<string, unknown>) && !(key in (b as Record<string, unknown>))) {
        changes[newPath] = { from: valA, to: undefined }
      } else if (!(key in (a as Record<string, unknown>)) && key in (b as Record<string, unknown>)) {
        changes[newPath] = { from: undefined, to: valB }
      } else if (JSON.stringify(valA) !== JSON.stringify(valB)) {
        Object.assign(changes, diffObjects(valA, valB, newPath))
      }
    }
  } else {
    changes[path || '(root)'] = { from: a, to: b }
  }

  return changes
}
