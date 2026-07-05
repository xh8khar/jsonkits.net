'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToBarcode } from '@/lib/converters'

const example = JSON.stringify({ id: 'PROD-12345', sku: 'BARCODE-001' }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Barcode"
        description="Generate a Code 39 barcode SVG image from your JSON data. Encode product IDs, serial numbers, or any data as a scannable barcode."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Barcode SVG will appear here..."
        convertLabel="Generate Barcode"
        onConvert={jsonToBarcode}
        exampleInput={example}
        outputLanguage="xml"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert your JSON data into a Code 39 barcode SVG image. The barcode uses alphanumeric encoding to represent your data in a scannable format.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Barcode" to create the barcode SVG.</li><li>Copy the SVG or save it as an image.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/barcode-to-json">Barcode to JSON</a></li><li><a href="/json-to-qrcode">JSON to QR Code</a></li></ul>
      </article>
    </>
  )
}
