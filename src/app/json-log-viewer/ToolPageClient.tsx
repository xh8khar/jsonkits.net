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
        <h2>What Is JSON Log Viewing?</h2>
        <p>JSON log viewing is the practice of parsing structured log entries — typically in newline-delimited JSON (NDJSON) format — into a readable table so you can quickly scan timestamps, severity levels, messages, and metadata. Modern cloud-native applications emit logs as JSON objects, one per line, making machine parsing easy but human reading difficult.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Debugging Production Issues</strong>: Scan hundreds of log lines in a structured view to spot error patterns.</li>
          <li><strong>Log Analysis</strong>: Extract and examine specific fields like <code>level</code>, <code>message</code>, <code>service</code>, or <code>traceId</code> across many entries.</li>
          <li><strong>Incident Response</strong>: Quickly filter by error-level logs during an outage without scrolling through raw JSON.</li>
        </ul>
        <h2>How to Use the JSON Log Viewer Online</h2>
        <ol>
          <li><strong>Paste your NDJSON logs</strong>: Copy one or more JSON log lines (one object per line) into the editor.</li>
          <li><strong>Click Parse Logs</strong>: The tool reads each line, extracts common fields, and renders them in a sortable table.</li>
          <li><strong>Analyze the output</strong>: Identify errors, warnings, and info entries at a glance, then copy individual entries as needed.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What log formats are supported?</h3>
        <p>The viewer works with any NDJSON input where each line is a valid JSON object. It intelligently detects fields like <code>timestamp</code>, <code>level</code>, <code>severity</code>, <code>message</code>, <code>msg</code>, <code>service</code>, and <code>logger</code> regardless of naming variation.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A DevOps engineer debugging a Kubernetes pod crash can copy the container's JSON-formatted logs from <code>kubectl logs</code> and paste them into this viewer. The structured table immediately surfaces the error-level entries and their timestamps, cutting investigation time significantly.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-table">JSON to Table</a> — Convert any JSON data into an HTML table for visualization.</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Export JSON log data as a CSV file for spreadsheet analysis.</li>
          <li><a href="/json-filter">JSON Filter</a> — Filter JSON data by field values to narrow down log entries.</li>
        </ul>
      </article>
    </>
  )
}
