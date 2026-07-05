'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSchemaToTypescript } from '@/lib/converters'

const example = '{"id":1,"name":"Alice","email":"alice@test.com","profile":{"age":30,"bio":"Developer"},"tags":["typescript","json"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to TypeScript Generator" description="Generate TypeScript interfaces from JSON data samples. Creates nested interfaces for objects and arrays." inputPlaceholder="Paste your JSON here..." outputPlaceholder="TypeScript interfaces will appear here..." convertLabel="Generate TypeScript" onConvert={jsonSchemaToTypescript} exampleInput={example} outputLanguage="typescript" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to TypeScript Generator?</h2>
        <p>This tool generates TypeScript interfaces from JSON data samples. It creates named interfaces for nested objects, properly types arrays, and handles primitive types, booleans, and null values automatically.</p>
        <h2>How to Use</h2>
        <ol><li>Paste a sample JSON object into the input field.</li><li>Click "Generate TypeScript" to create the TypeScript interfaces.</li><li>Copy the generated interfaces into your TypeScript project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3><p>Nested objects generate their own interface definitions with auto-generated names based on the parent key.</p>
        <h3>How are arrays with objects typed?</h3><p>Arrays containing objects generate a separate interface for the element type, and the array property is typed as the interface name followed by [].</p>
        <h3>What if my JSON has null values?</h3><p>Null values are typed as <code>any</code> since the type cannot be determined from null alone.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-typescript">JSON to TypeScript Interface</a></li><li><a href="/json-to-schema">JSON to Schema Generator</a></li><li><a href="/typescript-interface-to-json">TypeScript to JSON</a></li></ul>
      </article>
    </>
  )
}
