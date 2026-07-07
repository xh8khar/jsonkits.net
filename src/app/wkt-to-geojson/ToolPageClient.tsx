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
        <h2>What Is This Tool?</h2>
        <p>This tool converts Well-Known Text (WKT) geometry strings into GeoJSON FeatureCollection format. It supports common WKT geometry types including POINT, LINESTRING, and POLYGON, making it easy to migrate spatial data between different GIS formats.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your WKT geometry string in the editor</li>
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
