'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { schemaMarkupGenerator } from '@/lib/converters'

const example = '{"@type":"WebSite","name":"JSONKits","url":"https://jsonkits.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Schema Markup Generator"
        description="Generate schema.org JSON-LD markup with script tags for SEO and rich snippets."
        inputPlaceholder="Paste your JSON-LD data here..."
        outputPlaceholder="Generated markup will appear here..."
        convertLabel="Generate Markup"
        onConvert={schemaMarkupGenerator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="html"
        toolSlug="schema-markup-generator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Schema Markup?</h2>
        <p>Schema markup is structured data that helps search engines understand your content. This tool generates schema.org JSON-LD markup with HTML script tags.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your data in JSON format</li>
          <li>Click the Generate Markup button</li>
          <li>Copy the script tag into your website HTML</li>
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
