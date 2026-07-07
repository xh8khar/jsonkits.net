'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToLatexTable } from '@/lib/converters'

const example = '[{"Name":"Alice","Age":30,"City":"NYC"},{"Name":"Bob","Age":25,"City":"SF"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to LaTeX Table"
        description="Convert JSON data to a LaTeX tabular table environment for academic papers and reports."
        inputPlaceholder="Paste your JSON array here..."
        outputPlaceholder="LaTeX table code will appear here..."
        convertLabel="Generate LaTeX Table"
        onConvert={jsonToLatexTable}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="latex"
        toolSlug="json-to-latex-table"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to LaTeX Table Conversion?</h2>
        <p>JSON to LaTeX table conversion transforms JSON arrays of objects into LaTeX tabular environment code that you can embed directly in academic papers, theses, and scientific reports. LaTeX is the standard document preparation system for academic publishing, and its tabular environment creates professional, publication-quality tables.</p>
        <p>This tool automatically extracts the column headers from your JSON object keys and generates the complete LaTeX markup with proper column alignment, row formatting, and escape handling. It is ideal for:</p>
        <ul>
          <li><strong>Academic publishing</strong>: Convert research data from JSON exports into formatted tables for journal submissions.</li>
          <li><strong>Report generation</strong>: Automate LaTeX table creation from JSON data files in reproducible research workflows.</li>
          <li><strong>Data presentation</strong>: Transform database query results (exported as JSON) into clean tables for technical documentation.</li>
        </ul>
        <h2>How to Convert JSON to LaTeX Table Online</h2>
        <ol>
          <li><strong>Prepare your JSON array</strong>: Ensure your data is a JSON array of objects where each object's keys will become table column headers.</li>
          <li><strong>Paste in the editor</strong>: Copy your JSON array and paste it into the input area on this page.</li>
          <li><strong>Click Generate LaTeX Table</strong>: Press the button to create the complete LaTeX tabular environment code.</li>
          <li><strong>Copy into your document</strong>: Paste the generated LaTeX code into your <code>.tex</code> file within a <code>table</code> environment as needed.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the generator handle special LaTeX characters in JSON data?</h3>
        <p>Yes. Special LaTeX characters such as <code>%</code>, <code>&amp;</code>, <code>_</code>, <code>$</code>, and <code>#</code> found in your JSON values are automatically escaped so they render correctly in the final LaTeX document.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>A PhD candidate in economics analyzing survey data exports their results from Python pandas as a JSON array and uses this converter to produce publication-ready LaTeX tables. Instead of manually formatting each table row with <code>\\</code> and <code>&</code> delimiters, they generate the complete tabular environment in one click and paste it directly into their Overleaf manuscript.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-pdf">JSON to PDF</a> — Convert JSON data to a formatted PDF document</li>
          <li><a href="/json-to-word">JSON to Word</a> — Convert JSON data to a Microsoft Word document</li>
          <li><a href="/json-to-mermaid">JSON to Mermaid</a> — Convert JSON data to Mermaid diagram syntax</li>
        </ul>
      </article>
    </>
  )
}
