'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSyntaxChecker } from '@/lib/converters'

const example = '{"name": "JSONKits", "version": 1, "active": true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Syntax Checker"
        description="Check your JSON syntax for errors. Get detailed error messages pointing to the exact location of syntax issues in your JSON data."
        inputPlaceholder="Paste your JSON here to check..."
        outputPlaceholder="Syntax check result will appear here..."
        convertLabel="Check Syntax"
        onConvert={jsonSyntaxChecker}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Syntax Checking?</h2>
        <p>JSON syntax checking validates that your JSON is properly formatted according to the JSON specification. It checks for missing commas, brackets, quotes, and other syntax issues.</p>
        <h2>How to Check JSON Syntax Online</h2>
        <ol><li>Paste your JSON into the input editor.</li><li>Click "Check Syntax" to validate it.</li><li>Review the result for any syntax errors.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/validator">JSON Validator</a></li><li><a href="/json-repair">JSON Repair</a></li></ul>
      </article>
    </>
  )
}
