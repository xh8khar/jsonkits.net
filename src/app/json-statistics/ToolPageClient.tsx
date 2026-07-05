'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonStatistics } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator","converter"],"active":true,"metadata":null}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Statistics"
        description="Get detailed statistics about your JSON: total nodes, objects, arrays, strings, numbers, booleans, nulls, max depth, and key counts."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Statistics will appear here..."
        convertLabel="Analyze Statistics"
        onConvert={jsonStatistics}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Statistics?</h2>
        <p>JSON statistics provides a comprehensive breakdown of your JSON data structure. It counts total nodes, objects, arrays, strings, numbers, booleans, nulls, measures maximum nesting depth, and tallies key frequencies across all objects in your document.</p>
        <p>JSON statistics are useful for:</p>
        <ul>
          <li><strong>Data Profiling</strong>: Understanding the composition of your datasets.</li>
          <li><strong>Optimization</strong>: Identifying opportunities to reduce payload size.</li>
          <li><strong>Debugging</strong>: Spotting unexpected data types or empty structures.</li>
          <li><strong>Documentation</strong>: Generating metadata about JSON data sources.</li>
        </ul>
        <h2>How to Analyze JSON Statistics Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any valid JSON data.</li>
          <li><strong>Click Analyze Statistics</strong>: The tool processes your data.</li>
          <li><strong>Review the report</strong>: Check node counts, depth, key frequencies, and more.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is a "node" in the statistics?</h3>
        <p>A node is every distinct value or container in the JSON. Objects, arrays, strings, numbers, booleans, and null values each count as one node.</p>
        <h3>Does it count nested keys separately?</h3>
        <p>Yes. Keys at every nesting level are counted, showing which fields appear most frequently across your entire document.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers use JSON statistics to profile API responses before building data pipelines. Understanding the composition helps estimate storage requirements, choose appropriate data types in databases, and identify normalization opportunities.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-key-counter">JSON Key Counter</a> — Detailed key frequency and type breakdown</li>
          <li><a href="/json-size-calculator">JSON Size Calculator</a> — Calculate byte sizes and element counts</li>
          <li><a href="/json-depth-analyzer">JSON Depth Analyzer</a> — Analyze nesting depth and branching</li>
        </ul>
      </article>
    </>
  )
}
