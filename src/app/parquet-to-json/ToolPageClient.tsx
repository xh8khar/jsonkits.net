'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { parquetToJson, jsonToParquet } from '@/lib/converters'

const example = 'Row Group 1 (3 rows):\n  name: BYTE_ARRAY (optional)\n  age: INT64 (optional)'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Parquet to JSON Converter"
        description="Convert Apache Parquet schema representation back to sample JSON data."
        inputPlaceholder="Paste your Parquet schema here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Parquet to JSON"
        onConvert={parquetToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToParquet}
        toolSlug="parquet-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts Apache Parquet schema representations back into sample JSON data, making it easy to visualize the structure of your Parquet files.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your Parquet schema description in the editor</li>
          <li>Click the Convert button to get JSON</li>
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
