'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToMarkdown, markdownToJson } from '@/lib/converters'

const example = '{"name":"JSONKits","tools":["formatter","validator","converter"],"active":true}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to Markdown Converter"
        description="Convert JSON data to a Markdown code block with JSON syntax highlighting. Perfect for documentation, code reviews, and technical writing."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Markdown output will appear here..."
        convertLabel="Convert to Markdown"
        onConvert={jsonToMarkdown}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="markdown"
        bidirectional
        onReverse={markdownToJson}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is JSON to Markdown Conversion?</h2>
        <p>Converting JSON to Markdown wraps your JSON data in a fenced code block with the <code>json</code> language tag, enabling syntax highlighting in GitHub, GitLab, and most documentation platforms. This makes JSON samples readable and professional in technical documentation.</p>
        <p>This conversion is essential for:</p>
        <ul>
          <li><strong>API Documentation</strong>: Showing request/response examples in developer docs.</li>
          <li><strong>README Files</strong>: Including configuration examples in project documentation.</li>
          <li><strong>Code Reviews</strong>: Sharing formatted JSON samples in pull request descriptions.</li>
          <li><strong>Technical Blog Posts</strong>: Embedding JSON examples with proper syntax highlighting.</li>
        </ul>
        <h2>JSON vs. Markdown: When to Use Each</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Markdown</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Purpose</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Data interchange format.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Documentation markup language.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Use Case</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">APIs, configs, data storage.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">READMEs, docs, blog posts.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Code Highlighting</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Not applicable.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Native syntax highlighting via fenced blocks.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Parsing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">JSON.parse() in JavaScript.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Markdown parsers like marked, remark.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Machine-to-machine communication.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Human-readable documentation.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to Markdown Online</h2>
        <ol>
          <li><strong>Paste your JSON</strong>: Copy your JSON data from your project or API response.</li>
          <li><strong>Click Convert</strong>: Press the button to wrap your JSON in a Markdown code block.</li>
          <li><strong>Copy to Clipboard</strong>: Use the copy button to grab the Markdown output.</li>
          <li><strong>Paste in Your Doc</strong>: Add the Markdown to your README, blog post, or documentation.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this work with any JSON?</h3>
        <p>Yes. Any valid JSON — objects, arrays, strings, numbers — will be wrapped in a proper Markdown code block with JSON language identifier.</p>
        <h3>Can I extract JSON back from Markdown?</h3>
        <p>Absolutely. Use the bidirectional mode or switch to the <a href="/markdown-to-json">Markdown to JSON</a> tool to extract JSON from Markdown code blocks.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing happens 100% client-side in your browser. Your data is never uploaded to any server.</p>
        <h2>Real-World Examples</h2>
        <p>JSON to Markdown conversion is commonly used when writing API documentation with examples, updating project README files with configuration samples, creating technical blog posts about JSON structures, and sharing formatted JSON in GitHub issues or pull requests.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/markdown-to-json">Markdown to JSON</a> — Extract JSON from Markdown code blocks</li>
          <li><a href="/json-to-yaml">JSON to YAML</a> — Convert JSON to YAML format</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays to CSV spreadsheets</li>
        </ul>
      </article>
    </>
  )
}
