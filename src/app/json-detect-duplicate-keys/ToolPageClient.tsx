'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonDetectDuplicateKeys } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"address":{"city":"NYC","city":"Brooklyn"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Detect Duplicate Keys"
        description="Detect duplicate keys within the same object. Helps identify data quality issues in JSON documents."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Duplicate key detection result will appear here..."
        convertLabel="Detect Duplicates"
        onConvert={jsonDetectDuplicateKeys}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is Duplicate Key Detection?</h2>
        <p>Duplicate key detection scans your JSON for objects that contain the same key more than once. While standard JSON parsers typically use the last value when duplicate keys are present, this can hide data quality issues or indicate serialization bugs.</p>
        <p>Duplicate key detection is useful for:</p>
        <ul>
          <li><strong>Data Quality</strong>: Identifying malformed JSON with conflicting keys.</li>
          <li><strong>Debugging</strong>: Finding serialization bugs that produce duplicate keys.</li>
          <li><strong>Validation</strong>: Ensuring data integrity before processing.</li>
          <li><strong>Migration</strong>: Checking imported data for subtle formatting issues.</li>
        </ul>
        <h2>How to Detect Duplicate Keys Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter your JSON data.</li>
          <li><strong>Click Detect Duplicates</strong>: The tool scans all objects for duplicate keys.</li>
          <li><strong>Review results</strong>: See which objects contain duplicate keys and their paths.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does JSON allow duplicate keys?</h3>
        <p>The JSON specification (RFC 8259) discourages duplicate keys but does not prohibit them. Different parsers handle duplicates differently, which can lead to inconsistent behavior.</p>
        <h3>Does this tool fix duplicate keys?</h3>
        <p>No, it only detects and reports them. You can manually edit your JSON to remove or resolve duplicate keys based on the report.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Developers migrating data between systems use duplicate key detection to catch serialization issues. Some programming languages and frameworks can produce duplicate keys when merging objects, and detecting these early prevents subtle data corruption in production.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-detect-circular">JSON Detect Circular</a> — Detect circular references</li>
          <li><a href="/json-validator">JSON Validator</a> — Validate JSON syntax and structure</li>
          <li><a href="/json-formatter">JSON Formatter</a> — Pretty-print and format JSON</li>
        </ul>
      </article>
    </>
  )
}
