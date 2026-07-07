'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToFreezed } from '@/lib/converters'

const example = '{"id":1,"name":"Alice","email":"alice@example.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Dart Freezed"
        description="Generate Dart Freezed data classes with JSON serialization from JSON samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Freezed class will appear here..."
        convertLabel="Generate Freezed"
        onConvert={jsonToFreezed}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="dart"
        toolSlug="json-to-freezed"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Dart Freezed?</h2>
        <p>JSON to Dart Freezed generates immutable Dart data classes with JSON serialization from JSON samples. Freezed is a popular Dart code generator that eliminates boilerplate by creating immutable classes with <code>copyWith</code>, equality overrides, <code>toJson</code>/<code>fromJson</code>, and pattern matching support.</p>
        <p>This tool takes a sample JSON object and produces production-ready Freezed data classes that you can drop directly into your Flutter project. It is perfect for:</p>
        <ul>
          <li><strong>Flutter development</strong>: Quickly create model classes for REST API responses without manual typing.</li>
          <li><strong>Rapid prototyping</strong>: Generate complete data layer code from mock API responses in seconds.</li>
          <li><strong>Consistent patterns</strong>: Ensure all team members use the same Freezed conventions with correct <code>@JsonKey</code> annotations and <code>fromJson</code> factories.</li>
        </ul>
        <h2>How to Convert JSON to Dart Freezed Online</h2>
        <ol>
          <li><strong>Paste a JSON sample</strong>: Copy a JSON object representing your data model and paste it into the editor.</li>
          <li><strong>Click Generate Freezed</strong>: Press the "Generate Freezed" button to produce the Dart code.</li>
          <li><strong>Review the class</strong>: Check the generated class properties, JSON annotations, and factory constructors.</li>
          <li><strong>Copy to your project</strong>: Copy the generated code into your Flutter project's model file and run <code>dart run build_runner build</code> to generate the Freezed implementation.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the generated Freezed class use <code>@JsonKey</code> annotations for snake_case fields?</h3>
        <p>Yes. If your JSON keys use snake_case (e.g., <code>first_name</code>), the generator automatically adds <code>@JsonKey(name: 'first_name')</code> annotations so the Dart camelCase properties map correctly during serialization.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A Flutter mobile developer building a social media app receives a new API specification with 15 JSON endpoints. Instead of hand-writing every model class with Freezed boilerplate, they paste each JSON response into this tool and generate the complete data layer in minutes — saving hours of repetitive coding while ensuring exact alignment with the API contract.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-csharp">JSON to C#</a> — Generate C# class definitions from JSON samples</li>
          <li><a href="/json-to-python">JSON to Python</a> — Generate Python data classes from JSON samples</li>
          <li><a href="/json-to-rust">JSON to Rust</a> — Generate Rust struct definitions from JSON samples</li>
        </ul>
      </article>
    </>
  )
}
