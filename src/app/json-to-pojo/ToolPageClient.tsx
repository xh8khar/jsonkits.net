'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPojo } from '@/lib/converters'

const example = '{"id":1,"name":"John Doe","email":"john@example.com","active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to POJO"
        description="Generate Plain Old Java Object (POJO) classes with Jackson annotations from JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated POJO will appear here..."
        convertLabel="Generate POJO"
        onConvert={jsonToPojo}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="java"
        toolSlug="json-to-pojo"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Java POJO (Plain Old Java Object) classes with Jackson annotations from your JSON data samples. It creates getters, setters, and proper type mappings for nested objects and arrays.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a sample JSON object in the editor</li>
          <li>Click the Generate POJO button</li>
          <li>Copy the generated Java class to your project</li>
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
