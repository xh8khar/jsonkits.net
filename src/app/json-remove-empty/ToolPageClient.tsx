'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRemoveEmpty } from '@/lib/converters'

const example = '{"name":"JSONKits","empty":{},"items":[1,2,{}],"nested":{"a":1,"b":{}},"emptyArr":[]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Remove Empty"
        description="Remove all empty objects {} and empty arrays [] from your JSON data recursively."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Cleaned JSON will appear here..."
        convertLabel="Remove Empty"
        onConvert={jsonRemoveEmpty}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Empty Removal?</h2>
        <p>JSON empty removal scans your data recursively and removes all empty objects {'{}'} and empty arrays {[]}. This helps clean up datasets that contain placeholder or default empty containers, producing a more compact and meaningful representation.</p>
        <p>Empty removal is useful for:</p>
        <ul>
          <li><strong>Data Cleaning</strong>: Removing noise from generated or exported data.</li>
          <li><strong>Payload Optimization</strong>: Reducing size by eliminating empty containers.</li>
          <li><strong>API Responses</strong>: Cleaning up responses that include unused optional fields.</li>
          <li><strong>Serialization</strong>: Preparing data for formats that don't support empty containers.</li>
        </ul>
        <h2>How to Remove Empty JSON Containers Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter your JSON data with empty containers.</li>
          <li><strong>Click Remove Empty</strong>: The tool recursively removes empty objects and arrays.</li>
          <li><strong>Review the result</strong>: Empty containers are removed while preserving all data.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it remove empty strings?</h3>
        <p>No. Empty strings are valid string values and are preserved. Only empty objects {'{}'} and empty arrays {[]} are removed.</p>
        <h3>Will it remove nested empty containers?</h3>
        <p>Yes. The removal is recursive. If removing a nested empty container makes its parent empty, the parent is also removed.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers cleaning API responses often encounter empty objects and arrays from optional fields. Removing these empty containers reduces payload size and makes the data easier to work with in downstream processing pipelines and databases.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-remove-nulls">JSON Remove Nulls</a> — Remove null values from JSON</li>
          <li><a href="/json-remove-duplicates">JSON Remove Duplicates</a> — Remove duplicate objects from arrays</li>
          <li><a href="/json-minifier">JSON Minifier</a> — Minify JSON to reduce size</li>
        </ul>
      </article>
    </>
  )
}
