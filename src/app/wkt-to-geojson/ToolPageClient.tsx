'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { wktToGeojson } from '@/lib/converters'

const example = 'POINT (-73.9857 40.7484)'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="WKT to GeoJSON - Well-Known Text Converter"
        description="Convert WKT (Well-Known Text) geometry strings to GeoJSON FeatureCollection format."
        inputPlaceholder="Paste your WKT geometry here..."
        outputPlaceholder="Generated GeoJSON will appear here..."
        convertLabel="Convert to GeoJSON"
        onConvert={wktToGeojson}
        exampleInput={example}
        inputLanguage="text"
        outputLanguage="json"
        toolSlug="wkt-to-geojson"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is WKT?</h2>
        <p>Well-Known Text (WKT) is a text markup language for representing vector geometry objects such as points, lines, and polygons. It is defined by the Open Geospatial Consortium (OGC) and is widely used in spatial databases like PostGIS and MySQL Spatial Extensions.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>GIS Data Migration</strong>: Convert spatial data exported from PostGIS or SpatiaLite into web-friendly GeoJSON.</li>
          <li><strong>Map Visualization</strong>: Transform coordinates from legacy GIS systems into GeoJSON for rendering on web maps like Leaflet or Mapbox.</li>
          <li><strong>Database to Web</strong>: Bridge the gap between database-native spatial formats and the JSON-based GeoJSON standard used by frontend mapping libraries.</li>
        </ul>
        <h2>How to Use the WKT to GeoJSON Converter Online</h2>
        <ol>
          <li><strong>Paste your WKT string</strong>: Enter one or more WKT geometry strings such as <code>POINT (-73.9857 40.7484)</code>.</li>
          <li><strong>Click Convert to GeoJSON</strong>: The tool parses the WKT and produces a GeoJSON FeatureCollection with each geometry as a separate Feature.</li>
          <li><strong>Use the GeoJSON</strong>: Copy the output directly into a map library or save it as a <code>.geojson</code> file.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What WKT geometry types are supported?</h3>
        <p>The converter supports <code>POINT</code>, <code>LINESTRING</code>, <code>POLYGON</code>, <code>MULTIPOINT</code>, <code>MULTILINESTRING</code>, <code>MULTIPOLYGON</code>, and <code>GEOMETRYCOLLECTION</code>. Each type is mapped to the equivalent GeoJSON geometry object.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A GIS analyst exporting neighborhood boundaries from a PostGIS database receives the data as WKT polygons. Pasting those strings into this converter produces GeoJSON that can be loaded directly into Mapbox Studio for creating interactive web maps without intermediate conversion tools.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/topojson-to-geojson">TopoJSON to GeoJSON</a> — Convert TopoJSON topology data to standard GeoJSON.</li>
          <li><a href="/kml-to-geojson">KML to GeoJSON</a> — Convert Google Earth KML files to GeoJSON format.</li>
          <li><a href="/geojson-viewer">GeoJSON Viewer</a> — Visualize GeoJSON data on an interactive map.</li>
        </ul>
      </article>
    </>
  )
}
