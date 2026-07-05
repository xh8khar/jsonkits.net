'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { sqliteToJson, jsonToSqlite } from '@/lib/converters'

const example = 'INSERT INTO "json_data" ("id", "name", "age", "active") VALUES (1, \'Alice\', 30, 1);'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="SQLite to JSON Converter" description="Parse SQLite INSERT statements back into JSON format." inputPlaceholder="Paste your SQLite INSERT statement here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={sqliteToJson} exampleInput={example} inputLanguage="sql" outputLanguage="json" bidirectional onReverse={jsonToSqlite} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is SQLite to JSON Converter?</h2>
        <p>This tool converts SQLite INSERT statements into JSON objects. It handles SQLite's integer-based booleans (0/1) and its flexible type system, mapping values back to proper JSON types.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your SQLite INSERT statement into the input field.</li><li>Click "Convert to JSON" to parse the SQL.</li><li>Copy the JSON output for use elsewhere.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How does it handle SQLite's 0/1 boolean values?</h3><p>The converter recognizes 0 and 1 values in columns derived from booleans and converts them back to true/false in JSON.</p>
        <h3>Can it parse SQLite CREATE TABLE statements?</h3><p>This tool focuses on INSERT statements. For CREATE TABLE generation, use the JSON to SQLite converter.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-sqlite">JSON to SQLite Converter</a></li><li><a href="/postgresql-to-json">PostgreSQL to JSON Converter</a></li><li><a href="/mysql-to-json">MySQL to JSON Converter</a></li></ul>
      </article>
    </>
  )
}
