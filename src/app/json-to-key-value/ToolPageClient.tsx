'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToKeyValue, keyValueToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"settings":{"theme":"dark","notifications":true}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Key-Value Converter"
        description="Convert JSON objects to simple key:value pair lines. Perfect for environment variables, config files, and flat data processing."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Key-Value output will appear here..."
        convertLabel="Convert to Key-Value"
        onConvert={jsonToKeyValue}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={keyValueToJson}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to Key-Value Conversion?</h2>
        <p>JSON to key-value conversion transforms structured JSON into simple <code>key: value</code> lines using dot notation for nested keys. This flat representation is ideal for environment variable files, simple configs, and human-readable summaries.</p>
        <p>This conversion is useful for:</p>
        <ul>
          <li><strong>Environment Variables</strong>: Extracting flat key-value pairs for .env files.</li>
          <li><strong>Simple Configs</strong>: Creating minimal configuration files.</li>
          <li><strong>Data Inspection</strong>: Quickly viewing JSON content in a flat format.</li>
          <li><strong>Log Output</strong>: Formatting JSON logs as key-value lines.</li>
        </ul>
        <h2>How to Convert JSON to Key-Value Online</h2>
        <ol>
          <li><strong>Paste JSON</strong>: Enter your structured JSON data.</li>
          <li><strong>Click Convert</strong>: Flatten to key:value pair lines.</li>
          <li><strong>Copy or edit</strong>: Use the output as environment variables or config.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested keys use dot notation, e.g., <code>settings.theme: dark</code>.</p>
        <h3>Can I convert back to JSON?</h3>
        <p>Yes. Use bidirectional mode or the <a href="/key-value-to-json">Key-Value to JSON</a> tool.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/key-value-to-json">Key-Value to JSON</a> — Reverse conversion</li>
          <li><a href="/nested-to-flat-json">Nested to Flat JSON</a> — Similar flattening with JSON output</li>
          <li><a href="/json-to-env">JSON to .env</a> — Convert JSON to .env file format</li>
        </ul>
      </article>
    </>
  )
}
