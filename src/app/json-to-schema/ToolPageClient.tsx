'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSchema, schemaToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Schema Generator"
        description="Generate a JSON Schema (draft-07) from your JSON data sample. Perfect for API validation, documentation, and type generation."
        inputPlaceholder="Paste your JSON sample here..."
        outputPlaceholder="Generated JSON Schema will appear here..."
        convertLabel="Generate Schema"
        onConvert={jsonToSchema}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={schemaToJson}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Schema?</h2>
        <p>JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It describes the shape of your JSON data — what fields are expected, their types, and which are required. This tool generates a draft-07 schema from your data sample.</p>
        <p>JSON Schema is essential for:</p>
        <ul>
          <li><strong>API Validation</strong>: Ensuring incoming data matches expected formats.</li>
          <li><strong>Documentation</strong>: Auto-generating API documentation with data shapes.</li>
          <li><strong>Type Generation</strong>: Creating TypeScript types or OpenAPI specs from schema.</li>
          <li><strong>Form Generation</strong>: Building dynamic forms with validation rules.</li>
        </ul>
        <h2>JSON vs. JSON Schema</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON Data</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON Schema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Purpose</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Contains actual data values.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Describes the structure of data.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Validation</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Can be validated against a schema.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Used to validate JSON instances.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Types</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Implicit (string, number, etc.).</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Explicit type declarations.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Constraints</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">No constraint information.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">min/max, pattern, required, enum.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data exchange, APIs.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Validation rules, docs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Generate a JSON Schema Online</h2>
        <ol>
          <li><strong>Paste a JSON sample</strong>: Enter representative data with all field types.</li>
          <li><strong>Click Generate Schema</strong>: The tool analyzes types and creates a schema.</li>
          <li><strong>Review required fields</strong>: Top-level keys are marked required.</li>
          <li><strong>Use in your project</strong>: Validate against this schema using any JSON Schema validator.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSON Schema version is generated?</h3>
        <p>The tool generates draft-07 schemas, which is the most widely supported version across validators and tools.</p>
        <h3>Can I generate sample data from a schema?</h3>
        <p>Yes. Use bidirectional mode or the <a href="/schema-to-json">Schema to JSON</a> tool to create sample data.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>JSON Schema generation is used when building REST APIs that need request validation, creating OpenAPI documentation with accurate data shapes, generating TypeScript types from API responses, and building form validation rules from data models.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/schema-to-json">Schema to JSON</a> — Generate sample data from JSON Schema</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces</li>
          <li><a href="/json-validator">JSON Validator</a> — Validate JSON against format rules</li>
        </ul>
      </article>
    </>
  )
}
