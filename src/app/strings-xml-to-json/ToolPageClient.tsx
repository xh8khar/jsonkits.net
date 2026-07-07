'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { stringsXmlToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="utf-8"?><resources><string name="app_name">My App</string><string name="welcome">Welcome</string></resources>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="strings.xml to JSON - Android Localization Converter"
        description="Convert Android strings.xml resource files to structured JSON format."
        inputPlaceholder="Paste your strings.xml here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={stringsXmlToJson}
        exampleInput={example}
        inputLanguage="xml"
        outputLanguage="json"
        toolSlug="strings-xml-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert Android <code>strings.xml</code> resource files into clean structured JSON format. Android apps use <code>strings.xml</code> to store localized strings, and this tool extracts all <code>&lt;string&gt;</code> elements with their <code>name</code> attributes as JSON key-value pairs.</p>
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
