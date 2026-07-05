'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonMerge } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1}\n{"features":["formatter","validator"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Merge Tool"
        description="Deep merge two or more JSON objects into one combined structure. Perfect for combining API responses, config files, and data sources."
        inputPlaceholder="Paste your JSON objects here (one per line or block)..."
        outputPlaceholder="Merged JSON output will appear here..."
        convertLabel="Merge"
        onConvert={jsonMerge}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Merging?</h2>
        <p>JSON merging combines two or more JSON objects into a single object using deep merge semantics. Nested objects are merged recursively, and top-level keys are combined. This is essential when combining configuration files, API responses, or data sources.</p>
        <p>JSON merging is useful for:</p>
        <ul>
          <li><strong>Config Combination</strong>: Merging default and user config files.</li>
          <li><strong>API Aggregation</strong>: Combining multiple API responses into one object.</li>
          <li><strong>Data Enrichment</strong>: Adding fields from one data source to another.</li>
          <li><strong>State Management</strong>: Merging application state updates.</li>
        </ul>
        <h2>How to Merge JSON Objects Online</h2>
        <ol>
          <li><strong>Paste JSON objects</strong>: Enter two or more JSON objects separated by newlines.</li>
          <li><strong>Click Merge</strong>: Objects are deep-merged into one.</li>
          <li><strong>Copy the result</strong>: Use the combined JSON.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are conflicting keys handled?</h3>
        <p>Values from later objects override earlier ones. For nested objects, merging is recursive — only leaf values are overridden.</p>
        <h3>How many objects can I merge?</h3>
        <p>The tool merges two objects at a time. For more, merge the result with additional objects.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print merged JSON</li>
          <li><a href="/json-sort-keys">JSON Sort Keys</a> — Sort keys in merged output</li>
        </ul>
      </article>
    </>
  )
}
