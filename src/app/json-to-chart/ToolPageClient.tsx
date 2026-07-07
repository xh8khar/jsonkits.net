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
        <h2>What Is JSON to Chart?</h2>
        <p>JSON to Chart converts numeric JSON key-value pairs into ASCII bar chart visualizations. This tool provides a quick, lightweight way to visualize data distributions and comparisons directly in your terminal, code documentation, or text-based reports without any external charting library.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Quick Data Visualization</strong>: Generate instant bar charts from JSON data during development or data exploration sessions.</li>
          <li><strong>Documentation</strong>: Embed ASCII charts in README files, technical docs, or code comments for visual data representation.</li>
          <li><strong>Logging and Monitoring</strong>: Create text-based charts from application metrics and log data for terminal-based monitoring dashboards.</li>
        </ul>
        <h2>How to Use JSON to Chart Online</h2>
        <ol>
          <li><strong>Enter numeric JSON data</strong>: Paste a JSON object where keys are labels and values are numeric data points.</li>
          <li><strong>Click Generate Chart</strong>: Press the Generate Chart button to create the ASCII bar chart.</li>
          <li><strong>Copy the chart</strong>: Copy the generated ASCII chart for use in documentation, reports, or terminal output.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What data formats are supported?</h3>
        <p>The tool accepts JSON objects with numeric values (integers or floats). Nested objects and arrays of objects are also supported with appropriate label extraction.</p>
        <h3>Can I customize the chart appearance?</h3>
        <p>The ASCII chart automatically scales to fit the data range. The bar length is proportional to the numeric value, and labels are displayed alongside each bar for clarity.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Developers use JSON to Chart to visualize API response metrics, compare performance benchmarks, display survey results, and illustrate data distributions in plain-text environments. It is particularly valuable for creating quick visualizations when working in headless environments or when producing text-based reports that need lightweight graphical elements.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-graph-viewer">JSON Graph Viewer</a> — View JSON data as an ASCII tree graph</li>
          <li><a href="/json-statistics">JSON Statistics</a> — Compute statistical summaries of JSON numeric data</li>
          <li><a href="/json-to-graphviz">JSON to Graphviz</a> — Convert JSON to Graphviz DOT format for graph visualization</li>
        </ul>
      </article>
    </>
  )
}
