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
        <h2>What Is This Tool?</h2>
        <p>This tool obfuscates your JSON data by replacing field names and string values with randomized alternatives while preserving the original data structure, types, and nesting. This is useful for sharing data samples or creating test fixtures without exposing sensitive information.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Obfuscate button</li>
          <li>Copy or download the obfuscated result</li>
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
