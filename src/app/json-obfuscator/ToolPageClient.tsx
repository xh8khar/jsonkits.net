'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonObfuscator } from '@/lib/converters'

const example = JSON.stringify({"username":"john_doe","email":"john@example.com","password":"secret123","apiKey":"sk-abc123","role":"admin"}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Obfuscator - Hide Sensitive JSON Data"
        description="Obfuscate JSON field names and string values to protect sensitive data while preserving structure."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Obfuscated JSON will appear here..."
        convertLabel="Obfuscate"
        onConvert={jsonObfuscator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-obfuscator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Obfuscation?</h2>
        <p>JSON obfuscation is the practice of replacing sensitive field names and string values with randomized alternatives while keeping the original data structure, types, and nesting intact. This allows developers to share data samples, create test fixtures, or include examples in documentation without exposing real information.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Bug Reproduction</strong>: Share a sanitized copy of production JSON with colleagues without leaking PII or secrets.</li>
          <li><strong>Test Fixtures</strong>: Generate anonymous test data that mirrors your production data shape.</li>
          <li><strong>Documentation Examples</strong>: Include realistic-looking JSON samples in API docs without exposing real keys or values.</li>
        </ul>
        <h2>How to Use the JSON Obfuscator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter the JSON document containing sensitive field names or values.</li>
          <li><strong>Click Obfuscate</strong>: The tool replaces each field name with a random string and every string value with a placeholder, while preserving numbers, booleans, and nulls.</li>
          <li><strong>Copy the result</strong>: The obfuscated output maintains the same structure and depth so existing parsing code continues to work.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Are the obfuscated outputs deterministic?</h3>
        <p>Each run produces a fresh set of random replacements, so the same input yields different output every time. This ensures that multiple obfuscated samples cannot be correlated.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A support engineer handling a bug report from a customer can obfuscate the customer's JSON payload before attaching it to the internal ticket. This preserves the structure needed for debugging while ensuring no email addresses, API keys, or personal details are exposed.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-mask-data">JSON Mask Data</a> — selectively mask specific fields with patterns like <code>***</code>.</li>
          <li><a href="/json-data-anonymizer">JSON Data Anonymizer</a> — Anonymize personally identifiable information in JSON data.</li>
          <li><a href="/json-remove-nulls">JSON Remove Nulls</a> — Strip null values from JSON while keeping the structure clean.</li>
        </ul>
      </article>
    </>
  )
}
