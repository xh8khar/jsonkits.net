'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPostman, postmanToJson } from '@/lib/converters'

const example = '[{"name":"Get Users","method":"GET","path":"/users"},{"name":"Create User","method":"POST","path":"/users","body":{"name":"Alice","email":"alice@example.com"}}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Postman Collection Converter" description="Generate Postman Collection v2.1 from JSON request definitions. Each object becomes a request with method, path, and body." inputPlaceholder="Paste your JSON request array here..." outputPlaceholder="Generated Postman Collection will appear here..." convertLabel="Generate Collection" onConvert={jsonToPostman} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={postmanToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Postman Collection Converter?</h2>
        <p>This tool converts a simplified JSON array of API request definitions into a full Postman Collection v2.1 JSON file. Each object in the array becomes a request with its method, URL path, optional headers, and request body.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array of request definitions into the input field.</li><li>Click "Generate Collection" to create the Postman collection.</li><li>Import the resulting JSON into Postman.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What request properties are supported?</h3><p>Each request object can include name, method, path, headers (object), query parameters (object), and body (object or string).</p>
        <h3>Can I convert a Postman Collection back to simplified JSON?</h3><p>Yes, toggle the direction or use the Postman Collection to JSON converter to extract request definitions.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/postman-to-json">Postman Collection to JSON Converter</a></li><li><a href="/json-to-bson">JSON to BSON Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
