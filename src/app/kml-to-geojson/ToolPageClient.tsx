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
        <h2>What Is KML?</h2>
        <p>KML (Keyhole Markup Language) is an XML-based geographic data format used by Google Earth and other geospatial applications to display geographic features. GeoJSON is a lightweight JSON-based format widely adopted by web mapping libraries like Leaflet, Mapbox, and OpenLayers.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Web Mapping Migration</strong>: Converting Google Earth KML data for use in browser-based mapping applications.</li>
          <li><strong>Geospatial Data Interoperability</strong>: Translating geographic features between KML and GeoJSON ecosystems.</li>
          <li><strong>Data Analysis Pipelines</strong>: Converting KML to GeoJSON for processing with tools like Turf.js or GDAL.</li>
        </ul>
        <h2>How to Use KML to GeoJSON Online</h2>
        <ol>
          <li><strong>Paste your KML content</strong>: Copy KML XML data including Placemarks, Polygons, LineStrings, or Points into the input editor.</li>
          <li><strong>Convert to GeoJSON</strong>: Click the "Convert to GeoJSON" button to parse and transform geographic data.</li>
          <li><strong>Copy or download</strong>: Save the GeoJSON output for use in web mapping libraries and geospatial tools.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What KML features are supported?</h3>
        <p>The converter supports Points, LineStrings, LinearRings, Polygons, MultiGeometries, folders, and Placemarks with extended data. It maps KML styles and names to GeoJSON properties.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>GIS professionals use KML to GeoJSON conversion when migrating from Google Earth workflows to web-based mapping applications. Urban planners convert KML zoning maps to GeoJSON for interactive visualization, and environmental scientists transform field survey KML data for spatial analysis.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/geojson-to-kml">GeoJSON to KML</a> — Convert GeoJSON data to Google Earth KML format</li>
          <li><a href="/geojson-viewer">GeoJSON Viewer</a> — View and visualize GeoJSON geographic data</li>
          <li><a href="/topojson-to-geojson">TopoJSON to GeoJSON</a> — Convert TopoJSON topology format to GeoJSON</li>
        </ul>
      </article>
    </>
  )
}
