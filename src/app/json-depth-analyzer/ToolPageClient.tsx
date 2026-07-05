'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDepthAnalyzer } from '@/lib/converters'

const example = '{"a":{"b":{"c":{"d":{"e":"deep"}}},"f":[{"g":{"h":"nested"}}]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Depth Analyzer"
        description="Analyze nesting depth, node count, leaf nodes, and branching factor of your JSON data. Perfect for understanding data structure complexity."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Depth analysis will appear here..."
        convertLabel="Analyze Depth"
        onConvert={jsonDepthAnalyzer}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON Depth Analysis?</h2>
        <p>JSON depth analysis measures the structural complexity of your data: maximum nesting depth, average depth, total nodes, leaf nodes, and branching factor. This helps you understand and optimize your data structures for performance and readability.</p>
        <p>Depth analysis is useful for:</p>
        <ul>
          <li><strong>Data Optimization</strong>: Identifying overly nested structures.</li>
          <li><strong>API Design</strong>: Flattening deeply nested API responses.</li>
          <li><strong>Performance</strong>: Finding structures that cause slow traversal.</li>
          <li><strong>Code Generation</strong>: Understanding complexity for type generation.</li>
        </ul>
        <h2>How to Analyze JSON Depth Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any JSON data.</li>
          <li><strong>Click Analyze</strong>: View complete depth and structure metrics.</li>
          <li><strong>Review results</strong>: Check max depth, average depth, and branching factor.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What is a branching factor?</h3>
        <p>Branching factor is the average number of child nodes per object node. A higher value means wider, flatter structures.</p>
        <h3>What is considered "deep" nesting?</h3>
        <p>Depths of 5+ are typically considered deep and may indicate a need for data restructuring.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-size-calculator">JSON Size Calculator</a> — Calculate byte sizes and element counts</li>
          <li><a href="/nested-to-flat-json">Nested to Flat JSON</a> — Flatten deeply nested structures</li>
        </ul>
      </article>
    </>
  )
}
