'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRemoveNulls } from '@/lib/converters'

const example = '{"name":"JSONKits","version":null,"features":["formatter",null,"converter"],"config":null}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Remove Nulls Tool"
        description="Remove all null values from JSON objects and arrays. Perfect for cleaning API responses and preparing data for databases."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Cleaned JSON output will appear here..."
        convertLabel="Remove Nulls"
        onConvert={jsonRemoveNulls}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Null Removal?</h2>
        <p>JSON null removal strips all null values from objects and arrays, producing cleaner, more compact data. This is essential when preparing API responses for display, cleaning data for databases, or reducing payload size.</p>
        <p>Null removal is useful for:</p>
        <ul>
          <li><strong>Data Cleaning</strong>: Removing empty fields before processing.</li>
          <li><strong>API Responses</strong>: Eliminating null fields from JSON payloads.</li>
          <li><strong>Database Imports</strong>: Cleaning data before database insertion.</li>
          <li><strong>Frontend Rendering</strong>: Avoiding null checks in UI components.</li>
        </ul>
        <h2>How to Remove Nulls from JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter JSON containing null values.</li>
          <li><strong>Click Remove Nulls</strong>: All null values are stripped from objects and arrays.</li>
          <li><strong>Copy cleaned JSON</strong>: Use the compact result.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are null values in arrays removed too?</h3>
        <p>Yes. Null elements in arrays are filtered out, and the array is re-indexed.</p>
        <h3>Does it remove empty strings or undefined?</h3>
        <p>No. Only null values are removed. Empty strings and other falsy values are preserved.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-sort-keys">JSON Sort Keys</a> — Sort object keys alphabetically</li>
          <li><a href="/json-minifier">JSON Minifier</a> — Minify JSON</li>
        </ul>
      </article>
    </>
  )
}
