'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToLaravelMigration } from '@/lib/converters'

const example = '[{"name":"Alice","email":"alice@example.com","age":30,"active":true},{"name":"Bob","email":"bob@example.com","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Laravel Migration - PHP Migration Generator"
        description="Generate Laravel PHP migration files from JSON data structure samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Laravel migration will appear here..."
        convertLabel="Generate Migration"
        onConvert={jsonToLaravelMigration}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="php"
        toolSlug="json-to-laravel-migration"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Laravel PHP migration files from sample JSON data structures. Analyze your JSON data to infer column types and produce a complete Laravel migration class with schema definition, including <code>id()</code> and <code>timestamps()</code> fields.</p>
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
