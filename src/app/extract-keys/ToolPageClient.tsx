'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { extractKeys } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', address: { city: 'NYC', zip: '10001' }, hobbies: ['reading', 'coding'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Extract Keys"
        description="Extract all unique object keys from your JSON data. Get a sorted list of every key used across all objects in your data structure."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Extracted keys will appear here..."
        convertLabel="Extract Keys"
        onConvert={extractKeys}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Extract and list every unique key used across your JSON objects. Useful for understanding the schema of large JSON datasets.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Extract Keys" to get all unique keys.</li><li>Review the sorted list of keys and their count.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/extract-values">Extract Values</a></li><li><a href="/json-key-counter">JSON Key Counter</a></li></ul>
      </article>
    </>
  )
}
