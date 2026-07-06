function toClassName(key: string): string {
  const cleaned = key.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  if (!cleaned) return 'Item'
  return cleaned.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}

export function jsonToZodSchema(input: string): string {
  const parsed = JSON.parse(input)
  return generateZod(parsed, 'schema', 0)
}

function generateZod(value: unknown, name: string, depth: number): string {
  const indent = '  '.repeat(depth)
  if (value === null) return `${indent}z.null()`
  if (Array.isArray(value)) {
    if (value.length === 0) return `${indent}z.array(z.any())`
    const schemas = [...new Set(value.map(v => generateZod(v, name, depth + 1).trim()))]
    if (schemas.length === 1) return `${indent}z.array(${schemas[0]})`
    return `${indent}z.array(z.union([\n${indent}  ${schemas.join(`,\n${indent}  `)}\n${indent}]))`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    const fields = entries.map(([key, val]) => {
      const fieldSchema = generateZod(val, key, depth + 2).trim()
      const isOptional = val === null || val === undefined
      return `${indent}  ${key}: ${isOptional ? `${fieldSchema}.optional()` : fieldSchema}`
    })
    return `z.object({\n${fields.join(',\n')},\n${indent}})`
  }
  switch (typeof value) {
    case 'string': return `${indent}z.string()`
    case 'number': return Number.isInteger(value) ? `${indent}z.number().int()` : `${indent}z.number()`
    case 'boolean': return `${indent}z.boolean()`
    default: return `${indent}z.any()`
  }
}

export function jsonToYupSchema(input: string): string {
  const parsed = JSON.parse(input)
  return generateYup(parsed, 0)
}

function generateYup(value: unknown, depth: number): string {
  const indent = '  '.repeat(depth)
  if (value === null) return `${indent}yup.mixed().nullable()`
  if (Array.isArray(value)) {
    if (value.length === 0) return `${indent}yup.array().of(yup.mixed())`
    const schemas = [...new Set(value.map(v => generateYup(v, depth + 1).trim()))]
    if (schemas.length === 1) return `${indent}yup.array().of(${schemas[0]})`
    return `${indent}yup.array().of(yup.mixed())`
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    const fields = entries.map(([key, val]) => {
      const fieldSchema = generateYup(val, depth + 2).trim()
      return `${indent}  ${key}: ${fieldSchema}`
    })
    return `yup.object({\n${fields.join(',\n')},\n${indent}})`
  }
  switch (typeof value) {
    case 'string': return `${indent}yup.string()`
    case 'number': return Number.isInteger(value) ? `${indent}yup.number().integer()` : `${indent}yup.number()`
    case 'boolean': return `${indent}yup.boolean()`
    default: return `${indent}yup.mixed()`
  }
}

export function jsonToPrismaSchema(input: string): string {
  const parsed = JSON.parse(input)
  const models: string[] = []
  generatePrismaModel(parsed, 'Model', models)
  if (models.length === 0) return `// Cannot generate a Prisma model from a JSON primitive`
  return `generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n${models.join('\n\n')}\n`
}

function generatePrismaModel(value: unknown, name: string, models: string[]): string {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return ``
  const entries = Object.entries(value as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    const prismaType = getPrismaType(val, key, name, models)
    const isOptional = val === null || val === undefined
    const optional = isOptional || key.endsWith('_id') || key.endsWith('Id') ? '?' : ''
    const idAttr = key === 'id' || key.endsWith('_id') || key.endsWith('Id') ? ' @id @default(autoincrement())' : ''
    if (prismaType.includes(name)) return `  ${key}${optional} ${prismaType}`
    return `  ${key}${optional} ${prismaType}${idAttr}`
  })
  models.push(`model ${name} {\n${fields.join('\n')}\n}`)
  return name
}

function getPrismaType(value: unknown, key: string, parentName: string, models: string[]): string {
  if (value === null || value === undefined) return 'Json?'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'Json[]'
    if (typeof value[0] === 'object' && value[0] !== null) {
      const refName = parentName + toClassName(key)
      generatePrismaModel(value[0], refName, models)
      return `${refName}[]`
    }
    return `${getPrismaScalar(value[0])}[]`
  }
  if (typeof value === 'object') {
    const refName = parentName + toClassName(key)
    generatePrismaModel(value, refName, models)
    return refName
  }
  return getPrismaScalar(value)
}

function getPrismaScalar(value: unknown): string {
  switch (typeof value) {
    case 'string': return 'String'
    case 'number': return Number.isInteger(value) ? 'Int' : 'Float'
    case 'boolean': return 'Boolean'
    default: return 'Json'
  }
}

export function jsonToMongooseSchema(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('JSON root must be an object to generate a Mongoose schema')
  }
  const schemaFields = generateMongooseFields(parsed, 0)
  return `import mongoose, { Schema, Document } from 'mongoose'\n\nexport interface I${toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Model')} extends Document {\n${Object.entries(parsed as Record<string, unknown>).map(([key]) => `  ${key}: ${getMongooseTS(parsed, key)}`).join('\n')}\n}\n\nconst ${toLowerCaseFirst(toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Model'))}Schema = new Schema({\n${schemaFields}\n}, { timestamps: true })\n\nexport default mongoose.model<I${toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Model')}>('${toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Model')}', ${toLowerCaseFirst(toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Model'))}Schema)\n`
}

function toLowerCaseFirst(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

function getMongooseTS(parsed: Record<string, unknown>, key: string): string {
  const val = parsed[key]
  if (val === null || val === undefined) return 'any'
  if (Array.isArray(val)) return 'any[]'
  return typeof val === 'object' ? `${toClassName(key)}` : typeof val
}

function generateMongooseFields(value: Record<string, unknown>, depth: number): string {
  const indent = '  '.repeat(depth)
  return Object.entries(value).map(([key, val]) => {
    if (val === null || val === undefined) return `${indent}${key}: { type: Schema.Types.Mixed, required: false }`
    if (Array.isArray(val)) {
      if (val.length === 0) return `${indent}${key}: [{ type: Schema.Types.Mixed }]`
      const itemType = getMongooseType(val[0])
      return `${indent}${key}: [${itemType}]`
    }
    if (typeof val === 'object') {
      return `${indent}${key}: new Schema({\n${generateMongooseFields(val as Record<string, unknown>, depth + 1)}\n${indent}}, { _id: false })`
    }
    return `${indent}${key}: { type: ${getMongooseType(val)} }`
  }).join(',\n')
}

function getMongooseType(value: unknown): string {
  if (value === null || value === undefined) return 'Schema.Types.Mixed'
  if (Array.isArray(value)) return '[Schema.Types.Mixed]'
  switch (typeof value) {
    case 'string': return 'String'
    case 'number': return Number.isInteger(value) ? 'Number' : 'Number'
    case 'boolean': return 'Boolean'
    case 'object': return 'Schema.Types.Mixed'
    default: return 'Schema.Types.Mixed'
  }
}

export function jsonToTypeScriptEnum(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('JSON root must be an object to generate TypeScript enums')
  }
  const entries = Object.entries(parsed as Record<string, unknown>)
  const enumName = toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Enum')
  const allStrings = entries.every(([, v]) => typeof v === 'string')
  const allNumbers = entries.every(([, v]) => typeof v === 'number')
  if (!allStrings && !allNumbers) {
    throw new Error('Enum values must be all strings or all numbers')
  }
  const values = entries.map(([key, val]) => `  ${key} = ${allStrings ? `'${val}'` : val}`)
  return `enum ${enumName} {\n${values.join(',\n')}\n}`
}

export function jsonToTypeGuard(input: string): string {
  const parsed = JSON.parse(input)
  const typeName = toClassName(Object.keys(parsed as Record<string, unknown>)[0] || 'Type')
  const checks: string[] = []
  generateTypeGuard(parsed, 'obj', typeName, checks, 0)
  return `function is${typeName}(obj: unknown): obj is ${typeName} {\n  return (\n    typeof obj === 'object' &&\n    obj !== null &&\n    !Array.isArray(obj) &&\n${checks.join(' &&\n')}\n  )\n}`
}

function generateTypeGuard(value: unknown, path: string, name: string, checks: string[], depth: number): void {
  const indent = '  '.repeat(depth)
  if (typeof value !== 'object' || value === null) return
  const obj = value as Record<string, unknown>
  Object.entries(obj).forEach(([key, val]) => {
    const fieldPath = `${path}['${key}']`
    if (val === null) {
      checks.push(`${indent}    ${fieldPath} === null`)
    } else if (Array.isArray(val)) {
      checks.push(`${indent}    Array.isArray(${fieldPath})`)
    } else if (typeof val === 'object') {
      checks.push(`${indent}    typeof ${fieldPath} === 'object' && ${fieldPath} !== null`)
      generateTypeGuard(val, fieldPath, name, checks, depth)
    } else {
      checks.push(`${indent}    typeof ${fieldPath} === '${typeof val}'`)
    }
  })
}

export function jsonToPydanticV2(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('JSON root must be an object to generate Pydantic models')
  }
  const classes: string[] = []
  generatePydanticModel(parsed, 'RootModel', classes)
  if (classes.length === 0) return `# No models could be generated from this JSON`
  return `from pydantic import BaseModel, Field\nfrom typing import Any, List, Optional\n\n\n${classes.join('\n\n\n')}\n`
}

function generatePydanticModel(value: unknown, name: string, classes: string[]): string {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return ``
  const entries = Object.entries(value as Record<string, unknown>)
  const fields = entries.map(([key, val]) => {
    const pyType = getPydanticType(val, toClassName(key), classes)
    const isOptional = val === null || val === undefined
    const defaultVal = isOptional ? ' = None' : ''
    return `    ${key}: ${pyType}${defaultVal}`
  })
  classes.push(`class ${name}(BaseModel):\n${fields.length > 0 ? fields.join('\n') : '    pass'}`)
  return name
}

function getPydanticType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Optional[Any]'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List[Any]'
    const itemType = getPydanticType(value[0], key, classes)
    return `List[${itemType}]`
  }
  if (typeof value === 'object') {
    return generatePydanticModel(value, key, classes)
  }
  switch (typeof value) {
    case 'string': return 'str'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'float'
    default: return 'Any'
  }
}

export function pathNotationConvert(input: string): string {
  const lines = input.trim().split('\n')
  if (lines.length < 2) {
    throw new Error('Provide a JSON path expression on the first line and the source format (jsonpath, jsonpointer, or jmespath) on the second line')
  }
  const expression = lines[0].trim()
  const format = lines[1].trim().toLowerCase()
  if (format === 'jsonpath') {
    const pointer = jsonPathToJsonPointer(expression)
    const jmespath = jsonPathToJmesPath(expression)
    return `JSONPath:     ${expression}\nJSON Pointer: ${pointer}\nJMESPath:     ${jmespath}`
  }
  if (format === 'jsonpointer') {
    const jsonpath = jsonPointerToJsonPath(expression)
    const jmespath = jsonPathToJmesPath(jsonpath)
    return `JSON Pointer: ${expression}\nJSONPath:     ${jsonpath}\nJMESPath:     ${jmespath}`
  }
  if (format === 'jmespath') {
    const jsonpath = jmesPathToJsonPath(expression)
    const pointer = jsonPathToJsonPointer(jsonpath)
    return `JMESPath:     ${expression}\nJSONPath:     ${jsonpath}\nJSON Pointer: ${pointer}`
  }
  throw new Error('Unknown format. Use jsonpath, jsonpointer, or jmespath')
}

function jsonPathToJsonPointer(expr: string): string {
  let p = expr.replace(/^\$\.?/, '/')
  p = p.replace(/\./g, '/')
  p = p.replace(/\[(\d+)\]/g, '/$1')
  p = p.replace(/\[['"](.+?)['"]\]/g, '/$1')
  p = p.replace(/\/*$/, '')
  if (!p.startsWith('/')) p = '/' + p
  return p
}

function jsonPointerToJsonPath(ptr: string): string {
  const parts = ptr.replace(/^\//, '').split('/')
  return '$.' + parts.map(p => /^\d+$/.test(p) ? `[${p}]` : p).join('.')
}

function jsonPathToJmesPath(expr: string): string {
  let p = expr.replace(/^\$\.?/, '')
  p = p.replace(/\[(\d+)\]/g, '[$1]')
  p = p.replace(/\[['"](.+?)['"]\]/g, '.$1')
  return p
}

function jmesPathToJsonPath(expr: string): string {
  return '$.' + expr
}

export function jsonSchemaDiff(input: string): string {
  const parts = input.trim().split(/\n{3,}/)
  if (parts.length < 2) {
    throw new Error('Provide two JSON Schemas separated by at least 3 blank lines')
  }
  const schemaA = JSON.parse(parts[0])
  const schemaB = JSON.parse(parts[1])
  const changes: string[] = []
  diffSchemaNodes(schemaA, schemaB, '#', changes)
  if (changes.length === 0) return 'No differences found between the two schemas'
  return changes.join('\n')
}

function diffSchemaNodes(a: Record<string, unknown>, b: Record<string, unknown>, path: string, changes: string[]): void {
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)])
  for (const key of allKeys) {
    const currentPath = `${path}/${key}`
    if (!(key in a)) {
      changes.push(`+ ${currentPath}: ${JSON.stringify(b[key])}`)
      continue
    }
    if (!(key in b)) {
      changes.push(`- ${currentPath}: ${JSON.stringify(a[key])}`)
      continue
    }
    const valA = a[key]
    const valB = b[key]
    if (key === 'type') {
      if (JSON.stringify(valA) !== JSON.stringify(valB)) {
        changes.push(`~ ${currentPath}: ${JSON.stringify(valA)} → ${JSON.stringify(valB)}`)
      }
    } else if (key === 'properties' && typeof valA === 'object' && typeof valB === 'object') {
      diffSchemaNodes(valA as Record<string, unknown>, valB as Record<string, unknown>, currentPath, changes)
    } else if (key === 'items' && typeof valA === 'object' && typeof valB === 'object') {
      diffSchemaNodes(valA as Record<string, unknown>, valB as Record<string, unknown>, currentPath, changes)
    } else if (JSON.stringify(valA) !== JSON.stringify(valB)) {
      changes.push(`~ ${currentPath}: ${JSON.stringify(valA)} → ${JSON.stringify(valB)}`)
    }
  }
}

export function jsonDataAnonymizer(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('JSON root must be an object')
  }
  return JSON.stringify(anonymizeData(parsed, 0), null, 2)
}

const sensitiveKeys = ['password', 'pass', 'pwd', 'secret', 'token', 'api_key', 'apiKey', 'apikey', 'auth', 'authorization', 'ssn', 'social_security', 'credit_card', 'card_number', 'cvv', 'pin', 'email', 'phone', 'phone_number', 'mobile', 'firstName', 'lastName', 'first_name', 'last_name', 'fullName', 'full_name', 'address', 'street', 'ip', 'ip_address']

function anonymizeData(value: unknown, depth: number): unknown {
  if (value === null || value === undefined) return value
  if (typeof value === 'string') {
    if (value.includes('@') && value.includes('.')) return anonymizeEmail(value)
    if (/^\d{10,}$/.test(value.replace(/[\s\-\(\)]/g, ''))) return anonymizePhone(value)
    if (/^[A-Za-z0-9]{32,}$/.test(value)) return value.slice(0, 6) + '*'.repeat(value.length - 6)
    if (/^eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(value)) return value.slice(0, 20) + '...[JWT REDACTED]'
    if (value.length > 20 && depth > 0) return value.slice(0, Math.ceil(value.length * 0.3)) + '*'.repeat(Math.ceil(value.length * 0.7))
    return value
  }
  if (Array.isArray(value)) return value.map(v => anonymizeData(v, depth))
  if (typeof value === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      const keyLower = key.toLowerCase()
      if (sensitiveKeys.some(sk => keyLower === sk || keyLower.includes(sk))) {
        result[key] = anonymizeSensitiveValue(key, val)
      } else {
        result[key] = anonymizeData(val, depth + 1)
      }
    }
    return result
  }
  return value
}

function anonymizeEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain) return email
  const visible = Math.min(3, Math.ceil(local.length / 2))
  return local.slice(0, visible) + '***@' + domain
}

function anonymizePhone(phone: string): string {
  const digits = phone.replace(/[\s\-\(\)]/g, '')
  if (digits.length < 4) return phone
  const visible = digits.slice(-4)
  return '***-***-' + visible
}

function anonymizeSensitiveValue(key: string, value: unknown): unknown {
  if (typeof value === 'string') {
    if (value.length <= 4) return '****'
    if (value.includes('@')) return anonymizeEmail(value)
    return value[0] + '*'.repeat(value.length - 2) + value[value.length - 1]
  }
  if (typeof value === 'number') return 0
  if (typeof value === 'boolean') return value
  return value
}

export function jsonToSQLAlchemyModel(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('JSON root must be an object to generate SQLAlchemy models')
  }
  const classes: string[] = []
  generateSQLAlchemyModel(parsed, 'Model', classes)
  if (classes.length === 0) return `# No models could be generated`
  return `from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey, create_engine\nfrom sqlalchemy.orm import declarative_base, relationship\nfrom datetime import datetime\n\nBase = declarative_base()\n\n\n${classes.join('\n\n\n')}\n`
}

function generateSQLAlchemyModel(value: unknown, name: string, classes: string[]): string {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return ``
  const entries = Object.entries(value as Record<string, unknown>)
  const tablename = toSnakeCase(name)
  const fields = entries.map(([key, val]) => {
    const colType = getSQLAColumnType(val, toClassName(key), classes)
    const isPK = key === 'id'
    const isOptional = val === null || val === undefined
    const nullable = isOptional ? ', nullable=True' : ', nullable=False'
    return `    ${key} = Column(${colType}${nullable}${isPK ? ', primary_key=True, autoincrement=True' : ''})`
  })
  classes.push(`class ${name}(Base):\n    __tablename__ = '${tablename}'\n\n${fields.join('\n')}`)
  return name
}

function toSnakeCase(s: string): string {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '')
}

function getSQLAColumnType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Text'
  if (Array.isArray(value)) return 'Text'
  if (typeof value === 'object') {
    generateSQLAlchemyModel(value, key, classes)
    return `Integer`
  }
  switch (typeof value) {
    case 'string': return 'Text'
    case 'number': return Number.isInteger(value) ? 'Integer' : 'Float'
    case 'boolean': return 'Boolean'
    default: return 'Text'
  }
}
