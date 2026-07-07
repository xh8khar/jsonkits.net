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
        <h2>What Is This Tool?</h2>
        <p>This tool validates JSON Feed data against the JSON Feed specification version 1.1. It checks for required fields such as version, title, and items, validates data types, and provides warnings for missing recommended fields like content_text or content_html.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON Feed data in the editor</li>
          <li>Click the Validate button</li>
          <li>Review the validation results and fix any issues</li>
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
