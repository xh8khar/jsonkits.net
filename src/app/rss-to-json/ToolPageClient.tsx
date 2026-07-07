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
        <h2>What Is RSS?</h2>
        <p>RSS (Really Simple Syndication) is a standardized XML format for publishing frequently updated content such as blog posts, news articles, and podcasts. Converting RSS feeds to JSON makes feed data easier to consume in modern web and mobile applications without XML parsing.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Feed Aggregation</strong>: Parsing multiple RSS feeds into JSON for building custom news readers and content dashboards.</li>
          <li><strong>Content Analysis</strong>: Extracting article metadata, publication dates, and categories from feeds for analytics and research.</li>
          <li><strong>API Integration</strong>: Converting RSS XML to JSON for seamless integration with REST APIs and serverless functions.</li>
        </ul>
        <h2>How to Use RSS to JSON Online</h2>
        <ol>
          <li><strong>Paste your RSS XML</strong>: Copy the raw RSS or Atom feed XML from any source into the input editor.</li>
          <li><strong>Convert to JSON</strong>: Click the "Convert to JSON" button to parse feed metadata and all items into structured JSON.</li>
          <li><strong>Copy or download</strong>: Save the JSON output for use in your application, analysis, or data pipeline.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this support Atom feeds too?</h3>
        <p>Yes. The converter supports both RSS 2.0 and Atom syndication formats. It extracts all common feed elements including title, link, description, pubDate, author, category, enclosure, and unique identifiers.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>News aggregator developers use RSS to JSON conversion to build content feeds for mobile apps. Marketing teams parse competitor RSS feeds into JSON for content gap analysis, and podcast directories convert RSS enclosures into structured episode databases.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-rss">JSON to RSS</a> — Convert structured JSON data to RSS 2.0 feed XML</li>
          <li><a href="/sitemap-to-json">Sitemap to JSON</a> — Convert XML sitemaps to structured JSON format</li>
          <li><a href="/xml-to-json">XML to JSON</a> — Convert XML data to structured JSON format</li>
        </ul>
      </article>
    </>
  )
}
