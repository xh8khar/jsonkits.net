'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonParser } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0","features":["fast","free","private"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Parser"
        description="Parse JSON data and get detailed structure information including type, depth, and key count."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Parsed result will appear here..."
        convertLabel="Parse"
        onConvert={jsonParser}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-parser"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This JSON Parser analyzes your JSON data and provides detailed structural information including data types, nesting depth, key count, and value statistics.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Parse button</li>
          <li>Review the analyzed structure information</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}
