import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON to KML Converter',
  description: 'Convert GeoJSON data to Google Earth KML format for spatial data visualization.',
  keywords: ['geojson to kml', 'google earth kml', 'geojson converter', 'kml generator'],
}

export default function Page() {
  return <ToolPageClient />
}
