'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToOcaml } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to OCaml"
        description="Generate OCaml type definitions with Yojson PPX deriving from your JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="OCaml types will appear here..."
        convertLabel="Generate OCaml"
        onConvert={jsonToOcaml}
        exampleInput={example}
        outputLanguage="ocaml"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Generate OCaml type definitions with Yojson PPX deriving from your JSON data. Each JSON object becomes an OCaml record type with proper type annotations.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate OCaml" to create type definitions.</li><li>Copy the OCaml code into your project.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-haskell">JSON to Haskell</a></li><li><a href="/json-to-elm">JSON to Elm</a></li></ul>
      </article>
    </>
  )
}
