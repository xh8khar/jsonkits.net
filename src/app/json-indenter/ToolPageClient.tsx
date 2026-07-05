'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCustomStringify } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator","converter"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Indenter"
        description="Apply custom indentation to your JSON data. Choose between spaces and tabs, and control the indent level for perfect formatting."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Indented JSON will appear here..."
        convertLabel="Indent"
        onConvert={jsonCustomStringify}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Apply custom indentation to your JSON data. Use the indent: parameter (e.g., indent:4 or indent:tab) to control the formatting style.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON into the input editor.</li><li>Use indent: parameter to control spacing (e.g., indent:4 or indent:tab).</li><li>Click "Indent" to apply the indentation.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-custom-stringify">JSON Custom Stringify</a></li></ul>
      </article>
    </>
  )
}
