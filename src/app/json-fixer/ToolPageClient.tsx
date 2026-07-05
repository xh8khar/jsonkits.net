'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRepair } from '@/lib/converters'

const example = "{ name: 'JSONKits', version: 1, active: true, }"

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Fixer"
        description="Fix common JSON errors automatically. Handles trailing commas, missing quotes, single quotes instead of double quotes, and more."
        inputPlaceholder="Paste your broken JSON here..."
        outputPlaceholder="Fixed JSON will appear here..."
        convertLabel="Fix JSON"
        onConvert={jsonRepair}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Fixing?</h2>
        <p>JSON fixing automatically repairs common JSON errors including single quotes, trailing commas, missing quotes on keys, and Python-style booleans.</p>
        <h2>How to Fix JSON Online</h2>
        <ol><li>Paste your broken JSON into the input editor.</li><li>Click "Fix JSON" to repair it.</li><li>Copy the fixed JSON output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-repair">JSON Repair</a></li></ul>
      </article>
    </>
  )
}
