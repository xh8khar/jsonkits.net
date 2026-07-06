'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonEscape, jsonUnescape } from '@/lib/converters'

const example = '{"name":"JSONKits","query":"SELECT * FROM users WHERE id = 1"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Escape Tool"
        description="Escape a JSON string for safe use in source code, SQL queries, or URL parameters. Perfect for embedding JSON in strings."
        inputPlaceholder="Paste your JSON here to escape..."
        outputPlaceholder="Escaped output will appear here..."
        convertLabel="Escape"
        onConvert={jsonEscape}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={jsonUnescape}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Escaping?</h2>
        <p>JSON escaping converts special characters (double quotes, backslashes, newlines, tabs, carriage returns) into their escape sequences. This makes JSON safe to embed in JavaScript source code, SQL queries, URL parameters, and other string contexts.</p>
        <p>Escaping is essential for:</p>
        <ul>
          <li><strong>Source Code</strong>: Embedding JSON literals in JavaScript or Python code.</li>
          <li><strong>SQL Queries</strong>: Safely including JSON in database queries.</li>
          <li><strong>URL Parameters</strong>: Encoding JSON for query string parameters.</li>
          <li><strong>Log Output</strong>: Ensuring JSON strings don't break log parsers.</li>
        </ul>
        <h2>How to Escape JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter valid JSON data.</li>
          <li><strong>Click Escape</strong>: Special characters are converted to escape sequences.</li>
          <li><strong>Copy the result</strong>: Use in source code or queries.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What characters are escaped?</h3>
        <p>The tool escapes double quotes (&quot;), backslashes (\)), newlines (\n), carriage returns (\r), and tabs (\t).</p>
        <h3>Can I unescape escaped JSON?</h3>
        <p>Yes. Use bidirectional mode or the <a href="/json-unescape">JSON Unescape</a> tool.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-unescape">JSON Unescape</a> — Reverse operation</li>
          <li><a href="/json-to-url-encoded">JSON to URL Encoded</a> — URL-encode JSON data</li>
        </ul>
      </article>
    </>
  )
}
