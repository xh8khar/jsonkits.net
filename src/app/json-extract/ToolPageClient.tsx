'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonExtract } from '@/lib/converters'

const example = '{"user":{"name":"Alice","age":30,"email":"alice@example.com"}}\nuser.name\nuser.email'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Extract"
        description="Extract values from JSON using dot-notation path expressions. Add each path on a new line below your JSON."
        inputPlaceholder="Paste your JSON data first, then add dot-notation paths to extract..."
        outputPlaceholder="Extracted values will appear here..."
        convertLabel="Extract Values"
        onConvert={jsonExtract}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Extraction?</h2>
        <p>JSON extraction retrieves specific values from your JSON data using dot-notation path expressions. Unlike filtering which returns a subset of the JSON structure, extraction returns just the values at the specified paths as key-value pairs.</p>
        <p>JSON extraction is useful for:</p>
        <ul>
          <li><strong>Data Retrieval</strong>: Quickly pulling specific values from complex JSON.</li>
          <li><strong>Reporting</strong>: Extracting only the fields needed for reports or dashboards.</li>
          <li><strong>Transformation</strong>: Flattening nested structures into simple key-value maps.</li>
          <li><strong>Integration</strong>: Preparing data for systems that expect flat input.</li>
        </ul>
        <h2>How to Extract JSON Values Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter your complete JSON data first.</li>
          <li><strong>Add paths</strong>: On new lines below the JSON, add dot-notation paths.</li>
          <li><strong>Click Extract Values</strong>: The tool extracts values at each path.</li>
          <li><strong>Review results</strong>: See path-value pairs for all specified paths.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What happens if a path doesn't exist?</h3>
        <p>The path is returned with a null value and an error indicator, so you can identify missing fields.</p>
        <h3>Can I extract from arrays?</h3>
        <p>Yes. Use index notation like items.0.name to extract specific array elements by index.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>ETL developers use JSON extraction to pull specific fields from complex API responses before loading them into data warehouses. Instead of processing entire documents, they extract only the fields needed for analysis, reducing storage and processing costs.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-filter">JSON Filter</a> — Filter JSON to only include specified paths</li>
          <li><a href="/json-path-tester">JSON Path Tester</a> — Test JSONPath expressions</li>
          <li><a href="/json-pointer-tester">JSON Pointer Tester</a> — Test RFC 6901 JSON Pointers</li>
        </ul>
      </article>
    </>
  )
}
