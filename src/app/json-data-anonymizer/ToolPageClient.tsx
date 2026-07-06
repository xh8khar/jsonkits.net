'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDataAnonymizer } from '@/lib/converters'

const example = JSON.stringify({
  user: {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    password: 'supersecret123!',
    ssn: '123456789',
    phone: '(555) 123-4567',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dB2gP87n6sDFGhiujk23L',
    role: 'admin'
  }
}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Data Anonymizer"
        description="Anonymize sensitive data in JSON automatically. Detects and masks emails, passwords, tokens, API keys, phone numbers, SSNs, JWTs, and other PII fields."
        inputPlaceholder="Paste JSON with sensitive data here..."
        outputPlaceholder="Anonymized JSON will appear here..."
        convertLabel="Anonymize"
        onConvert={jsonDataAnonymizer}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Automatically detect and anonymize sensitive data in JSON. The tool scans for common sensitive fields (passwords, tokens, emails, SSNs, phone numbers, API keys, JWTs) and replaces them with anonymized values while preserving the data structure.</p>
        <h2>How to Use</h2>
        <ol><li>Paste JSON data containing sensitive information.</li><li>Click Anonymize to process the data.</li><li>Use the anonymized output in documentation, demos, or debugging.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
      </article>
    </>
  )
}
