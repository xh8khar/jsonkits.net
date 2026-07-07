'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonStringify } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Stringify"
        description="Beautify and stringify JSON data with proper indentation for readability."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Stringified JSON will appear here..."
        convertLabel="Stringify"
        onConvert={jsonStringify}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-stringify"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Stringify?</h2>
        <p>JSON stringify converts JavaScript/JSON objects into readable formatted strings with configurable indentation. The term comes from <code>JSON.stringify()</code>, the built-in JavaScript method that serializes objects into a JSON string representation.</p>
        <p>This tool takes minified or raw JSON and applies proper formatting with customizable spacing, making the structure clear and easy to read. It is commonly used for:</p>
        <ul>
          <li><strong>Debugging</strong>: Transform raw API response objects into formatted JSON for inspection and troubleshooting.</li>
          <li><strong>Code documentation</strong>: Produce clean, indented JSON examples for API documentation, READMEs, and technical specs.</li>
          <li><strong>Data sharing</strong>: Format JSON before pasting into collaborative documents, issue trackers, or chat messages for clarity.</li>
        </ul>
        <h2>How to Stringify JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON data (minified or already formatted) and paste it into the input editor.</li>
          <li><strong>Click Stringify</strong>: Press the "Stringify" button to process and format the JSON.</li>
          <li><strong>Adjust if needed</strong>: The output will appear with 2-space indentation by default, making nested structures clearly visible.</li>
          <li><strong>Copy the result</strong>: Use the copy button to grab the beautifully formatted JSON string for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What's the difference between JSON stringify and JSON beautify?</h3>
        <p>Both produce formatted JSON, but "stringify" specifically refers to the serialization of JavaScript objects to JSON strings, while "beautify" more broadly covers formatting, coloring, and validation. This tool focuses on clean indentation and consistent formatting without altering the data structure.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A backend developer debugging a microservice integration copies the raw <code>console.log</code> output of a JavaScript object — which appears as <code>[object Object]</code> — and pastes it into this tool. The stringified output reveals the full JSON structure, helping the developer quickly identify a missing nested field that was causing the integration to fail.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-beautifier">JSON Beautifier</a> — Beautify and format JSON with syntax highlighting</li>
          <li><a href="/json-indenter">JSON Indenter</a> — Apply custom indentation to JSON data</li>
          <li><a href="/json-pretty-print">JSON Pretty Print</a> — Pretty print JSON with colored output</li>
        </ul>
      </article>
    </>
  )
}
