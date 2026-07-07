import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'KML to GeoJSON Converter',
  description: 'Convert Google Earth KML files to GeoJSON format for web mapping applications.',
  keywords: ['kml to geojson', 'google earth converter', 'geojson converter', 'kml converter'],
}

export default function Page() {
  return <ToolPageClient />
}
