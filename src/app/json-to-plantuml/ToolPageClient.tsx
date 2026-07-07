'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPlantuml } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0","author":{"name":"Dev Team","email":"dev@jsonkits.com"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to PlantUML - Generate UML Diagrams"
        description="Generate PlantUML class diagram definitions from JSON data structure for documentation."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="Generated PlantUML will appear here..."
        convertLabel="Generate PlantUML"
        onConvert={jsonToPlantuml}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-plantuml"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates PlantUML class diagram definitions from your JSON data structure, making it easy to create UML documentation from your data models.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
