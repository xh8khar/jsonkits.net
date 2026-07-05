'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToImage } from '@/lib/converters'

const example = "{\n  \"name\": \"JSONKits\",\n  \"version\": 1,\n  \"features\": [\n    \"a\",\n    \"b\",\n    \"c\"\n  ]\n}"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to SVG Image"
        description="Render JSON data as a syntax-highlighted SVG image. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Generate SVG"
        onConvert={jsonToImage}
        exampleInput={example}
        inputLanguage={"json"}
        outputLanguage={"text"}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Render JSON data as a syntax-highlighted SVG image. This tool processes your data entirely in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter the input in the editor.</li>
          <li><strong>Click Generate SVG</strong>: Process your input.</li>
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
