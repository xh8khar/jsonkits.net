'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonLogViewer } from '@/lib/converters'

const example = '{"timestamp":"2024-01-01T10:00:00Z","level":"info","message":"Server started","service":"api"}\n{"timestamp":"2024-01-01T10:00:01Z","level":"error","message":"Connection failed","service":"db"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Log Viewer - Parse and View JSON Logs"
        description="Parse JSON log entries, extract timestamp, level, and message fields for easy analysis."
        inputPlaceholder="Paste your JSON logs here..."
        outputPlaceholder="Parsed log view will appear here..."
        convertLabel="Parse Logs"
        onConvert={jsonLogViewer}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="json-log-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool parses JSON log entries from NDJSON format and extracts key fields such as timestamp, log level, and message. It presents your logs in a structured table format for easier analysis and debugging of application logs.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON log lines in the editor</li>
          <li>Click the Parse Logs button</li>
          <li>Review the structured log output</li>
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
