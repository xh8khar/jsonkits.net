'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { minifyJSON } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Minifier"
        description="Minify your JSON by removing all unnecessary whitespace, line breaks, and indentation. Reduce file size for faster API calls and data transfer."
        inputPlaceholder="Paste your JSON here to minify..."
        outputPlaceholder="Minified JSON will appear here..."
        convertLabel="Minify"
        onConvert={minifyJSON}
        exampleInput={example}
        outputLanguage="json"
      />
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Minification?</h2>
        <p>JSON minification is the process of removing all unnecessary whitespace, line breaks, and indentation from JSON data. This reduces file size and improves transmission speed over networks.</p>
        <p>Minified JSON is essential for:</p>
        <ul>
          <li><strong>Production APIs</strong>: Reducing payload size for faster responses.</li>
          <li><strong>Bandwidth Optimization</strong>: Saving data costs on mobile networks.</li>
          <li><strong>Storage Efficiency</strong>: Storing more data in limited space.</li>
        </ul>
        <h2>How to Minify JSON Online</h2>
        <ol>
          <li>Paste your formatted JSON into the input editor.</li>
          <li>Click "Minify JSON" to compress the output.</li>
          <li>Your minified JSON appears instantly without any whitespace.</li>
          <li>Copy the compressed output for production use.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How much space can I save?</h3>
        <p>Minification typically reduces file size by 30-50%, depending on the original formatting. For large files, the savings can be significant.</p>
        <h3>Does minification affect data integrity?</h3>
        <p>No. Minification only removes whitespace. Your data and structure remain identical.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. Processing happens 100% in your browser. Your data is never sent to any server.</p>
        <h2>Real-World Examples</h2>
        <p>JSON minification is used when deploying API responses to production, optimizing configuration files for containerized applications, reducing payload size in serverless functions, and compressing data for real-time WebSocket connections.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Beautify and pretty-print JSON</li>
          <li><a href="/json-validator">JSON Validator</a> — Check if your JSON is valid</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Explore JSON in a tree structure</li>
        </ul>
      </article>
    </>
  )
}
