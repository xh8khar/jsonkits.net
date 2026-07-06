'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { binaryToJson, jsonToBinary } from '@/lib/converters'

const example = '0111101100100010011010000110010101101100011011000110111100100010001110100010001001110111011011110111001001101100011001000010001001111101'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Binary to JSON Converter" description="Convert binary strings back into readable JSON format. Decodes 8-bit binary sequences to characters." inputPlaceholder="Paste binary string here..." outputPlaceholder="JSON output will appear here..." convertLabel="Convert to JSON" onConvert={binaryToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToBinary} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Binary to JSON Conversion?</h2>
        <p>Binary to JSON conversion takes an 8-bit binary string and decodes it back into readable JSON. Each group of 8 binary digits represents a single character via its ASCII code. This tool is essential for recovering data from binary-encoded logs, reversing data transformations, and understanding how digital information is stored and transmitted.</p>
        <h2>How to Convert Binary to JSON</h2>
        <ol><li><strong>Paste your binary string</strong> containing only 0s and 1s. The length must be a multiple of 8.</li><li><strong>Click Convert to JSON</strong> to decode each 8-bit sequence into its corresponding ASCII character and reconstruct the JSON.</li><li><strong>Verify the output</strong> is valid JSON and copy it for use in your application.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What happens if my binary string length is not a multiple of 8?</h3><p>The tool will show an error. Each character requires exactly 8 bits, so the binary string length must be divisible by 8.</p>
        <h3>Does the tool handle whitespace in binary input?</h3><p>Yes. Spaces and other whitespace are automatically stripped from the input before decoding.</p>
        <h3>Can I convert JSON to binary?</h3><p>Yes, use the Swap button to convert JSON data into its binary string representation.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-binary">JSON to Binary Converter</a></li><li><a href="/json-to-yaml">JSON to YAML</a></li><li><a href="/json-validator">JSON Validator</a></li></ul>
      </article>
    </>
  )
}
