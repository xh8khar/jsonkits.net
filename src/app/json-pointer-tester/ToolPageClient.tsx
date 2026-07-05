'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonPointerTester } from '@/lib/converters'

const example = '/store/book/0/title\n{"store":{"book":[{"title":"JSON 101","price":9.99},{"title":"Advanced JSON","price":29.99}]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Pointer Tester"
        description="Test RFC 6901 JSON Pointer expressions against your JSON data. JSON Pointers use /-separated paths like /store/book/0/title."
        inputPlaceholder="Paste JSON Pointer first (e.g. /path/to/value), then your JSON..."
        outputPlaceholder="Resolved value will appear here..."
        convertLabel="Evaluate Pointer"
        onConvert={jsonPointerTester}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Pointer?</h2>
        <p>JSON Pointer (RFC 6901) is a standard syntax for identifying specific values in a JSON document. Pointers use slash-separated tokens (e.g., <code>/store/book/0/title</code>) and are used in JSON Patch, OpenAPI, and JSON Schema.</p>
        <ul><li><strong>JSON Patch</strong>: Targeting values for patching.</li><li><strong>OpenAPI</strong>: Referencing schema components.</li><li><strong>JSON Schema</strong>: Pointing to sub-schemas.</li></ul>
        <h2>How to Test a JSON Pointer</h2>
        <ol><li>Enter the JSON Pointer starting with <code>/</code> on the first line.</li><li>Paste your JSON data below the pointer.</li><li>Click Evaluate Pointer to see the resolved value.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are special characters escaped?</h3><p>Use <code>~0</code> for tilde and <code>~1</code> for forward slash in pointer tokens.</p>
        <h3>What happens if the pointer is invalid?</h3><p>The tool returns an error message indicating which part of the path could not be resolved.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-path-tester">JSONPath Tester</a> — Test JSONPath expressions</li><li><a href="/json-extract">JSON Extract</a> — Extract by dot paths</li></ul>
      </article>
    </>
  )
}
