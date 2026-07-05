'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSampleGenerator } from '@/lib/converters'

const example = '{"name":"string","email":"email","count":"number","active":"boolean","metadata":"object"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Sample Data Generator"
        description="Generate deterministic sample JSON data from a type template. Creates predictable placeholder values like 'sample', 0, true, 'user@example.com'."
        inputPlaceholder="Paste your type template here..."
        outputPlaceholder="Generated sample data will appear here..."
        convertLabel="Generate Sample"
        onConvert={jsonSampleGenerator}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a JSON Sample Data Generator?</h2>
        <p>A JSON sample data generator creates deterministic placeholder data from a type template. Unlike random or fake generators, sample generators produce the same output every time for the same input, making them ideal for documentation and reproducible testing.</p>
        <p>Sample data generation is useful for:</p>
        <ul>
          <li><strong>Documentation</strong>: Creating consistent examples for API docs and guides.</li>
          <li><strong>Testing</strong>: Writing reproducible test cases with predictable outputs.</li>
          <li><strong>UI Mockups</strong>: Building wireframes with stable placeholder content.</li>
          <li><strong>Training</strong>: Demonstrating tools with repeatable example data.</li>
        </ul>
        <h2>How to Generate Sample JSON Online</h2>
        <ol>
          <li><strong>Create a type template</strong>: Write JSON with type strings as values.</li>
          <li><strong>Paste the template</strong>: Enter your template in the input area.</li>
          <li><strong>Click Generate Sample</strong>: The tool produces deterministic placeholder data.</li>
          <li><strong>Copy the result</strong>: The output is identical for the same template.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What types are supported?</h3>
        <p>Supported types: string, number, integer, boolean, null, object, array, email, url, date, datetime, uuid, color, phone, text, and more.</p>
        <h3>Is the output really deterministic?</h3>
        <p>Yes. The same template always produces the exact same output, making it perfect for reproducible documentation and test fixtures.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Technical writers use deterministic sample generators to create example JSON in documentation. Developers use them to generate consistent test fixtures that produce the same results across different environments and CI runs.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-fake-generator">JSON Fake Data Generator</a> — Generate realistic fake data with hints</li>
          <li><a href="/json-mock-generator">JSON Mock API Generator</a> — Generate mock API responses</li>
          <li><a href="/json-random-generator">JSON Random Data Generator</a> — Generate random JSON structures</li>
        </ul>
      </article>
    </>
  )
}
