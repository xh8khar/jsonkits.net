'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToChart } from '@/lib/converters'

const example = '{"visitors":1200,"pageViews":4500,"signups":230,"revenue":15000}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Chart"
        description="Create ASCII bar chart visualizations from numeric JSON data."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="ASCII chart will appear here..."
        convertLabel="Generate Chart"
        onConvert={jsonToChart}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-chart"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool creates ASCII bar chart visualizations from your numeric JSON data, making it easy to visualize key-value numeric data without external libraries.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON object with numeric values</li>
          <li>Click the Generate Chart button</li>
          <li>View the ASCII bar chart visualization</li>
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
