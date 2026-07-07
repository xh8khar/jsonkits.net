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
        <h2>What Is Hive DDL?</h2>
        <p>Hive DDL (Data Definition Language) consists of CREATE, ALTER, and DROP statements used to define table structures in Apache Hive. When working with JSON data, Hive uses a JSON SerDe (Serializer/Deserializer) to parse and query the data using SQL-like syntax.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Big Data Warehousing</strong>: Quickly generate Hive table definitions for JSON datasets stored in HDFS or S3.</li>
          <li><strong>Schema-on-Read</strong>: Define external Hive tables over raw JSON files without pre-loading data.</li>
          <li><strong>ETL Pipeline Setup</strong>: Bootstrap Hive tables for downstream processing with tools like Pig, Spark, or MapReduce.</li>
        </ul>
        <h2>How to Use JSON to Hive DDL Online</h2>
        <ol>
          <li><strong>Paste your JSON sample</strong>: Enter a representative JSON record that matches the structure of your data files.</li>
          <li><strong>Click Generate Hive DDL</strong>: The tool produces a complete CREATE TABLE statement with ROW FORMAT SERDE and column definitions.</li>
          <li><strong>Execute in Hive</strong>: Run the generated DDL in your Hive CLI, Beeline, or Hue to create the table and start querying your JSON data.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is a JSON SerDe in Hive?</h3>
        <p>A JSON SerDe (org.apache.hive.hcatalog.data.JsonSerDe) is a Hive serialization library that allows Hive to read and write JSON-formatted data. The generated DDL includes the necessary SerDe class and table properties for Hive to parse JSON files correctly.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Data analysts in Hadoop ecosystems often receive JSON log files or API exports that need to be queried with HiveQL. Rather than manually constructing DDL with SerDe properties and column mappings — which is tedious for wide schemas — this tool generates the complete Hive table definition from a single JSON record, accelerating the time from data landing to query execution.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-pyspark-schema">JSON to PySpark Schema</a> — Generate PySpark StructType schemas from JSON data</li>
          <li><a href="/json-to-snowflake">JSON to Snowflake</a> — Generate Snowflake table schemas from JSON data</li>
          <li><a href="/json-to-dbml">JSON to DBML</a> — Generate Database Markup Language from JSON</li>
        </ul>
      </article>
    </>
  )
}
