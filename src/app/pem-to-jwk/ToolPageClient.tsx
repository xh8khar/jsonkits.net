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
        <h2>What Is PEM Format?</h2>
        <p>PEM (Privacy-Enhanced Mail) is a base64-encoded format for cryptographic keys and certificates, distinguished by -----BEGIN CERTIFICATE----- and -----END CERTIFICATE----- header lines. It is the standard format used by OpenSSL, web servers, and TLS/SSL configurations worldwide.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Cloud Key Management</strong>: Convert PEM public keys from cloud providers (AWS KMS, Google Cloud KMS) into JWK format for use in web-based authentication systems.</li>
          <li><strong>Web Cryptography API</strong>: Transform PEM keys into JWK, which is the native key format for the Web Crypto API in browsers and Node.js.</li>
          <li><strong>JWKS Endpoint Generation</strong>: Create JWK representations of PEM keys to publish in a JWKS (JSON Web Key Set) endpoint for OAuth and OIDC providers.</li>
        </ul>
        <h2>How to Use PEM to JWK Online</h2>
        <ol>
          <li><strong>Paste your PEM key</strong>: Enter the PEM-formatted key including the BEGIN and END header lines into the input editor.</li>
          <li><strong>Click Convert to JWK</strong>: The tool parses the PEM structure, extracts the key parameters, and generates a JSON Web Key object with all required fields.</li>
          <li><strong>Use in web applications</strong>: Copy the resulting JWK JSON for use with the Web Crypto API, JWT libraries, or for inclusion in a JWKS endpoint.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Why would I need to convert PEM to JWK?</h3>
        <p>Modern web applications and APIs increasingly use JWK format because it integrates natively with JavaScript Web Crypto API, JWT libraries (jsonwebtoken, jose), and OAuth/OIDC standards. Converting PEM to JWK bridges the gap between traditional PKI infrastructure and modern web authentication.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Developers building OAuth 2.0 authorization servers or OpenID Connect providers need to expose JWKS endpoints containing their signing keys in JWK format. If the signing keys are stored as PEM files — which is common when using OpenSSL for key generation — this tool converts them to the JWK format required by the JWKS specification (RFC 7517).</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/jwk-to-pem">JWK to PEM</a> — Convert JSON Web Keys to PEM format</li>
          <li><a href="/jwt-encoder">JWT Encoder</a> — Encode and decode JSON Web Tokens</li>
          <li><a href="/json-to-cbor">JSON to CBOR</a> — Convert JSON to CBOR binary format</li>
        </ul>
      </article>
    </>
  )
}
