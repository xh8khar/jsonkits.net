'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFormGenerator } from '@/lib/converters'

const example = '{"username":"john_doe","email":"john@example.com","age":30,"subscribed":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Form Generator"
        description="Generate HTML form markup from JSON data structure with appropriate input types."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated HTML form will appear here..."
        convertLabel="Generate Form"
        onConvert={jsonFormGenerator}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="html"
        toolSlug="json-form-generator"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates HTML form markup from JSON data structures, automatically selecting appropriate input types (text, email, number, checkbox) based on data values.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON object with sample values</li>
          <li>Click the Generate Form button</li>
          <li>Copy the HTML form code into your project</li>
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
