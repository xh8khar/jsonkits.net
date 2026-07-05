'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { treeToJson, jsonToTree } from '@/lib/converters'

const example = 'Object\n├── name: root\n├── items\n│   ├── 0\n│   │   ├── id: 1\n│   │   └── label: Item 1\n│   └── 1\n│       ├── id: 2\n│       └── label: Item 2\n└── config\n    └── enabled: true'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="Tree View to JSON Converter" description="Convert Unicode box-drawing tree views back into structured JSON format." inputPlaceholder="Paste tree view here..." outputPlaceholder="JSON output will appear here..." convertLabel="Convert to JSON" onConvert={treeToJson} exampleInput={example} inputLanguage="text" outputLanguage="json" bidirectional onReverse={jsonToTree} />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is Tree View to JSON Conversion?</h2>
        <p>Tree views created with Unicode box-drawing characters are a common way to visualize data hierarchies in terminal output, documentation, and code comments. This tool reverses the process, parsing the visual indentation and connectors back into structured JSON. It is ideal for recovering data from visual diagrams, terminal dumps, and documentation examples.</p>
        <h2>How to Convert Tree View to JSON</h2>
        <ol><li><strong>Paste your tree view text</strong> containing Unicode box-drawing characters (├──, └──, │) and indentation.</li><li><strong>Click Convert to JSON</strong> to parse the hierarchy. The tool reads indentation levels and connectors to reconstruct the JSON structure.</li><li><strong>Copy the resulting JSON</strong> for use in your application, data analysis, or as a structured version of your visual diagram.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What tree format is supported?</h3><p>The tool supports trees using standard Unicode box-drawing characters with 2-space indentation levels. Lines starting with ├── and └── indicate child nodes, and │ characters continue vertical lines.</p>
        <h3>How are values parsed?</h3><p>Values after colons are parsed as numbers if they are numeric, otherwise they remain as strings. Keys without colons create nested objects.</p>
        <h3>Can I convert JSON to a tree view?</h3><p>Yes, use the Swap button to generate a Unicode tree view from your JSON data.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-to-tree">JSON to Tree View</a></li><li><a href="/json-to-mermaid">JSON to Mermaid Diagram</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
