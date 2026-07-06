'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { avroToJson } from '@/lib/converters'

const example = JSON.stringify({
  schema: '{"type":"record","name":"RootType","fields":[{"name":"name","type":"string"},{"name":"version","type":"double"},{"name":"active","type":"boolean"}]}',
  data: '{"name":"JSONKits","version":1,"active":true}'
}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Apache Avro to JSON"
        description="Parse an Avro schema definition and generate a sample JSON structure — validate your schema design."
        inputPlaceholder='Paste schema in JSON format, then data (optional) under {"schema":..., "data":...} format...'
        outputPlaceholder="Output will appear here..."
        convertLabel="Convert"
        onConvert={avroToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>Apache Avro to JSON Conversion</h2>
        <p>This tool accepts an Apache Avro schema definition and optional sample data, then returns a validated schema structure. It is useful for quickly checking your Avro schema design.</p>
        <h2>How to Use</h2>
        <ol>
          <li><strong>Enter your Avro schema</strong>: Provide an Avro schema in JSON format.</li>
          <li><strong>Click Convert</strong>: Process your input.</li>
          <li><strong>Review Output</strong>: The result appears instantly.</li>
        </ol>
      </article>
    </>
  )
}
