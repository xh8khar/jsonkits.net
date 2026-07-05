'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { arrayToJson, jsonToArray } from '@/lib/converters'

const example = '[{"key":"name","value":"Alice"},{"key":"age","value":30},{"key":"city","value":"NYC"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Array to JSON Object Converter" description="Convert arrays of {key, value} objects back into structured JSON objects." inputPlaceholder="Paste array of key-value pairs here..." outputPlaceholder="JSON object will appear here..." convertLabel="Convert to Object" onConvert={arrayToJson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={jsonToArray} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Array to JSON Object Conversion?</h2>
        <p>Many data formats and APIs return data as arrays of key-value pair objects. This tool reconstructs a standard JSON object from such arrays, combining each element's <code>key</code> and <code>value</code> properties into a single flat object. This is essential for normalizing data from form submissions, database exports, and certain serialization formats.</p>
        <h2>How to Convert Array to JSON Object</h2>
        <ol><li><strong>Paste your JSON array</strong> of <code>{"{"}key, value{"}"}</code> objects. Each element must have a <code>key</code> property and a <code>value</code> property.</li><li><strong>Click Convert to Object</strong> to combine all pairs into a single JSON object where each key maps to its corresponding value.</li><li><strong>Copy the resulting object</strong> for use in your application, API requests, or further data processing.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What happens if duplicate keys exist?</h3><p>The last occurrence of a key overwrites previous ones. Ensure your input array has unique keys for predictable results.</p>
        <h3>What if an element is missing the key or value property?</h3><p>Elements without a <code>key</code> property are skipped. Elements missing a <code>value</code> will have <code>undefined</code> as their value in the output.</p>
        <h3>Can I convert a JSON object to an array?</h3><p>Yes, use the Swap button to break a JSON object into an array of key-value pair elements.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-array">JSON Object to Array</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
