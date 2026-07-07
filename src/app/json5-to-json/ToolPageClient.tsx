'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { json5ToJson, jsonToJson5 } from '@/lib/converters'

const example = '{// config\nname: "JSONKits",\nversion: "1.0.0",\n}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON5 to JSON Converter"
        description="Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format."
        inputPlaceholder="Paste your JSON5 here..."
        outputPlaceholder="Standard JSON will appear here..."
        convertLabel="JSON5 to JSON"
        onConvert={json5ToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToJson5}
        toolSlug="json5-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON5?</h2>
        <p>JSON5 is an extension of JSON that adds comments, unquoted keys, trailing commas, and more flexible syntax. This tool converts between JSON5 and standard JSON formats.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON5 data in the editor</li>
          <li>Click the Convert button to get standard JSON</li>
          <li>Use the Swap button to convert the other direction</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}
