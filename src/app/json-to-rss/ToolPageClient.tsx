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
        <h2>What Is RSS?</h2>
        <p>RSS (Really Simple Syndication) is a standardized XML format used by websites to publish frequently updated content for distribution and aggregation. Converting JSON to RSS enables developers to programmatically generate valid RSS feeds from structured data sources for content syndication.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Content Syndication</strong>: Generating RSS feeds from CMS databases or API responses for distribution to feed readers.</li>
          <li><strong>Podcast Feed Creation</strong>: Building podcast RSS feeds with enclosures, episode metadata, and iTunes-specific tags from JSON data.</li>
          <li><strong>News Publishing</strong>: Producing RSS 2.0 feeds for news websites from structured article databases or headless CMS platforms.</li>
        </ul>
        <h2>How to Use JSON to RSS Online</h2>
        <ol>
          <li><strong>Paste your JSON feed data</strong>: JSON with channel metadata (title, link, description) and an items array with article details.</li>
          <li><strong>Convert to RSS</strong>: Click the "Convert to RSS" button to generate valid RSS 2.0 XML with proper channel and item elements.</li>
          <li><strong>Copy or download</strong>: Use the generated RSS XML as a feed for your website or content distribution platform.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What RSS elements are supported?</h3>
        <p>The converter generates a full RSS 2.0 feed with channel title, link, description, language, and items with title, link, description, pubDate, guid, author, and enclosure elements for podcasts and multimedia.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Headless CMS platforms use JSON to RSS conversion to generate syndication feeds from structured content. Podcasters create RSS feeds from episode databases, and news websites produce real-time RSS outputs from their article management systems.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/rss-to-json">RSS to JSON</a> — Parse RSS and Atom feeds to structured JSON format</li>
          <li><a href="/json-to-xml">JSON to XML</a> — Convert JSON data to XML format</li>
          <li><a href="/sitemap-to-json">Sitemap to JSON</a> — Convert XML sitemaps to structured JSON format</li>
        </ul>
      </article>
    </>
  )
}
