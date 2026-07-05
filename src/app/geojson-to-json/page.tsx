import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON to JSON - Free Online Converter ',
  description: 'Extract properties from GeoJSON features to standard JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['geojson to json, geojson to json online, geojson to json tool, convert geojson to json, geojson json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
