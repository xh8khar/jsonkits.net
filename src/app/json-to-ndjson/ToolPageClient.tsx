'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToNdjson, ndjsonToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to NDJSON Converter"
        description="Convert a JSON array to newline-delimited JSON (NDJSON) format. Perfect for streaming, log processing, and big data pipelines."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="NDJSON output will appear here..."
        convertLabel="Convert to NDJSON"
        onConvert={jsonToNdjson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={ndjsonToJson}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is NDJSON?</h2>
        <p>NDJSON (Newline-Delimited JSON) is a streaming format where each line is a valid JSON object. Unlike a JSON array, NDJSON can be processed line-by-line without loading the entire file into memory, making it ideal for big data and streaming pipelines.</p>
        <p>NDJSON is used for:</p>
        <ul>
          <li><strong>Log Processing</strong>: Each log entry is a separate JSON line.</li>
          <li><strong>Streaming APIs</strong>: Sending real-time events as NDJSON chunks.</li>
          <li><strong>Big Data</strong>: Loading data into Hadoop, Spark, and data warehouses.</li>
          <li><strong>Data Export</strong>: Exporting database records as line-delimited JSON.</li>
        </ul>
        <h2>JSON Array vs. NDJSON</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON Array</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">NDJSON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Structure</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Wrapped in [ ] brackets.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">One JSON object per line.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Streaming</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Must parse entire file.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Line-by-line streaming.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Memory Usage</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Full file in memory.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">One line at a time.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Standard</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Yes, standard JSON.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">De facto standard (jsonlines.org).</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">APIs, configs.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Logs, streaming, big data.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to NDJSON Online</h2>
        <ol>
          <li><strong>Paste a JSON array</strong>: Enter an array of objects.</li>
          <li><strong>Click Convert</strong>: Each array element becomes a single JSON line.</li>
          <li><strong>Copy NDJSON</strong>: Use for streaming or log processing.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if my input is a single object, not an array?</h3>
        <p>The tool wraps single objects in an array automatically before conversion.</p>
        <h3>Can NDJSON contain nested objects?</h3>
        <p>Yes. Each line can be any valid JSON value, including deeply nested objects.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>NDJSON is used when exporting database records for Apache Spark processing, streaming real-time analytics events from server applications, collecting application logs in JSON format, and transferring data between microservices in big data pipelines.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/ndjson-to-json">NDJSON to JSON</a> — Convert NDJSON back to JSON array</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays to CSV</li>
        </ul>
      </article>
    </>
  )
}
