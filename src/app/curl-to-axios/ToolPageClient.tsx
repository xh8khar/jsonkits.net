'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { curlToAxios, axiosToCurl } from '@/lib/converters'

const example = `curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token123" \\
  -d '{"name":"JSONKits","version":1}' \\
  https://api.example.com/data`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="cURL to Axios Converter"
        description="Convert cURL commands to Axios HTTP client calls instantly. Supports headers, method, URL, and request body."
        inputPlaceholder="Paste your cURL command here..."
        outputPlaceholder="Axios API call will appear here..."
        convertLabel="Convert to Axios"
        onConvert={curlToAxios}
        exampleInput={example}
        inputLanguage="bash"
        outputLanguage="typescript"
        bidirectional
        onReverse={axiosToCurl}
        toolSlug="curl-to-axios"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>cURL vs Axios</h2>
        <p>cURL is a command-line tool for HTTP requests, while Axios is a popular JavaScript HTTP client library. This converter helps you translate cURL commands into Axios API calls for use in your Node.js or browser JavaScript projects.</p>
        <ul>
          <li><strong>cURL</strong>: Terminal-based, great for quick API testing.</li>
          <li><strong>Axios</strong>: Promise-based HTTP client for JavaScript, supports interceptors and automatic JSON parsing.</li>
        </ul>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a cURL command into the input editor.</li>
          <li>Click <strong>Convert to Axios</strong> to generate the Axios equivalent.</li>
          <li>Copy the Axios call into your project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Which cURL options are supported?</h3>
        <p>The converter supports -X (method), -H (headers), -d (body data), and URL parsing. Unsupported options are ignored.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. This tool operates 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/curl-to-fetch">cURL to Fetch</a> — Convert cURL to fetch() API calls</li>
          <li><a href="/curl-to-ky">cURL to Ky</a> — Convert cURL to Ky HTTP client calls</li>
          <li><a href="/curl-to-json">cURL to JSON</a> — Extract JSON from cURL commands</li>
        </ul>
      </article>
    </>
  )
}
