'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { fakeDataToJson } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, email: 'alice@example.com', active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Fake Data to JSON"
        description="Infer a template schema from your JSON data samples. Analyze your data to understand its structure and field types for regeneration."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Inferred schema will appear here..."
        convertLabel="Infer Schema"
        onConvert={fakeDataToJson}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Analyze your JSON data and infer a template schema. The generated template can be used with the JSON Fake Data Generator to create similar data.</p>
        <h2>How to Use</h2>
        <ol><li>Paste a sample of your JSON data into the input editor.</li><li>Click "Infer Schema" to analyze the data structure.</li><li>Use the resulting schema with the JSON Fake Generator to create more data.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-fake-generator">JSON Fake Generator</a></li><li><a href="/json-to-schema">JSON to Schema</a></li></ul>
      </article>
    </>
  )
}
