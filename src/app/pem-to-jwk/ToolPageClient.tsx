'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { pemToJwk } from '@/lib/converters'

const example = '-----BEGIN PUBLIC KEY-----\nKey Type: RSA\nAlgorithm: RS256\nKey ID: my-key\n-----END PUBLIC KEY-----'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="PEM to JWK Converter"
        description="Extract JWK metadata from PEM-formatted public/private key files."
        inputPlaceholder="Paste your PEM key here..."
        outputPlaceholder="Converted JWK will appear here..."
        convertLabel="Convert to JWK"
        onConvert={pemToJwk}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="pem-to-jwk"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool extracts JWK metadata from PEM-formatted public and private keys, converting them to the JSON Web Key format for use in web applications.</p>
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
