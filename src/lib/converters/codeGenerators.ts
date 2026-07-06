function toClassName(key: string): string {
  const cleaned = key.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  if (!cleaned) return 'Item'
  return cleaned.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

function toCamelCase(key: string): string {
  const name = toClassName(key)
  return name.charAt(0).toLowerCase() + name.slice(1)
}

export function jsonToCsharp(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateCsharpClass(parsed, 'RootObject', classes)
  return `using System.Text.Json.Serialization;\n\n${classes.join('\n\n')}\n`
}

function generateCsharpClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List<object>'
    return `List<${getCsharpType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getCsharpType(value, key, classes)
      const propName = toClassName(key)
      return `    [JsonPropertyName("${key}")]\n    public ${type} ${propName} { get; set; }`
    })
    classes.push(`public class ${name}\n{\n${fields.join('\n\n')}\n}`)
    return name
  }
  return getCsharpType(obj, name, classes)
}

function getCsharpType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'object?'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<object>'
    return `List<${getCsharpType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'string'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'double'
    case 'object': return generateCsharpClass(value, toClassName(key), classes)
    default: return 'object'
  }
}

export function jsonToPhpArray(input: string): string {
  const parsed = JSON.parse(input)
  return '<?php\n\nreturn ' + toPhpArrayExpr(parsed) + ';\n'
}

function toPhpArrayExpr(value: unknown): string {
  if (value === null || value === undefined) return 'null'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map(v => '    ' + toPhpArrayExpr(v))
    return '[\n' + items.join(',\n') + '\n]'
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '[]'
    const items = entries.map(([k, v]) => `    '${k}' => ${toPhpArrayExpr(v)}`)
    return '[\n' + items.join(',\n') + '\n]'
  }
  return 'null'
}

export function jsonToPhpClass(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generatePhpClass(parsed, 'RootObject', classes)
  classes[0] = classes[0].replace(`class RootObject`, `class RootObject\n{`)
  return `<?php\n\n${classes.join('\n\n')}\n`
}

function generatePhpClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'array'
    return `array<${getPhpType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getPhpType(value, key, classes)
      const prop = toCamelCase(key)
      return `    private ${type} $${prop};`
    })
    const methods = entries.flatMap(([key, value]) => {
      const type = getPhpType(value, key, classes)
      const prop = toCamelCase(key)
      const cap = toClassName(key)
      return [
        `    public function get${cap}(): ${type} { return $this->${prop}; }`,
        `    public function set${cap}(${type} $${prop}): void { $this->${prop} = $${prop}; }`
      ]
    })
    classes.push(`class ${name}\n{\n${fields.join('\n')}\n\n${methods.join('\n')}\n}`)
    return name
  }
  return getPhpType(obj, name, classes)
}

function getPhpType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'mixed'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'array'
    return `array<${getPhpType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'string'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'int' : 'float'
    case 'object': return generatePhpClass(value, toClassName(key), classes)
    default: return 'mixed'
  }
}

export function jsonToKotlin(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateKotlinClass(parsed, 'RootObject', classes)
  return `import kotlinx.serialization.Serializable\n\n${classes.join('\n\n')}\n`
}

function generateKotlinClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List<Any>'
    return `List<${getKotlinType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getKotlinType(value, key, classes)
      return `    @SerialName("${key}")\n    val ${toCamelCase(key)}: ${type}`
    })
    classes.push(`@Serializable\ndata class ${name}(\n${fields.join(',\n')}\n)`)
    return name
  }
  return getKotlinType(obj, name, classes)
}

function getKotlinType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Any?'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List<Any>'
    return `List<${getKotlinType(value[0], key, classes)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Int' : 'Double'
    case 'object': return generateKotlinClass(value, toClassName(key), classes)
    default: return 'Any?'
  }
}

export function jsonToSwift(input: string): string {
  const parsed = JSON.parse(input)
  const structs: string[] = []
  generateSwiftStruct(parsed, 'RootObject', structs)
  return `import Foundation\n\n${structs.join('\n\n')}\n`
}

function generateSwiftStruct(obj: unknown, name: string, structs: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[Any]'
    return `[${getSwiftType(obj[0], name, structs)}]`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getSwiftType(value, key, structs)
      return `    let ${toCamelCase(key)}: ${type}`
    })
    structs.push(`struct ${name}: Codable {\n${fields.join('\n')}\n}`)
    return name
  }
  return getSwiftType(obj, name, structs)
}

function getSwiftType(value: unknown, key: string, structs: string[]): string {
  if (value === null || value === undefined) return 'Any?'
  if (Array.isArray(value)) {
    if (value.length === 0) return '[Any]'
    return `[${getSwiftType(value[0], key, structs)}]`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Bool'
    case 'number': return Number.isInteger(value) ? 'Int' : 'Double'
    case 'object': return generateSwiftStruct(value, toClassName(key), structs)
    default: return 'Any?'
  }
}

export function jsonToDart(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateDartClass(parsed, 'RootObject', classes)
  classes.unshift('// Generated with jsonkits.dev\n// To use: dart pub add json_annotation\n\nimport \'package:json_annotation/json_annotation.dart\';\n\npart \'root.g.dart\';')
  return classes.join('\n\n') + '\n'
}

function generateDartClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List<dynamic>'
    return `List<${getDartType(obj[0], name, classes)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getDartType(value, key, classes)
      return `  @JsonKey(name: '${key}')\n  final ${type} ${toCamelCase(key)};`
    })
    const ctorParams = entries.map(([key]) => `    required this.${toCamelCase(key)}`)
    const assignments = entries.map(([key]) => `      ${toCamelCase(key)}: json['${key}'] as ${getDartType((obj as Record<string, unknown>)[key], key, classes)}`)
    classes.push(`@JsonSerializable()\nclass ${name} {\n${fields.join('\n\n')}\n\n  ${name}({\n${ctorParams.join(',\n')}\n  });\n\n  factory ${name}.fromJson(Map<String, dynamic> json) => _$${name}FromJson(json);\n  Map<String, dynamic> toJson() => _$${name}ToJson(this);\n}`)
    return name
  }
  return getDartType(obj, name, classes)
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
    case 'object': return generateDartClass(value, toClassName(key), classes)
    default: return 'dynamic'
  }
}

export function jsonToRust(input: string): string {
  const parsed = JSON.parse(input)
  const structs: string[] = []
  generateRustStruct(parsed, 'RootObject', structs)
  return `use serde::{Deserialize, Serialize};\n\n${structs.join('\n\n')}\n`
}

function generateRustStruct(obj: unknown, name: string, structs: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'Vec<serde_json::Value>'
    return `Vec<${getRustType(obj[0], name, structs)}>`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => {
      const type = getRustType(value, key, structs)
      const fieldName = key.replace(/-/g, '_')
      return `    #[serde(rename = "${key}")]\n    pub ${fieldName}: ${type}`
    })
    structs.push(`#[derive(Debug, Serialize, Deserialize)]\n#[serde(rename_all = "camelCase")]\npub struct ${name} {\n${fields.join(',\n')},\n}`)
    return name
  }
  return getRustType(obj, name, structs)
}

function getRustType(value: unknown, key: string, structs: string[]): string {
  if (value === null || value === undefined) return 'Option<serde_json::Value>'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'Vec<serde_json::Value>'
    return `Vec<${getRustType(value[0], key, structs)}>`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'bool'
    case 'number': return Number.isInteger(value) ? 'i64' : 'f64'
    case 'object': return generateRustStruct(value, toClassName(key), structs)
    default: return 'serde_json::Value'
  }
}

export function jsonToScala(input: string): string {
  const parsed = JSON.parse(input)
  const classes: string[] = []
  generateScalaClass(parsed, 'RootObject', classes)
  return `import play.api.libs.json._\n\n${classes.join('\n\n')}\n`
}

function generateScalaClass(obj: unknown, name: string, classes: string[]): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return 'List[Any]'
    return `List[${getScalaType(obj[0], name, classes)}]`
  }
  if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj as Record<string, unknown>)
    const fields = entries.map(([key, value]) => `  ${toCamelCase(key)}: ${getScalaType(value, key, classes)}`)
    classes.push(`case class ${name}(\n${fields.join(',\n')}\n)\n\nobject ${name} {\n  implicit val ${toCamelCase(name)}Format: OFormat[${name}] = Json.format[${name}]\n}`)
    return name
  }
  return getScalaType(obj, name, classes)
}

function getScalaType(value: unknown, key: string, classes: string[]): string {
  if (value === null || value === undefined) return 'Option[Any]'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'List[Any]'
    return `List[${getScalaType(value[0], key, classes)}]`
  }
  switch (typeof value) {
    case 'string': return 'String'
    case 'boolean': return 'Boolean'
    case 'number': return Number.isInteger(value) ? 'Int' : 'Double'
    case 'object': return generateScalaClass(value, toClassName(key), classes)
    default: return 'Any'
  }
}

export function jsonToRuby(input: string): string {
  const parsed = JSON.parse(input)
  return toRubyHash(parsed, 0) + '\n'
}

function toRubyHash(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'nil'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map(v => `${pad}  ${toRubyHash(v, indent + 1)}`)
    return "[\n" + items.join(",\n") + "\n" + pad + "]"
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    const items = entries.map(([k, v]) => `${pad}  ${k}: ${toRubyHash(v, indent + 1)}`)
    return "{\n" + items.join(",\n") + "\n" + pad + "}"
  }
  return 'nil'
}

export function jsonToPerl(input: string): string {
  const parsed = JSON.parse(input)
  return 'use strict;\nuse warnings;\n\nmy $data = ' + toPerlExpr(parsed, 0) + ';\n'
}

function toPerlExpr(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'undef'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? '1' : '0'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map(v => `${pad}  ${toPerlExpr(v, indent + 1)}`)
    return "[\n" + items.join(",\n") + "\n" + pad + "]"
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    const items = entries.map(([k, v]) => `${pad}  '${k}' => ${toPerlExpr(v, indent + 1)}`)
    return "{\n" + items.join(",\n") + "\n" + pad + "}"
  }
  return 'undef'
}

export function jsonToLua(input: string): string {
  const parsed = JSON.parse(input)
  return 'local data = ' + toLuaExpr(parsed, 0) + '\n'
}

function toLuaExpr(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'nil'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '{}'
    const items = value.map(v => `${pad}  ${toLuaExpr(v, indent + 1)}`)
    return "{\n" + items.join(",\n") + "\n" + pad + "}"
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    const items = entries.map(([k, v]) => `${pad}  ['${k}'] = ${toLuaExpr(v, indent + 1)}`)
    return "{\n" + items.join(",\n") + "\n" + pad + "}"
  }
  return 'nil'
}

export function jsonToR(input: string): string {
  const parsed = JSON.parse(input)
  return toRExpr(parsed, 0) + '\n'
}

function toRExpr(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'NULL'
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return 'list()'
    const items = value.map(v => `${pad}  ${toRExpr(v, indent + 1)}`)
    return "list(\n" + items.join(",\n") + "\n" + pad + ")"
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return 'list()'
    const items = entries.map(([k, v]) => `${pad}  ${k} = ${toRExpr(v, indent + 1)}`)
    return "list(\n" + items.join(",\n") + "\n" + pad + ")"
  }
  return 'NULL'
}

export function jsonToMatlab(input: string): string {
  const parsed = JSON.parse(input)
  return toMatlabExpr(parsed, 0) + '\n'
}

function toMatlabExpr(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return '[]'
  if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '{}'
    const items = value.map(v => `${pad}  ${toMatlabExpr(v, indent + 1)}`)
    return "{\n" + items.join(";\n") + "\n" + pad + "}"
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return 'struct()'
    const items = entries.map(([k, v]) => `${pad}  '${k}', ${toMatlabExpr(v, indent + 1)}`)
    return "struct(\n" + items.join(",\n") + "\n" + pad + ")"
  }
  return '[]'
}

function getFormType(value: unknown): string {
  if (value === null || value === undefined) return 'string'
  if (typeof value === 'boolean') return 'checkbox'
  if (typeof value === 'number') return Number.isInteger(value) ? 'number' : 'number'
  if (typeof value === 'string') return 'text'
  if (Array.isArray(value)) return 'array'
  return 'object'
}

function getValidationRules(value: unknown, path: string): Record<string, unknown> {
  const rules: Record<string, unknown> = {}
  if (typeof value === 'string') {
    if (path.toLowerCase().includes('email')) rules.pattern = { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
    if (path.toLowerCase().includes('url') || path.toLowerCase().includes('website')) rules.pattern = { value: /^https?:\/\/.+/, message: 'Invalid URL' }
    if (value.length > 20) rules.maxLength = { value: 255, message: 'Max 255 characters' }
  }
  if (typeof value === 'number') {
    rules.valueAsNumber = true
    if (value < 0) rules.min = { value: value, message: `Min ${value}` }
    if (value > 0) rules.min = { value: 0, message: 'Must be positive' }
  }
  return rules
}

export function jsonToReactHookForm(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('Input must be a JSON object')
  }
  const entries = Object.entries(parsed as Record<string, unknown>)
  const fields = entries.map(([key, value]) => {
    const type = getFormType(value)
    const rules = getValidationRules(value, key)
    const rulesStr = Object.keys(rules).length ? `, rules={${JSON.stringify(rules, null, 6).replace(/"valueAsNumber":true/g, 'valueAsNumber: true').replace(/"(\w+)":/g, '$1:').replace(/\n\s{6}/g, '\n      ')}}` : ''
    const typeAttr = type === 'checkbox' ? '' : ` type="${type}"`
    if (type === 'checkbox') {
      return `      <label>
        <input type="checkbox" {...register("${key}"${rulesStr})} />
        ${key.charAt(0).toUpperCase() + key.slice(1)}
      </label>`
    }
    if (type === 'array') {
      return `      {/* ${key}: array field - use useFieldArray */}`
    }
    if (type === 'object') {
      return `      {/* ${key}: nested object */}`
    }
    return `      <input${typeAttr} {...register("${key}"${rulesStr})} placeholder="${key}" />`
  })

  return `import { useForm } from 'react-hook-form'

interface FormData {
${entries.map(([k]) => `  ${k}: ${typeof (parsed as Record<string, unknown>)[k] === 'number' ? 'number' : 'string'}`).join('\n')}
}

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
${fields.join('\n')}
      <button type="submit">Submit</button>
    </form>
  )
}`
}

export function jsonToFormik(input: string): string {
  const parsed = JSON.parse(input)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('Input must be a JSON object')
  }
  const entries = Object.entries(parsed as Record<string, unknown>)
  const initialValues = entries.map(([key, value]) => {
    const safeVal = typeof value === 'string' ? `'${value.replace(/'/g, "\\'")}'` : JSON.stringify(value)
    return `    ${key}: ${safeVal}`
  })
  const validationFields = entries.map(([key, value]) => {
    const rules: string[] = []
    if (typeof value === 'string') {
      if (key.toLowerCase().includes('email')) rules.push(`    ${key}: Yup.string().email('Invalid email')`)
      else rules.push(`    ${key}: Yup.string()`)
      if (value.length > 0 && !key.toLowerCase().includes('email') && !key.toLowerCase().includes('url')) {
        rules[rules.length - 1] = rules[rules.length - 1].replace('()', '()')
      }
    }
    if (typeof value === 'number') {
      rules.push(`    ${key}: Yup.number()${value > 0 ? '.positive()' : ''}`)
    }
    if (typeof value === 'boolean') {
      rules.push(`    ${key}: Yup.boolean()`)
    }
    return rules.length ? rules.join('\n') : `    ${key}: Yup.string()`
  })

  return `import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface FormValues {
${entries.map(([k, v]) => `  ${k}: ${typeof v === 'number' ? 'number' : typeof v === 'boolean' ? 'boolean' : 'string'}`).join('\n')}
}

const validationSchema = Yup.object({
${validationFields.join(',\n')}
})

export default function MyForm() {
  const initialValues: FormValues = {
${initialValues.join(',\n')}
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
${entries.map(([key]) => `        <div>
          <label htmlFor="${key}">${key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <Field name="${key}" id="${key}" />
          <ErrorMessage name="${key}" component="div" />
        </div>`).join('\n')}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}`
}
