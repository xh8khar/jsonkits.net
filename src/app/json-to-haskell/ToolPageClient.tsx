'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToHaskell } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Haskell"
        description="Generate Haskell data type definitions from your JSON data samples. Perfect for Haskell developers working with Aeson."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Haskell types will appear here..."
        convertLabel="Generate Haskell"
        onConvert={jsonToHaskell}
        exampleInput={example}
        outputLanguage="haskell"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Haskell data type definitions with Generic and Aeson deriving from your JSON data. Each JSON object becomes a Haskell data type with proper field types.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Haskell" to create type definitions.</li><li>Copy the Haskell code into your project.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-elm">JSON to Elm</a></li><li><a href="/json-to-ocaml">JSON to OCaml</a></li></ul>
      </article>
    </>
  )
}
