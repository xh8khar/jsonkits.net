'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { minifyJSON } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Compact"
        description="Compact your JSON by removing all unnecessary whitespace and line breaks. Reduce file size for faster data transfer and storage."
        inputPlaceholder="Paste your JSON here to compact..."
        outputPlaceholder="Compacted JSON will appear here..."
        convertLabel="Compact"
        onConvert={minifyJSON}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Compaction?</h2>
        <p>JSON compaction removes all whitespace, indentation, and line breaks from JSON data, reducing file size for production use and API calls.</p>
        <h2>How to Compact JSON Online</h2>
        <ol><li>Paste your formatted JSON into the input editor.</li><li>Click "Compact" to remove whitespace.</li><li>Copy the compacted output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-minifier">JSON Minifier</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
