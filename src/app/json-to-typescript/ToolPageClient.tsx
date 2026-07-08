'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToTypescript } from '@/lib/converters'

const example = JSON.stringify({ name: 'JSONKits', version: 1, features: ['formatter', 'validator', 'converter'], active: true, metadata: { author: 'Dev', created: '2024-01-01' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to TypeScript Interface Generator"
        description="Generate TypeScript interfaces from your JSON data instantly. Perfect for defining types for API responses, configuration objects, and data models."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="TypeScript interfaces will appear here..."
        convertLabel="Generate Interface"
        onConvert={jsonToTypescript}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="typescript"
      />
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON?</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. Originally specified by Douglas Crockford, it is based on a subset of the JavaScript Programming Language Standard ECMA-262.</p>
        <p>JSON is widely used for:</p>
        <ul>
          <li><strong>Web APIs</strong>: Sending data between a server and a client (browser or mobile app).</li>
          <li><strong>Configuration</strong>: Storing settings for web applications (e.g., package.json, tsconfig.json).</li>
          <li><strong>Data Storage</strong>: NoSQL databases like MongoDB use JSON-like documents (BSON) to store records.</li>
          <li><strong>Data Transfer</strong>: Lightweight format for real-time data exchange between microservices.</li>
        </ul>
        <h2>What Are TypeScript Interfaces?</h2>
        <p>TypeScript interfaces define the shape of data objects using type annotations for each property. They provide compile-time type checking and excellent developer experience with autocompletion.</p>
        <p>TypeScript interfaces are essential for:</p>
        <ul>
          <li><strong>Frontend Apps</strong>: Typing API responses in React, Angular, and Vue.</li>
          <li><strong>Node.js Backends</strong>: Type-safe data models for server applications.</li>
          <li><strong>Library Development</strong>: Public API contracts for npm packages.</li>
        </ul>
        <h2>Why Generate TypeScript Interfaces from JSON?</h2>
        <p>Manually writing typescript interfaces for every API response is tedious and error-prone. Automatic generation ensures your types always match the actual data structure, saving time and preventing bugs. This is especially valuable when:</p>
        <ul>
          <li><strong>Consuming new APIs</strong>: Get instant type definitions from a sample response.</li>
          <li><strong>Prototyping</strong>: Quickly define data models for new features.</li>
          <li><strong>Documentation</strong>: Generate type stubs for API documentation.</li>
        </ul>
        <h2>How to Generate TypeScript Interfaces</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy a sample JSON response from your API or editor.</li>
          <li><strong>Click Generate</strong>: Press the convert button to process your input.</li>
          <li><strong>Review Output</strong>: Your typescript interfaces definitions appear instantly in the output panel.</li>
          <li><strong>Copy to Project</strong>: Use the Copy button to grab the code and paste it into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are nested objects handled?</h3>
        <p>Nested objects generate their own named type definition, referenced from the parent type. This keeps your code organized and reusable.</p>
        <h3>How are arrays typed?</h3>
        <p>Arrays infer their element type from the first item. Arrays of objects generate a collection type (List, array, slice) of the corresponding object type.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. This tool operates 100% client-side. Your JSON data never leaves your browser and is processed locally. We do not store, track, or upload your data.</p>
        <h2>Real-World Examples</h2>
        <p>Generating typescript interfaces from JSON is essential when consuming a new REST or GraphQL API — paste a sample response to get immediately usable type definitions, create typed configuration objects for your application, build data models for microservice communication, or generate models for database query results.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces from JSON samples</li>
          <li><a href="/json-to-python">JSON to Python</a> — Generate Python dataclasses from JSON samples</li>
          <li><a href="/json-to-go">JSON to Go</a> — Generate Go structs with JSON tags from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
