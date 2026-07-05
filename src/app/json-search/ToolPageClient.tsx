'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonSearch } from '@/lib/converters'

const example = 'search: alice\n{"users":[{"name":"Alice","email":"alice@test.com"},{"name":"Bob","email":"bob@test.com"}],"config":{"appName":"alice-app"}}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout title="JSON Search Tool" description="Search within JSON data for matching values and keys. Add search: term on the first line." inputPlaceholder="Add search: term on first line, then paste JSON..." outputPlaceholder="Search results will appear here..." convertLabel="Search JSON" onConvert={jsonSearch} exampleInput={example} outputLanguage="json" />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON Search Tool?</h2>
        <p>This tool searches through JSON data and returns all matching keys and values. It supports case-insensitive partial matching across the entire JSON structure, including nested objects and arrays.</p>
        <h2>How to Use</h2>
        <ol><li>Start with <code>search: your-term</code> on the first line, then paste your JSON data below.</li><li>Click "Search JSON" to find all matching values and key paths.</li><li>Review the results showing matched paths and values.</li></ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Is the search case-sensitive?</h3><p>No, the search is case-insensitive by default and matches partial strings within both keys and values.</p>
        <h3>Can I search for numbers or booleans?</h3><p>Yes, the search term is converted to a string and matched against all values including numbers and booleans.</p>
        <h2>Related Tools</h2>
        <ul><li><a href="/json-path-tester">JSON Path Tester</a></li><li><a href="/json-extract">JSON Extract</a></li><li><a href="/json-filter">JSON Filter</a></li></ul>
      </article>
    </>
  )
}
