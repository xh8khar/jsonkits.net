'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFeedValidator } from '@/lib/converters'

const example = JSON.stringify({"version":"https://jsonfeed.org/version/1.1","title":"My Blog","home_page_url":"https://example.com","feed_url":"https://example.com/feed.json","items":[{"id":"1","content_text":"Hello World"}]}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Feed Validator - Validate JSON Feed Format"
        description="Validate your JSON Feed against the JSON Feed specification (version 1.1)."
        inputPlaceholder="Paste your JSON Feed here..."
        outputPlaceholder="Validation results will appear here..."
        convertLabel="Validate"
        onConvert={jsonFeedValidator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-feed-validator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Feed?</h2>
        <p>A JSON Feed is a web feed format that uses JSON instead of XML to publish frequently updated content such as blog posts, news articles, or podcasts. JSON Feed (version 1.1) is simpler and more machine-friendly than RSS or Atom while providing the same syndication capabilities.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Blog Syndication</strong>: Publish your blog as a JSON Feed so feed readers and aggregators can consume it.</li>
          <li><strong>Podcast Distribution</strong>: Distribute podcast episodes with attached metadata using the JSON Feed podcast extensions.</li>
          <li><strong>API Content Feeds</strong>: Serve content updates as a standardized feed that any JSON Feed reader can parse.</li>
        </ul>
        <h2>How to Use the JSON Feed Validator Online</h2>
        <ol>
          <li><strong>Paste your feed JSON</strong>: Enter your JSON Feed document into the editor.</li>
          <li><strong>Click Validate</strong>: The tool checks for required fields (<code>version</code>, <code>title</code>, <code>items</code>), validates data types, and lists any missing recommended fields.</li>
          <li><strong>Review the report</strong>: Fix any errors or warnings, then re-validate until your feed passes all checks.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What version of the JSON Feed spec is supported?</h3>
        <p>The validator checks against JSON Feed version 1.1, the latest specification. It validates required fields, type correctness, and warns about recommended fields like <code>content_text</code> and <code>content_html</code>.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A blogger switching from WordPress to a static site generator can validate the new site's JSON Feed before submitting it to feed directories. The validator catches missing required fields early, ensuring the feed is accepted by popular readers like NetNewsWire, Feedly, and Reeder.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-rss">JSON to RSS</a> — Convert JSON Feed data to RSS XML format.</li>
          <li><a href="/json-schema-validator">JSON Schema Validator</a> — Validate any JSON document against a JSON Schema.</li>
          <li><a href="/json-fixer">JSON Fixer</a> — Automatically fix common JSON syntax errors.</li>
        </ul>
      </article>
    </>
  )
}
