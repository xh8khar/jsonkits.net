'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonKeyCounter } from '@/lib/converters'

const example = '{"users":[{"name":"Alice","age":30,"active":true},{"name":"Bob","age":25,"active":false}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Key Counter"
        description="Count key frequency and type breakdown across all objects in your JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Key count results will appear here..."
        convertLabel="Count Keys"
        onConvert={jsonKeyCounter}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Key Counting?</h2>
        <p>JSON key counting analyzes how often each key appears across all objects in your document and what types of values they hold. This helps you understand data consistency, optional fields, and type uniformity across collections.</p>
        <p>Key counting is useful for:</p>
        <ul>
          <li><strong>Schema Inference</strong>: Discovering implicit schemas in JSON data.</li>
          <li><strong>Data Quality</strong>: Finding inconsistently named or typed fields.</li>
          <li><strong>Migration Planning</strong>: Understanding field usage before restructuring.</li>
          <li><strong>Validation</strong>: Ensuring all records have required fields.</li>
        </ul>
        <h2>How to Count JSON Keys Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any valid JSON data.</li>
          <li><strong>Click Count Keys</strong>: The tool processes all objects recursively.</li>
          <li><strong>Review results</strong>: See frequency and type breakdown per key.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it count keys in nested objects?</h3>
        <p>Yes. The tool recursively processes all objects at every nesting level.</p>
        <h3>What if a key has different types in different objects?</h3>
        <p>The tool reports the type distribution for each key, showing how often it appears as string, number, boolean, null, array, or object.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Data analysts use key counting to profile large JSON datasets before loading them into databases. Understanding which fields are always present versus optional helps design database schemas and ETL transformations that handle missing data gracefully.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-statistics">JSON Statistics</a> — Get comprehensive data statistics</li>
          <li><a href="/json-depth-analyzer">JSON Depth Analyzer</a> — Analyze nesting depth and branching</li>
          <li><a href="/json-string-analyzer">JSON String Analyzer</a> — Analyze string values in JSON</li>
        </ul>
      </article>
    </>
  )
}
