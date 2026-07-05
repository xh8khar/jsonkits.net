'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCompress } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator","converter"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Deflate"
        description="Compress JSON using the Deflate algorithm and output Base64. Reduces JSON payload size for efficient storage and transfer."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Compressed output will appear here..."
        convertLabel="Deflate"
        onConvert={jsonCompress}
        exampleInput={example}
        outputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Compress JSON data using the Deflate algorithm and output as a Base64 string. Processing is 100% client-side with no server upload.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON into the input editor.</li><li>Click "Deflate" to compress it.</li><li>Copy the compressed output.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-inflate">JSON Inflate</a> — Decompress deflated JSON</li><li><a href="/json-compress">JSON Compress</a></li></ul>
      </article>
    </>
  )
}
