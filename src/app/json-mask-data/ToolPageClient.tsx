'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonMaskData } from '@/lib/converters'

const example = '{"username":"alice","password":"mysecret123","email":"alice@example.com","token":"eyJhbGc","credit_card":"4111111111111111"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Mask Sensitive Data" description="Automatically mask sensitive fields in JSON including passwords, tokens, API keys, emails, SSNs, and credentials." inputPlaceholder="Paste your JSON with sensitive data here..." outputPlaceholder="Masked JSON will appear here..." convertLabel="Mask Data" onConvert={jsonMaskData} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Mask Data?</h2>
        <p>This tool automatically detects and masks sensitive fields in JSON data such as passwords, tokens, API keys, email addresses, credit card numbers, and social security numbers. It replaces sensitive values with asterisks while preserving the JSON structure.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data that contains sensitive information.</li><li>Click "Mask Data" to automatically detect and mask sensitive fields.</li><li>Copy the masked JSON output for safe sharing or logging.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields are detected as sensitive?</h3><p>Fields with names like password, secret, token, apiKey, credit_card, ssn, and email are automatically masked. Values matching email, credit card, or SSN patterns are also detected.</p>
        <h3>Can I customize which fields to mask?</h3><p>Not yet. The tool uses a predefined set of sensitive field names and patterns. Future versions may support custom field lists.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-encrypt">JSON Encrypt</a></li><li><a href="/json-decrypt">JSON Decrypt</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
