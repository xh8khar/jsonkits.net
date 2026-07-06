'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { sqlServerToJson, jsonToSqlServer } from '@/lib/converters'

const example = 'INSERT INTO [json_data] ([id], [name], [age], [active]) VALUES (1, \'Alice\', 30, 1);'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="SQL Server to JSON Converter" description="Parse SQL Server INSERT statements back into JSON format." inputPlaceholder="Paste your SQL Server INSERT statement here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={sqlServerToJson} exampleInput={example} inputLanguage="sql" outputLanguage="json" bidirectional onReverse={jsonToSqlServer} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is SQL Server to JSON Converter?</h2>
        <p>This tool converts SQL Server INSERT statements into JSON format. It handles bracket-quoted identifiers and maps SQL Server BIT values (0/1) back to JSON booleans.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your SQL Server INSERT statement into the input field.</li><li>Click "Convert to JSON" to parse it.</li><li>Copy the resulting JSON for your application.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How does it handle BIT columns?</h3><p>BIT values of 1 become true and 0 becomes false in the output JSON.</p>
        <h3>Does it support SQL Server specific functions?</h3><p>This tool parses standard INSERT statements. Functions or computed columns in VALUES are treated as literal strings.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-sql-server">JSON to SQL Server Converter</a></li><li><a href="/oracle-to-json">Oracle to JSON Converter</a></li><li><a href="/json-to-oracle">JSON to Oracle Converter</a></li></ul>
      </article>
    </>
  )
}
