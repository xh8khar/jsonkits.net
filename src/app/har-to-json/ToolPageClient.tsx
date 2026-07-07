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
        <h2>What Is This Tool?</h2>
        <p>This tool extracts structured JSON data from HTTP Archive (HAR) files, making it easy to analyze request/response data from browser network logs.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your HAR file content in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy the extracted JSON result</li>
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
