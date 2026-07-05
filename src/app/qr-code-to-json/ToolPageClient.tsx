'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { qrCodeToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","url":"https://jsonkits.com","version":1}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="QR Code to JSON"
        description="Decode QR code text content back into structured JSON format. Paste QR code data to extract the hidden JSON structure."
        inputPlaceholder="Paste QR code text data here..."
        outputPlaceholder="Decoded JSON will appear here..."
        convertLabel="Decode"
        onConvert={qrCodeToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert QR code scanned text data back into structured JSON format. Perfect for processing QR codes that contain JSON data.</p>
        <h2>How to Use</h2>
        <ol><li>Scan a QR code with your phone or QR scanner.</li><li>Paste the decoded text into the input editor.</li><li>Click "Decode" to format and validate the JSON.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-qrcode">JSON to QR Code</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
