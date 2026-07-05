'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSplit } from '@/lib/converters'

const example = 'size: 3\n[1,2,3,4,5,6,7,8,9,10]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Split Tool"
        description="Split a JSON array into smaller chunks of configurable size. Perfect for batch processing, pagination, and rate-limited API calls."
        inputPlaceholder="Paste size option and JSON array..."
        outputPlaceholder="Split result will appear here..."
        convertLabel="Split Array"
        onConvert={jsonSplit}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Array Splitting?</h2>
        <p>JSON array splitting divides a large array into smaller chunks of a specified size. This is essential for batch processing, paginating API responses, and respecting rate limits when processing data.</p>
        <ul><li><strong>Batch Processing</strong>: Process items in manageable groups.</li><li><strong>API Rate Limits</strong>: Split data to respect rate limits.</li><li><strong>Pagination</strong>: Create pages of data for UI display.</li></ul>
        <h2>How to Split a JSON Array</h2>
        <ol><li>Add <code>size: N</code> on the first line to set chunk size.</li><li>Paste your JSON array.</li><li>Click Split Array to divide into chunks.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the default chunk size?</h3><p>The default is 10 items per chunk if no size is specified.</p>
        <h3>What is the output format?</h3><p>The result shows total items, chunk size, number of chunks, and the chunked data array.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-merge">JSON Merge</a> — Combine JSON objects</li><li><a href="/json-formatter">JSON Formatter</a> — Pretty-print results</li></ul>
      </article>
    </>
  )
}
