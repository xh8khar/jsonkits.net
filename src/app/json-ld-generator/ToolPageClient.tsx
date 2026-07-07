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
        <h2>What Is the JSON-LD Generator?</h2>
        <p>The JSON-LD Generator creates schema.org-compliant JSON-LD structured data from your basic input data. JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight method of encoding linked data using JSON that is Google's recommended format for SEO structured data markup.</p>
        <p>This tool takes simple key-value data about your entity — such as a website, organization, person, or product — and wraps it in the proper JSON-LD context with <code>@context</code>, <code>@type</code>, and schema.org vocabulary. It is invaluable for:</p>
        <ul>
          <li><strong>SEO optimization</strong>: Add structured data to your web pages to enable rich snippets and knowledge panels in search results.</li>
          <li><strong>Semantic web publishing</strong>: Create linked data for websites and applications following W3C standards.</li>
          <li><strong>Content syndication</strong>: Generate JSON-LD markup for articles, products, and events to improve content discoverability.</li>
        </ul>
        <h2>How to Generate JSON-LD Online</h2>
        <ol>
          <li><strong>Enter your entity data</strong>: Provide basic properties like name, URL, and description in JSON format in the input editor.</li>
          <li><strong>Click Generate JSON-LD</strong>: Press the "Generate JSON-LD" button to create the structured data.</li>
          <li><strong>Review the output</strong>: Verify that the generated JSON-LD includes the correct <code>@context</code> (https://schema.org) and <code>@type</code> for your entity.</li>
          <li><strong>Copy to your website</strong>: Paste the JSON-LD into your HTML <code>&lt;script type="application/ld+json"&gt;</code> tag or inject it via Google Tag Manager.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What schema.org types does the JSON-LD Generator support?</h3>
        <p>The generator supports common schema.org types such as WebSite, Organization, Person, Product, Article, LocalBusiness, Event, and FAQPage. You specify the desired <code>@type</code> in your input data, and the tool produces the correct JSON-LD structure around it.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A digital marketing agency managing SEO for a chain of 50 restaurants uses this JSON-LD Generator to create structured data for each location's website page. They input each restaurant's name, address, phone number, and hours — and the tool outputs Google-compatible LocalBusiness structured data that helps the chain appear in local search results with star ratings and rich snippets.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/schema-markup-generator">Schema Markup Generator</a> — Generate schema.org JSON-LD markup with script tags</li>
          <li><a href="/json-ld-validator">JSON-LD Validator</a> — Validate your JSON-LD structured data</li>
          <li><a href="/manifest-json-generator">Manifest JSON Generator</a> — Generate PWA manifest.json files</li>
        </ul>
      </article>
    </>
  )
}
