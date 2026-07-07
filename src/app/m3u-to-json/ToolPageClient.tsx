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
        <h2>What Is M3U?</h2>
        <p>M3U is a multimedia playlist file format originally developed for Winamp that stores media file paths and metadata in a plain text structure. M3U8 is the UTF-8 encoded variant, both widely used for music playlists, IPTV channels, and streaming media.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Playlist Management</strong>: Converting media playlists to structured JSON for database storage or cloud synchronization.</li>
          <li><strong>IPTV Channel Lists</strong>: Parsing IPTV M3U playlists into JSON for programmatic channel management and filtering.</li>
          <li><strong>Media Library Migration</strong>: Extracting track metadata from playlist files when migrating between media players.</li>
        </ul>
        <h2>How to Use M3U to JSON Online</h2>
        <ol>
          <li><strong>Paste your M3U content</strong>: Copy your M3U or M3U8 playlist text, including the #EXTM3U header and track entries, into the input editor.</li>
          <li><strong>Convert to JSON</strong>: Click the "Convert to JSON" button to parse tracks into structured objects with duration, title, and path fields.</li>
          <li><strong>Copy or download</strong>: Use the copy button or download the JSON output for use in your application or database.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this support extended M3U metadata?</h3>
        <p>Yes. The tool parses EXTINF entries including track duration and title, as well as additional metadata like EXTVLCOPT, EXTGRP, and other extended attributes found in IPTV playlists.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Media server administrators use M3U to JSON conversion to import playlist data into databases for custom streaming dashboards. IPTV developers parse large channel playlists into JSON for channel categorization, filtering, and user interface rendering.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-m3u">JSON to M3U</a> — Convert structured JSON playlist data back to M3U format</li>
          <li><a href="/plist-to-json">Plist to JSON</a> — Convert Apple property list files to JSON</li>
          <li><a href="/xml-to-json">XML to JSON</a> — Convert XML data to structured JSON format</li>
        </ul>
      </article>
    </>
  )
}
