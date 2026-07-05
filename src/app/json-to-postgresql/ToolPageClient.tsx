'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPostgresql, postgresqlToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to PostgreSQL Converter" description="Generate PostgreSQL CREATE TABLE and INSERT statements from JSON arrays. Auto-detects column types as INTEGER, DOUBLE PRECISION, BOOLEAN, or TEXT." inputPlaceholder="Paste your JSON array here..." outputPlaceholder="Generated SQL will appear here..." convertLabel="Generate SQL" onConvert={jsonToPostgresql} exampleInput={example} inputLanguage="json" outputLanguage="sql" bidirectional onReverse={postgresqlToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to PostgreSQL Converter?</h2>
        <p>This tool converts a JSON array of objects into PostgreSQL-compatible SQL statements. It generates a CREATE TABLE statement with columns typed as TEXT, INTEGER, DOUBLE PRECISION, or BOOLEAN, followed by INSERT statements for each object.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array into the input field.</li><li>Click "Generate SQL" to convert.</li><li>Copy the generated SQL and run it in your PostgreSQL database.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What data types are supported?</h3><p>The converter maps JSON types to PostgreSQL types: strings to TEXT, numbers to INTEGER or DOUBLE PRECISION (if decimal), booleans to BOOLEAN, and null to TEXT.</p>
        <h3>Can I convert SQL back to JSON?</h3><p>Yes, toggle the direction or use the PostgreSQL to JSON tool to parse INSERT statements back into JSON.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/postgresql-to-json">PostgreSQL to JSON Converter</a></li><li><a href="/json-to-mysql">JSON to MySQL Converter</a></li><li><a href="/json-to-sqlite">JSON to SQLite Converter</a></li></ul>
      </article>
    </>
  )
}
