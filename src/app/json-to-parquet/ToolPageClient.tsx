'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToParquet, parquetToJson } from '@/lib/converters'

const example = '[{"name":"Alice","age":30,"city":"NYC"},{"name":"Bob","age":25,"city":"SF"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Parquet Converter"
        description="Convert JSON data to Apache Parquet schema and structure representation."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Parquet schema will appear here..."
        convertLabel="JSON to Parquet"
        onConvert={jsonToParquet}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={parquetToJson}
        toolSlug="json-to-parquet"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Parquet?</h2>
        <p>Apache Parquet is a columnar storage format. This tool converts JSON data to a Parquet schema representation showing column names, types, and nullability.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Convert button to get Parquet schema</li>
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
