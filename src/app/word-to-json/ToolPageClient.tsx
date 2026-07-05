'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { wordToJson } from '@/lib/converters'

const example = '<html><body><h1>Data</h1><pre>{"name": "John", "age": 30}</pre></body></html>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Word to JSON"
        description="Extract JSON data from Word document content. Paste Word HTML or text content to extract structured data."
        inputPlaceholder="Paste Word document content here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Extract JSON"
        onConvert={wordToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="xml"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Extract JSON data from Word document content. Paste HTML from a Word document or the document text to extract any embedded JSON structures.</p>
        <h2>How to Use</h2>
        <ol><li>Copy content from your Word document and paste it into the editor.</li><li>Click "Extract JSON" to find and parse any JSON data.</li><li>Copy or download the extracted JSON.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-word">JSON to Word</a></li><li><a href="/json-to-pdf">JSON to PDF</a></li></ul>
      </article>
    </>
  )
}
