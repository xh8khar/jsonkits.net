'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonTokenCounter } from '@/lib/converters'

const example = '{"name":"JSONKits","description":"A collection of free online JSON tools for developers. All processing happens client-side."}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Token Counter - Count Tokens in JSON"
        description="Estimate the token count of your JSON data for GPT and other LLM models."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Token count will appear here..."
        convertLabel="Count Tokens"
        onConvert={jsonTokenCounter}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-token-counter"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool estimates the number of tokens in your JSON data, helping you understand how much of an LLM context window your JSON will consume. Token counting is essential for optimizing prompts and staying within model limits.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the editor</li>
          <li>Click the Count Tokens button</li>
          <li>View the estimated token count</li>
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
