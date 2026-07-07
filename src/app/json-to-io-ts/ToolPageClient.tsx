'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToIoTs } from '@/lib/converters'

const example = JSON.stringify({"id":1,"name":"Alice","email":"alice@example.com"}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to io-ts - TypeScript Runtime Type Generator"
        description="Generate io-ts runtime type codecs from JSON data samples for functional TypeScript."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated codec will appear here..."
        convertLabel="Generate Codec"
        onConvert={jsonToIoTs}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-io-ts"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates io-ts runtime type codecs from JSON data samples. io-ts provides composable runtime type validation for TypeScript applications, enabling decoding and encoding of data through type-safe codecs derived from your JSON structure.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Generate Codec button</li>
          <li>Copy the io-ts codec into your TypeScript project</li>
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
