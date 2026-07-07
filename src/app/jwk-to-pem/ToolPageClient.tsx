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
        <h2>What Is JWK?</h2>
        <p>JWK (JSON Web Key) is a JSON-based format defined by RFC 7517 for representing cryptographic keys. It is commonly used in OAuth 2.0, OpenID Connect, and JWT-based authentication systems to convey public keys in a structured, machine-readable JSON format.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>JWT Verification</strong>: Convert JWK keys from identity providers into PEM format for use with standard JWT libraries that expect PEM-encoded public keys.</li>
          <li><strong>OAuth / OpenID Connect</strong>: Extract PEM public keys from JWK Sets (JWKS) exposed by authorization servers like Auth0, Okta, or Azure AD.</li>
          <li><strong>TLS and Certificate Management</strong>: Transform JWK format keys into PEM for use with OpenSSL, TLS libraries, and other security tooling.</li>
        </ul>
        <h2>How to Use JWK to PEM Online</h2>
        <ol>
          <li><strong>Paste your JWK</strong>: Enter your JSON Web Key object, which typically includes kty, n, e, and alg parameters for RSA keys.</li>
          <li><strong>Click Convert to PEM</strong>: The tool extracts the key parameters and generates a PEM-formatted public key with proper headers and base64 encoding.</li>
          <li><strong>Use with your tools</strong>: Save the PEM output for use with OpenSSL command-line tools, Node.js crypto module, or any library that expects PEM input.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between JWK and PEM formats?</h3>
        <p>JWK is a JSON object that stores key parameters (modulus, exponent) as structured fields, while PEM is a base64-encoded DER format with BEGIN/END headers. PEM is the de facto standard for OpenSSL and many cryptographic libraries, making conversion necessary when integrating JWK-based systems.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Security engineers integrating OIDC authentication often fetch JWKS endpoints from identity providers to validate JWT signatures. The returned JWK keys must be converted to PEM format for use with most JWT verification libraries. This tool streamlines that conversion, saving developers from manually implementing base64url decoding and ASN.1 structure construction.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/pem-to-jwk">PEM to JWK</a> — Convert PEM-formatted keys to JSON Web Key format</li>
          <li><a href="/jwt-encoder">JWT Encoder</a> — Encode and decode JSON Web Tokens</li>
          <li><a href="/json-to-cbor">JSON to CBOR</a> — Convert JSON to CBOR binary format</li>
        </ul>
      </article>
    </>
  )
}
