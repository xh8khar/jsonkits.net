'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToValibot } from '@/lib/converters'

const example = JSON.stringify({"name":"Alice","age":30,"email":"alice@example.com","active":true}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Valibot Schema - Validation Schema Generator"
        description="Generate Valibot validation schemas from JSON data samples for TypeScript runtime validation."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated schema will appear here..."
        convertLabel="Generate Schema"
        onConvert={jsonToValibot}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-valibot"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Valibot?</h2>
        <p>Valibot is a modular TypeScript schema validation library that lets you define type-safe validation rules with a tiny bundle size. Unlike monolithic validators, Valibot allows tree-shaking so you only ship the validators you actually use.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Form Validation</strong>: Generate Valibot schemas for React/Vue form states from a sample data shape.</li>
          <li><strong>API Response Validation</strong>: Create runtime guards that verify external API responses match your expected JSON structure.</li>
          <li><strong>TypeScript Type Inference</strong>: Derive static types alongside runtime validators from the same schema definition.</li>
        </ul>
        <h2>How to Use the Valibot Schema Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Provide a sample JSON object or array representing the data shape.</li>
          <li><strong>Click Generate Schema</strong>: The tool emits Valibot functions such as <code>string()</code>, <code>number()</code>, <code>boolean()</code>, <code>object()</code>, and <code>array()</code>.</li>
          <li><strong>Copy into your project</strong>: Import the generated code where you need validation — no manual schema writing required.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the schema infer TypeScript types?</h3>
        <p>Yes. Valibot's <code>InferInput</code> and <code>InferOutput</code> utilities extract static types from the generated schema, giving you end-to-end type safety from a single source of truth.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A TypeScript backend service that accepts JSON payloads can use the generated Valibot schema to validate incoming requests at the edge. If the API contract changes, the team updates the sample JSON and re-generates the schema, keeping validation logic in sync with the contract automatically.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-zod-schema">JSON to Zod Schema</a> — Generate Zod validation schemas from JSON samples.</li>
          <li><a href="/json-to-yup-schema">JSON to Yup Schema</a> — Build Yup validation schemas for form validation.</li>
          <li><a href="/json-to-io-ts">JSON to io-ts</a> — Generate io-ts runtime type codecs from JSON data.</li>
        </ul>
      </article>
    </>
  )
}
