'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { json5ToJson, jsonToJson5 } from '@/lib/converters'

const example = '{// config\nname: "JSONKits",\nversion: "1.0.0",\n}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON5 to JSON Converter"
        description="Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format."
        inputPlaceholder="Paste your JSON5 here..."
        outputPlaceholder="Standard JSON will appear here..."
        convertLabel="JSON5 to JSON"
        onConvert={json5ToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToJson5}
        toolSlug="json5-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON5?</h2>
        <p>JSON5 is an extension of the JSON format designed to make it easier for humans to write and maintain. It retains the full expressiveness of JSON while adding features that developers commonly expect, such as comments, unquoted keys, trailing commas, and more flexible number and string syntax.</p>
        <p>JSON5 is commonly used for:</p>
        <ul>
          <li><strong>Configuration Files</strong>: Adding explanatory comments to config files.</li>
          <li><strong>Development Scripts</strong>: Writing data by hand with fewer syntactic restrictions.</li>
          <li><strong>Build Tools</strong>: Tools like Babel and webpack support JSON5 for their configs.</li>
          <li><strong>Data Samples</strong>: Providing annotated example data for documentation.</li>
        </ul>
        <h2>What Is Standard JSON?</h2>
        <p>Standard JSON (RFC 8259) is a strict subset of JavaScript object literal syntax. It requires double-quoted strings, no comments or trailing commas, and specific formatting for numbers and special characters. While this strictness makes parsing fast and predictable, it can be tedious for humans to write.</p>
        <h2>JSON5 vs. JSON: Key Differences</h2>
        <p>The primary difference is developer experience. JSON5 allows single-quoted and unquoted strings, multiline strings, comments, trailing commas, hexadecimal numbers, and leading decimal points. Standard JSON permits none of these, making JSON5 significantly more user-friendly for hand-written files.</p>
        <h2>How to Convert JSON5 to JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON5</strong>: Copy your JSON5 code into the input box.</li>
          <li><strong>Review for Issues</strong>: The tool automatically validates and prepares your input for conversion.</li>
          <li><strong>Click Convert</strong>: Press the button to transform JSON5 into strict standard JSON without comments or extra syntax.</li>
          <li><strong>Copy & Use</strong>: Use the Copy button to grab the clean JSON for use in environments that require strict JSON compliance.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this JSON5 to JSON converter safe?</h3>
        <p>Yes. All conversion happens 100% client-side in your browser. Your data is never uploaded to any server.</p>
        <h3>Does the conversion preserve comments?</h3>
        <p>No, standard JSON does not support comments. The converter strips all comments during the conversion. Use the Swap button to convert back to JSON5 where comments are preserved.</p>
        <h3>What happens if my JSON5 has syntax errors?</h3>
        <p>The tool will highlight any invalid syntax so you can fix it before conversion. JSON5 is more lenient than JSON but still follows specific rules.</p>
        <h2>Real-World Examples</h2>
        <p>Developers often write configuration files in JSON5 during development for readability, with the option to convert to strict JSON before deployment. This workflow is common with bundlers like webpack or Parcel, which natively support JSON5 but may need to output standard JSON for production.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-json5">JSON to JSON5</a> — convert standard JSON to JSON5 format</li>
          <li><a href="/jsonc-to-json">JSONC to JSON</a> — convert JSON with comments to standard JSON</li>
          <li><a href="/json-minifier">JSON Minifier</a> — compress JSON by removing whitespace</li>
        </ul>
      </article>
    </>
  )
}
