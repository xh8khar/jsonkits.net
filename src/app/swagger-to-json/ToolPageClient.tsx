'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { swaggerToJson } from '@/lib/converters'

const example = JSON.stringify({ swagger: '2.0', info: { title: 'API', version: '1.0' }, paths: {}, definitions: { User: { type: 'object', properties: { name: { type: 'string' }, age: { type: 'integer' } }, required: ['name'] } } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Swagger to JSON"
        description="Extract sample JSON data from Swagger 2.0 API definitions. Generate realistic example data from your API schemas."
        inputPlaceholder="Paste your Swagger definition here..."
        outputPlaceholder="Sample JSON will appear here..."
        convertLabel="Extract Sample"
        onConvert={swaggerToJson}
        exampleInput={example}
        outputLanguage="json"
        inputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>This tool extracts sample JSON data from Swagger 2.0 definition schemas, making it easy to visualize the data structure defined in your API spec.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your Swagger 2.0 definition into the input editor.</li><li>Click "Extract Sample" to generate sample JSON.</li><li>Copy or download the result.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-swagger">JSON to Swagger</a></li><li><a href="/openapi-to-json">OpenAPI to JSON</a></li></ul>
      </article>
    </>
  )
}
