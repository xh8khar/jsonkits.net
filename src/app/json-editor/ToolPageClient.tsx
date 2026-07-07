'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonEditor } from '@/lib/converters'

const example = '{"name":"JSONKits","version":"1.0.0","tools":300}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON Editor"
        description="Edit, modify, and format JSON data with syntax highlighting."
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Edited JSON will appear here..."
        convertLabel="Process"
        onConvert={jsonEditor}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="json-editor"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This JSON Editor allows you to edit, modify, and format JSON data with syntax highlighting. It makes working with JSON structures simple and efficient.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your JSON data in the input editor</li>
          <li>Click the Process button</li>
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
