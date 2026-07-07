'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPysparkSchema } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"active":true,"score":95.5}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PySpark Schema - Generate PySpark StructType"
        description="Generate PySpark StructType schema definitions from JSON data samples for Spark data processing."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated PySpark schema will appear here..."
        convertLabel="Generate PySpark Schema"
        onConvert={jsonToPysparkSchema}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="python"
        toolSlug="json-to-pyspark-schema"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates PySpark StructType schema definitions from JSON data samples, saving time when defining schemas for Spark data processing pipelines.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
