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
        <h2>What Is a Sitemap?</h2>
        <p>A sitemap is an XML file that lists all important pages on a website along with metadata like last modification date, change frequency, and priority. Sitemaps help search engines like Google, Bing, and Yahoo discover and index your content more efficiently.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>SEO Optimization</strong>: Generate XML sitemaps from structured JSON data to ensure all your web pages are discovered by search engine crawlers.</li>
          <li><strong>Site Indexing</strong>: Create sitemaps for large websites with thousands of pages to guide crawlers and improve indexing coverage.</li>
          <li><strong>Web Crawler Configuration</strong>: Prepare sitemap data for submission to Google Search Console, Bing Webmaster Tools, and other search engine platforms.</li>
        </ul>
        <h2>How to Use JSON to Sitemap Online</h2>
        <ol>
          <li><strong>Prepare your JSON data</strong>: Create a JSON array with objects containing at minimum the loc (URL) field, plus optional priority, lastmod, and changefreq fields.</li>
          <li><strong>Click Generate Sitemap</strong>: The tool converts your JSON array into a valid XML sitemap following the Sitemap Protocol (sitemaps.org).</li>
          <li><strong>Submit to search engines</strong>: Upload the generated XML file to your web server and submit the sitemap URL to Google Search Console or Bing Webmaster Tools.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields should I include in each sitemap entry?</h3>
        <p>The only required field is loc (the page URL). Optional fields include lastmod (last modification date in W3C datetime format), changefreq (how often the page changes: always, hourly, daily, weekly, monthly, yearly, never), and priority (a value from 0.0 to 1.0 indicating relative importance).</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>SEO specialists and webmasters managing content-heavy sites can export page lists from their CMS as JSON and convert them directly to XML sitemaps using this tool. This is especially useful for dynamic websites where pages are added frequently — the sitemap can be regenerated programmatically and resubmitted to search engines to accelerate indexing of new content.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/sitemap-to-json">Sitemap to JSON</a> — Parse XML sitemaps and convert to structured JSON</li>
          <li><a href="/json-feed-validator">JSON Feed Validator</a> — Validate RSS/JSON feed data</li>
          <li><a href="/fetch-json-from-url">Fetch JSON from URL</a> — Fetch and inspect JSON data from any URL</li>
        </ul>
      </article>
    </>
  )
}
