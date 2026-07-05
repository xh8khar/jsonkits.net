'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToNestedToFlat, jsonToFlatToNested } from '@/lib/converters'

const example = '{"user":{"name":"Alice","address":{"city":"NYC","zip":"10001"}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Nested JSON to Flat Converter"
        description="Flatten deeply nested JSON objects into dot-notation key-value pairs. Perfect for data analysis, CSV export, and simplifying complex structures."
        inputPlaceholder="Paste your nested JSON here..."
        outputPlaceholder="Flat JSON output will appear here..."
        convertLabel="Flatten"
        onConvert={jsonToNestedToFlat}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToFlatToNested}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Flattening?</h2>
        <p>JSON flattening converts deeply nested objects into a flat structure using dot notation for keys. For example, <code>{"{"}user: {"{"}name: "Alice"{"}"}{"}"}</code> becomes <code>{"{"}user.name: "Alice"{"}"}</code>. This is essential for data analysis, machine learning, and database imports.</p>
        <p>Flattening is useful for:</p>
        <ul>
          <li><strong>Data Analysis</strong>: Converting nested JSON to flat tables for spreadsheet analysis.</li>
          <li><strong>CSV Export</strong>: Preparing nested data for CSV conversion.</li>
          <li><strong>Database Ingestion</strong>: Flattening JSON for relational database inserts.</li>
          <li><strong>Log Analysis</strong>: Simplifying complex log entries for querying.</li>
        </ul>
        <h2>Nested JSON vs. Flat JSON</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Nested JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Flat JSON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Clear hierarchy.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">All keys at one level.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Data Analysis</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Harder to tabulate.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Easy to analyze and sort.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">CSV Compatibility</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Not directly convertible.</td>
                 <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Directly convertible to CSV.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Key Length</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Short, hierarchical keys.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Longer dotted keys.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">APIs, configs.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data processing, analytics.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Flatten JSON Online</h2>
        <ol>
          <li><strong>Paste nested JSON</strong>: Copy your multi-level JSON into the input editor.</li>
          <li><strong>Click Flatten</strong>: Convert to dot-notation flat structure.</li>
          <li><strong>Review flat keys</strong>: All nested paths become single-level dotted keys.</li>
          <li><strong>Reverse if needed</strong>: Use bidirectional mode to restore nesting.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are arrays handled in flattening?</h3>
        <p>Array elements are indexed with bracket notation, e.g., <code>items[0].name</code>. This preserves array ordering.</p>
        <h3>Can I flatten deeply nested objects?</h3>
        <p>Yes. There is no depth limit. The tool recursively flattens all levels.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing happens 100% in your browser. No data is uploaded.</p>
        <h2>Real-World Examples</h2>
        <p>JSON flattening is used when preparing API responses for CSV export, transforming MongoDB documents for relational database migration, flattening nested configuration for environment variable mapping, and simplifying complex JSON logs for analysis in tools like Excel or Google Sheets.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/flat-to-nested-json">Flat to Nested JSON</a> — Convert flat JSON back to nested structure</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert flat JSON to CSV spreadsheets</li>
          <li><a href="/json-to-key-value">JSON to Key-Value</a> — Convert JSON to key:value pairs</li>
        </ul>
      </article>
    </>
  )
}
