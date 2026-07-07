'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonFindAllPaths } from '@/lib/converters'

const example = '{"name":"JSONKits","versions":{"v1":"1.0.0","v2":"2.0.0"},"features":["fast","free"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Path Finder"
        description="Discover all JSONPath expressions for every node in your JSON data structure."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="JSON paths will appear here..."
        convertLabel="Find Paths"
        onConvert={jsonFindAllPaths}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-path-finder"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSONPath?</h2>
        <p>JSONPath is a query language for JSON that allows you to navigate and extract data from JSON structures. This tool finds all possible paths in your JSON.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Find Paths button</li>
          <li>Browse all discovered JSONPath expressions</li>
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
