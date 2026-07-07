'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToM3u } from '@/lib/converters'

const example = '[{"duration":180,"title":"My Favorite Song","path":"/media/song1.mp3"},{"duration":240,"title":"Another Track","path":"/media/song2.mp3"}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to M3U - Convert JSON to Playlist"
        description="Convert structured JSON playlist data to M3U playlist file format."
        inputPlaceholder="Paste your JSON playlist data here..."
        outputPlaceholder="Generated M3U will appear here..."
        convertLabel="Convert to M3U"
        onConvert={jsonToM3u}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="text"
        toolSlug="json-to-m3u"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is M3U?</h2>
        <p>M3U is a multimedia playlist file format that stores media file paths, durations, and titles in a simple text structure. Converting JSON to M3U enables developers to generate playlists programmatically from structured data sources.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Dynamic Playlist Generation</strong>: Creating custom M3U playlists from database queries or user preferences.</li>
          <li><strong>Media Player Export</strong>: Exporting playlists from applications to formats compatible with VLC, iTunes, and other media players.</li>
          <li><strong>IPTV Channel Configuration</strong>: Generating IPTV M3U channel lists from structured configuration data.</li>
        </ul>
        <h2>How to Use JSON to M3U Online</h2>
        <ol>
          <li><strong>Paste your JSON playlist</strong>: JSON array of track objects with duration, title, and path properties into the input editor.</li>
          <li><strong>Convert to M3U</strong>: Click the "Convert to M3U" button to generate standard M3U playlist format.</li>
          <li><strong>Copy or download</strong>: Save the M3U output as a .m3u or .m3u8 file for use in your media player.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What JSON structure does this tool expect?</h3>
        <p>Each track object must have a path (string) and should include duration (number in seconds) and title (string) for extended M3U format. The tool automatically generates the #EXTM3U header and EXTINF entries.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Music streaming services use JSON to M3U conversion to let users export playlists for offline listening. Media server administrators generate M3U files from database-driven libraries, and IPTV providers create channel playlists from structured configuration data.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/m3u-to-json">M3U to JSON</a> — Convert M3U and M3U8 playlists to structured JSON format</li>
          <li><a href="/json-to-plist">JSON to Plist</a> — Convert JSON to Apple property list format</li>
          <li><a href="/json-to-xml">JSON to XML</a> — Convert JSON data to XML format</li>
        </ul>
      </article>
    </>
  )
}
