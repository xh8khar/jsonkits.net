'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { geojsonToJson, jsonToGeojson } from '@/lib/converters'

const example = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.968285,40.785091]},"properties":{"name":"Central Park"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.985130,40.758896]},"properties":{"name":"Times Square"}}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="GeoJSON to JSON Converter"
        description="Extract properties and coordinates from GeoJSON features into standard JSON format. Perfect for processing geographic data in non-GIS applications."
        inputPlaceholder="Paste your GeoJSON here..."
        outputPlaceholder="JSON output will appear here..."
        convertLabel="Extract Properties"
        onConvert={geojsonToJson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={jsonToGeojson}
      />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2>What Is GeoJSON to JSON Conversion?</h2>
        <p>GeoJSON to JSON conversion extracts the properties and coordinate data from GeoJSON features into simple JSON objects. This is useful when you need to process spatial data in tools that don't understand GeoJSON's geometry structure.</p>
        <p>This conversion is useful for:</p>
        <ul>
          <li><strong>Data Analysis</strong>: Processing map data in spreadsheets or databases.</li>
          <li><strong>API Integration</strong>: Converting GeoJSON API responses to simpler JSON.</li>
          <li><strong>Data Migration</strong>: Moving spatial data to non-GIS systems.</li>
        </ul>
        <h2>How to Convert GeoJSON to JSON Online</h2>
        <ol>
          <li><strong>Paste GeoJSON</strong>: Enter a FeatureCollection or Feature object.</li>
          <li><strong>Click Extract</strong>: Properties are extracted with longitude/latitude added.</li>
          <li><strong>Copy JSON</strong>: Use in any standard data processing tool.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What if the GeoJSON has non-Point geometries?</h3>
        <p>Properties are still extracted. Coordinate fields are added when geometry type is Point.</p>
        <h3>Does it handle FeatureCollections with many features?</h3>
        <p>Yes. All features are extracted into an array of property objects.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-geojson">JSON to GeoJSON</a> — Convert JSON data to GeoJSON format</li>
        </ul>
      </article>
    </>
  )
}
