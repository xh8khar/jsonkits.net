'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { urlEncodedToJson, jsonToUrlEncoded } from '@/lib/converters'

const example = `name=JSONKits&version=1&active=true`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="URL Encoded to JSON Converter"
        description="Decode URL-encoded strings back to JSON format instantly."
        inputPlaceholder="Paste your input here..."
        outputPlaceholder="Converted output will appear here..."
        convertLabel="Decode to JSON"
        onConvert={urlEncodedToJson}
        exampleInput={example}
        inputLanguage="urlencoded"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToUrlEncoded}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is URL Encoded?</h2>
        <p>URL encoding (percent-encoding) encodes special characters in URLs using % followed by two hexadecimal digits. It ensures that data containing spaces, symbols, or non-ASCII characters can be safely transmitted in URLs.</p>
        URL encoding ensures that special characters like spaces, &, and = are properly transmitted in URLs. It is used in:
        <ul>
          <li><strong>Form Submissions</strong>: POST data with application/x-www-form-urlencoded.</li>
          <li><strong>API Parameters</strong>: Passing complex search or filter criteria.</li>
          <li><strong>Web Scraping</strong>: Encoding request parameters for HTTP clients.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is the most widely used data format for web APIs, configuration files, and data storage.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">URL Encoded</th>
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
        <h2>How to Convert URL Encoded to JSON Online</h2>
        <ol>
          <li><strong>Paste Input</strong>: Copy your url encoded data and paste it into the input editor.</li>
          <li><strong>Click Convert</strong>: Press the "Decode to JSON" button to transform your data.</li>
          <li><strong>Review JSON</strong>: The structured JSON output appears instantly.</li>
          <li><strong>Copy & Use</strong>: Use the Copy button to grab the JSON for your application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this conversion accurate?</h3>
        <p>Yes. The tool accurately parses url encoded input and converts it to valid JSON while preserving all data.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally.</p>
        <h3>What if the input format has errors?</h3>
        <p>The tool will detect format issues and display an error message explaining what went wrong.</p>
        <h2>Real-World Examples</h2>
        <p>Converting between JSON and url encoded is a common task in modern development workflows. Developers use this conversion for data transformation, format migration, and interoperability between different systems and tools.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/url-encoded--to-json">Reverse Converter</a> — Convert url encoded back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
