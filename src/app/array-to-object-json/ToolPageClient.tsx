'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonConvertArrays, jsonConvertObjects } from '@/lib/converters'

const example = '[{"name":"Alice","age":30},{"name":"Bob","age":25},{"name":"Charlie","age":35}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Array JSON to Object JSON"
        description="Transpose an array of objects into an object of arrays. Each key collects all values across the array."
        inputPlaceholder="Paste your JSON array of objects here..."
        outputPlaceholder="Converted object will appear here..."
        convertLabel="Convert to Object"
        onConvert={jsonConvertArrays}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonConvertObjects}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Array JSON to Object JSON Conversion?</h2>
        <p>This transformation converts an array of objects into an object of arrays. Each unique key from the input objects becomes a key in the output object with all corresponding values collected into arrays.</p>
        <h2>How to Use</h2>
        <ol><li>Paste an array of objects into the input editor.</li><li>Click "Convert to Object" to transpose rows to columns.</li><li>Use the reverse button to convert back.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/object-to-array-json">Object JSON to Array JSON</a></li></ul>
      </article>
    </>
  )
}
