'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { formatJSON } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"active":true,"data":{"key":"value"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Pretty Print"
        description="Pretty-print your JSON data with clean indentation and line breaks. Make complex JSON structures readable at a glance."
        inputPlaceholder="Paste your JSON here to pretty-print..."
        outputPlaceholder="Pretty-printed JSON will appear here..."
        convertLabel="Pretty Print"
        onConvert={formatJSON}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Pretty Printing?</h2>
        <p>JSON pretty printing transforms minified JSON into a human-readable format with proper indentation, making it easier to read and debug.</p>
        <h2>How to Pretty Print JSON Online</h2>
        <ol><li>Paste your minified JSON into the input editor.</li><li>Click "Pretty Print" to format it.</li><li>Copy the formatted output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/beautifier">JSON Beautifier</a></li><li><a href="/minifier">JSON Minifier</a></li></ul>
      </article>
    </>
  )
}
