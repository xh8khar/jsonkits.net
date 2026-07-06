'use client'

import ToolLayout from '@/components/tools/ToolLayout'
import { jsonToGeojson, geojsonToJson } from '@/lib/converters'

const example = '[{"name":"Central Park","latitude":40.785091,"longitude":-73.968285},{"name":"Times Square","latitude":40.758896,"longitude":-73.985130}]'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="JSON to GeoJSON Converter"
        description="Convert JSON data with coordinates to GeoJSON FeatureCollection format. Perfect for mapping, GIS applications, and spatial data visualization."
        inputPlaceholder="Paste your JSON data here..."
        outputPlaceholder="GeoJSON output will appear here..."
        convertLabel="Convert to GeoJSON"
        onConvert={jsonToGeojson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        bidirectional
        onReverse={geojsonToJson}
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is GeoJSON?</h2>
        <p>GeoJSON is a format for encoding geographic data structures using JSON. It supports geometry types like Point, LineString, Polygon, and MultiPoint, organized into Feature and FeatureCollection objects. It is the standard format for web mapping applications.</p>
        <p>GeoJSON is essential for:</p>
        <ul>
          <li><strong>Web Maps</strong>: Rendering data on Leaflet, Mapbox, or Google Maps.</li>
          <li><strong>GIS Analysis</strong>: Processing spatial data in QGIS or ArcGIS.</li>
          <li><strong>Location Services</strong>: Storing and exchanging geographic data.</li>
          <li><strong>Data Visualization</strong>: Creating choropleth maps and heatmaps.</li>
        </ul>
        <h2>JSON vs. GeoJSON</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600 my-4">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Feature</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">JSON</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">GeoJSON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Geometry</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">No spatial structure.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Standardized geometry types.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Coordinate System</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Flexible, unstandardized.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">WGS 84 (longitude, latitude).</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Map Rendering</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Requires conversion.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Native rendering in map tools.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Properties</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">All data is a property.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Separates geometry from properties.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Primary Use</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">General data exchange.</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Mapping and GIS.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>How to Convert JSON to GeoJSON Online</h2>
        <ol>
          <li><strong>Paste JSON with coordinates</strong>: Include latitude/longitude or lat/lon fields.</li>
          <li><strong>Click Convert</strong>: Each object becomes a GeoJSON Feature with Point geometry.</li>
          <li><strong>Use in map tools</strong>: Load the GeoJSON into Leaflet, Mapbox, or any GIS.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What coordinate field names are supported?</h3>
        <p>The tool detects latitude/longitude, lat/lon, and lat/lng pairs automatically.</p>
        <h3>Does it support geometry types other than Point?</h3>
        <p>Currently generates Point geometries. For LineString or Polygon data, the tool converts properties while preserving coordinate arrays.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. Processing is 100% client-side.</p>
        <h2>Real-World Examples</h2>
        <p>JSON to GeoJSON conversion is used when mapping business locations from spreadsheets, visualizing IoT sensor data on maps, converting address databases to geospatial formats, and preparing data for web map visualizations.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/geojson-to-json">GeoJSON to JSON</a> — Extract properties from GeoJSON</li>
          <li><a href="/json-to-csv">JSON to CSV</a> — Convert JSON arrays to CSV</li>
        </ul>
      </article>
    </>
  )
}
