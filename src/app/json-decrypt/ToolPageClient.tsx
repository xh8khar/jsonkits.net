'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDecrypt, jsonEncrypt } from '@/lib/converters'

const example = 'key: my-secret\n[encrypted base64 string]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Decrypt" description="Decrypt previously encrypted JSON data back to its original readable format." inputPlaceholder="Add key: yourkey on first line, then paste encrypted text below..." outputPlaceholder="Decrypted JSON will appear here..." convertLabel="Decrypt" onConvert={jsonDecrypt} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonEncrypt} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Decrypt?</h2>
        <p>This tool decrypts JSON data that was previously encrypted using the XOR cipher and Base64 encoding. Provide the same key that was used during encryption to restore the original JSON content.</p>
        <h2>How to Use</h2>
        <ol><li>Start the first line with <code>key: your-secret-key</code> (the same key used for encryption).</li><li>Paste the encrypted Base64 text below the key line.</li><li>Click "Decrypt" to restore the original JSON data.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if I forget the key?</h3><p>The decryption requires the exact same key used for encryption. Without it, the data cannot be recovered.</p>
        <h3>Can I encrypt data too?</h3><p>Yes, click Swap to switch to encryption mode, or use the JSON Encrypt tool directly.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-encrypt">JSON Encrypt</a></li><li><a href="/json-mask-data">JSON Mask Sensitive Data</a></li><li><a href="/json-to-base64">JSON to Base64</a></li></ul>
      </article>
    </>
  )
}
