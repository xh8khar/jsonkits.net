'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonStringAnalyzer } from '@/lib/converters'

const example = '{"name":"JSONKits","description":"A comprehensive JSON toolkit","tags":["formatter","validator","viewer","converter"]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON String Analyzer"
        description="Analyze all string values in your JSON: total strings, character count, average/max/min length, and shortest/longest strings."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="String analysis will appear here..."
        convertLabel="Analyze Strings"
        onConvert={jsonStringAnalyzer}
        exampleInput={example}
        outputLanguage="json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is JSON String Analysis?</h2>
        <p>JSON string analysis extracts and analyzes every string value in your document. It reports total string count, total and average character count, maximum and minimum string length, and identifies the shortest and longest strings in your data.</p>
        <p>String analysis is useful for:</p>
        <ul>
          <li><strong>Data Validation</strong>: Identifying excessively long or short string fields.</li>
          <li><strong>API Optimization</strong>: Finding opportunities to reduce payload size.</li>
          <li><strong>Database Design</strong>: Choosing appropriate column types and lengths.</li>
          <li><strong>Content Auditing</strong>: Understanding the character of text data in your JSON.</li>
        </ul>
        <h2>How to Analyze JSON Strings Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Enter any valid JSON data.</li>
          <li><strong>Click Analyze Strings</strong>: The tool scans all string values.</li>
          <li><strong>Review metrics</strong>: Check length statistics and extremes.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does it analyze nested string values?</h3>
        <p>Yes. All string values at every nesting level are included in the analysis.</p>
        <h3>What about empty strings?</h3>
        <p>Empty strings (length 0) are counted in the total and may appear as shortest strings if no non-empty strings exist.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>Backend developers use string analysis to audit API response payloads. Finding unexpectedly long string fields helps identify data issues, optimize database column sizes, and reduce bandwidth usage in mobile applications.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-statistics">JSON Statistics</a> — Get comprehensive data statistics</li>
          <li><a href="/json-key-counter">JSON Key Counter</a> — Count key frequency and types</li>
          <li><a href="/json-size-calculator">JSON Size Calculator</a> — Calculate byte sizes</li>
        </ul>
      </article>
    </>
  )
}
