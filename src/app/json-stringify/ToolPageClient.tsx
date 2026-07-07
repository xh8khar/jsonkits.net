'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonStringify } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Stringify"
        description="Beautify and stringify JSON data with proper indentation for readability."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Stringified JSON will appear here..."
        convertLabel="Stringify"
        onConvert={jsonStringify}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-stringify"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Stringify?</h2>
        <p>JSON stringify converts JSON objects into formatted strings with proper indentation, making them easier to read, debug, and share.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Stringify button</li>
          <li>Copy the formatted JSON result</li>
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
