'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jwkToPem } from '@/lib/converters'

const example = '{"kty":"RSA","alg":"RS256","kid":"my-key","use":"sig","n":"sample-modulus-value","e":"AQAB"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JWK to PEM Converter"
        description="Convert JSON Web Key (JWK) format to PEM public key format with key metadata."
        inputPlaceholder="Paste your JWK here..."
        outputPlaceholder="Converted PEM will appear here..."
        convertLabel="Convert to PEM"
        onConvert={jwkToPem}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="jwk-to-pem"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts JSON Web Key (JWK) format to PEM public key format, making it easy to use JWK keys with tools and libraries that expect PEM format.</p>
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
