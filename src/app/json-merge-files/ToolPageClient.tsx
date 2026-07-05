'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonMergeFiles } from '@/lib/converters'

const example = "{\"name\":\"Alice\"}\n{\"age\":30}\n{\"city\":\"NYC\"}"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Merge Files"
        description="Merge multiple JSON objects pasted as separate blocks into one. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Merge"
        onConvert={jsonMergeFiles}
        exampleInput={example}
        inputLanguage={"json"}
        outputLanguage={"json"}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Merge multiple JSON objects pasted as separate blocks into one. This tool processes your data entirely in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter the input in the editor.</li>
          <li><strong>Click Merge</strong>: Process your input.</li>
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
