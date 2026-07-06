'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { curlToFetch, fetchToCurl } from '@/lib/converters'

const example = `curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token123" \\
  -d '{"name":"JSONKits","version":1}' \\
  https://api.example.com/data`

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="cURL to Fetch API Converter"
        description="Convert cURL commands to modern JavaScript fetch() API calls instantly. Supports headers, methods, and request bodies."
        inputPlaceholder="Paste your cURL command here..."
        outputPlaceholder="fetch() API call will appear here..."
        convertLabel="Convert to Fetch"
        onConvert={curlToFetch}
        exampleInput={example}
        inputLanguage="bash"
        outputLanguage="typescript"
        bidirectional
        onReverse={fetchToCurl}
        toolSlug="curl-to-fetch"
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>cURL vs Fetch API</h2>
        <p>cURL is a command-line tool for HTTP requests, while fetch() is a browser-native JavaScript API. This converter helps you translate between the two when migrating from terminal-based testing to in-browser JavaScript code.</p>
        <ul>
          <li><strong>cURL</strong>: Great for terminal testing, API debugging, and scripting.</li>
          <li><strong>Fetch API</strong>: Browser-native, Promise-based, integrates with JavaScript apps.</li>
        </ul>
        <h2>How to Use</h2>
        <ol>
          <li>Paste a cURL command into the input editor.</li>
          <li>Click <strong>Convert to Fetch</strong> to generate the fetch() equivalent.</li>
          <li>Copy the fetch() call for use in your JavaScript/TypeScript project.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it support all cURL options?</h3>
        <p>It supports the most common options: -X (method), -H (headers), -d (data/body), and URL. Advanced options like --cacert or --proxy are not supported.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. This tool operates 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/curl-to-axios">cURL to Axios</a> — Convert cURL to Axios API calls</li>
          <li><a href="/curl-to-ky">cURL to Ky</a> — Convert cURL to Ky HTTP client calls</li>
          <li><a href="/curl-to-json">cURL to JSON</a> — Extract JSON from cURL commands</li>
        </ul>
      </article>
    </>
  )
}
