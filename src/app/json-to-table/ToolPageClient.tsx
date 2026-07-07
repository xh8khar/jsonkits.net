'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToTable } from '@/lib/converters'

const example = '[{"Name":"Alice","Age":30,"City":"NYC"},{"Name":"Bob","Age":25,"City":"SF"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to HTML Table"
        description="Convert JSON data to an HTML table for embedding in web pages."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="HTML table code will appear here..."
        convertLabel="Generate Table"
        onConvert={jsonToTable}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="html"
        toolSlug="json-to-table"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to HTML Table?</h2>
        <p>JSON to HTML Table conversion transforms structured JSON arrays into clean HTML table markup with properly formatted headers, rows, and data cells. This tool automates the process of building semantic HTML tables from your JSON data sources.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Web Development</strong>: Quickly generate HTML tables from API responses for displaying data on web pages.</li>
          <li><strong>Reporting</strong>: Convert JSON datasets into readable HTML table reports for dashboards or email templates.</li>
          <li><strong>Content Management</strong>: Transform JSON content from CMS or databases into embeddable HTML table snippets.</li>
        </ul>
        <h2>How to Use JSON to HTML Table Online</h2>
        <ol>
          <li><strong>Paste your JSON array</strong>: Enter a JSON array of objects where each object represents a table row with key-value pairs for columns.</li>
          <li><strong>Click Generate Table</strong>: Press the Generate Table button to instantly create the HTML table markup.</li>
          <li><strong>Copy the HTML code</strong>: Copy the generated HTML table code and paste it directly into your web page.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSON format does the table converter accept?</h3>
        <p>It accepts a JSON array of objects. Each object should have consistent keys that will become the table column headers, and the values will populate the table rows.</p>
        <h3>Does the generated table include CSS styling?</h3>
        <p>The HTML table includes standard semantic markup with thead, tbody, th, and td elements. You can style it with your own CSS classes for full customization.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Developers frequently use this tool to convert API response data into presentable HTML tables for admin dashboards, customer-facing reports, and documentation pages. It is especially useful when working with REST APIs that return JSON arrays and you need a quick visual representation without writing manual HTML.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-table-viewer">JSON Table Viewer</a> — View your JSON data in an interactive HTML table</li>
          <li><a href="/json-to-html">JSON to HTML</a> — Convert JSON to general HTML markup</li>
          <li><a href="/json-to-markdown-table">JSON to Markdown Table</a> — Convert JSON data into Markdown tables</li>
        </ul>
      </article>
    </>
  )
}
