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
        <h2>What Is JSONL?</h2>
        <p>JSON Lines (JSONL) is a convenient format for storing structured data where each line is a self-contained JSON object. This format is ideal for large datasets because you can append new records without parsing the entire file, and each line can be processed independently.</p>
        <p>JSONL is widely used for:</p>
        <ul>
          <li><strong>Streaming Data</strong>: Processing records incrementally as they arrive.</li>
          <li><strong>Big Data</strong>: Storing large datasets where reading the entire file into memory is impractical.</li>
          <li><strong>Log Aggregation</strong>: Appending new log entries as individual JSON lines.</li>
          <li><strong>Data Exchange</strong>: Transferring data between systems in a line-by-line fashion.</li>
        </ul>
        <h2>What Is a JSON Array?</h2>
        <p>A standard JSON array encloses multiple objects in brackets. While this is the conventional way to represent a list of items in JSON, it requires loading the entire array into memory to access any single element.</p>
        <h2>Why Convert JSON to JSONL?</h2>
        <p>Converting a JSON array to JSONL makes it easier to process large datasets incrementally, append new records efficiently, and integrate with streaming data pipelines. It is a common transformation in data engineering workflows.</p>
        <h2>How to Convert JSON to JSONL Online</h2>
        <ol>
          <li><strong>Paste your JSON array</strong>: Copy your standard JSON array containing multiple objects into the input box.</li>
          <li><strong>Click Convert</strong>: Press the button to split the array into individual JSON lines.</li>
          <li><strong>Review the Lines</strong>: Verify that each object is now on its own line without surrounding brackets.</li>
          <li><strong>Copy & Export</strong>: Use the Copy button to save the JSONL output for use in your data pipeline.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this JSON to JSONL converter safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Your data is never sent to any server.</p>
        <h3>What if my JSON array contains nested objects?</h3>
        <p>Nested objects are preserved as-is. Each top-level array element becomes one line in the JSONL output, regardless of its internal complexity.</p>
        <h3>Can I convert JSONL back to a JSON array?</h3>
        <p>Yes, use the Swap bidirectional button to convert JSONL back to a standard JSON array, or use our dedicated JSONL to JSON tool.</p>
        <h2>Real-World Examples</h2>
        <p>Data scientists often receive datasets as JSON arrays and need to convert them to JSONL format for processing with streaming tools like Apache Spark or for feeding into machine learning training pipelines that expect one example per line.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/jsonl-to-json">JSONL to JSON</a> — convert JSONL back to standard JSON arrays</li>
          <li><a href="/json-to-ndjson">JSON to NDJSON</a> — alternative JSONL conversion</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — convert JSON arrays to CSV format</li>
        </ul>
      </article>
    </>
  )
}
