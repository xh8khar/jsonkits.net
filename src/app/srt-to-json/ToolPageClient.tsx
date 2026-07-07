'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { srtToJson } from '@/lib/converters'

const example = '1\n00:00:01,000 --> 00:00:04,000\nHello, welcome to JSONKits\n\n2\n00:00:05,000 --> 00:00:08,000\nConvert your JSON data instantly'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="SRT to JSON - Convert Subtitles to JSON"
        description="Convert SRT subtitle files to structured JSON format with timing and text fields."
        inputPlaceholder="Paste your SRT content here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={srtToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="srt-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts SRT subtitle files into structured JSON format, making subtitle data easy to manipulate, search, and integrate into applications.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your input data in the editor</li>
          <li>Click the Convert button</li>
          <li>Copy or download the result</li>
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
