'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonConvertObjects, jsonConvertArrays } from '@/lib/converters'

const example = '{"name":["Alice","Bob","Charlie"],"age":[30,25,35]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Object JSON to Array JSON"
        description="Transpose an object of arrays back into an array of objects. Reverse of array-to-object conversion."
        inputPlaceholder="Paste your JSON object of arrays here..."
        outputPlaceholder="Converted array will appear here..."
        convertLabel="Convert to Array"
        onConvert={jsonConvertObjects}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonConvertArrays}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Object JSON to Array JSON Conversion?</h2>
        <p>This transformation converts an object of arrays back into an array of objects. Each array element is reconstructed by combining values at the same index across all keys.</p>
        <h2>How to Use</h2>
        <ol><li>Paste an object of arrays into the input editor.</li><li>Click "Convert to Array" to transpose columns back to rows.</li><li>Use the reverse button to convert back.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/array-to-object-json">Array JSON to Object JSON</a></li></ul>
      </article>
    </>
  )
}
