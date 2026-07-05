'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonTypeDetector } from '@/lib/converters'

const example = '{"users":[{"name":"Alice","age":30,"email":"alice@test.com","active":true},{"name":"Bob","age":25,"email":"bob@test.com","active":false}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Type Detector" description="Analyze JSON data and detect field types, count occurrences, and show sample values for each key." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Type analysis will appear here..." convertLabel="Detect Types" onConvert={jsonTypeDetector} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Type Detector?</h2>
        <p>This tool analyzes JSON data and reports the detected data type for each field, the count of occurrences, and sample values. It is useful for understanding the structure and data distribution of your JSON datasets.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input field.</li><li>Click "Detect Types" to analyze the field types.</li><li>Review the analysis showing types, counts, and sample values for each key.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What types are detected?</h3><p>The tool detects string, number, boolean, null, array, and object types. Mixed types for the same key across multiple objects are reported.</p>
        <h3>Does it work with arrays of objects?</h3><p>Yes, it analyzes each item in an array and aggregates type information across all items.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-statistics">JSON Statistics</a></li><li><a href="/json-key-counter">JSON Key Counter</a></li><li><a href="/json-depth-analyzer">JSON Depth Analyzer</a></li></ul>
      </article>
    </>
  )
}
