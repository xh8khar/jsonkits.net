'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { geojsonViewer } from '@/lib/converters'

const example = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.9857,40.7484]},"properties":{"name":"Empire State Building"}}]}'

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="GeoJSON Viewer"
        description="View, analyze, and inspect GeoJSON data including feature counts, geometry types, and bounding boxes."
        inputPlaceholder="Paste your GeoJSON here..."
        outputPlaceholder="Analyzed GeoJSON data will appear here..."
        convertLabel="View GeoJSON"
        onConvert={geojsonViewer}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="geojson-viewer"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is GeoJSON Viewer?</h2>
        <p>A GeoJSON viewer analyzes GeoJSON data structures and presents detailed metadata such as feature counts, geometry types, coordinate ranges, and bounding boxes. GeoJSON is an open standard format for representing geographical features and non-spatial attributes using JSON.</p>
        <p>The JSONKits GeoJSON Viewer parses your geographic data and instantly reports the structure composition, making it easy to validate and understand your GeoJSON before using it in mapping applications. This is useful for:</p>
        <ul>
          <li><strong>Data validation</strong>: Confirm your GeoJSON is well-formed and inspect its feature composition before deploying to production.</li>
          <li><strong>GIS analysis</strong>: Quickly count features per geometry type (Point, LineString, Polygon) and examine coordinate bounds.</li>
          <li><strong>Education and learning</strong>: Understand how GeoJSON structures real-world geographic features as you build mapping applications.</li>
        </ul>
        <h2>How to View GeoJSON Online</h2>
        <ol>
          <li><strong>Prepare your GeoJSON</strong>: Export your geographic data from GIS tools, mapping APIs, or generate it programmatically.</li>
          <li><strong>Paste in the editor</strong>: Copy your GeoJSON content and paste it into the input area on this page.</li>
          <li><strong>Click View GeoJSON</strong>: Press the "View GeoJSON" button to analyze the data structure.</li>
          <li><strong>Review the analysis</strong>: Read the feature count, list of geometry types detected, and computed bounding box coordinates in the structured output.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>What geometry types does the GeoJSON Viewer support?</h3>
        <p>The viewer supports all standard GeoJSON geometry types: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection, and FeatureCollection. It will list every unique geometry type found in your data and count how many features use each type.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits.</p>
        <h2>Real-World Examples</h2>
        <p>GIS analysts frequently use GeoJSON viewers to audit data exports from PostGIS or Shapefiles before publishing to web maps. For instance, a cartographer exporting 10,000 points of interest might run the data through this viewer to verify that all features have the expected geometry type and that the bounding box matches the target geographic region.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/json-to-graphviz">JSON to Graphviz</a> — Convert JSON data to Graphviz DOT format for visualization</li>
          <li><a href="/json-beautifier">JSON Beautifier</a> — Format and beautify JSON data for readability</li>
          <li><a href="/json-compare">JSON Compare</a> — Compare two JSON objects side by side</li>
        </ul>
      </article>
    </>
  )
}
