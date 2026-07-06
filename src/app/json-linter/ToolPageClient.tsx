'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonLinter } from '@/lib/converters'

const example = '{"userName":"Alice","user-age":30,"items":[1,2,3],"flag":true,"Name":"Bob"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Linter" description="Lint JSON for style issues, duplicate keys, naming convention violations, and formatting problems." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Lint results will appear here..." convertLabel="Lint JSON" onConvert={jsonLinter} exampleInput={example} outputLanguage="json" />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Linter?</h2>
        <p>This tool lints your JSON data and reports style issues such as duplicate keys, inconsistent naming conventions (camelCase vs snake_case vs kebab-case), mixed indentation, and formatting problems. It helps you maintain a consistent JSON style across your project.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input field.</li><li>Click "Lint JSON" to analyze the data for issues.</li><li>Review the lint report with warnings and suggestions for improvement.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can duplicate keys be detected?</h3><p>Yes, duplicate keys at the same level are detected and reported as warnings since most parsers use the last value.</p>
        <h3>Does the linter fix issues automatically?</h3><p>No, the linter only reports issues. Use the JSON Repair or JSON Formatter tools to fix common problems.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-repair">JSON Repair Tool</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
