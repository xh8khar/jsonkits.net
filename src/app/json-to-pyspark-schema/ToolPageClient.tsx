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
        <h2>What Is a PySpark Schema?</h2>
        <p>A PySpark schema defines the structure of a DataFrame using StructType and StructField to specify column names, data types, and nullability. Schemas are critical in Spark applications to ensure data quality and enable optimized query execution.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Spark ETL Pipelines</strong>: Define precise schemas for reading JSON data into Spark DataFrames without inference overhead.</li>
          <li><strong>Data Validation</strong>: Enforce type constraints and nullability rules on incoming data streams in PySpark jobs.</li>
          <li><strong>Schema Enforcement</strong>: Generate reusable StructType definitions for production Spark applications to prevent schema drift.</li>
        </ul>
        <h2>How to Use JSON to PySpark Schema Online</h2>
        <ol>
          <li><strong>Paste your JSON sample</strong>: Enter representative JSON data that reflects the structure you want to convert into a PySpark schema.</li>
          <li><strong>Click Generate PySpark Schema</strong>: The tool analyzes your JSON and produces a complete StructType definition with inferred data types.</li>
          <li><strong>Copy into your Spark job</strong>: Use the generated schema in your PySpark code with spark.read.schema(custom_schema).json(path).</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Why define a schema explicitly instead of using Spark inference?</h3>
        <p>Explicit schemas improve performance by avoiding schema inference passes, ensure type consistency across runs, and catch data quality issues early. They are considered a best practice in production Spark pipelines.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers working with Apache Spark often ingest JSON data from sources like Kafka, S3, or HDFS. Instead of manually typing StructType definitions — which is error-prone for wide tables with dozens of columns — this tool generates the schema automatically from a JSON sample, ensuring all nested fields and data types are correctly represented.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-pandas">JSON to Pandas</a> — Generate Python Pandas DataFrame code from JSON</li>
          <li><a href="/json-to-hive-ddl">JSON to Hive DDL</a> — Generate Apache Hive CREATE TABLE statements from JSON</li>
          <li><a href="/json-to-snowflake">JSON to Snowflake</a> — Generate Snowflake table schemas from JSON data</li>
        </ul>
      </article>
    </>
  )
}
