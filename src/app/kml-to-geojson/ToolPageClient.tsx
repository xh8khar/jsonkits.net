'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { kmlToGeojson } from '@/lib/converters'

const example = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><Placemark><name>Path</name><LineString><coordinates>-73.9857,40.7484 -73.9867,40.7494 -73.9877,40.7504</coordinates></LineString></Placemark></Document></kml>'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="KML to GeoJSON Converter"
        description="Convert Google Earth KML files to GeoJSON format for web mapping applications."
        inputPlaceholder="Paste your KML content here..."
        outputPlaceholder="Converted GeoJSON will appear here..."
        convertLabel="Convert to GeoJSON"
        onConvert={kmlToGeojson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="kml-to-geojson"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is This Tool?</h2>
        <p>This tool converts Google Earth KML files to GeoJSON format, the standard format for web mapping applications like Leaflet, Mapbox, and OpenLayers.</p>
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
