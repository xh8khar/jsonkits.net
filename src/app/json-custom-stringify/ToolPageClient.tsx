'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCustomStringify } from '@/lib/converters'

const example = 'indent: 4\nsort: true\n{"z":1,"a":{"b":2,"c":3},"m":0}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Custom Stringify"
        description="Stringify JSON with configurable indentation and sorting. Set indent size, use tabs, enable key sorting."
        inputPlaceholder='Paste options (indent: 2, sort: true) then your JSON...'
        outputPlaceholder="Formatted JSON will appear here..."
        convertLabel="Stringify"
        onConvert={jsonCustomStringify}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Custom JSON Stringify?</h2>
        <p>Custom JSON stringify gives you full control over JSON formatting: indentation size (0-10 spaces or tabs), and optional key sorting. Perfect for matching project-specific formatting conventions.</p>
        <ul><li><strong>Team Standards</strong>: Format JSON per project conventions.</li><li><strong>Code Generation</strong>: Produce consistently formatted output.</li><li><strong>Debugging</strong>: Adjust formatting for readability.</li></ul>
        <h2>How to Customize JSON Stringify</h2>
        <ol><li>Add <code>indent: 2</code> (or <code>tab</code>, <code>0</code>) on the first line to set indentation.</li><li>Add <code>sort: true</code> to enable alphabetical key sorting.</li><li>Paste your JSON below the options and click Stringify.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What indent values are supported?</h3><p>Any number 0-10 for spaces, or <code>tab</code> for tab indentation.</p>
        <h3>Does sorting work at all levels?</h3><p>Yes. When sort is enabled, keys are sorted recursively.</p>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-inline">JSON to Inline</a> — Convert to single-line</li><li><a href="/json-formatter">JSON Formatter</a> — Standard pretty-print</li></ul>
      </article>
    </>
  )
}
