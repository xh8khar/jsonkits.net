'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonTableViewer } from '@/lib/converters'

const example = '[{"Name":"Alice","Age":30,"City":"NYC"},{"Name":"Bob","Age":25,"City":"SF"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Table Viewer"
        description="View your JSON data in an easy-to-read HTML table format."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="Formatted table will appear here..."
        convertLabel="View as Table"
        onConvert={jsonTableViewer}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="html"
        toolSlug="json-table-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Table Viewer?</h2>
        <p>JSON Table Viewer is a visualization tool that transforms raw JSON arrays into a clean, interactive HTML table format. Instead of scanning through nested JSON syntax, you can instantly view your data in rows and columns for faster analysis and debugging.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Data Analysis</strong>: Quickly inspect JSON datasets by viewing them in a familiar table layout with sortable columns.</li>
          <li><strong>API Debugging</strong>: Visualize API responses as tables to spot anomalies, missing fields, or unexpected data patterns.</li>
          <li><strong>Database Exports</strong>: View JSON exports from databases or data warehouses in a readable tabular format.</li>
        </ul>
        <h2>How to Use JSON Table Viewer Online</h2>
        <ol>
          <li><strong>Paste your JSON array</strong>: Enter your JSON array of objects into the input editor.</li>
          <li><strong>Click View as Table</strong>: Press the View as Table button to generate the HTML table visualization.</li>
          <li><strong>Browse and analyze</strong>: Scroll through your data in the formatted table with clear column headers and row data.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSON formats work with the table viewer?</h3>
        <p>The viewer works best with arrays of objects where all objects share a consistent set of keys. Arrays of primitive values are also supported.</p>
        <h3>Can I sort columns in the table viewer?</h3>
        <p>The table viewer generates a static HTML representation of your data. For interactive sorting and filtering, consider exporting to a spreadsheet application.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Data analysts and backend developers use JSON Table Viewer to quickly inspect JSON responses from REST APIs, database query results, and configuration files. It is particularly useful when working with large JSON datasets where reading raw JSON text is impractical and a tabular view accelerates understanding.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-table">JSON to HTML Table</a> — Convert JSON arrays into HTML table code</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and explore JSON data in a tree view</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON data to CSV spreadsheet format</li>
        </ul>
      </article>
    </>
  )
}
