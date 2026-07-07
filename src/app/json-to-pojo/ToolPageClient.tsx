'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToPojo } from '@/lib/converters'

const example = '{"id":1,"name":"John Doe","email":"john@example.com","active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to POJO"
        description="Generate Plain Old Java Object (POJO) classes with Jackson annotations from JSON data samples."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated POJO will appear here..."
        convertLabel="Generate POJO"
        onConvert={jsonToPojo}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="java"
        toolSlug="json-to-pojo"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is a POJO?</h2>
        <p>POJO stands for Plain Old Java Object — a simple Java class with private fields, public getters and setters, and a default constructor. In modern Java development, POJOs are used throughout applications to represent data models, from database entities to API request and response objects.</p>
        <p>POJOs are commonly used for:</p>
        <ul>
          <li><strong>API Models</strong>: Representing JSON request/response bodies in Spring Boot applications.</li>
          <li><strong>Data Transfer Objects</strong>: Passing data between different layers of an application.</li>
          <li><strong>Database Entities</strong>: Mapping to database tables via JPA or Hibernate.</li>
          <li><strong>Configuration</strong>: Binding application properties to typed objects.</li>
        </ul>
        <h2>What Are Jackson Annotations?</h2>
        <p>Jackson is the most popular JSON processing library for Java. It uses annotations like <code>@JsonProperty</code>, <code>@JsonIgnore</code>, and <code>@JsonFormat</code> to control how Java objects are serialized to JSON and deserialized from JSON. This tool generates POJOs with Jackson annotations pre-configured based on your sample data.</p>
        <h2>When to Use JSON to POJO Conversion</h2>
        <p>Converting JSON to POJOs is a standard step when integrating with REST APIs in Java. Instead of manually writing getters and setters for dozens of fields, you can generate the entire class from a sample JSON response, saving time and reducing typo-related bugs.</p>
        <h2>How to Generate POJO from JSON Online</h2>
        <ol>
          <li><strong>Paste your JSON sample</strong>: Copy a representative JSON object from your API documentation or response.</li>
          <li><strong>Click Generate POJO</strong>: Press the button to create a Java class with Jackson annotations based on your data.</li>
          <li><strong>Review the Output</strong>: Check that field names, types, and nested class structures match your requirements.</li>
          <li><strong>Copy to Your Project</strong>: Use the Copy button to add the generated class directly into your Java source code.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the tool support nested objects?</h3>
        <p>Yes, the tool generates inner static classes for nested objects and properly maps arrays to List or Set types based on the JSON structure.</p>
        <h3>Is this tool safe to use?</h3>
        <p>Absolutely. All processing happens entirely in your browser. Your JSON data is never sent to any server — it stays on your device.</p>
        <h3>Can I use this for Kotlin or other JVM languages?</h3>
        <p>While the generated code is Java, you can adapt it for Kotlin or other JVM languages. We also offer a dedicated Kotlin data class generator in our tools collection.</p>
        <h2>Real-World Examples</h2>
        <p>Java developers frequently use JSON to POJO generators when integrating with third-party APIs in Spring Boot projects. Instead of manually creating model classes with Jackson annotations, a single paste generates all the boilerplate code, including nested class structures for complex API responses.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-java">JSON to Java</a> — generate Java class definitions from JSON</li>
          <li><a href="/json-to-kotlin">JSON to Kotlin</a> — generate Kotlin data classes from JSON</li>
          <li><a href="/json-to-csharp">JSON to C#</a> — generate C# classes from JSON</li>
        </ul>
      </article>
    </>
  )
}
