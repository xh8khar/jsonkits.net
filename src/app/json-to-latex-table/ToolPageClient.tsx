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
        <h2>What Is This Tool?</h2>
        <p>This tool converts JSON arrays into LaTeX tabular table environments, making it easy to include data tables in academic papers and reports.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON array of objects in the editor</li>
          <li>Click the Generate LaTeX Table button</li>
          <li>Copy the LaTeX code into your document</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
      </article>
    </>
  )
}
