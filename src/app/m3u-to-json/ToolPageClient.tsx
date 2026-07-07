'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { m3uToJson } from '@/lib/converters'

const example = '#EXTM3U\n#EXTINF:180,My Favorite Song\n/media/music/song1.mp3\n#EXTINF:240,Another Track\n/media/music/song2.mp3'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="M3U to JSON - Convert Playlists to JSON"
        description="Convert M3U and M3U8 playlist files to structured JSON format with track metadata."
        inputPlaceholder="Paste your M3U playlist here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={m3uToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="m3u-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts M3U and M3U8 playlist files into structured JSON format with track metadata including duration, title, and file paths.</p>
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
