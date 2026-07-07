import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'WKT to GeoJSON - Free Online Tool',
  description: 'Convert WKT (Well-Known Text) geometry strings to GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['wkt to geojson', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/wkt-to-geojson/' },
  openGraph: {
    title: 'WKT to GeoJSON - Free Online Tool',
    description: 'Convert WKT (Well-Known Text) geometry strings to GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/wkt-to-geojson/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WKT to GeoJSON - Free Online Tool',
    description: 'Convert WKT (Well-Known Text) geometry strings to GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
