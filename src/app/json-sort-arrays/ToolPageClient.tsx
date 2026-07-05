'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSortArrays } from '@/lib/converters'

const example = '{"names":["Charlie","Alice","Bob"],"scores":[30,10,20],"config":{"tags":["z","a","m"]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Sort Arrays"
        description="Sort array elements within JSON data. String arrays sort alphabetically, number arrays sort numerically."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="JSON with sorted arrays will appear here..."
        convertLabel="Sort Arrays"
        onConvert={jsonSortArrays}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Array Sorting?</h2>
        <p>JSON array sorting reorders array elements within your data. String arrays are sorted alphabetically (a-z), number arrays numerically (ascending). Nested arrays at any depth are also sorted.</p>
        <ul><li><strong>Data Cleanup</strong>: Sort lists for consistent display.</li><li><strong>Comparison</strong>: Normalize arrays before diffing.</li><li><strong>Reporting</strong>: Produce sorted data for reports.</li></ul>
        <h2>How to Sort Arrays in JSON Online</h2>
        <ol><li>Paste your JSON containing arrays.</li><li>Click Sort Arrays to sort all arrays recursively.</li><li>Copy the output with sorted elements.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are mixed-type arrays sorted?</h3><p>Mixed-type arrays are not reordered since there is no natural sort order across types.</p>
        <h3>Are arrays of objects sorted?</h3><p>No. Only arrays of primitive types (strings, numbers) are sorted.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-sort-keys">JSON Sort Keys</a> — Sort object keys</li><li><a href="/json-normalize">JSON Normalize</a> — Full normalization</li></ul>
      </article>
    </>
  )
}
