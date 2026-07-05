'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonValueAnalyzer } from '@/lib/converters'

const example = "{\n  \"users\": [\n    {\n      \"name\": \"Alice\",\n      \"role\": \"admin\"\n    },\n    {\n      \"name\": \"Bob\",\n      \"role\": \"user\"\n    },\n    {\n      \"name\": \"Charlie\",\n      \"role\": \"user\"\n    }\n  ]\n}"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Value Analyzer"
        description="Analyze value frequency and distribution across JSON fields. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Analyze"
        onConvert={jsonValueAnalyzer}
        exampleInput={example}
        inputLanguage={"json"}
        outputLanguage={"json"}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Analyze value frequency and distribution across JSON fields. This tool processes your data entirely in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter the input in the editor.</li>
          <li><strong>Click Analyze</strong>: Process your input.</li>
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
