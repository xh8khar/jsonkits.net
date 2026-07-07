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
        <h2>What Is SRT?</h2>
        <p>SRT (SubRip Subtitle) is a widely-used subtitle file format that stores text captions synchronized with video or audio using sequential timecodes. It is the standard format for video subtitling across media players, streaming platforms, and video editing software.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Video Accessibility</strong>: Adding captions to videos for hearing-impaired viewers or multi-language support.</li>
          <li><strong>Content Repurposing</strong>: Extracting subtitle text for analysis, translation, or search indexing.</li>
          <li><strong>Application Integration</strong>: Converting subtitles into JSON for programmatic manipulation in web and mobile apps.</li>
        </ul>
        <h2>How to Use SRT to JSON Online</h2>
        <ol>
          <li><strong>Paste your SRT content</strong>: Copy your SRT subtitle text and paste it into the input editor field.</li>
          <li><strong>Convert to JSON</strong>: Click the "Convert to JSON" button to parse the subtitles into structured data with index, timing, and text fields.</li>
          <li><strong>Copy or download</strong>: Use the copy button or download the resulting JSON for integration into your application.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What formats does SRT support?</h3>
        <p>SRT uses a straightforward format with sequential numeric indexes, timecodes in HH:MM:SS,mmm format, and text lines separated by blank lines. This tool supports standard SRT files with multiple subtitle entries.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Content creators use SRT to JSON conversion to extract and analyze subtitle data from video libraries. Developers integrate subtitle JSON into video players for custom caption rendering, while researchers use it to build searchable subtitle databases for media archives. Machine learning pipelines also consume subtitle JSON for training speech and language models.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-srt">JSON to SRT</a> — Convert structured JSON subtitle data back to SRT format</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and inspect JSON data with a tree view</li>
          <li><a href="/lottie-json-viewer">Lottie JSON Viewer</a> — View and analyze Lottie animation JSON metadata</li>
        </ul>
      </article>
    </>
  )
}
