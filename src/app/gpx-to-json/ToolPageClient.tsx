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
        <h2>What Is GPX?</h2>
        <p>GPX (GPS Exchange Format) is an XML-based format used to store GPS data including waypoints, tracks, and routes with elevation, timestamps, and satellite metadata. Converting GPX to JSON makes GPS data easier to process in web applications, data analysis, and mapping tools.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>GPS Data Analysis</strong>: Converting GPX tracks to JSON for performance analysis, route comparisons, and statistical processing.</li>
          <li><strong>Web Mapping Integration</strong>: Importing GPS data from fitness devices and outdoor apps into browser-based mapping applications.</li>
          <li><strong>Geospatial Data Processing</strong>: Parsing GPS tracks and waypoints for further computation in geospatial pipelines.</li>
        </ul>
        <h2>How to Use GPX to JSON Online</h2>
        <ol>
          <li><strong>Paste your GPX content</strong>: Copy GPX XML data with track segments, waypoints, or routes from your GPS device or app export.</li>
          <li><strong>Convert to JSON</strong>: Click the "Convert to JSON" button to extract GPS coordinates, elevation, and timestamps.</li>
          <li><strong>Copy or download</strong>: Save the structured JSON output for analysis in your application or mapping tool.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What GPX elements are extracted?</h3>
        <p>The converter extracts trackpoints (trkpt) with lat/lon coordinates, elevation (ele), timestamps (time), waypoints (wpt), routes (rte), and metadata like name, description, and type from the GPX file.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Cyclists and runners convert GPX files from fitness watches to JSON for performance analysis and route visualization. Geocaching enthusiasts parse GPX waypoint data for cache management, and outdoor app developers use the conversion to ingest GPS track data into their platforms.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/kml-to-geojson">KML to GeoJSON</a> — Convert Google Earth KML files to GeoJSON format</li>
          <li><a href="/geojson-to-kml">GeoJSON to KML</a> — Convert GeoJSON data to Google Earth KML format</li>
          <li><a href="/json-viewer">JSON Viewer</a> — Browse and inspect JSON data with a tree view</li>
        </ul>
      </article>
    </>
  )
}
