'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { graphvizToJson, jsonToGraphviz } from '@/lib/converters'

const example = 'digraph JSON { n0 [label="Object"]; n1 [label="name: Alice", shape=ellipse]; n0 -> n1 [label="name"]; n2 [label="age", shape=ellipse]; n0 -> n2 [label="age"]; }'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Graphviz to JSON Converter" description="Parse Graphviz DOT format graphs back into structured JSON objects." inputPlaceholder="Paste your Graphviz DOT graph here..." outputPlaceholder="Parsed JSON will appear here..." convertLabel="Parse to JSON" onConvert={graphvizToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToGraphviz} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Graphviz to JSON Converter?</h2>
        <p>This tool parses Graphviz DOT format graphs and converts them into structured JSON objects. Each node, edge, and attribute becomes a structured JSON field, making it easy to manipulate graph data programmatically.</p>
        <h2>How to Use</h2>
        <ol><li>Paste your Graphviz DOT graph into the input area.</li><li>Click "Parse to JSON" to convert the graph into a JSON structure.</li><li>Copy the JSON output for use in your application or data pipeline.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What DOT graph features are supported?</h3><p>Basic directed and undirected graphs with node attributes, edge labels, and graph-level properties are supported. Complex subgraphs may have limited support.</p>
        <h3>Can I convert JSON back to Graphviz?</h3><p>Yes, the tool supports bidirectional conversion. Click Swap to switch modes and convert JSON back to DOT format.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-graphviz">JSON to Graphviz Converter</a></li><li><a href="/json-formatter">JSON Formatter</a></li><li><a href="/json-to-mermaid">JSON to Mermaid Converter</a></li></ul>
      </article>
    </>
  )
}
