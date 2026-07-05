'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToWord } from '@/lib/converters'

const example = JSON.stringify({ title: 'Report', author: 'John Doe', date: '2024-01-01', sections: [{ heading: 'Summary', content: 'Annual report data' }] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Word"
        description="Convert your JSON data into a downloadable Word-compatible document. Perfect for generating reports and documentation from structured data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Word document HTML will appear here..."
        convertLabel="Generate Word"
        onConvert={jsonToWord}
        exampleInput={example}
        outputLanguage="xml"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert JSON data into a Word-compatible HTML document. The output can be saved as a .doc file and opened in Microsoft Word or LibreOffice.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Word" to create the document.</li><li>Copy the HTML or download as a .doc file.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/word-to-json">Word to JSON</a></li><li><a href="/json-to-pdf">JSON to PDF</a></li></ul>
      </article>
    </>
  )
}
