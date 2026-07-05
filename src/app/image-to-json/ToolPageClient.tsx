'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { imageToJson } from '@/lib/converters'

const example = 'The user data shows: {"name": "Alice", "age": 30, "email": "alice@example.com"} in the system.'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Image to JSON (OCR)"
        description="Extract JSON-like data structures from recognized text content. Paste text from OCR or copy-paste image text for processing."
        inputPlaceholder="Paste recognized text here..."
        outputPlaceholder="Extracted JSON will appear here..."
        convertLabel="Extract JSON"
        onConvert={imageToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Extract JSON-like data structures from recognized text content. Use with OCR tools to extract structured data from images of documents.</p>
        <h2>How to Use</h2>
        <ol><li>Use an OCR tool to extract text from an image.</li><li>Paste the recognized text into the input editor.</li><li>Click "Extract JSON" to find and format any JSON structures.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
