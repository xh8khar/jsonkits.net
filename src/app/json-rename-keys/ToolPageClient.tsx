'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRenameKeys } from '@/lib/converters'

const example = 'oldName: newName\noldAge: newAge\n{"oldName":"Alice","oldAge":30,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Rename Keys"
        description="Rename JSON object keys using a key mapping. Add oldKey: newKey pairs on lines before your JSON to define the mapping."
        inputPlaceholder="Paste key mappings then your JSON..."
        outputPlaceholder="Renamed JSON will appear here..."
        convertLabel="Rename Keys"
        onConvert={jsonRenameKeys}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Key Renaming?</h2>
        <p>JSON key renaming transforms object keys across your entire data structure using an old-to-new mapping. This is essential when migrating API responses, normalizing data from different sources, or conforming to a new schema.</p>
        <ul><li><strong>API Migration</strong>: Adapting responses from deprecated APIs.</li><li><strong>Data Normalization</strong>: Standardizing field names across datasets.</li><li><strong>Schema Changes</strong>: Updating JSON to match new database schemas.</li></ul>
        <h2>How to Rename JSON Keys Online</h2>
        <ol><li>Add <code>oldKey: newKey</code> mapping lines (one per line) before your JSON.</li><li>Paste your JSON data after the mappings.</li><li>Click Rename Keys to transform all matching keys recursively.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it rename keys at all nesting levels?</h3><p>Yes. The mapping is applied recursively to every object at every depth.</p>
        <h3>What if a mapping key is not found?</h3><p>Unmatched keys are left unchanged.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-normalize">JSON Normalize</a> — Sort keys consistently</li><li><a href="/json-formatter">JSON Formatter</a> — Pretty-print JSON</li></ul>
      </article>
    </>
  )
}
