'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToOpenAPI, openapiToJson } from '@/lib/converters'

const example = '{"id":1,"name":"Widget","price":9.99}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to OpenAPI Schema Generator" description="Generate OpenAPI 3.0 schema components from JSON data samples. Document your API response formats instantly." inputPlaceholder="Paste your JSON here..." outputPlaceholder="OpenAPI schema will appear here..." convertLabel="Generate OpenAPI" onConvert={jsonToOpenAPI} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={openapiToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is OpenAPI Schema Generation?</h2>
        <p>OpenAPI 3.0 is the industry standard for documenting RESTful APIs. Writing schema components by hand is time-consuming and error-prone. This tool analyzes your JSON data sample and auto-generates the corresponding OpenAPI 3.0 schema component with proper types, required fields, and nested object definitions.</p>
        <h2>How to Generate an OpenAPI Schema from JSON</h2>
        <ol><li><strong>Paste a JSON sample</strong> of your API response. Include representative values for each field.</li><li><strong>Click Generate OpenAPI</strong> to create a complete OpenAPI 3.0 schema component under <code>components/schemas/GeneratedModel</code>.</li><li><strong>Copy the schema</strong> into your OpenAPI specification file and customize the endpoint paths and metadata as needed.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it generate the full OpenAPI spec?</h3><p>The tool generates the schema component only. You will need to add <code>paths</code>, <code>info</code>, and other top-level fields to complete your API specification.</p>
        <h3>How are required fields determined?</h3><p>All fields present in your JSON sample are marked as required. Remove fields from the input if they should be optional.</p>
        <h3>Can I extract JSON from an existing OpenAPI schema?</h3><p>Yes, use the Swap button to generate sample JSON data from an OpenAPI schema definition.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/openapi-to-json">OpenAPI to JSON Extractor</a></li><li><a href="/json-to-graphql-schema">JSON to GraphQL Schema</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
