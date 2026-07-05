'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { postgresqlToJson, jsonToPostgresql } from '@/lib/converters'

const example = 'INSERT INTO json_data ("id", "name", "age", "active") VALUES (1, \'Alice\', 30, TRUE);'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="PostgreSQL to JSON Converter" description="Parse PostgreSQL INSERT statements back into structured JSON format. Extracts column names and values." inputPlaceholder="Paste your PostgreSQL INSERT statement here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={postgresqlToJson} exampleInput={example} inputLanguage="sql" outputLanguage="json" bidirectional onReverse={jsonToPostgresql} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is PostgreSQL to JSON Converter?</h2>
        <p>This tool takes PostgreSQL INSERT statements and converts them into clean JSON objects. Column names become keys and values are mapped to their JSON equivalents, with proper type handling for numbers, booleans, and strings.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your PostgreSQL INSERT statement into the input field.</li><li>Click "Convert to JSON" to parse the SQL.</li><li>Copy the resulting JSON for use in your applications.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can it handle multi-row INSERT statements?</h3><p>Yes, the converter supports INSERT statements with multiple value tuples and returns an array of objects.</p>
        <h3>Does it support all PostgreSQL data types?</h3><p>It handles common types including integers, floats, booleans, strings, and NULL values. Complex types like arrays or JSON columns are treated as text.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li><li><a href="/mysql-to-json">MySQL to JSON Converter</a></li><li><a href="/json-to-mysql">JSON to MySQL Converter</a></li></ul>
      </article>
    </>
  )
}
