'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDecompress } from '@/lib/converters'

const example = 'eJx1zrENwjAQBdCeU9xgYUeJHFk0SJRIQkSXfGd3kmNkO4ISsTsSBTW9Av+K4HuAnSMRMzi7vEw0hEUdpJZtIemkFdMD1xQKauujGlkNEXJd1/1JQ4kODuPQw3d3MX4xlBh8SItQ2qcp1T4H41xM+jh/Cx+NFb/A'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Inflate"
        description="Decompress previously Deflate-compressed JSON from Base64 back to its original readable format."
        inputPlaceholder="Paste deflated Base64 data here..."
        outputPlaceholder="Decompressed JSON will appear here..."
        convertLabel="Inflate"
        onConvert={jsonDecompress}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Decompress Deflate-compressed JSON data from Base64 back to its original readable JSON format. Processing is 100% client-side.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your Base64-compressed data into the input editor.</li><li>Click "Inflate" to decompress it.</li><li>Review and copy the restored JSON.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-deflate">JSON Deflate</a> — Compress JSON</li><li><a href="/json-decompress">JSON Decompress</a></li></ul>
      </article>
    </>
  )
}
