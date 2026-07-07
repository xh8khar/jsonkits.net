'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSitemap } from '@/lib/converters'

const example = '[{"loc":"https://jsonkits.com/","priority":1.0},{"loc":"https://jsonkits.com/json-formatter","priority":0.8}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Sitemap Generator"
        description="Convert JSON sitemap data to XML sitemap format for search engine indexing."
        inputPlaceholder="Paste your JSON sitemap data here..."
        outputPlaceholder="Generated XML sitemap will appear here..."
        convertLabel="Generate Sitemap"
        onConvert={jsonToSitemap}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="xml"
        toolSlug="json-to-sitemap"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts JSON sitemap data into XML sitemap format for search engine indexing, helping improve your site SEO.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
