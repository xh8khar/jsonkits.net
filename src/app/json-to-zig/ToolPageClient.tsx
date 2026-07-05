'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToZig } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Zig"
        description="Generate Zig struct definitions from your JSON data samples. Perfect for Zig developers working with JSON parsing."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Zig structs will appear here..."
        convertLabel="Generate Zig"
        onConvert={jsonToZig}
        exampleInput={example}
        outputLanguage="zig"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Zig struct definitions from your JSON data. Each JSON object becomes a Zig struct with proper field types using standard library types.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Zig" to create struct definitions.</li><li>Copy the Zig code into your project.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-rust">JSON to Rust</a></li><li><a href="/json-to-go">JSON to Go</a></li></ul>
      </article>
    </>
  )
}
