'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonLivePreview } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Live Preview"
        description="Preview your JSON data with real-time structure analysis. Get formatted output, key discovery, type breakdown, and size information."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Live preview will appear here..."
        convertLabel="Preview"
        onConvert={jsonLivePreview}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Preview your JSON data with comprehensive live analysis. See formatted JSON, discover all keys, and get a full type breakdown including arrays, objects, strings, numbers, booleans, and nulls.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Preview" to analyze the structure.</li><li>Review the formatted output and structure breakdown.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/viewer">JSON Viewer</a></li><li><a href="/formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
