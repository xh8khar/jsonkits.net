'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonPathTester } from '@/lib/converters'

const example = '{"store":{"book":[{"title":"JSON 101","price":9.99},{"title":"Advanced JSON","price":29.99}],"bicycle":{"color":"red","price":399}}}\n$.store.book[0].title'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSONPath Tester"
        description="Test JSONPath expressions against your JSON data and see live evaluation results. Perfect for learning JSONPath and debugging queries."
        inputPlaceholder="Paste your JSON data first, then add a JSONPath expression like $.store.book[0].title..."
        outputPlaceholder="Query results will appear here..."
        convertLabel="Evaluate JSONPath"
        onConvert={jsonPathTester}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONPath?</h2>
        <p>JSONPath is a query language for JSON, similar to XPath for XML. It allows you to navigate and extract data from JSON structures using path expressions. For example, <code>$.store.book[0].title</code> accesses the title of the first book in a store.</p>
        <p>JSONPath is essential for:</p>
        <ul>
          <li><strong>Data Extraction</strong>: Querying specific values from complex JSON.</li>
          <li><strong>API Testing</strong>: Verifying specific fields in API responses.</li>
          <li><strong>Data Transformation</strong>: Selecting fields for mapping or ETL.</li>
          <li><strong>Debugging</strong>: Quickly locating values in large JSON structures.</li>
        </ul>
        <h2>How to Use the JSONPath Tester</h2>
        <ol>
          <li><strong>Paste JSON data</strong>: Enter your JSON structure in the input box.</li>
          <li><strong>Add a JSONPath</strong>: On a new line, enter a path expression starting with <code>$</code>.</li>
          <li><strong>Click Evaluate</strong>: View the extracted value(s) in the output.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSONPath syntax is supported?</h3>
        <p>The tool supports dot notation (<code>$.store.book</code>), bracket notation (<code>$['store']['book']</code>), array indexing (<code>$[0]</code>), wildcards (<code>$.*</code>), and deep scan.</p>
        <h3>How do I separate JSON from the path?</h3>
        <p>Paste the JSON first. Add the JSONPath expression on a new line. Lines starting with <code>$</code> or <code>.</code> are treated as the path.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-viewer">JSON Viewer</a> — Explore JSON in a tree structure</li>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print JSON for readability</li>
        </ul>
      </article>
    </>
  )
}
