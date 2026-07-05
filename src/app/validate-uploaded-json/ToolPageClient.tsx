'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { validateUploadedJson } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Validate Uploaded JSON"
        description="Validate JSON data with detailed feedback including size, structure, type information, and root key count. Perfect for checking file uploads."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={validateUploadedJson}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Validate your JSON data with comprehensive feedback. Get details about the data size, type, root keys, and structure all in one place.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data or JSON file contents into the input editor.</li><li>Click "Validate" to check the data.</li><li>Review the validation results and structure information.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-upload">JSON Upload</a></li></ul>
      </article>
    </>
  )
}
