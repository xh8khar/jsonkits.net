'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFindAllPaths } from '@/lib/converters'

const example = '{"name":"JSONKits","versions":{"v1":"1.0.0","v2":"2.0.0"},"features":["fast","free"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Path Finder"
        description="Discover all JSONPath expressions for every node in your JSON data structure."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="JSON paths will appear here..."
        convertLabel="Find Paths"
        onConvert={jsonFindAllPaths}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-path-finder"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Path Finder?</h2>
        <p>A JSON Path Finder discovers every possible JSONPath expression for every node in your JSON data structure. JSONPath is a query language for JSON that allows you to navigate and extract data from JSON documents, similar to how XPath works for XML.</p>
        <p>This tool automatically enumerates all root-to-leaf paths in your JSON, giving you a complete map of the structure. It is helpful for:</p>
        <ul>
          <li><strong>API development</strong>: Quickly discover JSONPath expressions to use in data extraction and transformation logic.</li>
          <li><strong>Data exploration</strong>: Understand the full shape and nesting of unfamiliar JSON documents from third-party APIs.</li>
          <li><strong>Testing and assertions</strong>: Generate exact paths for use in automated tests and JSON schema validations.</li>
        </ul>
        <h2>How to Find JSON Paths Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON document and paste it into the input editor on this page.</li>
          <li><strong>Click Find Paths</strong>: Press the "Find Paths" button to scan the entire JSON structure.</li>
          <li><strong>Browse the paths</strong>: Review the generated list of all JSONPath expressions, organized from root to each leaf node.</li>
          <li><strong>Copy and use</strong>: Select specific paths and use them in your code, data processing scripts, or JSONPath test suites.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between a JSON path and a JSON pointer?</h3>
        <p>A JSONPath expression (e.g., <code>$.store.books[0].title</code>) is a query language that supports wildcards, filters, and recursive descent. A JSON Pointer (e.g., <code>/store/books/0/title</code>) is a simpler, standardized reference string used in RFC 6901. This tool generates JSONPath expressions, while our JSON Pointer Generator creates RFC 6901 pointers.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers regularly use JSON Path Finders when building ETL pipelines that consume JSON from REST APIs. For example, an engineer working with a complex nested JSON response from a CRM API can run the document through this tool to immediately get all paths — saving hours of manual tree traversal when writing mapping expressions for data warehouse ingestion.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-pointer-generator">JSON Pointer Generator</a> — Generate RFC 6901 JSON Pointers for every node</li>
          <li><a href="/json-path-tester">JSON Path Tester</a> — Test JSONPath expressions against your JSON data</li>
          <li><a href="/json-depth-analyzer">JSON Depth Analyzer</a> — Analyze the depth and complexity of JSON structures</li>
        </ul>
      </article>
    </>
  )
}
