'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonGraphViewer } from '@/lib/converters'

const example = '{"name":"JSONKits","versions":{"v1":"1.0.0","v2":"2.0.0"},"features":["fast","free","private"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Graph Viewer"
        description="View JSON data as an ASCII tree graph showing the nested structure with Unicode connectors."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Tree graph will appear here..."
        convertLabel="View Graph"
        onConvert={jsonGraphViewer}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-graph-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool visualizes JSON data as an ASCII tree graph with Unicode connectors, showing the complete nested structure of your data.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the View Graph button</li>
          <li>Explore the tree visualization</li>
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
