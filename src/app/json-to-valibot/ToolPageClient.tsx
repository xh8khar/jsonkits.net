'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToValibot } from '@/lib/converters'

const example = JSON.stringify({"name":"Alice","age":30,"email":"alice@example.com","active":true}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Valibot Schema - Validation Schema Generator"
        description="Generate Valibot validation schemas from JSON data samples for TypeScript runtime validation."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated schema will appear here..."
        convertLabel="Generate Schema"
        onConvert={jsonToValibot}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-valibot"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Valibot validation schemas from JSON data samples. Valibot is a Type-first schema validation library that provides runtime type checking for your data. The generated output includes schemas for strings, numbers, booleans, objects, and arrays.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Generate Schema button</li>
          <li>Copy the Valibot schema into your TypeScript project</li>
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
