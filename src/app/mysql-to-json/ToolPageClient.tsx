'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { mysqlToJson, jsonToMysql } from '@/lib/converters'

const example = 'INSERT INTO `json_data` (`id`, `name`, `age`, `active`) VALUES (1, \'Alice\', 30, TRUE);'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="MySQL to JSON Converter" description="Parse MySQL INSERT statements back into JSON format." inputPlaceholder="Paste your MySQL INSERT statement here..." outputPlaceholder="Converted JSON will appear here..." convertLabel="Convert to JSON" onConvert={mysqlToJson} exampleInput={example} inputLanguage="sql" outputLanguage="json" bidirectional onReverse={jsonToMysql} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is MySQL to JSON Converter?</h2>
        <p>This tool converts MySQL INSERT statements into JSON format. It parses backtick-quoted column names and their corresponding values, handling numeric, boolean, string, and NULL types.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your MySQL INSERT statement into the input field.</li><li>Click "Convert to JSON" to parse it.</li><li>Use the resulting JSON in your applications or workflows.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Can it handle MySQL reserved words used as column names?</h3><p>Yes, since the parser handles backtick-quoted identifiers, reserved words as column names are properly extracted.</p>
        <h3>Does it support multi-value INSERT statements?</h3><p>Yes, it parses INSERT statements with multiple value rows and returns an array of JSON objects.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-mysql">JSON to MySQL Converter</a></li><li><a href="/postgresql-to-json">PostgreSQL to JSON Converter</a></li><li><a href="/json-to-postgresql">JSON to PostgreSQL Converter</a></li></ul>
      </article>
    </>
  )
}
