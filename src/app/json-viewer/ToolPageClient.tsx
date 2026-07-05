'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { formatJSON } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Viewer"
        description="View and explore JSON data in a clean, readable tree structure. Paste your JSON and instantly see it formatted with syntax highlighting."
        inputPlaceholder="Paste your JSON here to view..."
        outputPlaceholder="Formatted JSON will appear here..."
        convertLabel="View"
        onConvert={formatJSON}
        exampleInput={example}
        outputLanguage="json"
      />
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is a JSON Viewer?</h2>
        <p>A JSON viewer is a tool that displays JSON data in a structured, interactive tree format. Instead of reading raw text, you can expand and collapse nodes to navigate complex nested structures.</p>
        <p>JSON viewers are essential for:</p>
        <ul>
          <li><strong>API Debugging</strong>: Exploring nested API response structures.</li>
          <li><strong>Data Analysis</strong>: Understanding complex JSON documents.</li>
          <li><strong>Learning</strong>: Visualizing how JSON data is organized.</li>
        </ul>
        <h2>How to Use the JSON Viewer Online</h2>
        <ol>
          <li>Paste your JSON into the input editor.</li>
          <li>The tree view automatically renders your data.</li>
          <li>Click on nodes to expand or collapse nested sections.</li>
          <li>Use the search feature to find specific keys or values.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What file sizes can the viewer handle?</h3>
        <p>The viewer can handle files up to several megabytes. Performance depends on your browser's memory.</p>
        <h3>Can I edit values in the tree view?</h3>
        <p>The tree view is read-only. Edit your JSON in the input panel and the tree updates automatically.</p>
        <h3>Is this tool safe?</h3>
        <p>Absolutely. Processing happens 100% in your browser. Your data is never sent to any server.</p>
        <h2>Real-World Examples</h2>
        <p>Using a JSON viewer helps explore complex API responses with deeply nested objects, inspect configuration files with many settings, understand database documents from MongoDB or Firestore, and debug webhook payloads from third-party services.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Beautify and pretty-print JSON</li>
          <li><a href="/json-validator">JSON Validator</a> — Check if your JSON is valid</li>
          <li><a href="/json-diff-checker">JSON Diff Checker</a> — Compare two JSON objects</li>
        </ul>
      </article>
    </>
  )
}
