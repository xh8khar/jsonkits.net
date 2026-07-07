'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDbml } from '@/lib/converters'

const example = '[{"id":1,"name":"Alice","email":"alice@example.com"},{"id":2,"name":"Bob","email":"bob@example.com"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to DBML - Generate Database Markup Language"
        description="Generate DBML (Database Markup Language) schema definitions from JSON data samples."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated DBML will appear here..."
        convertLabel="Generate DBML"
        onConvert={jsonToDbml}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-dbml"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is DBML?</h2>
        <p>DBML (Database Markup Language) is an open-source DSL (domain-specific language) designed to define and document database schemas in a simple, readable format. It is widely used with tools like dbdiagram.io to generate visual ER diagrams from text-based descriptions.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Database Documentation</strong>: Convert JSON data structures into DBML to document your database schema as part of project documentation.</li>
          <li><strong>Visual Schema Design</strong>: Generate DBML that can be imported into diagramming tools to visualize table relationships and column types.</li>
          <li><strong>Team Collaboration</strong>: Share database schema definitions in a language-agnostic format that developers and DBAs can easily review and modify.</li>
        </ul>
        <h2>How to Use JSON to DBML Online</h2>
        <ol>
          <li><strong>Paste your JSON data</strong>: Enter a JSON object or array that represents the data structure you want to model as a database table.</li>
          <li><strong>Click Generate DBML</strong>: The tool converts your JSON fields into DBML table definitions with inferred data types.</li>
          <li><strong>Import into dbdiagram.io</strong>: Copy the generated DBML and paste it into dbdiagram.io or any DBML-compatible tool to visualize your schema.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What tools support DBML format?</h3>
        <p>DBML is supported by dbdiagram.io for visual ER diagrams, as well as by various open-source tools and libraries that parse DBML to generate SQL DDL, documentation, and schema comparisons.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Software architects often need to quickly prototype a database schema from an existing JSON API response. Instead of manually writing DBML table definitions, this tool automates the conversion, inferring column names, types, and nullability from the JSON structure. The generated DBML can then be refined with relationships and indexes before generating the actual SQL DDL.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-hive-ddl">JSON to Hive DDL</a> — Generate Apache Hive CREATE TABLE statements from JSON</li>
          <li><a href="/json-to-prisma-schema">JSON to Prisma Schema</a> — Generate Prisma schema models from JSON data</li>
          <li><a href="/json-to-sql-update">JSON to SQL UPDATE</a> — Generate SQL UPDATE statements from JSON data</li>
        </ul>
      </article>
    </>
  )
}
