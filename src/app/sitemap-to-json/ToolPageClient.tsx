'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { sitemapToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://jsonkits.com/</loc><priority>1.0</priority></url><url><loc>https://jsonkits.com/json-formatter</loc><priority>0.8</priority></url></urlset>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Sitemap to JSON Converter"
        description="Parse XML sitemap files and convert to structured JSON with all URL entries."
        inputPlaceholder="Paste your XML sitemap here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={sitemapToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="sitemap-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool parses XML sitemap files and converts them to structured JSON format with all URL entries and metadata for easier analysis.</p>
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
