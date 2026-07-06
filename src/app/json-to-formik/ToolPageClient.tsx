'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToFormik } from '@/lib/converters'

const example = '{"name":"John Doe","email":"john@example.com","age":30,"isActive":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Formik Generator"
        description="Generate Formik form code with Yup validation schemas from JSON data samples. Quickly scaffold forms with validation from your data structures."
        inputPlaceholder="Paste your JSON sample here..."
        outputPlaceholder="Generated Formik code will appear here..."
        convertLabel="Generate Form"
        onConvert={jsonToFormik}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="tsx"
        toolSlug="json-to-formik"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Formik?</h2>
        <p>Formik is a popular React form library that simplifies form building with form state management, validation, and submission handling. It pairs well with Yup for schema-based validation.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a JSON object as a template for your form fields.</li>
          <li>Click <strong>Generate Form</strong> to create the Formik + Yup code.</li>
          <li>Copy the generated TSX code into your React project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What validation is generated?</h3>
        <p>The generator creates Yup validation schemas based on field types and conventions (e.g., email validation for email fields, positive number validation for age fields).</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. This tool operates 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-react-hook-form">JSON to React Hook Form</a> — Generate React Hook Form code</li>
          <li><a href="/json-to-schema">JSON to Schema</a> — Generate JSON Schema from data</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces</li>
        </ul>
      </article>
    </>
  )
}
