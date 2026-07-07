'use client'
import ToolLayout from '@/components/tools/ToolLayout'
import { topojsonToGeojson } from '@/lib/converters'

const example = JSON.stringify({"type":"Topology","objects":{"map":{"type":"GeometryCollection","geometries":[{"type":"Point","coordinates":[0,0],"properties":{"name":"Origin"}}]}},"arcs":[]}, null, 2)

export default function ToolPageClient() {
  return (
    <>
      <ToolLayout
        title="TopoJSON to GeoJSON - Topology Converter"
        description="Convert TopoJSON topology format to standard GeoJSON FeatureCollection format."
        inputPlaceholder="Paste your TopoJSON here..."
        outputPlaceholder="Generated GeoJSON will appear here..."
        convertLabel="Convert to GeoJSON"
        onConvert={topojsonToGeojson}
        exampleInput={example}
        inputLanguage="json"
        outputLanguage="json"
        toolSlug="topojson-to-geojson"
      />
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 prose prose-slate dark:prose-invert">
        <h2>What Is TopoJSON?</h2>
        <p>TopoJSON is an extension of GeoJSON that encodes geographic topology using shared arcs rather than duplicate coordinate arrays. By storing boundaries only once, TopoJSON files are typically 80% smaller than their GeoJSON equivalents while preserving all geometry information.</p>
        <p>This is used for:</p>
        <ul>
          <li><strong>Web Map Optimization</strong>: Reduce map loading times by serving TopoJSON, then converting to GeoJSON on the client for rendering.</li>
          <li><strong>Data Compression</strong>: Archive large geographic datasets in TopoJSON format to save storage space and bandwidth.</li>
          <li><strong>Interoperability</strong>: Convert TopoJSON from data portals or D3.js visualizations into plain GeoJSON for use in tools that don't support TopoJSON natively.</li>
        </ul>
        <h2>How to Use the TopoJSON to GeoJSON Converter Online</h2>
        <ol>
          <li><strong>Paste your TopoJSON</strong>: Enter your TopoJSON topology object into the editor.</li>
          <li><strong>Click Convert to GeoJSON</strong>: The tool expands shared arcs and reconstructs each geometry object as a standard GeoJSON Feature.</li>
          <li><strong>Get standard GeoJSON</strong>: Copy the output for use in any mapping library — no TopoJSON parser needed.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Does this tool preserve properties?</h3>
        <p>Yes. Any <code>properties</code> attached to geometries in the TopoJSON <code>objects</code> collection are preserved in the resulting GeoJSON Feature objects.</p>
        <h3>Is this tool safe?</h3>
        <p>Yes. All processing happens 100% client-side in your browser. Nothing is uploaded to any server.</p>
        <h3>Is this tool free?</h3>
        <p>Yes, completely free with no usage limits or registration required.</p>
        <h2>Real-World Examples</h2>
        <p>A data journalist using D3.js to create a choropleth map often starts with TopoJSON from a government data portal. After generating the visualization, they convert the TopoJSON back to GeoJSON using this tool so the raw data can be shared with readers as a standard downloadable format.</p>
        <h2>Related Tools</h2>
        <ul>
          <li><a href="/wkt-to-geojson">WKT to GeoJSON</a> — Convert Well-Known Text geometry strings to GeoJSON.</li>
          <li><a href="/geojson-to-kml">GeoJSON to KML</a> — Convert GeoJSON to Google Earth KML format.</li>
          <li><a href="/geojson-viewer">GeoJSON Viewer</a> — Visualize GeoJSON data on an interactive map.</li>
        </ul>
      </article>
    </>
  )
}
