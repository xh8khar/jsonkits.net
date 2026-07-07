'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { gpxToJson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1"><trk><name>My Route</name><trkseg><trkpt lat="40.7484" lon="-73.9857"><ele>10</ele><time>2024-01-01T00:00:00Z</time></trkpt><trkpt lat="40.7494" lon="-73.9867"><ele>15</ele><time>2024-01-01T00:01:00Z</time></trkpt></trkseg></trk></gpx>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="GPX to JSON - Convert GPS Data to JSON"
        description="Convert GPX (GPS Exchange Format) files to structured JSON with waypoints and track points."
        inputPlaceholder="Paste your GPX content here..."
        outputPlaceholder="Converted JSON will appear here..."
        convertLabel="Convert to JSON"
        onConvert={gpxToJson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="gpx-to-json"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts GPX (GPS Exchange Format) files into structured JSON with waypoints, tracks, and route data including elevation and timestamps.</p>
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
