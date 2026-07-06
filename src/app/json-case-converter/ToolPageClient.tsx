'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCaseConverter } from '@/lib/converters'

const example = 'case: snake\n{"userName":"Alice","userAge":30,"isActive":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Case Converter" description="Convert all JSON object keys between naming conventions: camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, lowercase." inputPlaceholder="Add case: camel|snake|kebab|pascal|upper|lower, then paste JSON..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert Case" onConvert={jsonCaseConverter} exampleInput={example} outputLanguage="json" />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Case Converter?</h2>
        <p>This tool converts all JSON object keys between different naming conventions: camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, and lowercase. It recursively processes nested objects and arrays.</p>
        <h2>How to Use</h2>
        <ol><li>Start with <code>case:</code> followed by the target convention (camel, snake, kebab, pascal, upper, or lower).</li><li>Paste your JSON data on the next lines.</li><li>Click "Convert Case" to transform all keys to the chosen convention.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it handle nested objects?</h3><p>Yes, the conversion is recursive and applies to all nested objects and arrays within the JSON structure.</p>
        <h3>What are the available conventions?</h3><p>Choose from camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, and lowercase.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-rename-keys">JSON Rename Keys</a></li><li><a href="/json-key-transformer">JSON Key Transformer</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
