'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToBson, bsonToJson } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"createdAt":"2024-01-15T00:00:00.000Z","_id":"507f1f77bcf86cd799439011"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to BSON Converter" description="Convert standard JSON to MongoDB extended JSON (BSON) format. Numbers become $numberInt/$numberDouble, dates become $date." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Converted BSON will appear here..." convertLabel="Convert to BSON" onConvert={jsonToBson} exampleInput={example} inputLanguage="json" outputLanguage="json" bidirectional onReverse={bsonToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to BSON Converter?</h2>
        <p>This tool converts standard JSON into MongoDB's extended JSON format (commonly called BSON representation). Numbers are wrapped in $numberInt or $numberDouble, ISO date strings become $date with $numberLong timestamps, and ObjectId strings become $oid.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your standard JSON into the input field.</li><li>Click "Convert to BSON" to transform it.</li><li>Use the output in MongoDB queries, scripts, or migrations.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What formats does it recognize for dates?</h3><p>ISO 8601 date strings (e.g., "2024-01-15T00:00:00.000Z") and numeric timestamps are detected and converted to $date format.</p>
        <h3>Can I convert BSON back to standard JSON?</h3><p>Yes, toggle the direction or use the BSON to JSON converter.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/bson-to-json">BSON to JSON Converter</a></li><li><a href="/json-to-postman">JSON to Postman Collection Converter</a></li><li><a href="/json-to-mongodb">JSON to MongoDB Converter</a></li></ul>
      </article>
    </>
  )
}
