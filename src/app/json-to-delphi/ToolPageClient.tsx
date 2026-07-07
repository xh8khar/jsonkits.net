'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDelphi } from '@/lib/converters'

const example = '{"id":1,"productName":"Widget","price":29.99,"inStock":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Delphi - Generate Delphi Pascal Classes"
        description="Generate Delphi/Object Pascal class definitions with published properties from JSON data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated Delphi code will appear here..."
        convertLabel="Generate Delphi Code"
        onConvert={jsonToDelphi}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-delphi"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Delphi Object Pascal?</h2>
        <p>Delphi uses Object Pascal, a powerful object-oriented programming language with published properties that enable runtime type information (RTTI) for JSON serialization and IDE design-time support. Delphi developers often need class definitions that mirror JSON API responses for seamless data binding.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Delphi API Clients</strong>: Generate Delphi classes that map to JSON API responses for use with REST client libraries like RESTClient or NetHTTPClient.</li>
          <li><strong>Data Binding</strong>: Create published-property classes that integrate with Delphi's data-aware controls and LiveBindings for automatic UI updates.</li>
          <li><strong>Legacy System Integration</strong>: Quickly produce Delphi record or class definitions from JSON samples when connecting older Delphi applications to modern web APIs.</li>
        </ul>
        <h2>How to Use JSON to Delphi Online</h2>
        <ol>
          <li><strong>Paste your JSON data</strong>: Enter a JSON object or array that represents the data you want to work with in your Delphi application.</li>
          <li><strong>Click Generate Delphi Code</strong>: The tool produces a complete Delphi class definition with published properties matching your JSON fields.</li>
          <li><strong>Add to your Delphi project</strong>: Copy the generated unit into your Delphi project and use it with TJSON, TJSONObject, or a third-party library like SuperObject for deserialization.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How do I deserialize JSON into the generated Delphi class?</h3>
        <p>You can use Delphi's built-in TJSON.JsonToObject from the System.JSON unit, or third-party libraries like SuperObject or mORMot. The published properties with RTTI attributes in the generated class ensure proper mapping during deserialization.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Delphi developers migrating from SOAP to REST-based services can generate typed classes from sample JSON responses produced by modern web APIs. This eliminates the tedious and error-prone process of manually declaring classes with published properties, especially for APIs with complex nested objects and arrays.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-vba">JSON to VBA</a> — Generate VBA class modules from JSON data</li>
          <li><a href="/json-to-csharp">JSON to C#</a> — Generate C# class definitions from JSON data</li>
          <li><a href="/json-to-python">JSON to Python</a> — Convert JSON to Python dictionary and variable definitions</li>
        </ul>
      </article>
    </>
  )
}
