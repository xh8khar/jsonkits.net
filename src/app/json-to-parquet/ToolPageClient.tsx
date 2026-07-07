'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToParquet, parquetToJson } from '@/lib/converters'

const example = '[{"name":"Alice","age":30,"city":"NYC"},{"name":"Bob","age":25,"city":"SF"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Parquet Converter"
        description="Convert JSON data to Apache Parquet schema and structure representation."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Parquet schema will appear here..."
        convertLabel="JSON to Parquet"
        onConvert={jsonToParquet}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        bidirectional
        onReverse={parquetToJson}
        toolSlug="json-to-parquet"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Apache Parquet?</h2>
        <p>Apache Parquet is a columnar storage format designed for efficient data storage and retrieval. Unlike row-based formats like JSON or CSV, Parquet stores data by column, which enables better compression and faster query performance for analytical workloads.</p>
        <p>Parquet is widely used for:</p>
        <ul>
          <li><strong>Big Data Analytics</strong>: Storing large datasets in Hadoop, Spark, and AWS Athena.</li>
          <li><strong>Data Warehousing</strong>: Optimizing storage for column-oriented queries.</li>
          <li><strong>Machine Learning</strong>: Preparing training data with efficient column access.</li>
          <li><strong>ETL Pipelines</strong>: Intermediate storage format for data transformations.</li>
        </ul>
        <h2>What Is JSON?</h2>
        <p>JSON is a row-based format where all fields for a record are stored together. While this is intuitive and widely supported, it leads to larger file sizes and slower analytical queries compared to columnar formats like Parquet.</p>
        <h2>Parquet vs. JSON: Key Differences</h2>
        <p>The main difference is storage orientation. JSON stores data row-by-row, which is great for APIs but inefficient for analytics. Parquet stores data column-by-column, enabling compression ratios of 10x or more and query performance that reads only the columns you need.</p>
        <h2>How to Convert JSON to Parquet Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON array of objects into the input box.</li>
          <li><strong>Click Convert</strong>: Press the button to generate a Parquet schema representation from your JSON data.</li>
          <li><strong>Review the Schema</strong>: Examine the column names, data types, and nullability information in the output.</li>
          <li><strong>Copy for Documentation</strong>: Use the Copy button to save the Parquet schema for your data pipeline documentation.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this JSON to Parquet converter safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Your data is never uploaded to any server.</p>
        <h3>Does this tool generate actual Parquet files?</h3>
        <p>This tool generates a Parquet schema representation showing column types and structure. For actual Parquet file generation, use tools like Apache Spark or Parquet CLI.</p>
        <h3>What data types does Parquet support?</h3>
        <p>Parquet supports BOOLEAN, INT32, INT64, FLOAT, DOUBLE, BYTE_ARRAY, and FIXED_LEN_BYTE_ARRAY, along with logical types like STRING, DATE, TIMESTAMP, and DECIMAL mapped on top.</p>
        <h2>Real-World Examples</h2>
        <p>Data engineers frequently convert JSON API responses to Parquet format for storage in data lakes. This conversion reduces storage costs by up to 80% and dramatically speeds up analytical queries on platforms like Amazon Athena, Google BigQuery, and Apache Spark.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/parquet-to-json">Parquet to JSON</a> — convert Parquet schema back to JSON</li>
          <li><a href="/json-to-avro">JSON to Avro</a> — convert JSON to Avro schema format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — convert JSON arrays to CSV format</li>
        </ul>
      </article>
    </>
  )
}
