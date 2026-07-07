'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { plistToJson, jsonToPlist } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0"><dict><key>name</key><string>JSONKits</string><key>version</key><integer>1</integer></dict></plist>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="PList to JSON Converter"
        description="Convert Apple Property List (PList) XML format to standard JSON."
        inputPlaceholder="Paste your PList XML here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="PList to JSON"
        onConvert={plistToJson}
        exampleInput={example}
        inputLanguage="xml"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToPlist}
        toolSlug="plist-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is PList?</h2>
        <p>Property List (PList) is an Apple XML format used in iOS and macOS applications. This tool converts between PList and JSON formats.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your PList XML in the editor</li>
          <li>Click the Convert button to get JSON</li>
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
