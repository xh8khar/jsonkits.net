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
        <h2>What Is Sitemap XML?</h2>
        <p>Sitemap XML is the standard format defined by the Sitemaps Protocol (sitemaps.org) used by search engines to discover and index website content. An XML sitemap contains URL entries with optional metadata like priority, last modification date, and change frequency.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>SEO Analysis</strong>: Parse existing XML sitemaps into JSON for analysis of URL coverage, priority distribution, and update frequency patterns.</li>
          <li><strong>Site Audits</strong>: Convert sitemaps to JSON to programmatically audit all indexed URLs and identify issues like missing pages or incorrect metadata.</li>
          <li><strong>Content Migration</strong>: Export sitemap data to JSON format when migrating content between CMS platforms or performing bulk URL analysis.</li>
        </ul>
        <h2>How to Use Sitemap to JSON Online</h2>
        <ol>
          <li><strong>Paste your XML sitemap</strong>: Enter the full XML content of your sitemap, including the urlset wrapper and all url entries.</li>
          <li><strong>Click Convert to JSON</strong>: The tool parses the XML structure and generates a clean JSON array with all URL entries and their metadata.</li>
          <li><strong>Analyze or export</strong>: Use the resulting JSON in your analytics tools, spreadsheets, or data processing pipelines for further analysis.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What information can I extract from a sitemap?</h3>
        <p>A typical sitemap entry includes the URL (loc), last modification date (lastmod), change frequency (changefreq), and priority (priority). Sitemaps may also include image, video, and news tags for specialized content types.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>SEO consultants auditing client websites can download the XML sitemap, convert it to JSON using this tool, and then analyze the data in spreadsheets or analytics tools to identify gaps in coverage, over-prioritized pages, or outdated URLs that need attention. This structured format makes it easy to sort, filter, and visualize sitemap data programmatically.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-sitemap">JSON to Sitemap</a> — Convert JSON data to XML sitemap format</li>
          <li><a href="/json-feed-validator">JSON Feed Validator</a> — Validate RSS/JSON feed data</li>
          <li><a href="/fetch-json-from-url">Fetch JSON from URL</a> — Fetch and inspect JSON data from any URL</li>
        </ul>
      </article>
    </>
  )
}
