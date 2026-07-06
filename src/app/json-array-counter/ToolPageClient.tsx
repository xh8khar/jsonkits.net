'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonArrayCounter } from '@/lib/converters'

const example = JSON.stringify({ users: [{ name: 'Alice' }, { name: 'Bob' }], tags: ['dev', 'design', 'api'], config: { items: [1, 2, 3] } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Array Counter"
        description="Count and analyze all arrays in your JSON data. Get array sizes, total items, average size, nesting information, and more."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Array counts will appear here..."
        convertLabel="Count Arrays"
        onConvert={jsonArrayCounter}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Analyze every array in your JSON document. Get detailed statistics including total arrays, total items across all arrays, average size, and maximum array size.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Count Arrays" to analyze all arrays.</li><li>Review the array statistics and per-array details.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-statistics">JSON Statistics</a></li><li><a href="/json-size-calculator">JSON Size Calculator</a></li></ul>
      </article>
    </>
  )
}
