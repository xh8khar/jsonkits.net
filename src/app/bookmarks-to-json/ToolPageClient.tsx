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
        <h2>What Is This Tool?</h2>
        <p>Extract bookmarks from HTML bookmark export files (typically exported from browsers) into structured JSON format. Browser bookmark exports use a specific HTML <code>&lt;DL&gt;</code> / <code>&lt;DT&gt;</code> / <code>&lt;A&gt;</code> structure, and this tool parses those links into clean JSON objects with URL and title fields.</p>
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
