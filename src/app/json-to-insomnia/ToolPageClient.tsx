'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToInsomnia } from '@/lib/converters'

const example = JSON.stringify([{"name":"Get Users","method":"GET","url":"https://api.example.com/users"},{"name":"Create User","method":"POST","url":"https://api.example.com/users","body":{"name":"Alice","email":"alice@example.com"}}], null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Insomnia - Insomnia REST Client Export"
        description="Convert JSON API request definitions to Insomnia v4 export format for API testing."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Generated Insomnia export will appear here..."
        convertLabel="Generate Insomnia Export"
        onConvert={jsonToInsomnia}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-to-insomnia"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Insomnia?</h2>
        <p>Insomnia is a popular open-source API client for designing, debugging, and testing REST and GraphQL APIs. It uses a v4 JSON export format for sharing workspaces, requests, and environment variables across teams, making it easy to collaborate on API development.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Team Onboarding</strong>: Generate an Insomnia workspace file so new team members have every API request pre-configured.</li>
          <li><strong>API Documentation</strong>: Convert a list of endpoint definitions into a shareable Insomnia collection.</li>
          <li><strong>Migration</strong>: Move from flat file documentation or another API client into Insomnia's structured workspace format.</li>
        </ul>
        <h2>How to Use the Insomnia Export Generator Online</h2>
        <ol>
          <li><strong>Define your requests</strong>: Provide JSON objects with <code>name</code>, <code>method</code>, <code>url</code>, optional <code>headers</code>, and optional <code>body</code>.</li>
          <li><strong>Click Generate Insomnia Export</strong>: The tool wraps your requests into a v4 workspace JSON structure.</li>
          <li><strong>Import into Insomnia</strong>: Download the output and use Insomnia's <code>Import/Export</code> feature to load the workspace.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What parts of the Insomnia v4 format are supported?</h3>
        <p>The tool generates a workspace with request items including URL, HTTP method, headers, and JSON body. Environment variables and authentication configuration can be added manually after import.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A backend team documenting a new REST API can list all endpoints in a simple JSON array, run it through this tool, and share the resulting Insomnia export with the frontend team. The frontend developers import the file and have every request ready to test against the staging server without manual setup.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-postman">JSON to Postman</a> — Convert JSON API definitions to Postman collection v2.1 format.</li>
          <li><a href="/json-to-curl">JSON to cURL</a> — Convert API request definitions to cURL command strings.</li>
          <li><a href="/json-to-openapi">JSON to OpenAPI</a> — Generate OpenAPI/Swagger specifications from JSON samples.</li>
        </ul>
      </article>
    </>
  )
}
