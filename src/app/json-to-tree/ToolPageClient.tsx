'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToTree, treeToJson } from '@/lib/converters'

const example = '{"name":"root","items":[{"id":1,"label":"Item 1"},{"id":2,"label":"Item 2"}],"config":{"enabled":true}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON to Tree View Converter" description="Generate a visual indented tree view with Unicode box-drawing characters from JSON data." inputPlaceholder="Paste your JSON here..." outputPlaceholder="Tree view will appear here..." convertLabel="Convert to Tree" onConvert={jsonToTree} exampleInput={example} inputLanguage="json" outputLanguage="text" bidirectional onReverse={treeToJson} />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Tree View Conversion?</h2>
        <p>A tree view representation uses Unicode box-drawing characters (├──, └──, │) to visualize the hierarchical structure of JSON data. This tool transforms your JSON object into an indented text-based tree that clearly shows parent-child relationships, making it easier to understand complex nested data at a glance.</p>
        <h2>How to Convert JSON to Tree View</h2>
        <ol><li><strong>Paste your JSON data</strong> with any level of nesting. The tool supports objects, arrays, and primitive values.</li><li><strong>Click Convert to Tree</strong> to generate a visual tree using Unicode box-drawing characters. Objects show their keys, arrays show their length, and leaf values display their content.</li><li><strong>Copy the tree</strong> for use in documentation, code reviews, presentations, or any context where a visual hierarchy aids understanding.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How are arrays displayed?</h3><p>Arrays are shown with their element count (e.g., <code>Array [3]</code>) and each element is rendered as a child node. Nested objects within arrays are expanded recursively.</p>
        <h3>Are there any size limitations?</h3><p>The tree view is designed for readability. Very large JSON files may produce wide output. Consider using the JSON formatter for data-heavy files and the tree view for structural exploration.</p>
        <h3>Can I convert a tree view back to JSON?</h3><p>Yes, use the Swap button to parse a Unicode tree view back into structured JSON format.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/tree-to-json">Tree View to JSON</a></li><li><a href="/json-to-mermaid">JSON to Mermaid Diagram</a></li><li><a href="/json-formatter">JSON Formatter</a></li></ul>
      </article>
    </>
  )
}
