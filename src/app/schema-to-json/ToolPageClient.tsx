'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { schemaToJson, jsonToSchema } from '@/lib/converters'

const example = '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"name":{"type":"string"},"version":{"type":"integer"},"active":{"type":"boolean"}},"required":["name","version","active"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Schema to JSON Generator"
        description="Generate sample JSON data from a JSON Schema definition. Perfect for testing, mocking APIs, and populating development databases."
        inputPlaceholder="Paste your JSON Schema here..."
        outputPlaceholder="Sample JSON output will appear here..."
        convertLabel="Generate Sample"
        onConvert={schemaToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToSchema}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Schema to JSON Generation?</h2>
        <p>Schema to JSON generation creates realistic sample data from a JSON Schema definition. This is essential for API development, testing, and mocking before actual data is available.</p>
        <p>This is useful for:</p>
        <ul>
          <li><strong>API Mocking</strong>: Generating sample responses during frontend development.</li>
          <li><strong>Testing</strong>: Creating test data that matches validation rules.</li>
          <li><strong>Prototyping</strong>: Quickly populating UIs with realistic data.</li>
          <li><strong>Documentation</strong>: Generating examples from schemas for API docs.</li>
        </ul>
        <h2>How to Generate Sample JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON Schema</strong>: Enter a valid draft-07 schema.</li>
          <li><strong>Click Generate Sample</strong>: The tool creates data matching the schema.</li>
          <li><strong>Copy the output</strong>: Use the sample data in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What schema features are supported?</h3>
        <p>The generator handles objects, arrays, strings, numbers, integers, booleans, and null types. It also respects <code>enum</code>, <code>default</code>, and <code>example</code> values when present.</p>
        <h3>Does it generate random values?</h3>
        <p>It generates deterministic sample values (e.g., "string", 0, true) rather than random data, keeping results predictable.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-schema">JSON to Schema</a> — Reverse: generate schema from JSON</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces</li>
        </ul>
      </article>
    </>
  )
}
