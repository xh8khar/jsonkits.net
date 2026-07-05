'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPythonDict } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'] }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Python Dict"
        description="Generate Python dictionary literal syntax from your JSON data. Perfect for Python developers who need to embed JSON data as native dict literals."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Python dict will appear here..."
        convertLabel="Convert to Python"
        onConvert={jsonToPythonDict}
        exampleInput={example}
        outputLanguage="python"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Convert JSON data into Python dictionary literal syntax. Unlike JSON to Python Dataclass which generates class definitions, this tool generates inline Python dictionary expressions.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Convert to Python" to generate Python dict syntax.</li><li>Copy the Python code into your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-python">JSON to Python Dataclass</a></li><li><a href="/python-dict-to-json">Python Dict to JSON</a></li></ul>
      </article>
    </>
  )
}
