'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToGraphviz, graphvizToJson } from '@/lib/converters'

const example = '{"user":{"name":"Alice","profile":{"age":30,"email":"alice@test.com"},"items":[{"id":1},{"id":2}]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Graphviz Converter" description="Generate a Graphviz DOT graph visualization from JSON data structures. Great for visualizing nested data." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Generated DOT graph will appear here..." convertLabel="Generate DOT" onConvert={jsonToGraphviz} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={graphvizToJson} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Graphviz Converter?</h2>
        <p>This tool converts JSON data structures into Graphviz DOT format for visualization. Objects and nested fields become graph nodes with labeled edges, arrays create cluster subgraphs, and you can render the output with any Graphviz viewer.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your JSON data into the input field.</li><li>Click "Generate DOT" to create the Graphviz graph.</li><li>Copy the DOT output and paste it into a Graphviz viewer or use the dot command to render it.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What does the graph look like?</h3><p>The root object becomes a central node, nested objects are child nodes connected by edges, array items are shown as sibling nodes within a cluster, and primitive values appear as leaf nodes.</p>
        <h3>Can I convert a DOT graph back to JSON?</h3><p>Yes, the tool supports bidirectional conversion. Paste a simple DOT graph and click the reverse button to get JSON.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-bson">JSON to BSON Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-to-csv">JSON to CSV Converter</a></li></ul>
      </article>
    </>
  )
}
