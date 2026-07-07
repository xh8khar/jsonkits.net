'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { arbToJson } from '@/lib/converters'

const example = '{"appName":"My App","@appName":{"description":"The app name"},"welcome":"Welcome","@welcome":{"description":"Welcome message"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="ARB to JSON - Flutter ARB Converter"
        description="Convert Flutter ARB (Application Resource Bundle) files to clean JSON."
        inputPlaceholder="Paste your ARB JSON here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={arbToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="arb-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert Flutter ARB (Application Resource Bundle) files into clean, simple JSON. ARB files are used by Flutter for localization and contain translation strings along with metadata keys prefixed with <code>@</code>. This tool strips the metadata and produces a flat key-value JSON object.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
