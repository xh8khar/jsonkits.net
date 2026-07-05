'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToToml, tomlToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="TOML to JSON Converter"
        description="Convert TOML configuration files to JSON format instantly. Perfect for reading Rust and Python project configs."
        inputPlaceholder="Paste your TOML here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={tomlToJson}
        exampleInput={'[tool]\nname = "JSONKits"\nversion = 1\nactive = true'}
        inputLanguage="toml"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToToml}
      />
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>What Is TOML?</h2>
        <p>TOML (Tom's Obvious, Minimal Language) is a configuration file format designed to be easy to read and write. It uses key-value pairs and table headers with strong typing and nesting support.
        <p>Developers choose TOML for:</p>
        <ul>
          <li><strong>Package Configuration</strong>: Rust's Cargo.toml and Python's pyproject.toml.</li>
          <li><strong>Build Tools</strong>: Defining build dependencies and metadata.</li>
          <li><strong>Application Settings</strong>: Human-readable config files with comments.</li>
        </ul></p>
        <h2>JSON vs. TOML: Which Should You Use?</h2>
        <p>While both formats manage data, they serve different primary purposes. JSON is built for machines (APIs), while TOML is built for humans (Configuration).</p>
                <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">TOML</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Readability</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Good, but cluttered with braces {'{}'} and quotes "".</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Very good. Uses simple key=value and tables.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Comments</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Not supported (standard JSON).</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Supported using #. Great for documenting config.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Parsing Speed</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Fast parsing, native in most languages.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Moderate. More complex than JSON.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Data Types</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Strings, Numbers, Booleans, Null, Arrays, Objects.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">All JSON types plus Date, Time, and dotted keys.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">APIs, Data Exchange, Web Apps.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Package configs (Cargo.toml, pyproject.toml).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert TOML to TOML Online</h2>
        <ol>
          <li><strong>Paste your TOML</strong>: Copy your TOML code from your editor or API response and paste it into the input box.</li>
          <li><strong>Check for Validity</strong>: The tool will automatically validate your input. If there's a syntax error, check for missing commas or unquoted keys.</li>
          <li><strong>Click Convert</strong>: Press the "TOML to TOML" button. The tool validates and transforms your data instantly.</li>
          <li><strong>Copy & Deploy</strong>: Use the "Copy" button to grab your output. It is ready for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is TOML better than JSON?</h3>
        <p>TOML is generally considered better for configuration files due to its human readability and support for comments. It is cleaner and less verbose than JSON for config files. However, JSON is superior for data interchange between APIs and servers because of its strict parsing rules and widespread language support.</p>
        <h3>Is this TOML to TOML converter safe?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your data never leaves your browser and is processed locally using JavaScript. We do not store, track, or upload your data to any server.</p>
        <h3>Does this tool support large files?</h3>
        <p>Since the conversion happens in your browser, the limit depends on your computer's memory (RAM) and browser capabilities. It can easily handle files up to several megabytes, which covers almost all configuration and data use cases.</p>
        <h2>Real-World Examples</h2>
        <p>Converting TOML to TOML is common in modern development workflows. Here are typical scenarios:</p>
        <p>Developers frequently convert API responses to configuration formats, migrate between different config systems, and transform data for compatibility between tools. This conversion is essential in DevOps, web development, and data processing pipelines.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/toml-to-json">TOML to JSON</a> — Reverse conversion from TOML back to JSON</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML configuration format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays into CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
