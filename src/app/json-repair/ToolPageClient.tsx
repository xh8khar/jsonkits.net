'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRepair } from '@/lib/converters'

const example = "{name: 'Alice', age: 30, active: true,}"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Repair Tool" description="Attempt to repair invalid JSON by fixing single quotes, unquoted keys, trailing commas, and stripping comments." inputPlaceholder="Paste your malformed JSON here..." outputPlaceholder="Repaired JSON will appear here..." convertLabel="Repair JSON" onConvert={jsonRepair} exampleInput={example} outputLanguage="json" />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Repair Tool?</h2>
        <p>This tool attempts to fix common JSON syntax errors including single quotes instead of double quotes, unquoted keys, trailing commas, missing commas, and inline comments. It is useful when dealing with lenient JSON from logs or hand-written data.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your malformed or invalid JSON into the input field.</li><li>Click "Repair JSON" to attempt automatic fixes.</li><li>Review the repaired JSON output and validate it in the JSON Validator.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can all JSON errors be fixed?</h3><p>Common issues like unquoted keys, single quotes, and trailing commas are handled. Complex structural issues may not be repairable.</p>
        <h3>Is the repaired JSON always valid?</h3><p>The tool aims to produce valid JSON but you should verify the output. Use the JSON Validator to confirm correctness.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-linter">JSON Linter</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
