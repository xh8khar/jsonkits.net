'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { postmanToJson, jsonToPostman } from '@/lib/converters'

const example = '{\n  "info": {"name":"My API","schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},\n  "item": [\n    {"name":"Get Users","request":{"method":"GET","url":{"raw":"https://api.example.com/users","path":["users"]}}},\n    {"name":"Create User","request":{"method":"POST","url":{"raw":"https://api.example.com/users","path":["users"]},"body":{"mode":"raw","raw":"{\\"name\\":\\"Alice\\"}"}}}\n  ]\n}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Postman Collection to JSON Converter" description="Extract request definitions from Postman Collection JSON format." inputPlaceholder="Paste your Postman Collection JSON here..." outputPlaceholder="Extracted requests will appear here..." convertLabel="Extract Requests" onConvert={postmanToJson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={jsonToPostman} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Postman Collection to JSON Converter?</h2>
        <p>This tool extracts simplified request definitions from a Postman Collection v2.1 JSON file. It parses the collection structure and returns an array of objects with name, method, path, headers, and body for each request.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your Postman Collection JSON into the input field.</li><li>Click "Extract Requests" to parse the collection.</li><li>Copy the simplified JSON array for use in documentation or further processing.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it support Postman folder structures?</h3><p>Yes, it recursively traverses nested folders and extracts all requests into a flat array.</p>
        <h3>Are Postman variables and scripts preserved?</h3><p>This extractor focuses on the core request details (method, URL, headers, body). Variables and scripts are not included in the simplified output.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-postman">JSON to Postman Collection Converter</a></li><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-to-yaml">JSON to YAML Converter</a></li></ul>
      </article>
    </>
  )
}
