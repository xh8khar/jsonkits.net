'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { bookmarksToJson } from '@/lib/converters'

const example = '<html><body><dl><dt><a href="https://jsonkits.com">JSONKits</a></dt><dt><a href="https://github.com">GitHub</a></dt></dl></body></html>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Bookmarks to JSON - HTML Bookmarks Converter"
        description="Extract bookmarks from HTML bookmark export files into structured JSON format."
        inputPlaceholder="Paste your HTML bookmarks here..."
        outputPlaceholder="Extracted bookmarks will appear here..."
        convertLabel="Extract Bookmarks"
        onConvert={bookmarksToJson}
        exampleInput={example}
        inputLanguage="html"
        outputLanguage="json"
        toolSlug="bookmarks-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Bookmarks to JSON?</h2>
        <p>Browser bookmark exports use a standardized HTML format with <code>&lt;DL&gt;</code>, <code>&lt;DT&gt;</code>, and <code>&lt;A&gt;</code> elements to organize saved links. Converting bookmarks to JSON extracts each bookmark's URL, title, and folder structure into clean, structured JSON objects for analysis, migration, or integration.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Bookmark Migration</strong>: Extracting bookmarks from one browser's export format and converting them to JSON for importing into another service or custom bookmark manager.</li>
          <li><strong>Bookmark Analysis</strong>: Converting hundreds or thousands of bookmarks into JSON for statistical analysis, deduplication, broken link checking, or categorization.</li>
          <li><strong>Data Backup</strong>: Transforming browser bookmark exports into portable JSON format for archival storage or integration with backup systems.</li>
        </ul>
        <h2>How to Use Bookmarks to JSON Online</h2>
        <ol>
          <li><strong>Export your browser bookmarks</strong>: Use your browser's bookmark manager to export bookmarks as an HTML file (supported by Chrome, Firefox, Safari, Edge, and most browsers).</li>
          <li><strong>Paste the HTML</strong>: Copy the entire content of the exported bookmark HTML file and paste it into the input editor.</li>
          <li><strong>Click Extract Bookmarks</strong>: Press the button to parse the HTML structure and extract all bookmarks into a JSON array with URL and title properties.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Which browsers support HTML bookmark export?</h3>
        <p>All major browsers — Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera — support exporting bookmarks to the standard HTML bookmark format. Simply look for "Export Bookmarks" or "Bookmark Manager" in your browser's settings.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Users migrating from one bookmark management service to another can export their bookmarks from the source browser, convert the HTML export to JSON using this tool, and then use custom scripts to import the structured data into services like Raindrop.io, Pinboard, or self-hosted solutions like LinkAce or Shaarli.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-sitemap">JSON to Sitemap</a> — Convert JSON data to XML sitemap format</li>
          <li><a href="/json-to-rss">JSON to RSS</a> — Convert JSON data to RSS feed XML</li>
          <li><a href="/fetch-json-from-url">Fetch JSON from URL</a> — Fetch and preview JSON data from any URL</li>
        </ul>
      </article>
    </>
  )
}
