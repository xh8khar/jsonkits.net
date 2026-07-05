'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { ndjsonToJson, jsonToNdjson } from '@/lib/converters'

const example = '{"id":1,"name":"Alice"}\n{"id":2,"name":"Bob"}\n{"id":3,"name":"Charlie"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="NDJSON to JSON Converter"
        description="Parse newline-delimited JSON (NDJSON) into a standard JSON array. Perfect for processing streaming data and log files."
        inputPlaceholder="Paste your NDJSON here..."
        outputPlaceholder="JSON array output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={ndjsonToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToNdjson}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is NDJSON to JSON Conversion?</h2>
        <p>Converting NDJSON to JSON reads each line as an independent JSON object and collects them into a standard JSON array. This is essential when processing streaming data or logs for import into tools that expect standard JSON arrays.</p>
        <p>This is useful for:</p>
        <ul>
          <li><strong>Log Analysis</strong>: Converting streaming log files to array format for analysis.</li>
          <li><strong>Data Import</strong>: Preparing NDJSON data for databases that expect JSON arrays.</li>
          <li><strong>Batch Processing</strong>: Loading streaming records into batch processing pipelines.</li>
        </ul>
        <h2>How to Convert NDJSON to JSON Online</h2>
        <ol>
          <li><strong>Paste NDJSON lines</strong>: Enter one JSON object per line.</li>
          <li><strong>Click Convert</strong>: Collect all lines into a JSON array.</li>
          <li><strong>Copy the array</strong>: Use with any standard JSON tool.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if a line has invalid JSON?</h3>
        <p>The parser will throw an error indicating which line is invalid. Fix and retry.</p>
        <h3>Does it handle empty lines?</h3>
        <p>Yes. Empty lines and whitespace-only lines are automatically skipped.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-ndjson">JSON to NDJSON</a> — Convert JSON array to NDJSON</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays to CSV</li>
        </ul>
      </article>
    </>
  )
}
