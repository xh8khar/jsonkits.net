'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSchema } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Schema Generator"
        description="Generate a JSON Schema (draft-07) from your JSON data samples. Perfect for documenting your API response formats and data structures."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated schema will appear here..."
        convertLabel="Generate Schema"
        onConvert={jsonToSchema}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Schema?</h2>
        <p>A JSON Schema describes the structure of JSON data, including field names, types, required fields, and nested structures. It is used for validation, documentation, and code generation.</p>
        <h2>How to Use</h2>
        <ol><li>Paste a sample of your JSON data into the input editor.</li><li>Click "Generate Schema" to create a JSON Schema.</li><li>Copy the schema for use in validation or documentation.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/schema-to-json">Schema to JSON</a></li><li><a href="/json-schema-validator">JSON Schema Validator</a></li></ul>
      </article>
    </>
  )
}
