'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { protobufToJson } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['protobuf-to-json', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Protocol Buffers to JSON"
        description="Decode Protocol Buffers binary data back into readable JSON using a .proto schema definition."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Protocol Buffers to JSON output will appear here..."
        convertLabel="Decode"
        onConvert={protobufToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Protocol Buffers to JSON?</h2>
        <p>Protocol Buffers to JSON is a free online tool that converts JSON data into protocol buffers to json format for use in various programming environments. This tool is 100% client-side and processes all data locally in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Add your JSON data in the input panel.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: The converted result appears instantly.</li>
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
