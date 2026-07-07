'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSpringEntity } from '@/lib/converters'

const example = JSON.stringify({"name":"John Doe","email":"john@example.com","age":30,"active":true}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Spring Entity - Java JPA Entity Generator"
        description="Generate Spring Boot JPA entity classes with Jakarta annotations from JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated entity will appear here..."
        convertLabel="Generate Entity"
        onConvert={jsonToSpringEntity}
        exampleInput={example}
        outputLanguage="java"
        toolSlug="json-to-spring-entity"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool generates Spring Boot JPA entity classes from JSON data samples. It creates Java classes with Jakarta Persistence annotations including @Entity, @Id, @Column, and proper type mappings for your database schema.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Generate Entity button</li>
          <li>Copy or download the resulting Java entity class</li>
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
