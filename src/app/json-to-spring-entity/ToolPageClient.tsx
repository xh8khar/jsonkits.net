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
        <h2>What Is a Spring Entity?</h2>
        <p>A Spring entity is a Java class annotated with Jakarta Persistence (JPA) annotations that maps to a relational database table. Entities form the core of data access in Spring Boot applications, enabling object-relational mapping without boilerplate JDBC code.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Microservice Scaffolding</strong>: Spin up JPA entities for a new Spring Boot service by pasting the expected API payload.</li>
          <li><strong>Contract-First Development</strong>: Derive your Java domain model from JSON schemas or sample payloads.</li>
          <li><strong>Legacy Migration</strong>: When moving from a non-Java stack, generate matching Spring entities from existing JSON data dumps.</li>
        </ul>
        <h2>How to Use the Spring Entity Generator Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter a JSON object representing the data you want to persist.</li>
          <li><strong>Click Generate Entity</strong>: The tool produces a Java class with <code>@Entity</code>, <code>@Id</code>, <code>@GeneratedValue</code>, and <code>@Column</code> annotations.</li>
          <li><strong>Copy into your project</strong>: Place the generated file under your <code>entity</code> package and Spring Boot auto-configures the rest.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What Java types does the tool generate?</h3>
        <p>JSON strings become <code>String</code>, numbers become <code>Integer</code> or <code>Double</code>, booleans become <code>Boolean</code>, and nested objects become <code>@OneToMany</code> or <code>@ElementCollection</code> relationships with their own entity classes.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A team designing a new order-management microservice can paste a sample order JSON and instantly get the <code>Order</code>, <code>OrderItem</code>, and <code>Customer</code> entity classes. This eliminates repetitive annotation writing and keeps the Java model aligned with the API contract.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-laravel-migration">JSON to Laravel Migration</a> — Generate PHP Laravel database migrations from JSON.</li>
          <li><a href="/json-to-django-model">JSON to Django Model</a> — Build Python Django model classes from sample JSON.</li>
          <li><a href="/json-to-java">JSON to Java</a> — Generate plain Java class definitions with fields and getters/setters from JSON.</li>
        </ul>
      </article>
    </>
  )
}
