'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonConvertObjects, jsonConvertArrays } from '@/lib/converters'

const example = '{"name":["Alice","Bob","Charlie"],"age":[30,25,35]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Convert to Array"
        description="Transpose an object of arrays back into an array of objects."
        inputPlaceholder="Paste your JSON object of arrays here..."
        outputPlaceholder="Converted array will appear here..."
        convertLabel="Convert to Array"
        onConvert={jsonConvertObjects}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonConvertArrays}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Object to Array Conversion?</h2>
        <p>JSON object to array conversion transposes an object of arrays back into an array of objects. This is the reverse operation of array-to-object conversion, reconstructing individual records from column-oriented data. Each index across all arrays forms one output object.</p>
        <p>This transformation is useful for:</p>
        <ul>
          <li><strong>Data Reconstruction</strong>: Restoring row-based data from columnar format.</li>
          <li><strong>API Development</strong>: Converting database query results to API response format.</li>
          <li><strong>Interoperability</strong>: Preparing data for systems that expect arrays of objects.</li>
          <li><strong>Data Export</strong>: Converting analytics-friendly formats back to standard JSON.</li>
        </ul>
        <h2>How to Convert JSON Object to Array Online</h2>
        <ol>
          <li><strong>Paste your JSON object</strong>: Enter an object where each value is an array of equal length.</li>
          <li><strong>Click Convert to Array</strong>: The tool transposes columns back to rows.</li>
          <li><strong>Review the result</strong>: Each output object corresponds to one index across arrays.</li>
          <li><strong>Reverse if needed</strong>: Use the reverse button to convert back.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if the arrays have different lengths?</h3>
        <p>The tool uses the length of the longest array. Missing values are filled with null.</p>
        <h3>Can I convert nested objects of arrays?</h3>
        <p>Yes, nested structures are preserved and transposed recursively.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data scientists and backend developers often work with columnar data formats for analytics. When you need to feed that data into an API or frontend that expects an array of objects, this conversion reconstructs the original record structure seamlessly.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-convert-arrays">JSON Convert to Object</a> — Reverse operation</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON to tabular format</li>
          <li><a href="/json-statistics">JSON Statistics</a> — Analyze JSON data structure</li>
        </ul>
      </article>
    </>
  )
}
