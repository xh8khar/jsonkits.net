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
        <h2>What Is a Laravel Migration?</h2>
        <p>A Laravel migration is a version-controlled blueprint for your database schema, written in PHP using the Laravel Schema Builder. Migrations let you define, modify, and share database tables across your team without writing raw SQL.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Rapid Prototyping</strong>: Turn a sample JSON payload instantly into a database table definition.</li>
          <li><strong>API-First Development</strong>: Generate migrations directly from your API response samples.</li>
          <li><strong>Consistent Schema</strong>: Ensure all team members start from the same generated migration file.</li>
        </ul>
        <h2>How to Use the Laravel Migration Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON object or array into the input editor.</li>
          <li><strong>Click Generate Migration</strong>: The tool infers column types (string, integer, boolean, float) from your data.</li>
          <li><strong>Copy the PHP class</strong>: Drop the generated <code>up()</code> method into a new Laravel migration file inside <code>database/migrations/</code>.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What column types can this tool generate?</h3>
        <p>The tool maps JSON strings to <code>string()</code>, numbers to <code>integer()</code> or <code>float()</code>, booleans to <code>boolean()</code>, and nested objects to <code>text()</code> or <code>json()</code>. It also automatically adds <code>id()</code> and <code>timestamps()</code> to every migration.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Frontend developers can save their API JSON responses and hand them to a backend team as migration files. QA engineers use this tool to create test database schemas based on expected API payloads, ensuring the database matches the data shape before any code is written.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-rails-migration">JSON to Rails Migration</a> — Generate Ruby on Rails ActiveRecord migrations from JSON.</li>
          <li><a href="/json-to-spring-entity">JSON to Spring Entity</a> — Create Spring Boot JPA entity classes with Jakarta annotations.</li>
          <li><a href="/json-to-django-model">JSON to Django Model</a> — Build Django model classes from sample JSON data.</li>
        </ul>
      </article>
    </>
  )
}
