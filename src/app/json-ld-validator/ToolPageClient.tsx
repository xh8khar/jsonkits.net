'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonLdValidator } from '@/lib/converters'

const example = '{"@context":"https://schema.org","@type":"WebSite","name":"JSONKits","url":"https://jsonkits.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON-LD Validator"
        description="Validate JSON-LD structured data for required fields like @context and @type."
        inputPlaceholder="Paste your JSON-LD here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={jsonLdValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-ld-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool validates JSON-LD structured data, checking for required fields such as @context and @type, ensuring your structured data is properly formatted.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON-LD data in the editor</li>
          <li>Click the Validate button</li>
          <li>Review the validation results</li>
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
