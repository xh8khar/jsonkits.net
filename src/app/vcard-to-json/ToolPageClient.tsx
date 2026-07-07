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
        <h2>What Is vCard to JSON?</h2>
        <p>vCard (Virtual Contact File, .vcf) is a worldwide standard file format for electronic business cards, used by virtually all email clients, address books, and mobile operating systems. Converting vCard to JSON transforms contact data like names, phone numbers, emails, and addresses into structured, machine-readable JSON objects.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Contact Management</strong>: Parsing vCard exports from Apple Contacts, Google Contacts, or Outlook into JSON for programmatic processing or database storage.</li>
          <li><strong>Data Migration</strong>: Converting bulk vCard files into JSON for importing into CRM systems, marketing platforms, or custom contact databases.</li>
          <li><strong>API Integration</strong>: Normalizing contact data from various vCard sources into a consistent JSON format for REST API consumption.</li>
        </ul>
        <h2>How to Use vCard to JSON Online</h2>
        <ol>
          <li><strong>Paste your vCard data</strong>: Copy the entire vCard content starting with <code>BEGIN:VCARD</code> and ending with <code>END:VCARD</code>, including all property fields.</li>
          <li><strong>Click Convert</strong>: Press the Convert to JSON button to parse the vCard structure and extract all fields into a structured JSON object.</li>
          <li><strong>Copy or download</strong>: Copy the JSON output or download it for integration with your application or database.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What vCard versions are supported?</h3>
        <p>This tool supports vCard versions 2.1, 3.0, and 4.0. It handles standard properties like FN (formatted name), N (name components), TEL (phone), EMAIL, ADR (address), ORG (organization), and more.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Businesses migrating from one CRM to another often export contacts as vCard files from systems like Google Workspace or Microsoft 365. Using this converter, teams can transform those vCard exports into JSON, then use custom scripts to map the data into their new CRM's API format or import into a database.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-vcard">JSON to vCard</a> — Reverse conversion from JSON contact data to vCard format</li>
          <li><a href="/ical-to-json">iCal to JSON</a> — Convert iCalendar event files to JSON</li>
          <li><a href="/csv-to-json">CSV to JSON</a> — Convert CSV spreadsheet data to JSON</li>
        </ul>
      </article>
    </>
  )
}
