'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPlist, plistToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PList Converter"
        description="Convert standard JSON to Apple Property List (PList) XML format."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="PList XML will appear here..."
        convertLabel="JSON to PList"
        onConvert={jsonToPlist}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="xml"
        bidirectional
        onReverse={plistToJson}
        toolSlug="json-to-plist"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts standard JSON to Apple Property List (PList) XML format, commonly used in iOS and macOS application development.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Convert button to get PList XML</li>
          <li>Use the Swap button to convert the other direction</li>
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
