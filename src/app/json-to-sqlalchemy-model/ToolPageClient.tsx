'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSQLAlchemyModel } from '@/lib/converters'

const example = JSON.stringify({ id: 1, title: 'My Article', content: 'Article content here', published: true, viewCount: 150 }, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to SQLAlchemy Model"
        description="Generate SQLAlchemy ORM model classes from JSON data samples for Python database schemas."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated code will appear here..."
        convertLabel="Generate"
        onConvert={jsonToSQLAlchemyModel}
        exampleInput={example}
        outputLanguage="python"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate SQLAlchemy ORM model classes from JSON data samples for Python database schemas.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input editor.</li><li>Click the generate button to produce the output.</li><li>Copy the generated code for use in your project.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is this tool safe?</h3><p>Yes. Processing is 100% client-side with no server upload.</p>
        <h3>What can I use this for?</h3><p>Use this tool to quickly scaffold SQLAlchemy models from JSON data samples during development.</p>
      </article>
    </>
  )
}
