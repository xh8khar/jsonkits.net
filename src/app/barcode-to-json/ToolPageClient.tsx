'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { barcodeToJson } from '@/lib/converters'

const example = '<svg xmlns="http://www.w3.org/2000/svg"><text x="50" y="50">{"id":"PROD-123"}</text></svg>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Barcode to JSON"
        description="Extract JSON data from barcode SVG content. Decode barcode text data back into structured JSON format."
        inputPlaceholder="Paste barcode SVG or text here..."
        outputPlaceholder="Extracted JSON will appear here..."
        convertLabel="Decode Barcode"
        onConvert={barcodeToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="xml"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Extract JSON data from barcode SVG images or text content. Decode the human-readable text from barcodes back into structured JSON.</p>
        <h2>How to Use</h2>
        <ol><li>Paste barcode SVG or scanned text into the input editor.</li><li>Click "Decode Barcode" to extract the data.</li><li>Copy or download the decoded JSON.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-barcode">JSON to Barcode</a></li><li><a href="/qr-code-to-json">QR Code to JSON</a></li></ul>
      </article>
    </>
  )
}
