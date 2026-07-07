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
        <h2>What Is This Tool?</h2>
        <p>This tool converts TopoJSON topology data into standard GeoJSON FeatureCollection format. TopoJSON uses shared topology arcs to reduce file size, while GeoJSON is a more widely supported format for web mapping and GIS applications.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your TopoJSON data in the editor</li>
          <li>Click the Convert to GeoJSON button</li>
          <li>Copy or download the resulting GeoJSON</li>
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
