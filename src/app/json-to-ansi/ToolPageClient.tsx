'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToAnsi } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-to-ansi', 'validator', 'converter'], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to ANSI Colorized"
        description="Render JSON data with ANSI color codes for syntax-highlighted terminal output."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="ANSI colorized output will appear here..."
        convertLabel="Convert"
        onConvert={jsonToAnsi}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is ANSI Colorized?</h2>
        <p>JSON to ANSI Colorized is a free online tool that converts JSON data into ansi colorized format for use in various programming environments. This tool is 100% client-side and processes all data locally in your browser.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Add your JSON data in the input panel.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: The converted result appears instantly.</li>
          <li><strong>Copy</strong>: Use Copy or Download to save your result.</li>
        </ol>
        <h2>Related Tools</h2>
        <ul>

        </ul>
      </article>
    </>
  )
}
