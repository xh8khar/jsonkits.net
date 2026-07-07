import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GeoJSON Viewer - View and Analyze GeoJSON Data',
  description: 'View, analyze, and inspect GeoJSON data including feature counts, geometry types, and bounding boxes. 100% free, client-side GeoJSON viewer.',
  keywords: ['geojson viewer', 'view geojson online', 'geojson analyzer', 'geojson inspector', 'geojson tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/geojson-viewer/' },
  openGraph: {
    title: 'GeoJSON Viewer - View and Analyze GeoJSON Data',
    description: 'View, analyze, and inspect GeoJSON data including feature counts, geometry types, and bounding boxes. 100% free, client-side GeoJSON viewer.',
    url: 'https://www.jsonkits.net/geojson-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoJSON Viewer - View and Analyze GeoJSON Data',
    description: 'View, analyze, and inspect GeoJSON data including feature counts, geometry types, and bounding boxes. 100% free, client-side GeoJSON viewer.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
