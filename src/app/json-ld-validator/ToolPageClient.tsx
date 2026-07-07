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
        <h2>What Is JSON-LD Validator?</h2>
        <p>JSON-LD (JavaScript Object Notation for Linked Data) is a W3C standard for structuring linked data on the web using JSON syntax. This tool validates JSON-LD structured data, checking for required fields such as @context and @type, ensuring your structured data is properly formatted for search engines and semantic web applications.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>SEO Structured Data</strong>: Validate Schema.org markup before deploying to production websites.</li>
          <li><strong>Knowledge Graph Integration</strong>: Ensure your linked data conforms to JSON-LD specifications for knowledge graph applications.</li>
          <li><strong>API Development</strong>: Test and validate JSON-LD responses from semantic web APIs and linked data endpoints.</li>
        </ul>
        <h2>How to Use JSON-LD Validator Online</h2>
        <ol>
          <li><strong>Paste your JSON-LD data</strong>: Copy your JSON-LD structured data and paste it into the input editor.</li>
          <li><strong>Click Validate</strong>: Press the Validate button to run the validation checks against your JSON-LD.</li>
          <li><strong>Review validation results</strong>: Examine the output for any missing required fields, structural issues, or warnings.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields does the JSON-LD validator check?</h3>
        <p>It checks for the presence of required fields like @context and @type, validates that the JSON is well-formed, and verifies the overall structure meets JSON-LD best practices.</p>
        <h3>Can I validate any JSON-LD schema type?</h3>
        <p>Yes. The validator works with any JSON-LD schema type including WebSite, Article, Product, LocalBusiness, Event, FAQPage, and all other Schema.org types.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Web developers and SEO specialists use the JSON-LD Validator to verify structured data before deploying to production. E-commerce sites validate Product schema, blogs validate Article schema, and local businesses validate LocalBusiness schema to ensure rich search results and knowledge panels in Google and other search engines.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-ld-generator">JSON-LD Generator</a> — Generate JSON-LD structured data from your content</li>
          <li><a href="/json-schema-validator">JSON Schema Validator</a> — Validate JSON against a schema definition</li>
          <li><a href="/json-validator">JSON Validator</a> — Basic JSON syntax validation</li>
        </ul>
      </article>
    </>
  )
}
