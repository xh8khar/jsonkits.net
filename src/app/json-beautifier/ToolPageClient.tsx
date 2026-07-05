'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { formatJSON } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"features":["formatter","validator"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Beautifier"
        description="Beautify your JSON data with proper indentation and formatting. Transform minified JSON into a clean, readable structure."
        inputPlaceholder="Paste your JSON here to beautify..."
        outputPlaceholder="Beautified JSON will appear here..."
        convertLabel="Beautify"
        onConvert={formatJSON}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Beautification?</h2>
        <p>JSON beautification transforms minified or poorly formatted JSON into a clean, readable structure with proper indentation and line breaks.</p>
        <h2>How to Beautify JSON Online</h2>
        <ol><li>Paste your JSON into the input editor.</li><li>Click "Beautify" to format it.</li><li>Copy the beautified output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/formatter">JSON Formatter</a></li><li><a href="/minifier">JSON Minifier</a></li></ul>
      </article>
    </>
  )
}
