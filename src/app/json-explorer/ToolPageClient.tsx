'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonExplorer } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Explorer"
        description="Interactively explore JSON with an expandable tree view. Perfect for developers working with JSON data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Result will appear here..."
        convertLabel="Explore"
        onConvert={jsonExplorer}
        exampleInput={example}
        outputLanguage={"json"}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Interactively explore JSON with an expandable tree view. This tool processes your JSON data entirely in your browser — nothing is uploaded to any server.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter or paste JSON data into the input editor.</li>
          <li><strong>Click Explore</strong>: Press the convert button to process your input.</li>
          <li><strong>Review Output</strong>: The result appears instantly in the output panel.</li>
          <li><strong>Copy or Download</strong>: Use the Copy button to grab the result for your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is never uploaded to any server.</p>
        <h3>What types of JSON are supported?</h3>
        <p>Any valid JSON is supported, including deeply nested objects, arrays, and mixed data types.</p>
        <h3>Can I use this offline?</h3>
        <p>Yes! Once the page is loaded, all processing happens locally in your browser with no network requests needed.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-formatter">JSON Formatter</a> — Beautify and pretty-print JSON</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Explore JSON in a tree structure</li>
          <li><a href="/json-validator">JSON Validator</a> — Check if your JSON is valid</li>
        </ul>
      </article>
    </>
  )
}
