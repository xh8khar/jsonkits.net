'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonInflate } from '@/lib/converters'

const example = 'FYuxCgMhEAX/5dUe6JFq61QJJEXKkGI594gQFdbV5rh/D3bDMHOgcBYQbq/n456swWGItlQLKDjswtZVGuiNvWpmM9HZ8C9Ftjp5q2WITv9x4M3SEJBpF4csxpGNQQe427cqCFcZ81JhkwjC6tfL4sPiA87zDw=='

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Inflate"
        description="Decompress previously Deflate-compressed JSON from Base64 back to its original readable format."
        inputPlaceholder="Paste deflated Base64 data here..."
        outputPlaceholder="Decompressed JSON will appear here..."
        convertLabel="Inflate"
        onConvert={jsonInflate}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
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
