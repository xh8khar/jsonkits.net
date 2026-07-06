'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPython } from '@/lib/converters'

const example = JSON.stringify({ name: 'Alice', age: 30, active: true, tags: ['dev', 'design'], address: { city: 'NYC', zip: '10001' } }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Python Dataclass"
        description="Generate Python dataclass definitions from your JSON data samples. Perfect for Python developers working with structured data."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Python dataclasses will appear here..."
        convertLabel="Generate Python"
        onConvert={jsonToPython}
        exampleInput={example}
        outputLanguage="python"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Python dataclass definitions from your JSON data. Each JSON object becomes a Python dataclass with proper type annotations.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click "Generate Python" to create dataclasses.</li><li>Copy the Python code into your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-python-dict">JSON to Python Dict</a></li><li><a href="/python-dict-to-json">Python Dict to JSON</a></li></ul>
      </article>
    </>
  )
}
