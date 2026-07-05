'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jwtDecode } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['jwt-decoder', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JWT Decoder"
        description="Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. Decode JWTs without verification."
        inputPlaceholder="Paste your input here to validate..."
        outputPlaceholder="Validation result will appear here..."
        convertLabel="Validate"
        onConvert={jwtDecode}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Are JSON Web Tokens (JWT)?</h2>
        <p>JSON Web Tokens (JWT) are an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are widely used for authentication and authorization in web applications.</p><p>JWT decoding is essential for:</p><ul><li><strong>Debugging</strong>: Inspecting token contents during development.</li><li><strong>Security Auditing</strong>: Verifying token claims and expiration.</li><li><strong>API Development</strong>: Testing authentication flows in web services.</li></ul>
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
          <li><a href="/jwt-validator">JWT Validator</a> — Validate JSON Web Tokens (JWT) by verifying signature, expiration (exp), and other standard claims.</li>
          <li><a href="/json-hash">JSON Hash Generator</a> — Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) of your JSON data for integrity verification and fingerprinting.</li>
        </ul>
      </article>
    </>
  )
}
