'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToIoTs } from '@/lib/converters'

const example = JSON.stringify({"id":1,"name":"Alice","email":"alice@example.com"}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to io-ts - TypeScript Runtime Type Generator"
        description="Generate io-ts runtime type codecs from JSON data samples for functional TypeScript."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated codec will appear here..."
        convertLabel="Generate Codec"
        onConvert={jsonToIoTs}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-io-ts"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is io-ts?</h2>
        <p>io-ts is a TypeScript library for runtime type validation using composable codecs that can decode, encode, and validate data at runtime. It follows functional programming principles and integrates tightly with fp-ts for powerful data pipelines.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>API Boundary Validation</strong>: Decode external data at the I/O boundary of your application with guaranteed type safety.</li>
          <li><strong>Data Migration</strong>: Validate legacy data dumps by running them through io-ts codecs generated from your current schema.</li>
          <li><strong>TypeScript Type Derivation</strong>: Use <code>TypeOf</code> to extract static types from your codecs, eliminating type duplication.</li>
        </ul>
        <h2>How to Use the io-ts Codec Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a sample JSON object or array that represents your data shape.</li>
          <li><strong>Click Generate Codec</strong>: The tool produces <code>t.type</code>, <code>t.string</code>, <code>t.number</code>, <code>t.boolean</code>, and <code>t.array</code> codec definitions.</li>
          <li><strong>Copy into your project</strong>: Use <code>codec.decode(data)</code> to validate and type-cast incoming data.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can I use these codecs without fp-ts?</h3>
        <p>Yes. io-ts can be used standalone. The generated codecs work with <code>fold</code> from fp-ts for error handling, but you can also use <code>Either.isLeft</code> for simpler checks without the full fp-ts ecosystem.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A functional TypeScript API gateway can use io-ts codecs generated from this tool to validate every incoming request payload. When the upstream API changes its response shape, developers paste a new sample and regenerate the codec, keeping the gateway's validation layer always in sync.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-valibot">JSON to Valibot</a> — Generate modular Valibot validation schemas from JSON samples.</li>
          <li><a href="/json-to-zod-schema">JSON to Zod Schema</a> — Build Zod validation schemas with type inference from JSON data.</li>
          <li><a href="/json-to-type-guard">JSON to Type Guard</a> — Create TypeScript type guard functions from sample JSON.</li>
        </ul>
      </article>
    </>
  )
}
