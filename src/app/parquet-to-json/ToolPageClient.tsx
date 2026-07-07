'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { parquetToJson, jsonToParquet } from '@/lib/converters'

const example = 'Row Group 1 (3 rows):\n  name: BYTE_ARRAY (optional)\n  age: INT64 (optional)'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Parquet to JSON Converter"
        description="Convert Apache Parquet schema representation back to sample JSON data."
        inputPlaceholder="Paste your Parquet schema here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Parquet to JSON"
        onConvert={parquetToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToParquet}
        toolSlug="parquet-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Apache Parquet?</h2>
        <p>Apache Parquet is a columnar storage format optimized for analytical workloads. It stores data column-by-column rather than row-by-row, enabling superior compression and query performance. Parquet files contain metadata describing the schema, including column names, types, and compression details.</p>
        <p>Parquet schemas include:</p>
        <ul>
          <li><strong>Column Names</strong>: The name of each field in the dataset.</li>
          <li><strong>Data Types</strong>: Primitive types like INT32, INT64, BYTE_ARRAY, and more.</li>
          <li><strong>Nullability</strong>: Whether each column can contain null values.</li>
          <li><strong>Row Groups</strong>: Horizontal partitions of the data for parallel processing.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON is a flexible, row-based format that is easy to read and work with in most programming languages. Converting Parquet schema information to JSON makes it accessible for documentation, visualization, and sharing with team members who may not work directly with Parquet files.</p>
        <h2>Why Convert Parquet to JSON?</h2>
        <p>Converting Parquet schema representations to JSON helps data engineers and analysts understand the structure of their columnar data without needing specialized Parquet tools. It is commonly used for schema documentation, data exploration, and integration with JSON-friendly systems.</p>
        <h2>How to Convert Parquet to JSON Online</h2>
        <ol>
          <li><strong>Paste your Parquet schema</strong>: Copy the column description or schema representation into the input box.</li>
          <li><strong>Click Convert</strong>: Press the button to transform the schema into sample JSON data.</li>
          <li><strong>Review the Output</strong>: Check that the generated JSON reflects the correct column names and types.</li>
          <li><strong>Copy & Use</strong>: Use the Copy button to save the JSON representation for documentation or integration.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this Parquet to JSON converter safe?</h3>
        <p>Yes. All processing is done 100% client-side in your browser. Your data never leaves your device.</p>
        <h3>Can I convert actual Parquet binary files?</h3>
        <p>This tool works with Parquet schema descriptions. For full binary Parquet file conversion, use tools like Apache Spark or Parquet CLI.</p>
        <h3>What types of columns does the converter handle?</h3>
        <p>The converter handles primitive Parquet types including INT32, INT64, FLOAT, DOUBLE, BYTE_ARRAY, and their logical types like STRING, DATE, and TIMESTAMP.</p>
        <h2>Real-World Examples</h2>
        <p>When documenting a data lake schema, engineers convert Parquet column definitions to JSON for easy sharing with stakeholders. This helps bridge the gap between the Parquet storage layer and application-level data models, making data structures accessible to a wider audience.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-parquet">JSON to Parquet</a> — convert JSON to Parquet schema representation</li>
          <li><a href="/json-to-avro">JSON to Avro</a> — convert JSON to Avro schema format</li>
          <li><a href="/csv-to-json">CSV to JSON</a> — convert CSV files to JSON format</li>
        </ul>
      </article>
    </>
  )
}
