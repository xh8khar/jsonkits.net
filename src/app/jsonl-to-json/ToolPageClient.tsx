'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonlToJson, jsonToJsonl } from '@/lib/converters'

const example = '{"id":1,"name":"Alice"}\n{"id":2,"name":"Bob"}\n{"id":3,"name":"Charlie"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSONL to JSON Converter"
        description="Convert JSON Lines (JSONL/NDJSON) format to a standard JSON array."
        inputPlaceholder="Paste your JSONL data here..."
        outputPlaceholder="JSON array will appear here..."
        convertLabel="JSONL to JSON"
        onConvert={jsonlToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToJsonl}
        toolSlug="jsonl-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONL?</h2>
        <p>JSON Lines (JSONL/NDJSON) is a format where each line is a valid JSON object. This tool converts between JSONL and standard JSON arrays.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSONL data in the editor</li>
          <li>Click the Convert button to get a JSON array</li>
          <li>Use the Swap button to convert the other direction</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}
