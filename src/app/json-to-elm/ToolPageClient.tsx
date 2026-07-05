'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToElm } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Elm"
        description="Generate Elm type alias definitions from your JSON data samples. Perfect for Elm developers working with JSON decoders."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Elm types will appear here..."
        convertLabel="Generate Elm"
        onConvert={jsonToElm}
        exampleInput={example}
        outputLanguage="elm"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Elm type aliases from your JSON data. Each JSON object becomes an Elm type alias with proper type annotations for Json.Decode and Json.Encode.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Elm" to create type aliases.</li><li>Copy the Elm code into your project.</li></ol>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-haskell">JSON to Haskell</a></li><li><a href="/json-to-ocaml">JSON to OCaml</a></li></ul>
      </article>
    </>
  )
}
