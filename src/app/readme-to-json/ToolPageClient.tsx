'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { readmeToJson, jsonToReadme } from '@/lib/converters'

const example = '## Structure\n- **name** (*string*)\n- **version** (*string*)\n\n```json\n{"name":"example","version":"1.0"}\n```'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="README to JSON Converter" description="Extract JSON data from structured README documents and Markdown files." inputPlaceholder="Paste README markdown here..." outputPlaceholder="JSON output will appear here..." convertLabel="Convert to JSON" onConvert={readmeToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToReadme} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is README to JSON Conversion?</h2>
        <p>README files often contain structured data hidden within Markdown formatting. This tool extracts JSON data from README documents in two ways: it looks for JSON code blocks (```json) and parses them, or it analyzes Markdown structure with bold field names and types to reconstruct a JSON object. This is useful for migrating documentation to structured data formats.</p>
        <h2>How to Convert README to JSON</h2>
        <ol><li><strong>Paste your README Markdown</strong> containing either a JSON code block or structured bullet points with bold field names and parenthesized types.</li><li><strong>Click Convert to JSON</strong> to extract the data. The tool prioritizes JSON code blocks but falls back to Markdown parsing.</li><li><strong>Copy the JSON</strong> for use in configuration files, data processing, or as a structured backup of your documentation.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How does the Markdown parsing work?</h3><p>The tool looks for lines matching <code>**fieldname** (*type*)</code> patterns. The type determines the default value: <code>number</code> becomes <code>0</code>, <code>boolean</code> becomes <code>true</code>, <code>array</code> becomes <code>[]</code>, and strings become <code>"value"</code>.</p>
        <h3>What if both a code block and Markdown structure are present?</h3><p>The JSON code block takes priority. If one is found, it is parsed directly. Otherwise, the tool falls back to analyzing the Markdown bullet structure.</p>
        <h3>Can I generate a README from JSON?</h3><p>Yes, use the Swap button to create a structured README document from your JSON data.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-readme">JSON to README Generator</a></li><li><a href="/json-to-markdown">JSON to Markdown</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
