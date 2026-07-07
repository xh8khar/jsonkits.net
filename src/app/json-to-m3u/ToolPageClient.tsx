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
        <h2>What Is This Tool?</h2>
        <p>This tool converts structured JSON playlist data into the standard M3U playlist file format for use with media players and streaming software.</p>
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
