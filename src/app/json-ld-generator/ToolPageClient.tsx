'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonLdGenerator } from '@/lib/converters'

const example = '{"@type":"WebSite","name":"JSONKits","url":"https://jsonkits.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON-LD Generator"
        description="Generate JSON-LD structured data with schema.org context for SEO and semantic web."
        inputPlaceholder="Paste your JSON-LD data here..."
        outputPlaceholder="Generated structured data will appear here..."
        convertLabel="Generate JSON-LD"
        onConvert={jsonLdGenerator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-ld-generator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON-LD?</h2>
        <p>JSON-LD (JavaScript Object Notation for Linked Data) is a method of encoding linked data using JSON. It is widely used for SEO structured data markup.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your basic data in the editor</li>
          <li>Click the Generate JSON-LD button</li>
          <li>Copy the structured data for your website</li>
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
