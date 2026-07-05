'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCollectionCounter } from '@/lib/converters'

const example = "[\n  {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"email\": \"a@x.com\"\n  },\n  {\n    \"name\": \"Bob\",\n    \"age\": 25\n  },\n  {\n    \"name\": \"Charlie\",\n    \"age\": 35,\n    \"email\": \"c@x.com\"\n  }\n]"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Collection Counter"
        description="Count field presence, types, and nulls across array items. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Count"
        onConvert={jsonCollectionCounter}
        exampleInput={example}
        inputLanguage={"json"}
        outputLanguage={"json"}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Count field presence, types, and nulls across array items. This tool processes your data entirely in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter the input in the editor.</li>
          <li><strong>Click Count</strong>: Process your input.</li>
          <li><strong>Review Output</strong>: The result appears instantly.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a></li>
          <li><a href="/json-viewer">JSON Viewer</a></li>
        </ul>
      </article>
    </>
  )
}
