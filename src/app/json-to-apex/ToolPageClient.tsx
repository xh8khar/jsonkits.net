'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToApex } from '@/lib/converters'

const example = '{"Id":"001XX000001","Name":"Acme Corp","Industry":"Technology"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Apex"
        description="Generate Salesforce Apex class definitions with getters/setters from JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Apex class will appear here..."
        convertLabel="Generate Apex"
        onConvert={jsonToApex}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="java"
        toolSlug="json-to-apex"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Salesforce Apex?</h2>
        <p>Apex is Salesforce's strongly-typed, object-oriented programming language. This tool generates Apex class definitions with proper getters and setters from JSON samples.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a sample JSON object in the editor</li>
          <li>Click the Generate Apex button</li>
          <li>Copy the generated Apex class to your Salesforce project</li>
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
