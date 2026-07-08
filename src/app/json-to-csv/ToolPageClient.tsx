'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToCsv, csvToJson } from '@/lib/converters'

const example = JSON.stringify([
  { name: 'Alice', role: 'Engineer', active: true },
  { name: 'Bob', role: 'Designer', active: false },
], null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to CSV Converter"
        description="Convert JSON arrays to CSV format for spreadsheets, data analysis, and database imports. Handles nested objects and arrays automatically."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="CSV output will appear here..."
        convertLabel="Convert to CSV"
        onConvert={jsonToCsv}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="csv"
        bidirectional
        onReverse={csvToJson}
      />
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>What Is CSV?</h2>
        <p>CSV (Comma-Separated Values) is a simple file format used to store tabular data, such as a spreadsheet or database. Each line of the file is a data record and each record consists of one or more fields separated by commas.</p>
        <p>CSV is essential for:</p>
        <ul>
          <li><strong>Data Migration</strong>: Moving data between databases and spreadsheets.</li>
          <li><strong>Analytics</strong>: Preparing data for analysis in Excel, Tableau, or Power BI.</li>
          <li><strong>Legacy Systems</strong>: Exporting reports from enterprise software.</li>
        </ul>
        <h2>JSON vs. CSV: Which Should You Use?</h2>
        <p>While both formats manage data, they serve different primary purposes. JSON is built for machines (APIs), while CSV is built for humans (Configuration).</p>
                <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">CSV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, but cluttered with braces {'{}'} and quotes "".</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good. Widely understood tabular format.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Comments</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Not supported (standard JSON).</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Not supported.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Parsing Speed</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Fast parsing, native in most languages.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Fast. Simple to parse.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Data Types</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Strings, Numbers, Booleans, Null, Arrays, Objects.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">All types stored as text.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">APIs, Data Exchange, Web Apps.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data migration and analytics.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to CSV Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON code from your editor or API response and paste it into the input box.</li>
          <li><strong>Check for Validity</strong>: The tool will automatically validate your input. If there's a syntax error, check for missing commas or unquoted keys.</li>
          <li><strong>Click Convert</strong>: Press the "JSON to CSV" button. The tool validates and transforms your data instantly.</li>
          <li><strong>Copy & Deploy</strong>: Use the "Copy" button to grab your output. It is ready for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is CSV better than JSON?</h3>
        <p>CSV is generally considered better for configuration files due to its human readability and support for comments. It is cleaner and less verbose than JSON for config files. However, JSON is superior for data interchange between APIs and servers because of its strict parsing rules and widespread language support.</p>
        <h3>Is this JSON to CSV converter safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally using JavaScript. We do not store, track, or upload your data to any server.</p>
        <h3>Does this tool support large files?</h3>
        <p>Since the conversion happens in your browser, the limit depends on your computer's memory (RAM) and browser capabilities. It can easily handle files up to several megabytes, which covers almost all configuration and data use cases.</p>
        <h2>Real-World Examples</h2>
        <p>Converting JSON to CSV is common in modern development workflows. Here are typical scenarios:</p>
        <p>Developers frequently convert API responses to configuration formats, migrate between different config systems, and transform data for compatibility between tools. This conversion is essential in DevOps, web development, and data processing pipelines.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/csv-to-json">CSV to JSON</a> — Reverse conversion from CSV back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML configuration format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
