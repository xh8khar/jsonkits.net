'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToSrt } from '@/lib/converters'

const example = '[{"index":1,"start":"00:00:01,000","end":"00:00:04,000","text":"Hello World"},{"index":2,"start":"00:00:05,000","end":"00:00:08,000","text":"Welcome to JSONKits"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to SRT - Convert JSON to Subtitles"
        description="Convert structured JSON subtitle data back to SRT subtitle file format."
        inputPlaceholder="Paste your JSON subtitle data here..."
        outputPlaceholder="Generated SRT will appear here..."
        convertLabel="Convert to SRT"
        onConvert={jsonToSrt}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-srt"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts structured JSON subtitle data back into the standard SRT subtitle file format for use with video players and editing software.</p>
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
