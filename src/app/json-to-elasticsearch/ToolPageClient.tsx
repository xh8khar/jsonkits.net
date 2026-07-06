'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToElasticsearch } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-to-elasticsearch', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Elasticsearch Bulk"
        description="Convert JSON data to Elasticsearch bulk indexing format for efficient data ingestion into Elasticsearch clusters."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Output will appear here..."
        convertLabel="JSON to Elasticsearch Bulk"
        onConvert={jsonToElasticsearch}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Elasticsearch Bulk Format?</h2>
        <p>Elasticsearch bulk format is a newline-delimited JSON format (NDJSON) used for efficient batch indexing of documents. Each document is preceded by an action line specifying the index operation.</p><p>Elasticsearch bulk indexing is essential for:</p><ul><li><strong>Data Ingestion</strong>: Efficiently loading large datasets into Elasticsearch.</li><li><strong>Log Aggregation</strong>: Batch processing log entries into ELK stacks.</li><li><strong>Search Indexing</strong>: Building search indexes from JSON data exports.</li></ul>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: Your result appears instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the result and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-c">JSON to C</a> — Generate C struct definitions with JSON parsing support from JSON data samples.</li>
          <li><a href="/json-to-cpp">JSON to C++</a> — Generate C++ class definitions with JSON serialization support from JSON data samples.</li>
          <li><a href="/json-to-groovy">JSON to Groovy</a> — Generate Groovy class definitions with JSON parsing support from JSON data samples.</li>
        </ul>
      </article>
    </>
  )
}
