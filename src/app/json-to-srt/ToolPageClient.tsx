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
        <h2>What Is SRT?</h2>
        <p>SRT (SubRip Subtitle) is a widely-used subtitle file format that stores text captions synchronized with video or audio using sequential timecodes. Converting JSON back to SRT allows developers to programmatically generate subtitle files for use in video players and editing software.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Automated Subtitle Generation</strong>: Creating SRT files from database records or API responses.</li>
          <li><strong>Content Localization</strong>: Producing translated subtitle files from structured translation data.</li>
          <li><strong>Video Publishing Pipelines</strong>: Generating captions as part of automated video processing workflows.</li>
        </ul>
        <h2>How to Use JSON to SRT Online</h2>
        <ol>
          <li><strong>Paste your JSON subtitles</strong>: Copy JSON with subtitle objects containing index, start, end, and text fields into the input editor.</li>
          <li><strong>Convert to SRT</strong>: Click the "Convert to SRT" button to generate standard SRT subtitle format.</li>
          <li><strong>Copy or download</strong>: Save the SRT output as a .srt file for use in any video player or editing application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What fields does the JSON need?</h3>
        <p>Each subtitle entry requires at minimum an index (number), start and end timecodes (in HH:MM:SS,mmm format as a string), and the text content. Optional fields like notes or formatting are not supported by the SRT specification.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Video platforms use JSON to SRT conversion to generate subtitle files from their content management systems. Developers building video editing tools use it to export caption tracks, while localization teams create translated SRT files from structured JSON translation databases.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/srt-to-json">SRT to JSON</a> — Convert SRT subtitle files to structured JSON format</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and inspect JSON data with a tree view</li>
          <li><a href="/lottie-json-viewer">Lottie JSON Viewer</a> — View and analyze Lottie animation JSON metadata</li>
        </ul>
      </article>
    </>
  )
}
