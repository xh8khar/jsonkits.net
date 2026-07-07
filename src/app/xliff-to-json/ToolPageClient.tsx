'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { xliffToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><xliff version="1.2"><file source-language="en" target-language="es"><body><trans-unit id="greeting"><source>Hello</source><target>Hola</target></trans-unit></body></file></xliff>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="XLIFF to JSON - XLIFF Translation Converter"
        description="Convert XLIFF 1.2 translation files to structured JSON format."
        inputPlaceholder="Paste your XLIFF XML here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={xliffToJson}
        exampleInput={example}
        inputLanguage="xml"
        outputLanguage="json"
        toolSlug="xliff-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert XLIFF (XML Localization Interchange File Format) 1.2 documents into structured JSON format. XLIFF is the industry standard XML format for exchanging localization data, and this tool extracts translation units into simple key-value JSON objects for use in web applications.</p>
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
