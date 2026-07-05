'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonPropertyPath } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-property-path', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Property Path Finder"
        description="Find all property paths in JSON data with their types and example values for data structure exploration."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Output will appear here..."
        convertLabel="Convert"
        onConvert={jsonPropertyPath}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Property Path Analysis?</h2>
        <p>JSON Property Path Analysis extracts every possible path through your JSON data, showing the type and an example value at each leaf node. This is essential for understanding complex nested JSON structures.</p><p>Property path analysis is used for:</p><ul><li><strong>Data Mapping</strong>: Understanding structure for ETL processes.</li><li><strong>Documentation</strong>: Generating data dictionaries from JSON samples.</li><li><strong>Schema Inference</strong> Reverse-engineering data structures.</li></ul>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: Your result appears instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the result and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/jmespath-tester">JMESPath Tester</a> — Test JMESPath query expressions against JSON data and see results. JMESPath is a query language for JSON used by AWS CLI and Azure CLI.</li>
          <li><a href="/json-number-converter">JSON Number Converter</a> — Convert numbers in JSON between decimal, hexadecimal, octal, binary, and scientific notation formats.</li>
        </ul>
      </article>
    </>
  )
}
