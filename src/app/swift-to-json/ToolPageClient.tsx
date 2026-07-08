'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { swiftToJson } from '@/lib/converters'

const example = `struct User: Codable {
  let name: String
  let age: Int
  let email: String
  let isActive: Bool
}`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Swift to JSON Generator"
        description="Generate sample JSON data from Swift struct definitions instantly."
        inputPlaceholder="Paste your source code here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={swiftToJson}
        exampleInput={example}
        inputLanguage="swift"
        outputLanguage="json"
      />
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Are Swift Structs?</h2>
        <p>Swift structs conforming to Codable are value types that can be encoded to JSON using JSONEncoder and decoded with JSONDecoder. They are the foundation of data modeling in iOS and macOS development.</p>
        <p>Swift structs are used for:</p>
        <ul>
          <li><strong>iOS Apps</strong>: API response models with URLSession.</li>
          <li><strong>SwiftUI</strong>: Data models for reactive UI bindings.</li>
          <li><strong>macOS Apps</strong>: Property list and JSON serialization.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>Swift Structs vs JSON: Understanding the Difference</h2>
        <p>Swift Structs define the structure and types of data in code, while JSON provides a language-agnostic serialization format. Converting one to the other is essential for data interchange between services written in different languages.</p>
        <p>Type definitions describe the shape of data (what fields exist and their types), while JSON represents actual data values. This conversion helps you visualize the JSON shape that your code definitions represent.</p>
        <h2>How to Convert Swift Structs to JSON Online</h2>
        <ol>
          <li><strong>Paste your code</strong>: Copy your swift structs definition from your editor.</li>
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
        <p>Converting swift structs to JSON is useful for generating API documentation from code, creating test fixtures from type definitions, producing sample data for frontend development, or debugging serialization issues by examining expected JSON shapes.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-swift">JSON to Swift Structs</a> — Reverse direction: generate swift structs from JSON</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces from JSON samples</li>
          <li><a href="/json-to-python">JSON to Python</a> — Generate Python dataclasses from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
