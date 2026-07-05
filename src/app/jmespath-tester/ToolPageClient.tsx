'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jmespathQuery } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['jmespath-tester', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JMESPath Tester"
        description="Test JMESPath query expressions against JSON data and see results. JMESPath is a query language for JSON used by AWS CLI and Azure CLI."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Output will appear here..."
        convertLabel="Convert"
        onConvert={jmespathQuery}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JMESPath?</h2>
        <p>JMESPath is a query language for JSON that allows you to extract and transform elements from a JSON document. It's the standard query language used by AWS CLI, Azure CLI, and many other cloud tools.</p><p>JMESPath is essential for:</p><ul><li><strong>AWS CLI</strong>: Filtering and formatting AWS command outputs.</li><li><strong>Azure CLI</strong>: Querying Azure resource properties.</li><li><strong>Automation</strong>: Extracting specific data from API responses in scripts.</li></ul>
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
          <li><a href="/json-property-path">JSON Property Path Finder</a> — Find all property paths in JSON data with their types and example values for data structure exploration.</li>
          <li><a href="/json-number-converter">JSON Number Converter</a> — Convert numbers in JSON between decimal, hexadecimal, octal, binary, and scientific notation formats.</li>
        </ul>
      </article>
    </>
  )
}
