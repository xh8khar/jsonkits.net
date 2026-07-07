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
        <h2>What Is GeoJSON?</h2>
        <p>GeoJSON is an open standard JSON-based format for encoding geographic data structures including points, lines, polygons, and feature collections. Converting GeoJSON to KML enables sharing geographic data with Google Earth users and KML-compatible GPS devices.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Google Earth Visualization</strong>: Converting web map data to KML for viewing in Google Earth's 3D environment.</li>
          <li><strong>GPS Device Export</strong>: Preparing geographic data for GPS devices and field survey equipment that use KML.</li>
          <li><strong>Cross-Platform Sharing</strong>: Translating GeoJSON features for users who rely on KML-compatible software.</li>
        </ul>
        <h2>How to Use GeoJSON to KML Online</h2>
        <ol>
          <li><strong>Paste your GeoJSON</strong>: Copy GeoJSON data with Point, LineString, Polygon, or FeatureCollection geometries into the input editor.</li>
          <li><strong>Convert to KML</strong>: Click the "Convert to KML" button to generate Google Earth-compatible KML XML.</li>
          <li><strong>Copy or download</strong>: Save the KML output as a .kml file for use in Google Earth or other geospatial applications.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does the converter preserve properties?</h3>
        <p>Yes. GeoJSON properties are mapped to KML ExtendedData and Placemark names. Geometry types including Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection are supported.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>Field researchers convert GeoJSON survey data to KML for visualization in Google Earth during presentations. Emergency response teams transform GeoJSON incident maps to KML for sharing with field units using KML-compatible GPS devices.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/kml-to-geojson">KML to GeoJSON</a> — Convert Google Earth KML files to GeoJSON format</li>
          <li><a href="/geojson-viewer">GeoJSON Viewer</a> — View and visualize GeoJSON geographic data</li>
          <li><a href="/wkt-to-geojson">WKT to GeoJSON</a> — Convert Well-Known Text geometry to GeoJSON</li>
        </ul>
      </article>
    </>
  )
}
