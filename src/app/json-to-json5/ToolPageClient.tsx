'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToJson5, json5ToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0","features":["fast","free"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to JSON5 Converter"
        description="Convert standard JSON to JSON5 format with unquoted keys for cleaner configuration files."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="JSON5 output will appear here..."
        convertLabel="JSON to JSON5"
        onConvert={jsonToJson5}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={json5ToJson}
        toolSlug="json-to-json5"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts standard JSON to JSON5 format, which supports unquoted keys, trailing commas, and comments for cleaner configuration files.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your standard JSON in the editor</li>
          <li>Click the Convert button to get JSON5</li>
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
