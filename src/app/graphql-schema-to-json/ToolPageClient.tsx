'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { graphQLSchemaToJson, jsonToGraphQLSchema } from '@/lib/converters'

const example = 'type Root {\n  name: String\n  version: Int\n  active: Boolean\n}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="GraphQL Schema to JSON" description="Generate sample JSON data from GraphQL type definitions. Quickly create test data from your GraphQL schema." inputPlaceholder="Paste your GraphQL schema here..." outputPlaceholder="Sample JSON will appear here..." convertLabel="Generate JSON" onConvert={graphQLSchemaToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToGraphQLSchema} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is GraphQL Schema to JSON Extraction?</h2>
        <p>When designing a GraphQL API, you need sample data to test your queries and mutations. This tool parses your GraphQL type definitions and generates realistic sample JSON data, inferring appropriate values for each scalar type. It is ideal for rapid prototyping, frontend development, and API testing.</p>
        <h2>How to Convert GraphQL Schema to JSON</h2>
        <ol><li><strong>Paste your GraphQL type definition</strong> (e.g., <code>type User {"{"} name: String, age: Int {"}"}</code>).</li><li><strong>Click Generate JSON</strong> to produce a sample JSON object with fields matching your schema and type-appropriate default values.</li><li><strong>Copy the output</strong> for use in your frontend mockups, test suites, or API documentation.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What default values does the tool use?</h3><p>Strings default to <code>"string"</code>, integers to <code>0</code>, floats to <code>0.0</code>, booleans to <code>true</code>, and lists to empty arrays.</p>
        <h3>Does it support custom types?</h3><p>The converter handles basic scalar types. For custom types, it returns the field name as a string value. You can then refine the output manually.</p>
        <h3>Can I convert JSON back to a GraphQL schema?</h3><p>Yes. Use the Swap button to generate GraphQL type definitions from JSON data.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-graphql-schema">JSON to GraphQL Schema</a></li><li><a href="/json-to-openapi">JSON to OpenAPI Schema</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
