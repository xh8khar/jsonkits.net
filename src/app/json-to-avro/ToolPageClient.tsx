'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToAvro } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-to-avro', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Apache Avro"
        description="Infer an Apache Avro schema from your JSON data — outputs a JSON-format Avro schema definition."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Your Avro schema will appear here..."
        convertLabel="Generate Avro Schema"
        onConvert={jsonToAvro}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Apache Avro?</h2>
        <p>Apache Avro is a data serialization system that uses JSON for defining schemas and compact binary encoding for data. This tool infers an Avro schema from your JSON data — useful as a starting point before customizing field types and names.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Add your JSON data in the input panel.</li>
          <li><strong>Click Generate</strong>: Press the button to infer the Avro schema.</li>
          <li><strong>Review Output</strong>: The inferred schema appears instantly. Customize types as needed.</li>
          <li><strong>Copy</strong>: Use Copy or Download to save your result.</li>
        </ol>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-erlang">JSON to Erlang</a> — Generate Erlang record definitions and term syntax from JSON data samples for BEAM VM applications.</li>
          <li><a href="/json-to-clojure">JSON to Clojure</a> — Generate Clojure data structure syntax from JSON data samples for JVM-based functional programming.</li>
          <li><a href="/json-to-objc">JSON to Objective-C</a> — Generate Objective-C class interfaces with properties from JSON data samples for iOS and macOS development.</li>
        </ul>
      </article>
    </>
  )
}
