'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToFlatToNested, jsonToNestedToFlat } from '@/lib/converters'

const example = '{"user.name":"Alice","user.address.city":"NYC","user.address.zip":"10001"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Flat JSON to Nested Converter"
        description="Convert dot-notation flat JSON back into a deeply nested object structure. Perfect for restoring API-friendly formats from flat data."
        inputPlaceholder="Paste your flat JSON here..."
        outputPlaceholder="Nested JSON output will appear here..."
        convertLabel="Unflatten"
        onConvert={jsonToFlatToNested}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToNestedToFlat}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Unflattening?</h2>
        <p>JSON unflattening converts dot-notation flat keys back into nested object structures. For example, <code>{"{"}user.name: "Alice"{"}"}</code> becomes <code>{"{"}user: {"{"}name: "Alice"{"}"}{"}"}</code>. This is essential when restoring API-compatible formats from flat data.</p>
        <p>Unflattening is useful for:</p>
        <ul>
          <li><strong>API Migration</strong>: Restoring nested formats after data processing.</li>
          <li><strong>Config Restoration</strong>: Converting env-style flattened configs back to structured JSON.</li>
          <li><strong>Database Export</strong>: Restoring nested documents from flat relational exports.</li>
        </ul>
        <h2>How to Unflatten JSON Online</h2>
        <ol>
          <li><strong>Paste flat JSON</strong>: Enter your dot-notation key-value pairs.</li>
          <li><strong>Click Unflatten</strong>: Restore the nested object structure.</li>
          <li><strong>Review nesting</strong>: The output shows the restored hierarchy.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What key separators are supported?</h3>
        <p>Dot notation (.) and bracket array notation (e.g., items[0]) are both supported.</p>
        <h3>Can nested arrays be restored?</h3>
        <p>Yes. Numeric keys in bracket notation are converted back to array elements.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side in your browser.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/nested-to-flat-json">Nested to Flat JSON</a> — Reverse conversion from nested to flat</li>
          <li><a href="/json-to-key-value">JSON to Key-Value</a> — Convert JSON to key:value pairs</li>
        </ul>
      </article>
    </>
  )
}
