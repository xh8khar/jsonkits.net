import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON to KML Converter',
  description: 'Convert GeoJSON data to Google Earth KML format for spatial data visualization.',
  keywords: ['geojson to kml', 'google earth kml', 'geojson converter', 'kml generator'],
  alternates: { canonical: 'https://www.jsonkits.net/geojson-to-kml/' },
  openGraph: {
    title: 'GeoJSON to KML Converter',
    description: 'Convert GeoJSON data to Google Earth KML format for spatial data visualization.',
    url: 'https://www.jsonkits.net/geojson-to-kml/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoJSON to KML Converter',
    description: 'Convert GeoJSON data to Google Earth KML format for spatial data visualization.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
