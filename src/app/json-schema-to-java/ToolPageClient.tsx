'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSchemaToJava } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['json-schema-to-java', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Schema to Java"
        description="Generate Java POJO classes with validation annotations from JSON Schema (draft-07) definitions."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Output will appear here..."
        convertLabel="Convert"
        onConvert={jsonSchemaToJava}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="java"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Schema to Java?</h2>
        <p>Generating Java classes from JSON Schema ensures your Java models are always valid against the schema definition. This bridges the gap between API contracts and implementation.</p><p>JSON Schema to Java generation is used for:</p><ul><li><strong>API Development</strong>: Creating Java models from OpenAPI schemas.</li><li><strong>Validation</strong>: Adding Bean Validation annotations automatically.</li><li><strong>Code Generation</strong>: Boilerplate reduction in Java microservices.</li></ul>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Convert</strong>: Press the button to process your input.</li>
          <li><strong>Review Output</strong>: Your result appears instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the result and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-c">JSON to C</a> — Generate C struct definitions with JSON parsing support from JSON data samples.</li>
          <li><a href="/json-to-cpp">JSON to C++</a> — Generate C++ class definitions with JSON serialization support from JSON data samples.</li>
          <li><a href="/json-to-groovy">JSON to Groovy</a> — Generate Groovy class definitions with JSON parsing support from JSON data samples.</li>
        </ul>
      </article>
    </>
  )
}
