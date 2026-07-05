'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToOracle, oracleToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Oracle Converter" description="Generate Oracle SQL CREATE TABLE and INSERT statements from JSON data." inputPlaceholder="Paste your JSON array here..." outputPlaceholder="Generated SQL will appear here..." convertLabel="Generate SQL" onConvert={jsonToOracle} exampleInput={example} inputLanguage="json" outputLanguage="sql" bidirectional onReverse={oracleToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to Oracle Converter?</h2>
        <p>This tool converts JSON arrays into Oracle SQL statements. It generates CREATE TABLE with Oracle-friendly types such as NUMBER, VARCHAR2, and DATE, followed by INSERT statements using Oracle's implicit quote style.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array into the input area.</li><li>Click "Generate SQL" to create Oracle statements.</li><li>Copy and run the SQL in your Oracle database.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What Oracle data types are used?</h3><p>JSON strings become VARCHAR2, integers become NUMBER(10), decimals become NUMBER, and booleans are stored as NUMBER(1) with 1/0 values.</p>
        <h3>Can I convert Oracle INSERT back to JSON?</h3><p>Yes, toggle the direction or use the Oracle to JSON converter tool.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/oracle-to-json">Oracle to JSON Converter</a></li><li><a href="/json-to-sql-server">JSON to SQL Server Converter</a></li><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li></ul>
      </article>
    </>
  )
}
