'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToBinary, binaryToJson } from '@/lib/converters'

const example = '{"hello":"world"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Binary Converter" description="Convert JSON data to binary (0/1) string representation. Each character becomes 8 bits of binary." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Binary output will appear here..." convertLabel="Convert to Binary" onConvert={jsonToBinary} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={binaryToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to Binary Conversion?</h2>
        <p>Binary representation converts each character of a JSON string into its 8-bit binary equivalent using ASCII character codes. This transformation is useful for understanding how text data is stored at the lowest level, debugging network protocols, and teaching computer science concepts about data encoding.</p>
        <h2>How to Convert JSON to Binary</h2>
        <ol><li><strong>Paste your JSON data</strong> into the input area. Ensure the JSON is properly formatted and valid.</li><li><strong>Click Convert to Binary</strong> to transform each character into an 8-digit binary sequence.</li><li><strong>Copy the binary string</strong> for use in low-level data analysis, embedded systems, or educational demonstrations.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How is the JSON converted to binary?</h3><p>The JSON string is serialized and each character's ASCII code is converted to an 8-bit binary number. For example, the character <code>{"{"}</code> (ASCII 123) becomes <code>01111011</code>.</p>
        <h3>Can I convert binary back to JSON?</h3><p>Yes, use the Swap button to decode an 8-bit binary string back into readable JSON format.</p>
        <h3>Does the binary output include whitespace?</h3><p>The binary output is a continuous string of 0s and 1s with no spaces. This ensures the conversion is lossless and reversible.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/binary-to-json">Binary to JSON Converter</a></li><li><a href="/json-to-yaml">JSON to YAML</a></li><li><a href="/json-to-csv">JSON to CSV</a></li></ul>
      </article>
    </>
  )
}
