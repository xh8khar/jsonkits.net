'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { extractNestedObjects } from '@/lib/converters'

const example = JSON.stringify({ user: { name: 'Alice', address: { city: 'NYC', zip: '10001' } }, meta: { source: 'web' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Extract Nested Objects"
        description="Extract all nested objects from your JSON structure into a flat list. Each nested object becomes a separate entry for easy inspection."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Extracted objects will appear here..."
        convertLabel="Extract Objects"
        onConvert={extractNestedObjects}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Extract every nested object from your JSON data into a flat list. Each object at every nesting level becomes a separate entry.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Extract Objects" to flatten nested objects.</li><li>Review the extracted objects as a flat array.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/extract-keys">Extract Keys</a></li><li><a href="/nested-to-flat-json">Nested JSON to Flat</a></li></ul>
      </article>
    </>
  )
}
