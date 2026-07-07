'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToDjangoModel } from '@/lib/converters'

const example = '[{"title":"Post 1","content":"Hello World","views":100,"published":true},{"title":"Post 2","content":"Second post","views":50,"published":false}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Django Model - Python Model Generator"
        description="Generate Django model classes from JSON data structure samples for rapid prototyping."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Django model will appear here..."
        convertLabel="Generate Model"
        onConvert={jsonToDjangoModel}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="python"
        toolSlug="json-to-django-model"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>Generate Django model classes from sample JSON data structures. This tool analyzes your JSON data to infer field types and produces a complete Django model with appropriate <code>models.IntegerField</code>, <code>models.BooleanField</code>, <code>models.TextField</code>, and <code>models.FloatField</code> fields for rapid prototyping and development.</p>
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
