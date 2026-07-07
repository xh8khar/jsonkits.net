'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPandas } from '@/lib/converters'

const example = '[{"name":"Alice","age":30,"city":"NYC"},{"name":"Bob","age":25,"city":"SF"},{"name":"Charlie","age":35,"city":"LA"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Pandas DataFrame - Generate Python Pandas Code"
        description="Generate Python Pandas DataFrame code from JSON data for data analysis and manipulation."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated Python code will appear here..."
        convertLabel="Generate Python Code"
        onConvert={jsonToPandas}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="python"
        toolSlug="json-to-pandas"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Python Pandas DataFrame code from your JSON data, giving you ready-to-use Python scripts for data analysis and manipulation.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
