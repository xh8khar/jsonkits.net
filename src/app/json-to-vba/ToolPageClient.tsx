'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToVba } from '@/lib/converters'

const example = '{"employeeId":1001,"firstName":"John","lastName":"Doe","salary":75000,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to VBA - Generate VBA Class Modules"
        description="Generate VBA (Visual Basic for Applications) class modules with properties from JSON data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated VBA code will appear here..."
        convertLabel="Generate VBA Code"
        onConvert={jsonToVba}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-vba"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates VBA class modules with typed properties from your JSON data, perfect for working with JSON data in Microsoft Office applications.</p>
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
