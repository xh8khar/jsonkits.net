'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { openapiToJson, jsonToOpenAPI } from '@/lib/converters'

const example = '{"openapi":"3.0.3","info":{"title":"API"},"components":{"schemas":{"Widget":{"type":"object","properties":{"id":{"type":"integer"},"name":{"type":"string"},"price":{"type":"number"}},"required":["id","name","price"]}}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="OpenAPI to JSON Extractor" description="Extract sample JSON data from OpenAPI 3.0 schema definitions. Generate example payloads from your API specs." inputPlaceholder="Paste OpenAPI schema here..." outputPlaceholder="Sample JSON will appear here..." convertLabel="Extract JSON" onConvert={openapiToJson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={jsonToOpenAPI} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is OpenAPI to JSON Extraction?</h2>
        <p>OpenAPI specifications define the structure of your API responses using schema objects. This tool parses the first schema component from your OpenAPI 3.0 spec and generates a sample JSON payload with appropriate default values for each property type. This is useful for generating test data, populating mock servers, and validating your API design.</p>
        <h2>How to Extract JSON from OpenAPI</h2>
        <ol><li><strong>Paste your OpenAPI JSON</strong> containing <code>components/schemas</code> definitions.</li><li><strong>Click Extract JSON</strong> to parse the first schema and generate a sample payload with typed default values.</li><li><strong>Copy the output</strong> for use in testing, documentation, or as a starting point for your frontend mocks.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Which schema does the tool extract from?</h3><p>The tool extracts from the first schema found in <code>components/schemas</code>. If you have multiple schemas, reorder them or use them individually.</p>
        <h3>What default values are used?</h3><p>Strings become <code>"string"</code>, integers become <code>0</code>, numbers become <code>0.0</code>, booleans become <code>true</code>, and arrays contain a single sample item.</p>
        <h3>Can I convert JSON back to OpenAPI?</h3><p>Yes, use the Swap button to generate an OpenAPI schema component from a JSON sample.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-openapi">JSON to OpenAPI Schema</a></li><li><a href="/json-to-graphql-schema">JSON to GraphQL Schema</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
