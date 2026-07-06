'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonpToJson, jsonToJsonp } from '@/lib/converters'

const example = `callback({"name":"JSONKits","version":1});`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSONP to JSON Converter"
        description="Extract JSON data from JSONP callback wrappers instantly."
        inputPlaceholder="Paste your input here..."
        outputPlaceholder="Converted output will appear here..."
        convertLabel="Extract JSON"
        onConvert={jsonpToJson}
        exampleInput={example}
        inputLanguage="jsonp"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToJsonp}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONP?</h2>
        <p>JSONP (JSON with Padding) is a technique for overcoming cross-origin restrictions in web browsers by wrapping JSON data in a JavaScript function call. It was commonly used before CORS became widely supported.</p>
        JSONP bypasses the same-origin policy by using the &lt;script&gt; tag's ability to load cross-origin resources. It is useful for:
        <ul>
          <li><strong>Legacy APIs</strong>: Cross-origin data fetching before CORS.</li>
          <li><strong>Widget Embedding</strong>: Third-party widgets that need external data.</li>
          <li><strong>Mashups</strong>: Combining data from multiple sources.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is the most widely used data format for web APIs, configuration files, and data storage.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSONP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data interchange, APIs, configuration.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data interchange, APIs, configuration.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, structured but can be verbose.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, structured.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Data Types</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Strings, Numbers, Booleans, Null, Arrays, Objects.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Standard JSON types.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Nested Data</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Excellent support for deep nesting.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Excellent nesting support.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Ecosystem</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Universal, every language has a JSON parser.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Universal, every language supports it.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSONP to JSON Online</h2>
        <ol>
          <li><strong>Paste Input</strong>: Copy your jsonp data and paste it into the input editor.</li>
          <li><strong>Click Convert</strong>: Press the "Extract JSON" button to transform your data.</li>
          <li><strong>Review JSON</strong>: The structured JSON output appears instantly.</li>
          <li><strong>Copy & Use</strong>: Use the Copy button to grab the JSON for your application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this conversion accurate?</h3>
        <p>Yes. The tool accurately parses jsonp input and converts it to valid JSON while preserving all data.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally.</p>
        <h3>What if the input format has errors?</h3>
        <p>The tool will detect format issues and display an error message explaining what went wrong.</p>
        <h2>Real-World Examples</h2>
        <p>Converting between JSON and jsonp is a common task in modern development workflows. Developers use this conversion for data transformation, format migration, and interoperability between different systems and tools.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/jsonp--to-json">Reverse Converter</a> — Convert jsonp back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
