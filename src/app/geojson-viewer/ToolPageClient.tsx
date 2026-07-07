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
        <h2>What Is GeoJSON?</h2>
        <p>GeoJSON is a format for encoding geographic data structures. This viewer analyzes GeoJSON data showing feature counts, geometry types, and bounding boxes.</p>
        <h2>How to Use</h2>
        <ol>
          <li>Paste your GeoJSON data in the editor</li>
          <li>Click the View GeoJSON button</li>
          <li>Review the analyzed structure information</li>
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
