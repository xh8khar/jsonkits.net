'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { convertJsonFile } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, city: 'NYC', hobbies: ['reading', 'coding'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="Convert JSON File"
        description="Process and analyze JSON file contents. Get file size, data type detection, and formatted JSON output all in one tool."
        inputPlaceholder="Paste your JSON file contents here..."
        outputPlaceholder="Processed result will appear here..."
        convertLabel="Process File"
        onConvert={convertJsonFile}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is This Tool?</h2>
        <p>Process JSON file contents with automatic analysis. Get file size information, type detection, and formatted output for further processing.</p>
        <h2>How to Use</h2>
        <ol><li>Paste the contents of your JSON file into the input editor.</li><li>Click "Process File" to analyze the data.</li><li>Review the file analysis and formatted output.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-upload">JSON Upload</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
