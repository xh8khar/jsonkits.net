'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { goStructToJson } from '@/lib/converters'

const example = 'type User struct {\n  Name     string \`json:"name"\`\n  Age      int    \`json:"age"\`\n  Email    string \`json:"email"\`\n  IsActive bool   \`json:"isActive"\`\n}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Go Struct to JSON Generator"
        description="Generate sample JSON data from Go struct definitions instantly."
        inputPlaceholder="Paste your source code here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={goStructToJson}
        exampleInput={example}
        inputLanguage="go"
        outputLanguage="json"
      />
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Are Go Structs?</h2>
        <p>Go structs with JSON tags define how Go types map to JSON fields. When paired with json struct tags, they tell the encoding/json package exactly how to serialize and deserialize data.
        <p>Go structs are essential for:</p>
        <ul>
          <li><strong>Web Services</strong>: Typed request/response models for HTTP APIs.</li>
          <li><strong>Microservices</strong>: Data contracts between service boundaries.</li>
          <li><strong>CLI Tools</strong>: Configuration parsing and output formatting.</li>
        </ul></p>
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>Go Structs vs JSON: Understanding the Difference</h2>
        <p>Go Structs define the structure and types of data in code, while JSON provides a language-agnostic serialization format. Converting one to the other is essential for data interchange between services written in different languages.</p>
        <p>Type definitions describe the shape of data (what fields exist and their types), while JSON represents actual data values. This conversion helps you visualize the JSON shape that your code definitions represent.</p>
        <h2>How to Convert Go Structs to JSON Online</h2>
        <ol>
          <li><strong>Paste your code</strong>: Copy your go structs definition from your editor.</li>
          <li><strong>Click Convert</strong>: Press the convert button to transform your code into sample JSON.</li>
          <li><strong>Review Sample</strong>: The generated JSON shows the structure with example values based on your field types.</li>
          <li><strong>Copy & Use</strong>: Use the Copy button to grab the JSON for API documentation, testing, or frontend development.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are field types determined?</h3>
        <p>Field types are inferred from your source code declarations. String fields get string samples, numeric fields get 0, booleans get true, and complex types get appropriate defaults.</p>
        <h3>Are nested objects supported?</h3>
        <p>Flat structures are best supported. Deeply nested objects may produce simplified sample data.</p>
        <h3>Is this tool safe to use with my code?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your code never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Real-World Examples</h2>
        <p>Converting go structs to JSON is useful for generating API documentation from code, creating test fixtures from type definitions, producing sample data for frontend development, or debugging serialization issues by examining expected JSON shapes.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-go">JSON to Go Structs</a> — Reverse direction: generate go structs from JSON</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces from JSON samples</li>
          <li><a href="/json-to-python">JSON to Python</a> — Generate Python dataclasses from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
