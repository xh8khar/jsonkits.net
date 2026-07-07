'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { rssToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title><![CDATA[JSONKits Blog]]></title><link>https://jsonkits.com</link><item><title><![CDATA[New JSON Tools]]></title><link>https://jsonkits.com/blog/new-tools</link><description><![CDATA[We added new tools]]></description><pubDate>Mon, 01 Jan 2024 00:00:00 GMT</pubDate></item></channel></rss>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="RSS to JSON - Convert RSS Feeds to JSON"
        description="Parse RSS/Atom feed XML and convert to structured JSON with all feed items and metadata."
        inputPlaceholder="Paste your RSS/Atom XML here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={rssToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="rss-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool parses RSS and Atom feed XML and converts it to structured JSON with all feed metadata and items, making feed data easy to work with programmatically.</p>
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
