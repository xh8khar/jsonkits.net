'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToZodSchema } from '@/lib/converters'

const example = JSON.stringify({ name: 'John Doe', age: 30, email: 'john@example.com', role: 'admin', isActive: true, tags: ['dev', 'ops'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Zod Schema"
        description="Generate Zod validation schemas from JSON data samples for TypeScript runtime validation."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated code will appear here..."
        convertLabel="Generate"
        onConvert={jsonToZodSchema}
        exampleInput={example}
        outputLanguage="typescript"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Zod validation schemas from JSON data samples for TypeScript runtime validation.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click the generate button to produce the output.</li><li>Copy the generated code for use in your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h3>What can I use this for?</h3><p>Use this tool to quickly scaffold Zod schemas from JSON data samples during development.</p>
      </article>
    </>
  )
}
