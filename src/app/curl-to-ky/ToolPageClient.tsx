'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { curlToKy } from '@/lib/converters'

const example = `curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token123" \\
  -d '{"name":"JSONKits","version":1}' \\
  https://api.example.com/data`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="cURL to Ky Converter"
        description="Convert cURL commands to Ky HTTP client calls instantly. Ky is a tiny, elegant HTTP client based on the Fetch API."
        inputPlaceholder="Paste your cURL command here..."
        outputPlaceholder="Ky API call will appear here..."
        convertLabel="Convert to Ky"
        onConvert={curlToKy}
        exampleInput={example}
        inputLanguage="bash"
        outputLanguage="typescript"
        toolSlug="curl-to-ky"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>cURL vs Ky</h2>
        <p>cURL is a command-line tool for HTTP requests, while Ky is a tiny, elegant HTTP client for JavaScript based on the Fetch API. It provides a cleaner API with retries, timeouts, and hooks.</p>
        <ul>
          <li><strong>cURL</strong>: Terminal-based, great for quick API testing.</li>
          <li><strong>Ky</strong>: Tiny Fetch-based HTTP client with sugar APIs for modern JavaScript.</li>
        </ul>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a cURL command into the input editor.</li>
          <li>Click <strong>Convert to Ky</strong> to generate the Ky equivalent.</li>
          <li>Copy the Ky call into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Which cURL options are supported?</h3>
        <p>The converter supports -X (method), -H (headers), -d (body data), and URL parsing.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. This tool operates 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/curl-to-fetch">cURL to Fetch</a> — Convert cURL to fetch() API calls</li>
          <li><a href="/curl-to-axios">cURL to Axios</a> — Convert cURL to Axios API calls</li>
          <li><a href="/curl-to-json">cURL to JSON</a> — Extract JSON from cURL commands</li>
        </ul>
      </article>
    </>
  )
}
