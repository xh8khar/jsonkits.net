'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPo, poToJson } from '@/lib/converters'

const example = '{"Hello":"Hola","Goodbye":"Adiós","Thank you":"Gracias"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PO - JSON to Gettext Converter"
        description="Convert JSON translation files to GNU Gettext PO format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted PO file will appear here..."
        convertLabel="Convert to PO"
        onConvert={jsonToPo}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={poToJson}
        toolSlug="json-to-po"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert JSON translation objects back to GNU Gettext PO (Portable Object) format. This is the reverse of PO to JSON conversion, allowing you to take JSON-based translations and generate standard PO files for use with Gettext tooling and traditional translation workflows.</p>
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
