'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { markdownToJson, jsonToMarkdown } from '@/lib/converters'

const example = '```json\n{"name":"JSONKits","tools":["formatter","validator","converter"],"active":true}\n```'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Markdown to JSON Converter"
        description="Extract JSON data from Markdown code blocks. Perfect for processing documentation examples and migrating content."
        inputPlaceholder="Paste your Markdown with JSON code blocks here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Extract JSON"
        onConvert={markdownToJson}
        exampleInput={example}
        inputLanguage="markdown"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToMarkdown}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Markdown to JSON Conversion?</h2>
        <p>Markdown to JSON conversion extracts JSON data from fenced code blocks in Markdown documents. This is essential when migrating documentation examples to live data, processing API docs, or extracting configuration samples from README files.</p>
        <p>This conversion is useful for:</p>
        <ul>
          <li><strong>Doc Processing</strong>: Extracting JSON examples from documentation for testing.</li>
          <li><strong>Content Migration</strong>: Moving JSON samples from docs into data pipelines.</li>
          <li><strong>API Development</strong>: Pulling request/response examples from API documentation.</li>
        </ul>
        <h2>How to Convert Markdown to JSON Online</h2>
        <ol>
          <li><strong>Paste your Markdown</strong>: Copy the Markdown content containing JSON code blocks.</li>
          <li><strong>Click Extract</strong>: The tool finds the first JSON code block and parses it.</li>
          <li><strong>Copy the Result</strong>: Use the copy button to grab the extracted JSON.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if my Markdown has multiple code blocks?</h3>
        <p>The tool extracts the first JSON code block found. For multiple blocks, process them one at a time.</p>
        <h3>Does it support other code block formats?</h3>
        <p>It supports standard fenced code blocks with <code>```json</code> or <code>```</code> language tags containing JSON.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing happens 100% client-side in your browser. Your data is never uploaded.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-markdown">JSON to Markdown</a> — Reverse conversion from JSON to Markdown</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML format</li>
        </ul>
      </article>
    </>
  )
}
