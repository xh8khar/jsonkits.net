'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSchemaValidator } from '@/lib/converters'

const example = 'schema:\n{"type":"object","properties":{"name":{"type":"string"},"age":{"type":"integer"}},"required":["name"]}\n---\n{"name":"Alice","age":30}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Schema Validator" description="Validate JSON data against a JSON Schema (draft-07). Add schema: on the first line or separate with ---." inputPlaceholder="Paste schema: then JSON to validate..." outputPlaceholder="Validation results will appear here..." convertLabel="Validate" onConvert={jsonSchemaValidator} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Schema Validator?</h2>
        <p>This tool validates JSON data against a JSON Schema (draft-07). It checks that required fields exist, data types match, and values conform to constraints like min, max, pattern, and enum.</p>
        <h2>How to Use</h2>
        <ol><li>Start with <code>schema:</code> followed by your JSON Schema, then <code>---</code> and the JSON data to validate.</li><li>Click "Validate" to check the data against the schema.</li><li>Review validation errors showing which fields failed and why.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSON Schema draft is supported?</h3><p>The tool supports JSON Schema draft-07, which is the most widely implemented version.</p>
        <h3>Can I generate a schema from JSON?</h3><p>Yes, use the JSON to Schema Generator tool to create a schema from your data sample.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-schema">JSON to Schema Generator</a></li><li><a href="/schema-to-json">Schema to JSON</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
