'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFakeGenerator } from '@/lib/converters'

const example = '{"name":"fullname","email":"email","age":30,"address":{"city":"city","zip":"number"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Fake Data Generator"
        description="Generate realistic fake JSON data from a template. Use type hints like 'name', 'email', 'uuid', 'city' to generate real-looking data."
        inputPlaceholder="Paste your template JSON with type hints..."
        outputPlaceholder="Generated fake data will appear here..."
        convertLabel="Generate Fake Data"
        onConvert={jsonFakeGenerator}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Fake Data Generator?</h2>
        <p>A JSON fake data generator creates realistic-looking data from a template. You define a JSON structure with type hints as values (e.g., "fullname", "email", "uuid", "city", "number"), and the tool replaces them with realistic random values while preserving your structure.</p>
        <p>Fake data generation is useful for:</p>
        <ul>
          <li><strong>Prototyping</strong>: Populating UIs and dashboards with realistic data.</li>
          <li><strong>Testing</strong>: Creating test fixtures without real user information.</li>
          <li><strong>Demo Environments</strong>: Building convincing product demonstrations.</li>
          <li><strong>Load Testing</strong>: Generating large datasets for performance testing.</li>
        </ul>
        <h2>How to Generate Fake JSON Data Online</h2>
        <ol>
          <li><strong>Create a template</strong>: Write JSON with type hint strings as values.</li>
          <li><strong>Paste the template</strong>: Enter your template in the input area.</li>
          <li><strong>Click Generate Fake Data</strong>: The tool replaces hints with realistic values.</li>
          <li><strong>Review and copy</strong>: Use the generated data in your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What type hints are supported?</h3>
        <p>Supported hints include: fullname, name, first, last, email, uuid, city, country, street, zip, phone, number, integer, float, boolean, date, datetime, lorem, sentence, paragraph, url, color, and more.</p>
        <h3>Can I generate nested structures?</h3>
        <p>Yes. The tool preserves your exact JSON structure and only replaces the hint values, so you can have deeply nested objects and arrays.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side. No data is sent to any server.</p>
        <h2>Real-World Examples</h2>
        <p>Frontend developers use fake data generators to build and test user interfaces before backend APIs are available. QA engineers create realistic test datasets without exposing sensitive information, ensuring thorough test coverage with privacy-safe data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-mock-generator">JSON Mock API Generator</a> — Generate mock API responses</li>
          <li><a href="/json-random-generator">JSON Random Data Generator</a> — Generate random JSON structures</li>
          <li><a href="/json-sample-generator">JSON Sample Data Generator</a> — Generate deterministic sample data</li>
        </ul>
      </article>
    </>
  )
}
