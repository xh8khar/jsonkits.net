'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonConvertArrays, jsonConvertObjects } from '@/lib/converters'

const example = '[{"name":"Alice","age":30},{"name":"Bob","age":25},{"name":"Charlie","age":35}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Convert to Object"
        description="Transpose an array of objects into an object of arrays. Each key collects all values across the array."
        inputPlaceholder="Paste your JSON array of objects here..."
        outputPlaceholder="Converted object will appear here..."
        convertLabel="Convert to Object"
        onConvert={jsonConvertArrays}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonConvertObjects}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Array to Object Conversion?</h2>
        <p>JSON array to object conversion transposes an array of objects into an object of arrays. Each unique key from the input objects becomes a key in the output object, with its value being an array of all values for that key across every object in the array. This reshaping is common in data analysis and ETL pipelines.</p>
        <p>This transformation is useful for:</p>
        <ul>
          <li><strong>Data Analysis</strong>: Reshaping data for statistical processing in tools like Pandas.</li>
          <li><strong>Database Operations</strong>: Preparing data for column-oriented storage and queries.</li>
          <li><strong>Visualization</strong>: Transforming data into the format expected by charting libraries.</li>
          <li><strong>Performance</strong>: Enabling column-based access patterns for faster lookups.</li>
        </ul>
        <h2>How to Convert JSON Array to Object Online</h2>
        <ol>
          <li><strong>Paste your JSON array</strong>: Enter an array of objects with consistent keys.</li>
          <li><strong>Click Convert to Object</strong>: The tool transposes rows to columns.</li>
          <li><strong>Review the result</strong>: Each key now contains an array of all values.</li>
          <li><strong>Reverse if needed</strong>: Use the reverse button to convert back.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What happens if objects have different keys?</h3>
        <p>All unique keys across all objects are included. Missing keys produce empty arrays for objects that lack them.</p>
        <h3>Can I convert nested objects?</h3>
        <p>Yes, nested objects inside the array are also transposed, creating nested object-of-arrays structures.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers frequently reshape JSON data for downstream processing. Converting an array of user records into column-oriented format makes it easy to compute per-field statistics, generate charts, or load data into columnar databases like ClickHouse or BigQuery.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-convert-objects">JSON Convert to Array</a> — Reverse operation</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON to tabular format</li>
          <li><a href="/json-statistics">JSON Statistics</a> — Analyze JSON data structure</li>
        </ul>
      </article>
    </>
  )
}
