'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDateFormatter } from '@/lib/converters'

const example = 'format: locale\n{"name":"Event","createdAt":"2024-01-15T10:30:00.000Z","updatedAt":"2024-06-01T00:00:00.000Z"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Date Formatter" description="Find and convert date strings in JSON between ISO, date, locale, Unix timestamp, and UTC formats." inputPlaceholder="Add format: iso|date|locale|unix|utc, then paste JSON..." outputPlaceholder="Formatted JSON will appear here..." convertLabel="Format Dates" onConvert={jsonDateFormatter} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Date Formatter?</h2>
        <p>This tool finds date strings in your JSON data and converts them to the specified format. It supports ISO 8601, date-only (YYYY-MM-DD), locale date strings, Unix timestamps (seconds), and UTC format.</p>
        <h2>How to Use</h2>
        <ol><li>Start with <code>format:</code> followed by the target format (iso, date, locale, unix, or utc).</li><li>Paste your JSON data containing date strings below.</li><li>Click "Format Dates" to convert all detected date strings.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What date formats are detected?</h3><p>The tool detects ISO 8601, common date string patterns, and Unix timestamps. It attempts to convert any recognizable date string.</p>
        <h3>Does it modify non-date strings?</h3><p>No, only values that match date patterns are converted. All other values remain unchanged.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-key-transformer">JSON Key Transformer</a></li><li><a href="/json-string-analyzer">JSON String Analyzer</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
