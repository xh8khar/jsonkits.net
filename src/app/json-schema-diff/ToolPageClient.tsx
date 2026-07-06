'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSchemaDiff } from '@/lib/converters'

const example = JSON.stringify({
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    email: { type: 'string' }
  }
}, null, 2) + '\n\n\n' + JSON.stringify({
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' },
    email: { type: 'string', format: 'email' },
    phone: { type: 'string' }
  }
}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Schema Diff"
        description="Compare two JSON Schemas and report structural differences including added, removed, and changed properties, type changes, and constraint differences."
        inputPlaceholder="Paste first schema, then 3+ blank lines, then second schema..."
        outputPlaceholder="Differences will appear here..."
        convertLabel="Compare Schemas"
        onConvert={jsonSchemaDiff}
        exampleInput={example}
        outputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Compare two JSON Schema definitions and get a detailed diff of structural changes. Perfect for reviewing schema changes in code reviews or API version migrations.</p>
        <h2>How to Use</h2>
        <ol><li>Paste the first JSON Schema into the input editor.</li><li>Add three or more blank lines.</li><li>Paste the second JSON Schema.</li><li>Click Compare Schemas to see the differences.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
      </article>
    </>
  )
}
