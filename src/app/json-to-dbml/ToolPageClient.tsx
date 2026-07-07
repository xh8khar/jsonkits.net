'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDbml } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","email":"alice@example.com"},{"id":2,"name":"Bob","email":"bob@example.com"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to DBML - Generate Database Markup Language"
        description="Generate DBML (Database Markup Language) schema definitions from JSON data samples."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated DBML will appear here..."
        convertLabel="Generate DBML"
        onConvert={jsonToDbml}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-dbml"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates DBML (Database Markup Language) schema definitions from your JSON data, useful for documenting and visualizing database schemas.</p>
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
