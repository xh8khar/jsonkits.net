'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToGraphQLSchema, graphQLSchemaToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","version":1,"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to GraphQL Schema Generator" description="Generate GraphQL type definitions from JSON data samples. Perfect for building GraphQL APIs from existing data." inputPlaceholder="Paste your JSON here..." outputPlaceholder="GraphQL schema will appear here..." convertLabel="Generate Schema" onConvert={jsonToGraphQLSchema} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={graphQLSchemaToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to GraphQL Schema Generation?</h2>
        <p>GraphQL schemas define the types and fields available in your API. Writing them manually from existing JSON data is error-prone and tedious. This tool analyzes your JSON sample and automatically generates the corresponding GraphQL type definitions, inferring scalar types (String, Int, Float, Boolean) and nested object types.</p>
        <h2>How to Generate a GraphQL Schema from JSON</h2>
        <ol><li><strong>Paste a representative JSON sample</strong> of your API response or data model.</li><li><strong>Click Generate Schema</strong> to produce GraphQL type definitions. The tool creates a <code>type Root</code> with fields matching your JSON keys and inferred types.</li><li><strong>Copy the schema</strong> into your GraphQL server's type definitions or use it as a starting point for further customization.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it handle nested objects?</h3><p>Yes. Nested JSON objects are converted into separate GraphQL types with appropriate field types and relationships.</p>
        <h3>What about arrays?</h3><p>Arrays are converted to list types (<code>[String]</code>, <code>[Int]</code>, etc.) based on the type of the first array element.</p>
        <h3>Can I convert a GraphQL schema back to JSON?</h3><p>Yes, use the Swap button to generate sample JSON data from a GraphQL schema definition.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/graphql-schema-to-json">GraphQL Schema to JSON</a></li><li><a href="/json-to-openapi">JSON to OpenAPI Schema</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
