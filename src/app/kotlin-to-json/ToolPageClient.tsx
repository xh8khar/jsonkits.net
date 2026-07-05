'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { kotlinToJson } from '@/lib/converters'

const example = `@Serializable
data class User(
  val name: String,
  val age: Int,
  val email: String,
  val isActive: Boolean
)`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Kotlin to JSON Generator"
        description="Generate sample JSON data from Kotlin data class definitions instantly."
        inputPlaceholder="Paste your source code here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Convert to JSON"
        onConvert={kotlinToJson}
        exampleInput={example}
        inputLanguage="kotlin"
        outputLanguage="json"
      />
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Are Kotlin Data Classes?</h2>
        <p>Kotlin data classes are concise classes designed to hold data, automatically generating equals(), hashCode(), toString(), and copy() methods. They work seamlessly with kotlinx.serialization.
        <p>Kotlin data classes excel at:</p>
        <ul>
          <li><strong>Android Apps</strong>: Room database entities and API models.</li>
          <li><strong>Ktor Backends</strong>: Request/response serialization.</li>
          <li><strong>Multiplatform</strong>: Shared data models across platforms.</li>
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
        <h2>Kotlin Data Classes vs JSON: Understanding the Difference</h2>
        <p>Kotlin Data Classes define the structure and types of data in code, while JSON provides a language-agnostic serialization format. Converting one to the other is essential for data interchange between services written in different languages.</p>
        <p>Type definitions describe the shape of data (what fields exist and their types), while JSON represents actual data values. This conversion helps you visualize the JSON shape that your code definitions represent.</p>
        <h2>How to Convert Kotlin Data Classes to JSON Online</h2>
        <ol>
          <li><strong>Paste your code</strong>: Copy your kotlin data classes definition from your editor.</li>
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
        <p>Converting kotlin data classes to JSON is useful for generating API documentation from code, creating test fixtures from type definitions, producing sample data for frontend development, or debugging serialization issues by examining expected JSON shapes.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-kotlin">JSON to Kotlin Data Classes</a> — Reverse direction: generate kotlin data classes from JSON</li>
          <li><a href="/json-to-typescript">JSON to TypeScript</a> — Generate TypeScript interfaces from JSON samples</li>
          <li><a href="/json-to-python">JSON to Python</a> — Generate Python dataclasses from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
