'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFilter } from '@/lib/converters'

const example = '{"user":{"name":"Alice","age":30,"email":"alice@example.com","address":{"city":"NYC","zip":"10001"}}}\nuser.name\nuser.address.city'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Filter"
        description="Filter JSON to only include specified dot-notation paths. Add each path on a new line below your JSON."
        inputPlaceholder="Paste your JSON data first, then add dot-notation paths to include..."
        outputPlaceholder="Filtered JSON will appear here..."
        convertLabel="Filter JSON"
        onConvert={jsonFilter}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Filtering?</h2>
        <p>JSON filtering extracts only the parts of your JSON that match specified dot-notation paths. You provide the JSON data followed by one path per line, and the tool returns a new JSON object containing only the matching nodes.</p>
        <p>JSON filtering is useful for:</p>
        <ul>
          <li><strong>Data Minimization</strong>: Reducing large payloads to only relevant fields.</li>
          <li><strong>Debugging</strong>: Inspecting specific parts of complex JSON structures.</li>
          <li><strong>API Transformation</strong>: Shaping responses to match client requirements.</li>
          <li><strong>Data Extraction</strong>: Pulling specific fields from deeply nested structures.</li>
        </ul>
        <h2>How to Filter JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter your complete JSON data first.</li>
          <li><strong>Add paths</strong>: On new lines below the JSON, add dot-notation paths to include.</li>
          <li><strong>Click Filter JSON</strong>: The tool extracts only matching paths.</li>
          <li><strong>Review the result</strong>: Only the specified paths remain in the output.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is dot notation?</h3>
        <p>Dot notation uses periods to navigate nested keys, e.g., {"{"}user.address.city{"}"} accesses the city field inside the address object inside the user object.</p>
        <h3>Can I filter array elements?</h3>
        <p>Yes. Use array index notation like users.0.name or iterate with wildcards like users.{'*'}.name.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Mobile developers use JSON filtering to reduce API response sizes before sending data over slow connections. By specifying only the fields the mobile UI needs, they significantly reduce bandwidth and improve app performance.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-extract">JSON Extract</a> — Extract values using dot-notation paths</li>
          <li><a href="/json-path-tester">JSON Path Tester</a> — Test JSONPath expressions</li>
          <li><a href="/json-pointer-tester">JSON Pointer Tester</a> — Test RFC 6901 JSON Pointers</li>
        </ul>
      </article>
    </>
  )
}
