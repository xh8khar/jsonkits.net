'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jwtValidate } from '@/lib/converters'

const example = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzgzNDY0OTcwLCJleHAiOjE3ODM1NTEzNzB9.b30ZzK1V_ZOrpHg3OeeIaeptd41lNmYncCeVlMgh5yM'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JWT Validator"
        description="Validate JSON Web Tokens (JWT) by verifying signature, expiration (exp), and other standard claims."
        inputPlaceholder="Paste your input here to validate..."
        outputPlaceholder="Validation result will appear here..."
        convertLabel="Validate"
        onConvert={jwtValidate}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>Why Validate JWT Tokens?</h2>
        <p>JWT validation ensures that tokens are authentic, not expired, and contain valid claims. This is critical for security in any application that relies on JWT-based authentication.</p><p>JWT validation checks:</p><ul><li><strong>Signature</strong>: Verifies the token hasn't been tampered with.</li><li><strong>Expiration (exp)</strong>: Ensures the token is still valid.</li><li><strong>Claims</strong>: Validates issuer, audience, and other standard claims.</li></ul>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Validate</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: Your result appears instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the result and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/jwt-decoder">JWT Decoder</a> — Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. Decode JWTs without verification.</li>
          <li><a href="/json-hash">JSON Hash Generator</a> — Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) of your JSON data for integrity verification and fingerprinting.</li>
        </ul>
      </article>
    </>
  )
}
