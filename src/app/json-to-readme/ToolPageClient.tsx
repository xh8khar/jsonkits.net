'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToReadme, readmeToJson } from '@/lib/converters'

const example = '{"name":"MyProject","version":"1.0.0","dependencies":{"express":"4.x"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to README Generator" description="Convert JSON data to a structured README document with headings, lists, and code blocks." inputPlaceholder="Paste your JSON here..." outputPlaceholder="README output will appear here..." convertLabel="Generate README" onConvert={jsonToReadme} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={readmeToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to README Generation?</h2>
        <p>Documentation is essential for any project, but writing it manually from structured data is tedious. This tool takes your JSON data and generates a well-formatted README document with a structured tree view of your data, field descriptions with types, and a raw JSON code block. It is ideal for auto-generating documentation for configuration files, API payloads, and data models.</p>
        <h2>How to Generate a README from JSON</h2>
        <ol><li><strong>Paste your JSON data</strong> representing your project's configuration, schema, or metadata.</li><li><strong>Click Generate README</strong> to produce a Markdown document with a structure overview and raw data section.</li><li><strong>Copy the README</strong> into your project's documentation or use it as a starting point for further editing.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What does the generated README include?</h3><p>It includes a title, a structure section with hierarchical bullet points showing field names and types, and a raw data section with the full JSON enclosed in a code block.</p>
        <h3>Is there a size limit?</h3><p>The README includes up to 2000 characters of raw JSON data. Larger inputs are truncated with a note. The structure section handles large documents gracefully by showing a representative subset.</p>
        <h3>Can I convert a README back to JSON?</h3><p>Yes, use the Swap button to extract JSON from a structured README document or Markdown file.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/readme-to-json">README to JSON Converter</a></li><li><a href="/json-to-markdown">JSON to Markdown</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
