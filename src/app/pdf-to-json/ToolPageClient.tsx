'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { pdfToJson } from '@/lib/converters'

const example = 'This is a sample PDF text content. It contains multiple sentences. Each sentence becomes a paragraph entry. PDF text extraction works best with text-based PDFs.'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="PDF to JSON"
        description="Extract text content from PDF data and structure it as organized JSON. Paste your PDF text content for instant conversion."
        inputPlaceholder="Paste PDF text content here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={pdfToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="text"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Convert PDF text content into structured JSON format. Each paragraph is extracted as a separate entry for easy data processing.</p>
        <h2>How to Use</h2>
        <ol><li>Copy text from your PDF and paste it into the input editor.</li><li>Click "Convert to JSON" to structure the text.</li><li>Copy or download the JSON result.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can I upload a PDF file?</h3><p>This tool extracts JSON from PDF text content. For PDF file upload, copy the text content and paste it in the editor.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-pdf">JSON to PDF</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
