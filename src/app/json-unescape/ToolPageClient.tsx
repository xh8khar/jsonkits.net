'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonUnescape, jsonEscape } from '@/lib/converters'

const example = '{\\"name\\":\\"JSONKits\\",\\"query\\":\\"SELECT * FROM users WHERE id = 1\\"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Unescape Tool"
        description="Unescape escaped JSON strings back to their original readable format. Perfect for decoding JSON from source code, logs, or database queries."
        inputPlaceholder="Paste your escaped JSON here..."
        outputPlaceholder="Unescaped JSON will appear here..."
        convertLabel="Unescape"
        onConvert={jsonUnescape}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonEscape}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Unescaping?</h2>
        <p>JSON unescaping converts escaped characters back to their original form. When JSON is embedded in source code or URL parameters, special characters are escaped. Unescaping restores the original readable JSON.</p>
        <p>Unescaping is useful for:</p>
        <ul>
          <li><strong>Log Analysis</strong>: Decoding escaped JSON from application logs.</li>
          <li><strong>Debugging</strong>: Reading JSON from browser console or network inspector.</li>
          <li><strong>Database Migration</strong>: Restoring JSON from escaped database fields.</li>
          <li><strong>API Responses</strong>: Decoding double-encoded JSON payloads.</li>
        </ul>
        <h2>How to Unescape JSON Online</h2>
        <ol>
          <li><strong>Paste escaped JSON</strong>: Enter the string with escape sequences.</li>
          <li><strong>Click Unescape</strong>: Escape sequences are converted back to characters.</li>
          <li><strong>Copy readable JSON</strong>: Use the decoded result.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it validate the unescaped result?</h3>
        <p>Yes. The tool validates that the unescaped output is valid JSON before displaying it.</p>
        <h3>What escape sequences are supported?</h3>
        <p>\n, \r, \t, \\, and \\&quot; are all supported.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-escape">JSON Escape</a> — Escape JSON for embedding in code</li>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print JSON</li>
        </ul>
      </article>
    </>
  )
}
