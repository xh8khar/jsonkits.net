'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { vcardToJson, jsonToVcard } from '@/lib/converters'

const example = 'BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nN:Doe;John;;;\nTEL:555-1234\nEMAIL:john@example.com\nEND:VCARD'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="vCard to JSON - Contact File Converter"
        description="Convert vCard (.vcf) contact files to structured JSON format."
        inputPlaceholder="Paste your vCard here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={vcardToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToVcard}
        toolSlug="vcard-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert vCard (.vcf) contact files into structured JSON objects. vCard is a standard file format for electronic business cards, widely used for contact exchange. This tool parses vCard fields like name, phone, email, and organization into clean JSON.</p>
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
