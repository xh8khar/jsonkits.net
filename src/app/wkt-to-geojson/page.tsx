import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'WKT to GeoJSON - Free Online Tool',
  description: 'Convert WKT (Well-Known Text) geometry strings to GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['wkt to geojson', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
