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
        <h2>What Is JSON to vCard?</h2>
        <p>JSON to vCard conversion generates standard vCard (.vcf) contact files from structured JSON data. This is the reverse of vCard parsing, enabling developers and users to create downloadable contact files from JSON objects for email signatures, contact sharing, and address book imports.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Contact Export</strong>: Generating downloadable .vcf files from JSON contact data stored in databases or CRM systems for user download.</li>
          <li><strong>Email Signatures</strong>: Creating vCard attachments from JSON contact information to include in professional email communications.</li>
          <li><strong>Address Book Integration</strong>: Producing vCard files that can be directly imported into Apple Contacts, Google Contacts, Microsoft Outlook, and other address book applications.</li>
        </ul>
        <h2>How to Use JSON to vCard Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a JSON object with contact fields such as fullName, name, phone, email, organization, and address.</li>
          <li><strong>Click Convert</strong>: Press the Convert to vCard button to generate a properly formatted vCard file with all the standard BEGIN/END VCARD structure and property fields.</li>
          <li><strong>Copy or download</strong>: Copy the resulting vCard text or download the .vcf file for direct import into your contact management application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can I import the generated vCard into Apple Contacts or Google Contacts?</h3>
        <p>Yes. The generated vCard files follow the standard vCard 3.0 specification and are compatible with Apple Contacts (macOS/iOS), Google Contacts, Microsoft Outlook, and most other address book applications. Simply download the file and double-click to import.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>E-commerce platforms and professional networking sites often allow users to download contact information for vendors, partners, or connections. By storing contact data as JSON in their databases, these platforms can use this converter to dynamically generate vCard downloads that users can import into their address book with a single click.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/vcard-to-json">vCard to JSON</a> — Reverse conversion from vCard contact files to JSON</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON data to CSV spreadsheet format</li>
          <li><a href="/json-to-ical">JSON to iCal</a> — Convert JSON data to iCalendar event format</li>
        </ul>
      </article>
    </>
  )
}
