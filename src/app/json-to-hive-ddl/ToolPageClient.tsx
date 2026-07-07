'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToHiveDdl } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Hive DDL - Generate Hive Table Schemas"
        description="Generate Apache Hive DDL CREATE TABLE statements with JSON SerDe from JSON data samples."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated Hive DDL will appear here..."
        convertLabel="Generate Hive DDL"
        onConvert={jsonToHiveDdl}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="sql"
        toolSlug="json-to-hive-ddl"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Apache Hive DDL CREATE TABLE statements with JSON SerDe configuration from your JSON data samples.</p>
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
