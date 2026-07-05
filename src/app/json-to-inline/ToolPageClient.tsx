'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToInline } from '@/lib/converters'

const example = 'spaces: 0\n{"name":"JSONKits","version":1,"features":["formatter","validator"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Inline"
        description="Convert JSON to a single-line or custom-indented inline format. Compact mode removes all whitespace; set spaces for custom indentation."
        inputPlaceholder="Paste options then your JSON..."
        outputPlaceholder="Inline JSON will appear here..."
        convertLabel="Convert to Inline"
        onConvert={jsonToInline}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Inline Conversion?</h2>
        <p>JSON inline conversion compacts JSON into a single line (no whitespace) or custom-indented format. This is useful for storing JSON in configuration variables, URL parameters, or database columns with size limits.</p>
        <ul><li><strong>Storage</strong>: Compact JSON for database fields.</li><li><strong>Config Vars</strong>: Single-line JSON for environment variables.</li><li><strong>API Payloads</strong>: Minified JSON for HTTP requests.</li></ul>
        <h2>How to Convert JSON to Inline</h2>
        <ol><li>Add <code>spaces: 0</code> for minified, or <code>spaces: 2</code> for indented.</li><li>Paste your JSON and click Convert.</li><li>Copy the compact output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does compact mode remove all whitespace?</h3><p>Yes. With <code>spaces: 0</code>, the output is completely minified.</p>
        <h3>What is the maximum indent?</h3><p>Indent is capped at 4 spaces for inline formatting.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-minifier">JSON Minifier</a> — Minify JSON</li><li><a href="/json-custom-stringify">JSON Custom Stringify</a> — Format with options</li></ul>
      </article>
    </>
  )
}
