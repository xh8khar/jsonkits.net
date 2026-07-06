'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSqlServer, sqlServerToJson } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","age":30,"active":true},{"id":2,"name":"Bob","age":25,"active":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to SQL Server Converter" description="Generate SQL Server compatible CREATE TABLE and INSERT statements with bracket quoting." inputPlaceholder="Paste your JSON array here..." outputPlaceholder="Generated SQL will appear here..." convertLabel="Generate SQL" onConvert={jsonToSqlServer} exampleInput={example} inputLanguage="json" outputLanguage="sql" bidirectional onReverse={sqlServerToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to SQL Server Converter?</h2>
        <p>This tool converts JSON arrays into SQL Server compatible SQL statements. It uses bracket quoting for identifiers and maps types to SQL Server types including INT, FLOAT, and BIT.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON array into the input area.</li><li>Click "Generate SQL" to create SQL Server statements.</li><li>Copy and run the SQL in your SQL Server database.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What SQL Server data types are used?</h3><p>Types map as follows: JSON strings to NVARCHAR(MAX), integers to INT, decimals to FLOAT, booleans to BIT, and null to NVARCHAR(MAX).</p>
        <h3>Can I convert SQL Server INSERT back to JSON?</h3><p>Yes, toggle the direction or use the SQL Server to JSON converter.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/sql-server-to-json">SQL Server to JSON Converter</a></li><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li><li><a href="/json-to-oracle">JSON to Oracle Converter</a></li></ul>
      </article>
    </>
  )
}
