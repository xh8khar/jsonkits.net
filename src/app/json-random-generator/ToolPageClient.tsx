'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonRandomGenerator } from '@/lib/converters'

const example = '{"maxDepth":3,"maxItems":4,"types":["string","number","boolean","null","array","object"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Random Data Generator"
        description="Generate random JSON data with configurable types, max depth, and item count. Configure via input JSON."
        inputPlaceholder="Paste your configuration JSON here..."
        outputPlaceholder="Generated random data will appear here..."
        convertLabel="Generate Random Data"
        onConvert={jsonRandomGenerator}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Random Data Generator?</h2>
        <p>A JSON random data generator creates completely random JSON structures based on configuration parameters. You control the maximum nesting depth, number of items, and which JSON types to include, producing varied test data for any scenario.</p>
        <p>Random data generation is useful for:</p>
        <ul>
          <li><strong>Stress Testing</strong>: Generating large random payloads for performance tests.</li>
          <li><strong>Schema Validation</strong>: Testing parsers and validators against random inputs.</li>
          <li><strong>Fuzz Testing</strong>: Finding edge cases in JSON processing code.</li>
          <li><strong>Demo Data</strong>: Quickly populating applications with varied content.</li>
        </ul>
        <h2>How to Generate Random JSON Online</h2>
        <ol>
          <li><strong>Configure parameters</strong>: Set maxDepth, maxItems, and types array.</li>
          <li><strong>Paste config</strong>: Enter your configuration as JSON.</li>
          <li><strong>Click Generate Random Data</strong>: The tool produces random JSON.</li>
          <li><strong>Regenerate as needed</strong>: Each click produces different output.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What parameters can I configure?</h3>
        <p>You can set maxDepth (nesting limit), maxItems (max array/object entries), and types (array of type strings to allow).</p>
        <h3>Will it produce valid JSON every time?</h3>
        <p>Yes. The generator always produces syntactically valid JSON within your configured constraints.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Developers building JSON processing libraries use random data generators for testing against thousands of varied inputs. QA engineers generate random payloads to validate that applications handle unexpected data gracefully without crashing.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-fake-generator">JSON Fake Data Generator</a> — Generate realistic fake data with hints</li>
          <li><a href="/json-mock-generator">JSON Mock API Generator</a> — Generate mock API responses</li>
          <li><a href="/json-sample-generator">JSON Sample Data Generator</a> — Generate deterministic sample data</li>
        </ul>
      </article>
    </>
  )
}
