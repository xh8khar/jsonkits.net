'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { xlsxToJson } from '@/lib/converters'

const example = "UEsDBBQAAAAI/"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Excel (XLSX) to JSON"
        description="Convert Excel XLSX files (as base64) back into structured JSON. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your data here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Convert to JSON"
        onConvert={xlsxToJson}
        exampleInput={example}
        inputLanguage={"text"}
        outputLanguage={"json"}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Convert Excel XLSX files (as base64) back into structured JSON. This tool processes your data entirely in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your data</strong>: Enter the input in the editor.</li>
          <li><strong>Click Convert to JSON</strong>: Process your input.</li>
          <li><strong>Review Output</strong>: The result appears instantly.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/formatter">JSON Formatter</a></li>
          <li><a href="/viewer">JSON Viewer</a></li>
        </ul>
      </article>
    </>
  )
}
