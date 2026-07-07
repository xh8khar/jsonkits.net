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
        <h2>What Is JSON Timestamp Conversion?</h2>
        <p>JSON timestamp conversion is the process of detecting time-related values — such as Unix epoch seconds, Unix milliseconds, or ISO 8601 strings — within a JSON document and converting them to a consistent format. Many systems store timestamps in different formats, making cross-platform data integration challenging.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Data Normalization</strong>: Convert all timestamps in a dataset to ISO 8601 before loading into a data warehouse.</li>
          <li><strong>API Response Cleaning</strong>: Standardize date fields from multiple APIs that each use different timestamp conventions.</li>
          <li><strong>Debugging & Auditing</strong>: Make Unix timestamps human-readable by converting them to locale-aware date strings.</li>
        </ul>
        <h2>How to Use the JSON Timestamp Converter Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any JSON document containing timestamp values.</li>
          <li><strong>Click Convert Timestamps</strong>: The tool recursively scans every value for Unix seconds, milliseconds, and ISO 8601 patterns.</li>
          <li><strong>Get normalized output</strong>: All detected timestamps are replaced with formatted ISO 8601 strings for consistent readability.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What timestamp formats are detected?</h3>
        <p>The tool detects Unix timestamps in seconds (10 digits), Unix milliseconds (13 digits), and ISO 8601 strings like <code>2024-01-01T00:00:00Z</code>. It also recognizes variations with timezone offsets.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A data engineer ingesting logs from microservices that emit Unix timestamps alongside a CRM API that uses ISO 8601 can run the combined JSON through this converter. The output normalizes every date field, making downstream ETL processes much simpler.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-number-converter">JSON Number Converter</a> — Convert numeric formats across your JSON data.</li>
          <li><a href="/json-date-formatter">JSON Date Formatter</a> — Format and reformat date strings within JSON documents.</li>
          <li><a href="/json-case-converter">JSON Case Converter</a> — Convert between camelCase, snake_case, and kebab-case keys.</li>
        </ul>
      </article>
    </>
  )
}
