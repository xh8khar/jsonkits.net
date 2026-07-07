import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON Viewer - View and Analyze GeoJSON Data',
  description: 'View, analyze, and inspect GeoJSON data including feature counts, geometry types, and bounding boxes. 100% free, client-side GeoJSON viewer.',
  keywords: ['geojson viewer', 'view geojson online', 'geojson analyzer', 'geojson inspector', 'geojson tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
