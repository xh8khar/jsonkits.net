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
        <h2>What Is JSON Graph Viewer?</h2>
        <p>JSON Graph Viewer transforms nested JSON data into a clear ASCII tree graph using Unicode box-drawing connectors. It visualizes the hierarchical structure of your JSON, making it easy to understand object nesting, array contents, and data relationships at a glance.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Data Structure Analysis</strong>: Visualize the nesting depth and hierarchy of complex JSON objects to understand data shapes.</li>
          <li><strong>API Response Inspection</strong>: Map out the structure of API responses to identify nested objects, arrays, and value locations.</li>
          <li><strong>Configuration Debugging</strong>: Explore deeply nested configuration files to quickly locate specific keys and values.</li>
        </ul>
        <h2>How to Use JSON Graph Viewer Online</h2>
        <ol>
          <li><strong>Paste your JSON data</strong>: Enter any valid JSON object or array into the input editor.</li>
          <li><strong>Click View Graph</strong>: Press the View Graph button to generate the ASCII tree visualization.</li>
          <li><strong>Explore the structure</strong>: Review the tree graph showing keys, values, arrays, and nested objects with clear visual hierarchy.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What makes ASCII tree graphs useful?</h3>
        <p>ASCII tree graphs provide an immediate visual understanding of JSON structure without needing a graphical UI. They are perfect for documentation, code reviews, and quick structural analysis.</p>
        <h3>How are different data types displayed?</h3>
        <p>Objects show their keys with child branches, arrays display their indices, and primitive values (strings, numbers, booleans, null) are shown inline with their types or values indicated.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Software engineers and data architects use JSON Graph Viewer to reverse-engineer API response structures, document data models for team discussions, and debug complex nested configurations. It is especially helpful when onboarding to a new codebase with unfamiliar JSON data structures or when designing data pipelines that transform deeply nested objects.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and explore JSON data in a tree view</li>
          <li><a href="/json-to-chart">JSON to Chart</a> — Create ASCII bar chart visualizations from JSON data</li>
          <li><a href="/json-explorer">JSON Explorer</a> — Interactive JSON exploration tool</li>
        </ul>
      </article>
    </>
  )
}
