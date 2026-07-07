'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToVcard, vcardToJson } from '@/lib/converters'

const example = '{"fullName":"John Doe","name":"Doe;John;;;","phone":"555-1234","email":"john@example.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to vCard - Contact File Generator"
        description="Convert structured JSON contact data to vCard (.vcf) format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted vCard will appear here..."
        convertLabel="Convert to vCard"
        onConvert={jsonToVcard}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={vcardToJson}
        toolSlug="json-to-vcard"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert structured JSON contact data into standard vCard (.vcf) format. This is the reverse of vCard to JSON conversion, allowing you to generate vCard files from JSON objects for use in email signatures, contact sharing, and address book imports.</p>
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
