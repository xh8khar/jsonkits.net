import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GeoJSON Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data with coordinates to GeoJSON FeatureCollection. 100% client-side and free to use.',
  keywords: ['json to geojson, convert json to geojson, json geojson converter, geojson format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
