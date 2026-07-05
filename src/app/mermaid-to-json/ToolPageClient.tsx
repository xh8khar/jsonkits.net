'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { mermaidToJson, jsonToMermaid } from '@/lib/converters'

const example = 'graph TD\n  root["Object"]\n  root --> N0\n  N0["name: JSONKits"]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Mermaid to JSON Converter" description="Parse Mermaid flowchart definitions back into structured JSON format." inputPlaceholder="Paste Mermaid diagram here..." outputPlaceholder="JSON output will appear here..." convertLabel="Convert to JSON" onConvert={mermaidToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToMermaid} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Mermaid to JSON Conversion?</h2>
        <p>Mermaid diagrams are widely used for documentation and visualization. This tool parses Mermaid flowchart definitions and extracts the key-value relationships into a structured JSON format. It is useful for extracting data from diagrams, migrating content between tools, and programmatically processing visual documentation.</p>
        <h2>How to Convert Mermaid to JSON</h2>
        <ol><li><strong>Paste your Mermaid flowchart code</strong> starting with <code>graph TD</code> or similar directive.</li><li><strong>Click Convert to JSON</strong> to parse the node relationships and extract data pairs from the diagram.</li><li><strong>Copy the resulting JSON</strong> for use in data processing, documentation migration, or further analysis.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What Mermaid diagram types are supported?</h3><p>The tool currently supports flowchart diagrams (<code>graph TD</code>, <code>graph LR</code>) with node labels containing key-value pairs separated by colons.</p>
        <h3>How are nodes without values handled?</h3><p>Nodes that contain only text labels without colons are treated as structural elements and may appear as empty objects or be skipped depending on the diagram structure.</p>
        <h3>Can I convert JSON to a Mermaid diagram?</h3><p>Yes, use the Swap button to generate a Mermaid flowchart from your JSON data.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-mermaid">JSON to Mermaid Diagram</a></li><li><a href="/json-to-tree">JSON to Tree View</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
