'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToMysql, mysqlToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to MySQL Converter" description="Generate MySQL CREATE TABLE and INSERT statements from JSON. Uses backtick quoting and InnoDB engine." inputPlaceholder="Paste your JSON array here..." outputPlaceholder="Generated SQL will appear here..." convertLabel="Generate SQL" onConvert={jsonToMysql} exampleInput={example} inputLanguage="json" outputLanguage="sql" bidirectional onReverse={mysqlToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to MySQL Converter?</h2>
        <p>This tool converts a JSON array into MySQL-compatible SQL statements. It generates a CREATE TABLE with backtick-quoted identifiers, InnoDB engine, and utf8mb4 charset, followed by INSERT statements.</p>
        <h2>How to Use</h2>
        <ol><li>Paste a JSON array into the input area.</li><li>Click "Generate SQL" to create MySQL statements.</li><li>Copy and execute the SQL in your MySQL database.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What MySQL-specific features are used?</h3><p>The output uses backtick quoting for identifiers, specifies ENGINE=InnoDB and DEFAULT CHARSET=utf8mb4 in the CREATE TABLE statement.</p>
        <h3>Can I convert MySQL INSERT back to JSON?</h3><p>Yes, toggle the direction or use the MySQL to JSON converter tool.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/mysql-to-json">MySQL to JSON Converter</a></li><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li><li><a href="/json-to-sqlite">JSON to SQLite Converter</a></li></ul>
      </article>
    </>
  )
}
