'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonNormalize } from '@/lib/converters'

const example = '{"z":1,"a":{"d":4,"b":2,"c":3},"m":0}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Normalize"
        description="Normalize JSON by sorting all keys alphabetically at every nesting level for consistent, canonical output."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Normalized JSON will appear here..."
        convertLabel="Normalize"
        onConvert={jsonNormalize}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Normalization?</h2>
        <p>JSON normalization produces consistent, canonical JSON by sorting all object keys alphabetically at every level. This removes key-order differences that can cause false diffs in version control and testing.</p>
        <ul><li><strong>Version Control</strong>: Clean diffs without key-order noise.</li><li><strong>API Testing</strong>: Predictable response comparisons.</li><li><strong>Canonical JSON</strong>: Consistent output for signing or hashing.</li></ul>
        <h2>How to Normalize JSON Online</h2>
        <ol><li>Paste your JSON with any key order.</li><li>Click Normalize to sort all keys alphabetically.</li><li>Copy the consistent output for your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are nested keys sorted too?</h3><p>Yes. The tool recursively sorts keys at every depth.</p>
        <h3>Are array elements reordered?</h3><p>No. Only object keys are sorted. Array order is preserved.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-sort-keys">JSON Sort Keys</a> — Sort keys only</li><li><a href="/json-custom-stringify">JSON Custom Stringify</a> — Format with options</li></ul>
      </article>
    </>
  )
}
