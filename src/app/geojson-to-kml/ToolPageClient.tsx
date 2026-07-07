'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { geojsonToKml } from '@/lib/converters'

const example = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-73.9857,40.7484],[-73.9867,40.7494]]},"properties":{"name":"My Path"}}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="GeoJSON to KML Converter"
        description="Convert GeoJSON data to Google Earth KML format for spatial data visualization."
        inputPlaceholder="Paste your GeoJSON here..."
        outputPlaceholder="Converted KML will appear here..."
        convertLabel="Convert to KML"
        onConvert={geojsonToKml}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="xml"
        toolSlug="geojson-to-kml"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts GeoJSON data to Google Earth KML format for spatial data visualization in Google Earth and other KML-compatible applications.</p>
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
