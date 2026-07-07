import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'KML to GeoJSON Converter',
  description: 'Convert Google Earth KML files to GeoJSON format for web mapping applications.',
  keywords: ['kml to geojson', 'google earth converter', 'geojson converter', 'kml converter'],
  alternates: { canonical: 'https://www.jsonkits.net/kml-to-geojson/' },
  openGraph: {
    title: 'KML to GeoJSON Converter',
    description: 'Convert Google Earth KML files to GeoJSON format for web mapping applications.',
    url: 'https://www.jsonkits.net/kml-to-geojson/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KML to GeoJSON Converter',
    description: 'Convert Google Earth KML files to GeoJSON format for web mapping applications.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
