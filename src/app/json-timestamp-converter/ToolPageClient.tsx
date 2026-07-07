'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonTimestampConverter } from '@/lib/converters'

const example = JSON.stringify({"created":1704067200,"updated":"2024-01-01T12:00:00Z","name":"test","deleted":1704153600000}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Timestamp Converter - Convert Timestamps in JSON"
        description="Detect and convert all timestamps in JSON between Unix, ISO 8601, and locale formats."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert Timestamps"
        onConvert={jsonTimestampConverter}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-timestamp-converter"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool scans your JSON data for timestamp values in Unix seconds, Unix milliseconds, and ISO 8601 string formats, then converts them all to a standardized ISO 8601 format. It recursively traverses your entire JSON structure to find and convert every timestamp.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Convert Timestamps button</li>
          <li>Copy or download the result with normalized timestamps</li>
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
