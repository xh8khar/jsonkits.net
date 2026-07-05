'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRepair } from '@/lib/converters'

const example = "{ name: 'JSONKits', version: 1, tags: ['tools', 'dev'], }"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Invalid JSON Repair"
        description="Repair malformed and invalid JSON data. Automatically detect and fix syntax issues, missing quotes, trailing commas, and more."
        inputPlaceholder="Paste your invalid JSON here..."
        outputPlaceholder="Repaired JSON will appear here..."
        convertLabel="Repair JSON"
        onConvert={jsonRepair}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Repair invalid and malformed JSON data automatically. Handles single quotes, trailing commas, unquoted keys, Python None/True/False, and more.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your invalid JSON into the input editor.</li><li>Click "Repair JSON" to fix all issues.</li><li>Copy the repaired JSON output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-fixer">JSON Fixer</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
