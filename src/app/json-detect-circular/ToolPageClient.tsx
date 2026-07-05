'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDetectCircular } from '@/lib/converters'

const example = '{"name":"test","child":{"name":"nested"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Detect Circular"
        description="Detect circular references in JSON data structures. Reports paths where circular references occur."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Circular reference detection result will appear here..."
        convertLabel="Detect Circular"
        onConvert={jsonDetectCircular}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Circular Reference Detection?</h2>
        <p>Circular references occur when a JSON object contains a reference back to itself, either directly or through a chain of nested objects. Standard JSON cannot represent circular references, but JavaScript objects can. This tool analyzes data structures and reports any circular paths found.</p>
        <p>Circular reference detection is useful for:</p>
        <ul>
          <li><strong>Debugging</strong>: Finding circular structures that cause JSON.stringify to throw.</li>
          <li><strong>Data Validation</strong>: Ensuring data can be safely serialized to JSON.</li>
          <li><strong>Serialization</strong>: Preparing data that needs to be converted to JSON format.</li>
          <li><strong>API Development</strong>: Verifying response objects don't contain circular paths.</li>
        </ul>
        <h2>How to Detect Circular References Online</h2>
        <ol>
          <li><strong>Paste your data</strong>: Enter your JSON or object-like structure.</li>
          <li><strong>Click Detect Circular</strong>: The tool analyzes the structure for circular paths.</li>
          <li><strong>Review results</strong>: See which paths contain circular references, if any.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can standard JSON have circular references?</h3>
        <p>No. Standard JSON format cannot represent circular references. However, JavaScript objects and some serialization formats can. This tool helps detect them before serialization.</p>
        <h3>What happens if no circular references are found?</h3>
        <p>The tool reports that no circular references were detected and confirms the data is safe for JSON serialization.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>JavaScript developers encounter circular references when working with complex object graphs, such as DOM nodes, ORM models, or graph data structures. Detecting these before calling JSON.stringify prevents the "Converting circular structure to JSON" error.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-detect-duplicate-keys">JSON Detect Duplicate Keys</a> — Find duplicate keys in objects</li>
          <li><a href="/json-validator">JSON Validator</a> — Validate JSON syntax and structure</li>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print and format JSON</li>
        </ul>
      </article>
    </>
  )
}
