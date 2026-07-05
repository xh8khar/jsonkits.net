'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { keyValueToJson, jsonToKeyValue } from '@/lib/converters'

const example = 'name: JSONKits\nversion: 1\nsettings.theme: dark\nsettings.notifications: true'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Key-Value to JSON Converter"
        description="Parse key:value pair lines back into structured JSON format. Perfect for converting environment variables and flat configs to JSON."
        inputPlaceholder="Paste your key:value pairs here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={keyValueToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToKeyValue}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Key-Value to JSON Conversion?</h2>
        <p>Key-value to JSON conversion parses lines of <code>key: value</code> pairs into structured JSON objects. This is essential for migrating flat configs, environment variables, and simple data files into API-ready JSON format.</p>
        <p>This conversion is useful for:</p>
        <ul>
          <li><strong>Config Migration</strong>: Converting flat config files to structured JSON.</li>
          <li><strong>Environment Variables</strong>: Parsing env exports into JSON objects.</li>
          <li><strong>Data Import</strong>: Loading key-value data into JSON-based tools.</li>
        </ul>
        <h2>How to Convert Key-Value to JSON Online</h2>
        <ol>
          <li><strong>Paste key:value pairs</strong>: Enter one pair per line.</li>
          <li><strong>Click Convert</strong>: Parse into structured JSON with dot-notation nesting.</li>
          <li><strong>Copy JSON</strong>: Use the output in your application or API.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it support dot-notation nesting?</h3>
        <p>Yes. Keys like <code>settings.theme</code> are automatically nested into objects.</p>
        <h3>What value types are supported?</h3>
        <p>Strings, numbers (integers and floats), booleans (true/false), and null are all detected automatically.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-key-value">JSON to Key-Value</a> — Reverse conversion</li>
          <li><a href="/env-to-json">.env to JSON</a> — Convert .env files to JSON</li>
        </ul>
      </article>
    </>
  )
}
