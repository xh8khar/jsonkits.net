'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToBase64, base64ToJson } from '@/lib/converters'

const example = `{"name":"JSONKits","version":1}`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Base64 Converter"
        description="Encode JSON data to Base64 format instantly."
        inputPlaceholder="Paste your input here..."
        outputPlaceholder="Converted output will appear here..."
        convertLabel="Encode to Base64"
        onConvert={jsonToBase64}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="base64"
        bidirectional
        onReverse={base64ToJson}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is the most widely used data format for web APIs, configuration files, and data storage.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between servers and clients.</li>
          <li><strong>Configuration</strong>: Settings for applications (package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents.</li>
        </ul>
        <h2>What Is Base64?</h2>
        <p>Base64 encoding represents binary data as ASCII text using 64 characters. It is widely used for embedding binary content in JSON, sending data in URLs, and storing complex data in text-based formats.</p>
        Base64 encoding works by converting binary data into a radix-64 representation using the characters A-Z, a-z, 0-9, +, /, and =. It is essential for:
        <ul>
          <li><strong>Data URIs</strong>: Embedding images and files directly in HTML/CSS.</li>
          <li><strong>API Authentication</strong>: Encoding credentials in HTTP Basic Auth headers.</li>
          <li><strong>Email Attachments</strong>: MIME encoding for sending files over SMTP.</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Base64</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data interchange, APIs, configuration.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">represents binary data as ASCII text using 64 characters</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, structured but can be verbose.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Varies by format.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Data Types</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Strings, Numbers, Booleans, Null, Arrays, Objects.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">represents binary data as ASCII text using 64 characters</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Nested Data</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Excellent support for deep nesting.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Depends on specific format.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Ecosystem</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Universal, every language has a JSON parser.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Varies by use case.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to Base64 Online</h2>
        <ol>
          <li><strong>Paste JSON</strong>: Copy your JSON and paste it into the input editor.</li>
          <li><strong>Click Convert</strong>: Press the "Encode to Base64" button to transform your data.</li>
          <li><strong>Copy Result</strong>: Use the Copy button to grab the converted output.</li>
          <li><strong>Use Anywhere</strong>: The output is ready for your application or workflow.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this conversion lossless?</h3>
        <p>Yes. The original JSON data is preserved during conversion. The resulting format contains the same data in a different representation.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally. We do not store, track, or upload your data to any server.</p>
        <h3>What types of data can be converted?</h3>
        <p>All standard JSON types are supported including objects, arrays, strings, numbers, booleans, and null values.</p>
        <h2>Real-World Examples</h2>
        <p>Converting between JSON and base64 is a common task in modern development workflows. Developers use this conversion for data transformation, format migration, and interoperability between different systems and tools.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/base64">Reverse Converter</a> — Convert base64 back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
