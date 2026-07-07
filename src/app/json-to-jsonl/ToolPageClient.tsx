'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToJsonl, jsonlToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to JSONL Converter"
        description="Convert a JSON array to JSON Lines (JSONL/NDJSON) format with one object per line."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="JSONL output will appear here..."
        convertLabel="JSON to JSONL"
        onConvert={jsonToJsonl}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonlToJson}
        toolSlug="json-to-jsonl"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts a standard JSON array to JSON Lines format, where each object is on its own line - useful for streaming and log processing.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON array in the editor</li>
          <li>Click the Convert button to get JSONL</li>
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
