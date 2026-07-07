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
        <h2>What Is a PList?</h2>
        <p>A Property List (PList) is a structured data format used by Apple in iOS, macOS, watchOS, and tvOS. PLists can be stored as XML or binary format and are used for application configuration, user preferences, and data serialization throughout the Apple ecosystem.</p>
        <p>PLists are commonly used for:</p>
        <ul>
          <li><strong>App Configuration</strong>: Info.plist files defining app metadata and permissions.</li>
          <li><strong>User Defaults</strong>: Storing application preferences and settings on Apple platforms.</li>
          <li><strong>Data Serialization</strong>: Saving and loading application state on Apple platforms.</li>
          <li><strong>Xcode Projects</strong>: Project configuration files and build settings.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON is a universal data interchange format supported by virtually every programming language and platform. Converting PList to JSON makes Apple-specific data accessible to cross-platform tools, web applications, and non-Apple developers.</p>
        <h2>PList vs. JSON: Which Should You Use?</h2>
        <p>PList is the native format for Apple platforms but is rarely used outside that ecosystem. JSON is universally supported across all platforms and languages. For cross-platform projects or when sharing data with non-Apple systems, converting PList to JSON is essential.</p>
        <h2>How to Convert PList to JSON Online</h2>
        <ol>
          <li><strong>Paste your PList XML</strong>: Copy your PList XML content from an Info.plist or other Apple property list file.</li>
          <li><strong>Check for Validity</strong>: The tool automatically validates your PList XML structure.</li>
          <li><strong>Click Convert</strong>: Press the button to transform your PList data into clean JSON format.</li>
          <li><strong>Copy & Integrate</strong>: Use the Copy button to grab the JSON output for use in your cross-platform application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this PList to JSON converter safe?</h3>
        <p>Absolutely. All processing is 100% client-side. Your data is never uploaded to any server.</p>
        <h3>Does this tool support binary PList format?</h3>
        <p>This tool processes XML PList format. Binary PLists need to be converted to XML first using Apple's plutil command (<code>plutil -convert xml1 file.plist</code>).</p>
        <h3>What PList data types are supported?</h3>
        <p>The converter handles all standard PList types: strings, numbers, booleans, dates, data, arrays, and dictionaries. Dates are converted to ISO 8601 string format in JSON.</p>
        <h2>Real-World Examples</h2>
        <p>Mobile developers working on cross-platform projects often need to inspect or share iOS configuration data with team members using Android, web, or backend technologies. Converting PList to JSON allows these configurations to be used across the entire tech stack.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-plist">JSON to PList</a> — convert JSON back to Apple PList XML format</li>
          <li><a href="/xml-to-json">XML to JSON</a> — convert general XML data to JSON</li>
          <li><a href="/json-to-xml">JSON to XML</a> — convert JSON to general XML format</li>
        </ul>
      </article>
    </>
  )
}
