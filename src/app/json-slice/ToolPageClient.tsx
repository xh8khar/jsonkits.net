'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSlice } from '@/lib/converters'

const example = '[\n  "item0", "item1", "item2", "item3", "item4",\n  "item5", "item6", "item7", "item8", "item9"\n]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Slice"
        description="Extract a sub-array slice from JSON arrays using start and end indices. Control the slice by prefixing with start:, end:, or size: parameters."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="Sliced array will appear here..."
        convertLabel="Slice Array"
        onConvert={jsonSlice}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Extract portions of JSON arrays using slice operations. Specify start index, end index, or chunk size to extract exactly the data you need.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array into the input editor.</li><li>Add optional parameters: start:0, end:5, or size:3 on separate lines before your JSON.</li><li>Click "Slice Array" to extract the sub-array.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-split">JSON Split</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
