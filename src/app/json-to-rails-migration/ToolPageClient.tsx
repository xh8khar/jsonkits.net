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
        <h2>What Is a Rails Migration?</h2>
        <p>A Rails migration is a Ruby class that describes changes to your database schema using ActiveRecord's domain-specific language. Migrations allow teams to evolve the database incrementally and consistently across all environments.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>JSON-First Data Modeling</strong>: Derive your PostgreSQL or MySQL schema directly from a representative JSON payload.</li>
          <li><strong>API Integration</strong>: When consuming a new API, create the matching database table by pasting a sample response.</li>
          <li><strong>Team Alignment</strong>: Share the generated migration file so every developer has an identical starting schema.</li>
        </ul>
        <h2>How to Use the Rails Migration Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Provide a sample JSON object or array in the input area.</li>
          <li><strong>Click Generate Migration</strong>: The tool maps JSON types to Rails column types (<code>string</code>, <code>integer</code>, <code>boolean</code>, <code>float</code>, <code>text</code>).</li>
          <li><strong>Add to db/migrate/</strong>: Save the output as a timestamped migration file and run <code>rails db:migrate</code>.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the migration include indexes?</h3>
        <p>The generated migration creates a basic <code>create_table</code> block with typed columns. It does not automatically add indexes; you can add <code>add_index</code> calls after generation based on your query patterns.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A mobile team that defines its API contract in JSON can hand that contract to the Rails backend team, who paste it into this tool to produce the initial migration. This guarantees the database columns match the JSON keys exactly.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-laravel-migration">JSON to Laravel Migration</a> — Generate PHP Laravel database migrations from JSON.</li>
          <li><a href="/json-to-spring-entity">JSON to Spring Entity</a> — Create Spring Boot JPA entities with Jakarta annotations.</li>
          <li><a href="/json-to-mysql">JSON to MySQL</a> — Convert JSON data directly into MySQL CREATE TABLE statements.</li>
        </ul>
      </article>
    </>
  )
}
