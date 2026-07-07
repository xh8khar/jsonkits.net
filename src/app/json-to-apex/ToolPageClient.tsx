'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToApex } from '@/lib/converters'

const example = '{"Id":"001XX000001","Name":"Acme Corp","Industry":"Technology"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Apex"
        description="Generate Salesforce Apex class definitions with getters/setters from JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Apex class will appear here..."
        convertLabel="Generate Apex"
        onConvert={jsonToApex}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="java"
        toolSlug="json-to-apex"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Salesforce Apex?</h2>
        <p>JSON to Salesforce Apex generates Apex class definitions with typed properties, getters, and setters from JSON data samples. Apex is Salesforce's strongly-typed, object-oriented programming language used to build custom business logic on the Salesforce platform.</p>
        <p>This converter takes any JSON object and produces a ready-to-use Apex class with proper data types, <code>get</code>/<code>set</code> methods, and <code>JSON.deserialize</code> compatibility. It is essential for:</p>
        <ul>
          <li><strong>Salesforce integration</strong>: Create Apex wrapper classes for external REST API responses consumed in your org.</li>
          <li><strong>Rapid Apex development</strong>: Eliminate manual class writing when prototyping new Salesforce integrations or web services.</li>
          <li><strong>Data migration</strong>: Generate typed Apex classes for JSON payloads during data import and ETL processes.</li>
        </ul>
        <h2>How to Convert JSON to Apex Online</h2>
        <ol>
          <li><strong>Paste a JSON sample</strong>: Copy a JSON object from an API response or data file and paste it into the input editor.</li>
          <li><strong>Click Generate Apex</strong>: Press the "Generate Apex" button to create the Apex class definition.</li>
          <li><strong>Review the output</strong>: Check the generated class properties, data types, and getter/setter methods.</li>
          <li><strong>Copy to Salesforce</strong>: Copy the Apex code into your Salesforce Developer Console or VS Code Salesforce project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What Apex data types does the generator use for JSON fields?</h3>
        <p>The generator maps JSON types to appropriate Apex types: strings become <code>String</code>, numbers become <code>Decimal</code>, booleans become <code>Boolean</code>, objects become inner classes, and arrays become <code>List&lt;Type&gt;</code>. Nested objects are generated as inner classes within the main class.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A Salesforce developer integrating a third-party shipping API into a Salesforce org receives JSON response samples from the vendor. By running each sample through this JSON-to-Apex converter, they generate strongly-typed Apex wrapper classes in minutes — ensuring compile-time safety and eliminating manual parsing errors that commonly occur with <code>Map&lt;String, Object&gt;</code> approaches.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-csharp">JSON to C#</a> — Generate C# class definitions from JSON samples</li>
          <li><a href="/json-to-julia">JSON to Julia</a> — Generate Julia struct definitions from JSON samples</li>
          <li><a href="/json-to-rust">JSON to Rust</a> — Generate Rust struct definitions from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
