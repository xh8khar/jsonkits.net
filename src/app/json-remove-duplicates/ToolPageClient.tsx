'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRemoveDuplicates } from '@/lib/converters'

const example = '{"items":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":1,"name":"Alice"}],"config":{"theme":"dark"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Remove Duplicates"
        description="Remove duplicate objects from JSON arrays. Uses deep comparison to identify and remove identical entries."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Deduplicated JSON will appear here..."
        convertLabel="Remove Duplicates"
        onConvert={jsonRemoveDuplicates}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Duplicate Removal?</h2>
        <p>JSON duplicate removal scans arrays in your data and removes objects that have identical content using deep comparison. Each array is deduplicated independently while non-array values and the overall structure are preserved.</p>
        <p>Duplicate removal is useful for:</p>
        <ul>
          <li><strong>Data Cleaning</strong>: Removing redundant entries from datasets.</li>
          <li><strong>API Response Optimization</strong>: Eliminating duplicate records from responses.</li>
          <li><strong>Import Preparation</strong>: Cleaning data before loading into databases.</li>
          <li><strong>Log Analysis</strong>: Removing duplicate log entries for accurate counting.</li>
        </ul>
        <h2>How to Remove Duplicates from JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter JSON data with potential duplicates.</li>
          <li><strong>Click Remove Duplicates</strong>: The tool deduplicates all arrays recursively.</li>
          <li><strong>Review the result</strong>: Duplicate entries are removed from each array.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How does deep comparison work?</h3>
        <p>The tool compares the full structure and values of each object, so two objects are considered duplicates only if all their fields and nested values match exactly.</p>
        <h3>Does it preserve the first or last occurrence?</h3>
        <p>The first occurrence of each unique object is preserved, and subsequent duplicates are removed.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data scientists cleaning datasets before analysis use duplicate removal to ensure accurate statistics and machine learning training. Duplicate records can skew results, so removing them is a critical preprocessing step.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-remove-empty">JSON Remove Empty</a> — Remove empty objects and arrays</li>
          <li><a href="/json-remove-nulls">JSON Remove Nulls</a> — Remove null values from JSON</li>
          <li><a href="/json-filter">JSON Filter</a> — Filter JSON to include only specific paths</li>
        </ul>
      </article>
    </>
  )
}
