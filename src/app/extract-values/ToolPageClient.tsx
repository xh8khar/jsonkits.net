'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { extractValues } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, city: 'NYC', active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Extract Values"
        description="Extract all values from your JSON data and get a count of unique values. Perfect for understanding the range of data in your JSON documents."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Extracted values will appear here..."
        convertLabel="Extract Values"
        onConvert={extractValues}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Extract and analyze all values from your JSON data. See unique value counts and review the data distribution across your JSON document.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Extract Values" to analyze all values.</li><li>Review the unique value count and sample values.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/extract-keys">Extract Keys</a></li><li><a href="/json-statistics">JSON Statistics</a></li></ul>
      </article>
    </>
  )
}
