'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSizeCalculator } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator","converter","viewer","minifier"],"active":true,"metadata":null}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Size Calculator"
        description="Calculate byte size, element count, nesting depth, and more for your JSON data. Perfect for optimizing payload size and understanding data structure."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Size analysis will appear here..."
        convertLabel="Calculate Size"
        onConvert={jsonSizeCalculator}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Size Analysis?</h2>
        <p>JSON size analysis calculates key metrics about your JSON data: byte sizes (raw, minified, formatted), element counts (keys, arrays, strings, numbers, booleans, nulls), and nesting depth. This helps you understand and optimize your data structures.</p>
        <p>Size analysis is useful for:</p>
        <ul>
          <li><strong>API Optimization</strong>: Measuring payload sizes to reduce bandwidth.</li>
          <li><strong>Storage Planning</strong>: Estimating storage requirements.</li>
          <li><strong>Data Profiling</strong>: Understanding data structure complexity.</li>
          <li><strong>Performance Tuning</strong>: Identifying deeply nested or large structures.</li>
        </ul>
        <h2>How to Calculate JSON Size Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any valid JSON data.</li>
          <li><strong>Click Calculate</strong>: View complete size and structure analysis.</li>
          <li><strong>Review metrics</strong>: Check byte sizes, element counts, and depth.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between raw and minified bytes?</h3>
        <p>Raw bytes include all whitespace and formatting. Minified bytes are the JSON without any unnecessary characters, representing the true data size.</p>
        <h3>What does "depth" mean?</h3>
        <p>Depth is the maximum nesting level of objects and arrays in your JSON. A flat object has depth 1, while deeply nested structures can have depth 10+.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-depth-analyzer">JSON Depth Analyzer</a> — Analyze nesting depth and branching</li>
          <li><a href="/json-minifier">JSON Minifier</a> — Minify JSON to reduce size</li>
        </ul>
      </article>
    </>
  )
}
