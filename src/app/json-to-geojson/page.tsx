import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GeoJSON Converter - Free Online Converter',
  description: 'Convert JSON data with coordinates to GeoJSON FeatureCollection. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to geojson, json to geojson online, json to geojson tool, convert json to geojson, json geojson converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
