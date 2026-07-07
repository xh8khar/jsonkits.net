'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToInsomnia } from '@/lib/converters'

const example = JSON.stringify([{"name":"Get Users","method":"GET","url":"https://api.example.com/users"},{"name":"Create User","method":"POST","url":"https://api.example.com/users","body":{"name":"Alice","email":"alice@example.com"}}], null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Insomnia - Insomnia REST Client Export"
        description="Convert JSON API request definitions to Insomnia v4 export format for API testing."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Insomnia export will appear here..."
        convertLabel="Generate Insomnia Export"
        onConvert={jsonToInsomnia}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-insomnia"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts JSON API request definitions into Insomnia v4 export format. Simply provide request objects with name, method, URL, and optional headers and body, and this tool generates a complete Insomnia workspace export file ready for import.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your API request definitions in JSON format</li>
          <li>Click the Generate Insomnia Export button</li>
          <li>Import the resulting JSON file into Insomnia</li>
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
