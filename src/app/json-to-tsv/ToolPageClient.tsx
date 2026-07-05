'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToTsv, tsvToJson } from '@/lib/converters'

const example = '[{"name":"JSONKits","version":1,"active":true},{"name":"ToolBox","version":2,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to TSV Converter"
        description="Transform JSON arrays into tab-separated values instantly."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="TSV output will appear here..."
        convertLabel="Convert to TSV"
        onConvert={jsonToTsv}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="tsv"
        bidirectional
        onReverse={tsvToJson}
      />
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>What Is TSV?</h2>
        <p>TSV (Tab-Separated Values) is a simple text format for tabular data where each row is a line and columns are separated by tab characters.
        <p>TSV is widely used for:</p>
        <ul>
          <li><strong>Data Science</strong>: Importing datasets into Python pandas and R.</li>
          <li><strong>Spreadsheets</strong>: Exporting data from Excel and Google Sheets.</li>
          <li><strong>Machine Learning</strong>: Training data with tabular features.</li>
        </ul></p>
        <h2>JSON vs. TSV: Which Should You Use?</h2>
        <p>While both formats manage data, they serve different primary purposes. JSON is built for machines (APIs), while TSV is built for humans (Configuration).</p>
                <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">TSV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, but cluttered with braces {'{}'} and quotes "".</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good. Tabular data with simple structure.</td>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data science and spreadsheet exports.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to TSV Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON code from your editor or API response and paste it into the input box.</li>
          <li><strong>Check for Validity</strong>: The tool will automatically validate your input. If there's a syntax error, check for missing commas or unquoted keys.</li>
          <li><strong>Click Convert</strong>: Press the "JSON to TSV" button. The tool validates and transforms your data instantly.</li>
          <li><strong>Copy & Deploy</strong>: Use the "Copy" button to grab your output. It is ready for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is TSV better than JSON?</h3>
        <p>TSV is generally considered better for configuration files due to its human readability and support for comments. It is cleaner and less verbose than JSON for config files. However, JSON is superior for data interchange between APIs and servers because of its strict parsing rules and widespread language support.</p>
        <h3>Is this JSON to TSV converter safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally using JavaScript. We do not store, track, or upload your data to any server.</p>
        <h3>Does this tool support large files?</h3>
        <p>Since the conversion happens in your browser, the limit depends on your computer's memory (RAM) and browser capabilities. It can easily handle files up to several megabytes, which covers almost all configuration and data use cases.</p>
        <h2>Real-World Examples</h2>
        <p>Converting JSON to TSV is common in modern development workflows. Here are typical scenarios:</p>
        <p>Developers frequently convert API responses to configuration formats, migrate between different config systems, and transform data for compatibility between tools. This conversion is essential in DevOps, web development, and data processing pipelines.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/tsv-to-json">TSV to JSON</a> — Reverse conversion from TSV back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML configuration format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}