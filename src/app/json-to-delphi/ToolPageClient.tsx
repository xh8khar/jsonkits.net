'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDelphi } from '@/lib/converters'

const example = '{"id":1,"productName":"Widget","price":29.99,"inStock":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Delphi - Generate Delphi Pascal Classes"
        description="Generate Delphi/Object Pascal class definitions with published properties from JSON data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated Delphi code will appear here..."
        convertLabel="Generate Delphi Code"
        onConvert={jsonToDelphi}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-delphi"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Delphi/Object Pascal class definitions with published properties from your JSON data, helping you integrate JSON APIs in Delphi applications.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
