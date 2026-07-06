'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToYupSchema } from '@/lib/converters'

const example = JSON.stringify({ username: 'johndoe', password: 'secret123', age: 25, email: 'john@example.com' }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Yup Schema"
        description="Generate Yup validation schemas from JSON data samples for JavaScript form validation."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated code will appear here..."
        convertLabel="Generate"
        onConvert={jsonToYupSchema}
        exampleInput={example}
        outputLanguage="typescript"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Yup validation schemas from JSON data samples for JavaScript form validation.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click the generate button to produce the output.</li><li>Copy the generated code for use in your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h3>What can I use this for?</h3><p>Use this tool to quickly scaffold Yup schemas from JSON data samples during development.</p>
      </article>
    </>
  )
}
