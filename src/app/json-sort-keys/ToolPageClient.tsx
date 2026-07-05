'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSortKeys } from '@/lib/converters'

const example = '{"z":1,"a":{"d":4,"b":2,"c":3},"m":0}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Sort Keys Tool"
        description="Sort all JSON object keys alphabetically for consistent, predictable output. Perfect for code review, comparison, and canonical JSON."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Sorted JSON output will appear here..."
        convertLabel="Sort Keys"
        onConvert={jsonSortKeys}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Key Sorting?</h2>
        <p>JSON key sorting reorganizes all object keys in alphabetical order at every nesting level. This ensures consistent, predictable JSON output — essential for version control diffs, API testing, and canonical JSON forms.</p>
        <p>Key sorting is useful for:</p>
        <ul>
          <li><strong>Version Control</strong>: Meaningful diffs without key-order noise.</li>
          <li><strong>API Testing</strong>: Predictable response comparison.</li>
          <li><strong>Canonical JSON</strong>: Cryptographic signing and verification.</li>
          <li><strong>Code Review</strong>: Consistent JSON formatting in PRs.</li>
        </ul>
        <h2>How to Sort JSON Keys Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter JSON with any key order.</li>
          <li><strong>Click Sort Keys</strong>: All keys are sorted alphabetically.</li>
          <li><strong>Copy the result</strong>: Use the consistent output anywhere.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are nested object keys sorted too?</h3>
        <p>Yes. The tool recursively sorts keys at every level of nesting.</p>
        <h3>Are array elements sorted?</h3>
        <p>No. Array order is preserved. Only object keys are sorted.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print JSON</li>
          <li><a href="/json-remove-nulls">JSON Remove Nulls</a> — Clean null values from JSON</li>
        </ul>
      </article>
    </>
  )
}
