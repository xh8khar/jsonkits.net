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
        <h2>What Is PlantUML?</h2>
        <p>PlantUML is a popular open-source tool that allows you to create UML diagrams from plain text descriptions. It supports class diagrams, sequence diagrams, use case diagrams, and many other diagram types, making it a favorite for documentation-driven development.</p>
        <p>This tool is used for:</p>
        <ul>
          <li><strong>Technical Documentation</strong>: Generate class diagram definitions from JSON data models for API documentation and system architecture guides.</li>
          <li><strong>Code Generation</strong>: Use the resulting PlantUML as a starting point for code generation workflows or as visual documentation in code repositories.</li>
          <li><strong>Architecture Visualization</strong>: Quickly create UML class diagrams from JSON structures to communicate data models with team members and stakeholders.</li>
        </ul>
        <h2>How to Use JSON to PlantUML Online</h2>
        <ol>
          <li><strong>Paste your JSON data</strong>: Enter a JSON object with nested structures that you want to represent as a UML class diagram.</li>
          <li><strong>Click Generate PlantUML</strong>: The tool analyzes the JSON structure and produces a PlantUML class diagram definition with proper class names, attributes, and relationships.</li>
          <li><strong>Render the diagram</strong>: Copy the PlantUML code into any PlantUML renderer — online at plantuml.com, via VS Code extensions, or as part of your CI documentation pipeline.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>How do I render the generated PlantUML code?</h3>
        <p>You can render PlantUML diagrams online at plantuml.com using the web server, or locally using the PlantUML JAR, VS Code extensions like PlantUML Preview, or by integrating it into your documentation tools like Sphinx or MkDocs.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Backend developers documenting RESTful APIs can convert sample JSON responses into PlantUML class diagrams to visually represent the data models returned by their endpoints. This accelerates the creation of API reference documentation and helps frontend teams understand the structure of nested JSON responses without manually drawing diagrams.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-graphviz">JSON to Graphviz</a> — Generate Graphviz DOT diagrams from JSON data</li>
          <li><a href="/json-to-dbml">JSON to DBML</a> — Generate Database Markup Language from JSON</li>
          <li><a href="/json-to-prisma-schema">JSON to Prisma Schema</a> — Generate Prisma schema models from JSON data</li>
        </ul>
      </article>
    </>
  )
}
