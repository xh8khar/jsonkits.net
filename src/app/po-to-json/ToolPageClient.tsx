'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { poToJson, jsonToPo } from '@/lib/converters'

const example = '# SOME DESCRIPTIVE TITLE.\nmsgid ""\nmsgstr ""\n"Content-Type: text/plain; charset=UTF-8\\n"\n\nmsgid "Hello"\nmsgstr "Hola"\n\nmsgid "Goodbye"\nmsgstr "Adiós"'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="PO to JSON - Gettext Translation Converter"
        description="Convert GNU Gettext PO files to structured JSON format for web applications."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={poToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToPo}
        toolSlug="po-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert GNU Gettext PO (Portable Object) files into clean, structured JSON format. PO files are the standard format for GNU Gettext translations, and this tool helps you transform them into JSON objects for use in modern web applications and JavaScript/TypeScript i18n libraries.</p>
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
