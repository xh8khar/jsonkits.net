'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToRailsMigration } from '@/lib/converters'

const example = JSON.stringify([{"name":"Widget","price":9.99,"in_stock":true,"category":"Tools"},{"name":"Gadget","price":24.99,"in_stock":false,"category":"Electronics"}], null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Rails Migration - Ruby Migration Generator"
        description="Generate Ruby on Rails migration files from JSON data structure samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated migration will appear here..."
        convertLabel="Generate Migration"
        onConvert={jsonToRailsMigration}
        exampleInput={example}
        outputLanguage="ruby"
        toolSlug="json-to-rails-migration"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts JSON data structure samples into Ruby on Rails ActiveRecord migration files. It analyzes the fields and their types from your JSON data and generates a complete migration with create_table, add_column, and type definitions for your Rails schema.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Generate Migration button</li>
          <li>Copy or download the resulting Ruby migration</li>
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
