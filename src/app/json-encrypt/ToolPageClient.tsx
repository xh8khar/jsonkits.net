'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonEncrypt, jsonDecrypt } from '@/lib/converters'

const example = 'key: my-secret\n{"name":"Alice","email":"alice@example.com","token":"secret123"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Encrypt" description="Encrypt JSON data using XOR cipher with a custom key, then encode as Base64. Provide key: yourkey on the first line." inputPlaceholder="Add key: yourkey on first line, then paste JSON below..." outputPlaceholder="Encrypted output will appear here..." convertLabel="Encrypt" onConvert={jsonEncrypt} exampleInput={example} outputLanguage="text" bidirectional onReverse={jsonDecrypt} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Encrypt?</h2>
        <p>This tool encrypts JSON data using a simple XOR cipher with a user-provided key, then encodes the result as Base64. It is useful for obfuscating sensitive configuration data or JSON payloads during transit or storage.</p>
        <h2>How to Use</h2>
        <ol><li>Start the first line with <code>key: your-secret-key</code> then paste your JSON below.</li><li>Click "Encrypt" to generate the encrypted Base64 output.</li><li>Share the encrypted text with anyone who has the same key to decrypt.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this encryption secure?</h3><p>XOR cipher is a basic obfuscation method and not suitable for production security. Use proper encryption libraries (AES) for sensitive data.</p>
        <h3>Can I decrypt the data back?</h3><p>Yes, click Swap to switch to decryption mode, or use the JSON Decrypt tool with the same key.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-decrypt">JSON Decrypt</a></li><li><a href="/json-mask-data">JSON Mask Sensitive Data</a></li><li><a href="/json-to-base64">JSON to Base64</a></li></ul>
      </article>
    </>
  )
}
