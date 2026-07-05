'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonMockGenerator } from '@/lib/converters'

const example = '{"id":"id","name":"fullname","email":"email","createdAt":"datetime","status":"boolean"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Mock API Generator"
        description="Generate mock API response data from a type template. Supports types like 'name', 'email', 'uuid', 'date', 'id', 'boolean', 'number'."
        inputPlaceholder="Paste your type template here..."
        outputPlaceholder="Generated mock data will appear here..."
        convertLabel="Generate Mock Data"
        onConvert={jsonMockGenerator}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is a JSON Mock API Generator?</h2>
        <p>A JSON mock API generator creates realistic mock data based on a type template. Unlike fake data generators that produce random values, mock generators focus on creating data that mimics typical API responses, including fields like id, createdAt, and status codes.</p>
        <p>Mock API generation is useful for:</p>
        <ul>
          <li><strong>Frontend Development</strong>: Building UI components before the API is ready.</li>
          <li><strong>Integration Testing</strong>: Testing API consumers with controlled responses.</li>
          <li><strong>Documentation</strong>: Generating example responses for API documentation.</li>
          <li><strong>Demo Apps</strong>: Running demonstration applications without live backends.</li>
        </ul>
        <h2>How to Generate Mock JSON Data Online</h2>
        <ol>
          <li><strong>Create a type template</strong>: Write JSON with type hint strings as values.</li>
          <li><strong>Paste the template</strong>: Enter your template in the input area.</li>
          <li><strong>Click Generate Mock Data</strong>: The tool creates realistic mock values.</li>
          <li><strong>Copy the result</strong>: Use in your API mocks or frontend code.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What types are supported?</h3>
        <p>Supported types include: id, uuid, name, fullname, first, last, email, phone, url, ip, boolean, number, integer, float, date, datetime, timestamp, color, text, paragraph, and more.</p>
        <h3>How is this different from the fake data generator?</h3>
        <p>The mock generator focuses on API-like structures with predictable field types (id, createdAt, status), while the fake generator produces broader realistic data suitable for UI demos.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Full-stack developers use mock data generators to decouple frontend and backend development. While the backend team builds the API, the frontend team can develop and test against realistic mock data, significantly accelerating development cycles.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-fake-generator">JSON Fake Data Generator</a> — Generate realistic fake data</li>
          <li><a href="/json-random-generator">JSON Random Data Generator</a> — Generate random JSON structures</li>
          <li><a href="/json-sample-generator">JSON Sample Data Generator</a> — Generate deterministic sample data</li>
        </ul>
      </article>
    </>
  )
}
