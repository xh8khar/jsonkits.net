'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToArray, arrayToJson } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"city":"NYC"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Object to Array Converter" description="Convert JSON objects into arrays of key-value pair objects. Useful for data transformations." inputPlaceholder="Paste your JSON object here..." outputPlaceholder="Array output will appear here..." convertLabel="Convert to Array" onConvert={jsonToArray} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={arrayToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Object to Array Conversion?</h2>
        <p>JSON objects store data as key-value pairs, but some data processing workflows require an array format. This tool converts each key-value pair from your JSON object into an array element containing <code>{"{"}key, value{"}"}</code> objects. This transformation is commonly used when preparing data for table views, spreadsheet exports, and certain database operations.</p>
        <h2>How to Convert JSON Object to Array</h2>
        <ol><li><strong>Paste your JSON object</strong> with one or more key-value pairs.</li><li><strong>Click Convert to Array</strong> to transform each pair into an array element with <code>key</code> and <code>value</code> properties.</li><li><strong>Copy the resulting array</strong> for use in data pipelines, frontend components that require array inputs, or further transformations.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What happens to nested values?</h3><p>Nested values are preserved as-is within the <code>value</code> field of each array element. The tool only transforms the top-level object structure.</p>
        <h3>Does the tool support arrays as input?</h3><p>The converter expects a JSON object as input. Arrays and primitive values will produce an error. Use the Swap button to convert arrays back to objects.</p>
        <h3>Can I convert the array back to an object?</h3><p>Yes, use the Swap button to reconstruct a JSON object from an array of <code>{"{"}key, value{"}"}</code> elements.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/array-to-json">Array to JSON Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-to-csv">JSON to CSV</a></li></ul>
      </article>
    </>
  )
}
