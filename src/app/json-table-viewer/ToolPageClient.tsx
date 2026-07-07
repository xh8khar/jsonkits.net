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
        <h2>What Is This Tool?</h2>
        <p>This tool displays your JSON array data in an easy-to-read HTML table format, making it simple to visualize and analyze tabular data.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON array of objects in the editor</li>
          <li>Click the View as Table button</li>
          <li>Review your data in table format</li>
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
