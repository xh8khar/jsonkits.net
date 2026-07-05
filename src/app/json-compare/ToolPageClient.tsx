'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonCompare } from '@/lib/converters'

const example = '{"name":"Alice","age":30,"city":"NYC"}\n{"name":"Alice","age":31,"email":"alice@test.com"}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Compare Tool" description="Compare two JSON objects to find added, removed, and changed fields with deep nested comparison." inputPlaceholder="Paste first JSON, then second JSON..." outputPlaceholder="Comparison result will appear here..." convertLabel="Compare" onConvert={jsonCompare} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Compare Tool?</h2>
        <p>This tool performs a deep comparison between two JSON objects and reports added, removed, and changed fields. It can handle nested objects and arrays, showing the exact paths where differences were found.</p>
        <h2>How to Use</h2>
        <ol><li>Paste the first JSON object, add a blank line, then paste the second JSON object.</li><li>Click "Compare" to perform the deep comparison.</li><li>Review the diff report showing added, removed, and changed fields with their paths.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it compare arrays element by element?</h3><p>Yes, arrays are compared element by element. Differences in array length and element values are reported.</p>
        <h3>Can I compare large JSON files?</h3><p>Comparison is done client-side, so performance depends on your browser. Large files may take a moment to process.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-merge">JSON Merge</a></li><li><a href="/json-merge-patch">JSON Merge Patch</a></li><li><a href="/json-diff">JSON Diff Checker</a></li></ul>
      </article>
    </>
  )
}
