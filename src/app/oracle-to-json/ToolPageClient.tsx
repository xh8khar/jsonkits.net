'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { oracleToJson, jsonToOracle } from '@/lib/converters'

const example = 'INSERT INTO json_data (id, name, age, active) VALUES (1, \'Alice\', 30, 1);'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Oracle to JSON Converter" description="Parse Oracle SQL INSERT statements back into JSON format." inputPlaceholder="Paste your Oracle INSERT statement here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={oracleToJson} exampleInput={example} inputLanguage="sql" outputLanguage="json" bidirectional onReverse={jsonToOracle} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Oracle to JSON Converter?</h2>
        <p>This tool converts Oracle INSERT statements into JSON format. It handles Oracle's unquoted identifiers and maps NUMBER columns with 0/1 values back to JSON booleans.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your Oracle INSERT statement into the input field.</li><li>Click "Convert to JSON" to parse it.</li><li>Copy the JSON output for use in your applications.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it support Oracle quoted identifiers?</h3><p>Yes, it handles both unquoted and double-quoted column names.</p>
        <h3>Can it parse TO_DATE or other Oracle functions in VALUES?</h3><p>Function calls in VALUES are treated as text strings. For best results, use literal values in your INSERT statements.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-oracle">JSON to Oracle Converter</a></li><li><a href="/sql-server-to-json">SQL Server to JSON Converter</a></li><li><a href="/json-to-sql-server">JSON to SQL Server Converter</a></li></ul>
      </article>
    </>
  )
}
