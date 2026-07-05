'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSqlite, sqliteToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to SQLite Converter" description="Generate SQLite-compatible CREATE TABLE and INSERT statements. Boolean values become 1/0 integers." inputPlaceholder="Paste your JSON array here..." outputPlaceholder="Generated SQL will appear here..." convertLabel="Generate SQL" onConvert={jsonToSqlite} exampleInput={example} inputLanguage="json" outputLanguage="sql" bidirectional onReverse={sqliteToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to SQLite Converter?</h2>
        <p>This tool converts JSON arrays into SQLite-compatible SQL. Booleans are mapped to 1/0 integers, and column types are chosen from SQLite's flexible type system including INTEGER, REAL, and TEXT.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array into the input area.</li><li>Click "Generate SQL" to create SQLite statements.</li><li>Run the SQL in any SQLite database.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are booleans handled in SQLite?</h3><p>SQLite has no native boolean type, so true becomes 1 and false becomes 0 as INTEGER values.</p>
        <h3>Can I convert SQLite INSERT back to JSON?</h3><p>Yes, use the SQLite to JSON converter or toggle the direction on this tool.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/sqlite-to-json">SQLite to JSON Converter</a></li><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li><li><a href="/json-to-mysql">JSON to MySQL Converter</a></li></ul>
      </article>
    </>
  )
}
