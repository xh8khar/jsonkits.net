'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { formatJSON } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Formatter"
        description="Beautify and pretty-print your JSON with customizable indentation. Formats messy or minified JSON into a clean, readable structure with proper line breaks and indentation."
        inputPlaceholder="Paste your JSON here to format..."
        outputPlaceholder="Formatted JSON will appear here..."
        convertLabel="Format"
        onConvert={formatJSON}
        exampleInput={example}
        outputLanguage="json"
      />
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Formatting?</h2>
        <p>JSON formatting (also called beautification or pretty-printing) is the process of transforming minified JSON into a human-readable format with proper indentation, line breaks, and spacing. This makes JSON data easier to read, debug, and maintain.</p>
        <p>Formatted JSON is essential for:</p>
        <ul>
          <li><strong>Debugging</strong>: Reading API responses during development.</li>
          <li><strong>Code Review</strong>: Sharing readable JSON in pull requests.</li>
          <li><strong>Documentation</strong>: Presenting JSON examples in technical docs.</li>
        </ul>
        <h2>How to Format JSON Online</h2>
        <ol>
          <li>Paste your minified or raw JSON into the input editor.</li>
          <li>Click "Format JSON" to beautify the output.</li>
          <li>Your formatted JSON appears instantly with proper indentation.</li>
          <li>Copy the formatted output for use in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What indentation is used?</h3>
        <p>The output uses 2-space indentation by default, which is the most common JSON formatting convention.</p>
        <h3>Does formatting change my data?</h3>
        <p>No. Formatting only changes whitespace and indentation. Your data and structure remain identical.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. Processing happens 100% in your browser. Your data is never sent to any server.</p>
        <h2>Real-World Examples</h2>
        <p>JSON formatting is used daily by developers debugging API responses, reviewing configuration files like package.json or tsconfig.json, preparing JSON samples for documentation, and sharing formatted JSON in code reviews.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/minifier">JSON Minifier</a> — Compress JSON by removing whitespace</li>
          <li><a href="/validator">JSON Validator</a> — Check if your JSON is valid</li>
          <li><a href="/viewer">JSON Viewer</a> — Explore JSON in a tree structure</li>
        </ul>
      </article>
    </>
  )
}
