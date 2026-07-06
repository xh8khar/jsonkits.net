'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToReactHookForm } from '@/lib/converters'

const example = '{"name":"John Doe","email":"john@example.com","age":30,"isActive":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to React Hook Form Generator"
        description="Generate React Hook Form code with validation rules from JSON data samples. Perfect for quickly scaffolding forms from API response shapes."
        inputPlaceholder="Paste your JSON sample here..."
        outputPlaceholder="Generated React Hook Form code will appear here..."
        convertLabel="Generate Form"
        onConvert={jsonToReactHookForm}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="tsx"
        toolSlug="json-to-react-hook-form"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is React Hook Form?</h2>
        <p>React Hook Form is a performant, flexible library for building forms in React. It minimizes re-renders and provides a clean API for validation, error handling, and form state management.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a JSON object as a template for your form fields.</li>
          <li>Click <strong>Generate Form</strong> to create the React Hook Form code.</li>
          <li>Copy the generated TSX code into your React project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What field types are supported?</h3>
        <p>The generator maps JSON types to form fields: strings become text inputs, numbers become number inputs, booleans become checkboxes, and arrays/objects are noted as complex fields.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. This tool operates 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-formik">JSON to Formik</a> — Generate Formik form code from JSON</li>
          <li><a href="/json-to-schema">JSON to Schema</a> — Generate JSON Schema from data</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces</li>
        </ul>
      </article>
    </>
  )
}
