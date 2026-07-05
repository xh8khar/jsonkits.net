'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { bsonToJson, jsonToBson } from '@/lib/converters'

const example = '{"name":"Alice","age":{"$numberInt":"30"},"createdAt":{"$date":{"$numberLong":"1705276800000"}},"_id":{"$oid":"507f1f77bcf86cd799439011"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="BSON to JSON Converter" description="Convert MongoDB extended JSON (BSON) format back to standard JSON." inputPlaceholder="Paste your MongoDB extended JSON here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={bsonToJson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={jsonToBson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is BSON to JSON Converter?</h2>
        <p>This tool converts MongoDB extended JSON (BSON representation) back to standard JSON. It unwraps $numberInt, $numberDouble, $numberLong, $date, $oid, and other BSON type wrappers, restoring plain JSON values.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your MongoDB extended JSON into the input field.</li><li>Click "Convert to JSON" to transform it back to standard JSON.</li><li>Copy the clean JSON for use in other tools or applications.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What BSON types are supported?</h3><p>The converter handles $numberInt, $numberDouble, $numberLong, $date, $oid, $binary, $timestamp, $regex, $undefined, $null, $minKey, $maxKey, and $symbol.</p>
        <h3>Will I lose precision with large numbers?</h3><p>The converter preserves numeric values as numbers. Extremely large integers from $numberLong may use string representation to avoid precision loss in JSON.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-bson">JSON to BSON Converter</a></li><li><a href="/json-validator">JSON Validator</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
