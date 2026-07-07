'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToRss } from '@/lib/converters'

const example = '{"title":"JSONKits Blog","link":"https://jsonkits.com","description":"Latest updates","items":[{"title":"New Tools Released","link":"https://jsonkits.com/blog/new-tools","description":"Check out our latest tools"}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to RSS - Convert JSON to RSS Feed"
        description="Convert structured JSON data to RSS 2.0 XML feed format for content syndication."
        inputPlaceholder="Paste your JSON feed data here..."
        outputPlaceholder="Generated RSS XML will appear here..."
        convertLabel="Convert to RSS"
        onConvert={jsonToRss}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="xml"
        toolSlug="json-to-rss"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts structured JSON data into RSS 2.0 XML feed format for content syndication and distribution.</p>
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
