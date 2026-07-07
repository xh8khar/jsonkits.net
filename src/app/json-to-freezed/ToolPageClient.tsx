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
        <h2>What Is Dart Freezed?</h2>
        <p>Freezed is a code generator for Dart that creates immutable data classes with JSON serialization, copyWith methods, and pattern matching support.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a sample JSON object in the editor</li>
          <li>Click the Generate Freezed button</li>
          <li>Copy the generated Dart code to your Flutter project</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}
