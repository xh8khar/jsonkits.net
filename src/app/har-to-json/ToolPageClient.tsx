'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { harToJson } from '@/lib/converters'

const example = '{"log":{"version":"1.2","creator":{"name":"JSONKits","version":"1.0"},"entries":[{"request":{"method":"GET","url":"https://jsonkits.com/api"},"response":{"status":200,"statusText":"OK","content":{"mimeType":"application/json"},"bodySize":100},"timings":{"wait":50,"receive":100},"startedDateTime":"2024-01-01T00:00:00Z"}]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="HAR to JSON Converter"
        description="Extract structured JSON data from HTTP Archive (HAR) file entries."
        inputPlaceholder="Paste your HAR file here..."
        outputPlaceholder="Extracted JSON will appear here..."
        convertLabel="HAR to JSON"
        onConvert={harToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="har-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is HAR to JSON Conversion?</h2>
        <p>HAR to JSON conversion extracts the raw structured data from HTTP Archive (HAR) files into a clean, queryable JSON format. HAR files contain browser network logs with request details, response payloads, timing data, and headers that are valuable for automated analysis.</p>
        <p>This converter strips away the HAR envelope and gives you direct access to the underlying JSON data from each network entry. It is commonly used for:</p>
        <ul>
          <li><strong>Data analysis</strong>: Import network request data into data processing pipelines or analytics tools.</li>
          <li><strong>Automation workflows</strong>: Feed extracted JSON to custom scripts for performance monitoring or regression testing.</li>
          <li><strong>Debugging and forensics</strong>: Isolate specific request/response payloads from complex multi-page HAR exports.</li>
        </ul>
        <h2>How to Convert HAR to JSON Online</h2>
        <ol>
          <li><strong>Export your HAR file</strong>: Open your browser DevTools Network tab, load the page, right-click and choose "Save all as HAR with content."</li>
          <li><strong>Paste into the editor</strong>: Copy the full HAR file contents and paste them into the input field on this page.</li>
          <li><strong>Click Convert</strong>: Press the "HAR to JSON" button to extract the structured JSON data from every network entry.</li>
          <li><strong>Copy the result</strong>: Use the copy button to grab the extracted JSON and use it in your scripts, databases, or analysis tools.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What kind of data can I extract from a HAR file?</h3>
        <p>You can extract request URLs, HTTP methods, status codes, request and response headers, timing data (DNS lookup, TCP connect, SSL, waiting, receiving), cookies, and response body content from each network entry logged in the HAR file.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>QA engineers often use HAR-to-JSON converters when automating performance regression suites. For instance, a quality assurance team exports HAR files from critical user flows after each deployment, converts them to JSON, and feeds them into a custom dashboard that tracks API response time trends across releases.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/har-viewer">HAR Viewer</a> — View and analyze HAR files with request and response details</li>
          <li><a href="/json-beautifier">JSON Beautifier</a> — Format and beautify JSON data for readability</li>
          <li><a href="/json-compare">JSON Compare</a> — Compare two JSON objects side by side</li>
        </ul>
      </article>
    </>
  )
}
