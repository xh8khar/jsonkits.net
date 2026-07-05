'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSwagger } from '@/lib/converters'

const example = JSON.stringify({ name: 'UserAPI', version: 1, endpoints: [{ path: '/users', method: 'GET' }], active: true }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Swagger"
        description="Generate Swagger 2.0 API definitions from your JSON data samples. Perfect for creating API documentation from existing data structures."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Swagger definition will appear here..."
        convertLabel="Generate Swagger"
        onConvert={jsonToSwagger}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Swagger?</h2>
        <p>Swagger (OpenAPI 2.0) is a specification for describing RESTful APIs. It defines endpoints, request/response formats, authentication, and more in a machine-readable format.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data sample into the input editor.</li><li>Click "Generate Swagger" to create a Swagger definition.</li><li>Copy or download the generated Swagger spec.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h3>What Swagger version is generated?</h3><p>This tool generates Swagger 2.0 (OpenAPI 2.0) specifications.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-openapi">JSON to OpenAPI</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
