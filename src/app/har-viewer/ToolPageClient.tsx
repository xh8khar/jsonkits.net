'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { harViewer } from '@/lib/converters'

const example = '{"log":{"version":"1.2","creator":{"name":"JSONKits","version":"1.0"},"entries":[{"request":{"method":"GET","url":"https://jsonkits.com/api"},"response":{"status":200,"statusText":"OK","content":{"mimeType":"application/json"},"bodySize":100},"timings":{"wait":50,"receive":100},"startedDateTime":"2024-01-01T00:00:00Z"}]}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="HAR Viewer"
        description="View and analyze HTTP Archive (HAR) files with request and response details."
        inputPlaceholder="Paste your HAR JSON here..."
        outputPlaceholder="Analyzed HAR data will appear here..."
        convertLabel="View HAR"
        onConvert={harViewer}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="har-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is HAR?</h2>
        <p>HTTP Archive (HAR) format is a JSON-formatted archive file format used by web browsers to export detailed performance data about web page loads.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your HAR file content in the editor</li>
          <li>Click the View HAR button</li>
          <li>Review the analyzed request and response details</li>
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
