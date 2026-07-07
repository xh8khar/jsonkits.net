'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDjangoModel } from '@/lib/converters'

const example = '[{"title":"Post 1","content":"Hello World","views":100,"published":true},{"title":"Post 2","content":"Second post","views":50,"published":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Django Model - Python Model Generator"
        description="Generate Django model classes from JSON data structure samples for rapid prototyping."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Django model will appear here..."
        convertLabel="Generate Model"
        onConvert={jsonToDjangoModel}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="python"
        toolSlug="json-to-django-model"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a Django Model?</h2>
        <p>A Django model is a Python class that maps to a single database table, defining the fields and behavior of your stored data. Django's ORM uses models to create, retrieve, update, and delete records without writing raw SQL.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Rapid Prototyping</strong>: Go from a JSON API response to a working <code>models.py</code> file in seconds.</li>
          <li><strong>Schema Documentation</strong>: Use sample data as a living specification for your Django app's database layout.</li>
          <li><strong>Data Migration Prep</strong>: Generate a starting model when importing data from an external JSON source.</li>
        </ul>
        <h2>How to Use the Django Model Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a sample JSON object or array in the input editor.</li>
          <li><strong>Click Generate Model</strong>: The tool inspects each field's value and picks the correct Django field type.</li>
          <li><strong>Copy into models.py</strong>: Paste the generated class into your Django app's <code>models.py</code> and run <code>makemigrations</code>.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Which Django field types are supported?</h3>
        <p>Strings map to <code>CharField</code>/<code>TextField</code>, integers to <code>IntegerField</code>, floats to <code>FloatField</code>, booleans to <code>BooleanField</code>, and nested objects to <code>JSONField</code>. The tool also detects date-like strings and uses <code>DateTimeField</code> where appropriate.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A developer receiving a new third-party API payload can paste a sample response and instantly generate the corresponding Django model. This eliminates manual field mapping and reduces the chance of type mismatches between the API contract and the database schema.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-laravel-migration">JSON to Laravel Migration</a> — Generate PHP Laravel migrations from JSON samples.</li>
          <li><a href="/json-to-sqlalchemy-model">JSON to SQLAlchemy Model</a> — Create Python SQLAlchemy model classes from JSON data.</li>
          <li><a href="/json-to-prisma-schema">JSON to Prisma Schema</a> — Build Prisma schema models from sample JSON.</li>
        </ul>
      </article>
    </>
  )
}
