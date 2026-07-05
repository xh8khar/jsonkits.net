import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract properties from GeoJSON features to standard JSON. 100% client-side and free to use.',
  keywords: ['geojson to json, convert geojson to json, geojson json converter, json converter, geojson format, geojson parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
