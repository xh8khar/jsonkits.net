'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToTree } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator'], config: { theme: 'dark', lang: 'en' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Tree Viewer"
        description="Visualize your JSON data as an interactive indented tree structure. Easily navigate nested JSON objects and arrays."
        inputPlaceholder="Paste your JSON here to view as tree..."
        outputPlaceholder="Tree view will appear here..."
        convertLabel="View as Tree"
        onConvert={jsonToTree}
        exampleInput={example}
        outputLanguage="text"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Tree View?</h2>
        <p>A JSON tree view displays the hierarchical structure of your data using indentation and tree-drawing characters, making nested relationships easy to understand.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON into the input editor.</li><li>Click "View as Tree" to generate the tree view.</li><li>Explore the indented tree structure.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-viewer">JSON Viewer</a></li><li><a href="/json-to-tree">JSON to Tree</a></li></ul>
      </article>
    </>
  )
}
