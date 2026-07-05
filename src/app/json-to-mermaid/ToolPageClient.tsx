'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToMermaid, mermaidToJson } from '@/lib/converters'

const example = '{"user":{"profile":{"name":"Alice","age":30},"settings":{"theme":"dark"}}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Mermaid Diagram Generator" description="Generate Mermaid.js flowchart diagrams from JSON data structures. Visualize your data hierarchies." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Mermaid diagram will appear here..." convertLabel="Generate Diagram" onConvert={jsonToMermaid} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={mermaidToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON to Mermaid Diagram Generation?</h2>
        <p>Mermaid.js is a popular diagramming tool that renders flowcharts from text definitions. This tool converts your JSON data into a Mermaid flowchart, where each JSON key becomes a node and nested objects create hierarchical branches. It is perfect for visualizing API response structures, configuration hierarchies, and complex data models.</p>
        <h2>How to Generate a Mermaid Diagram from JSON</h2>
        <ol><li><strong>Paste your JSON data</strong> containing the object hierarchy you want to visualize.</li><li><strong>Click Generate Diagram</strong> to create a Mermaid flowchart definition. Nested objects become child nodes connected by arrows.</li><li><strong>Copy the Mermaid code</strong> and paste it into any Mermaid-compatible renderer (GitHub Markdown, Notion, or mermaid.live).</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are arrays handled in the diagram?</h3><p>Arrays are shown as parent nodes with up to 10 child elements displayed. If an array contains objects, each object is shown with its key-value pairs.</p>
        <h3>Is there a limit to the depth or size?</h3><p>The tool limits display to 15 keys per object and 10 items per array to keep diagrams readable. For very large JSON files, consider trimming the input first.</p>
        <h3>Can I convert a Mermaid diagram back to JSON?</h3><p>Yes, use the Swap button to parse Mermaid flowchart definitions back into structured JSON.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/mermaid-to-json">Mermaid to JSON Converter</a></li><li><a href="/json-to-tree">JSON to Tree View</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
