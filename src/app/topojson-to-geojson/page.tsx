import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TopoJSON to GeoJSON - Free Online Tool',
  description: 'Convert TopoJSON topology format to standard GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['topojson to geojson', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/topojson-to-geojson/' },
  openGraph: {
    title: 'TopoJSON to GeoJSON - Free Online Tool',
    description: 'Convert TopoJSON topology format to standard GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/topojson-to-geojson/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TopoJSON to GeoJSON - Free Online Tool',
    description: 'Convert TopoJSON topology format to standard GeoJSON FeatureCollection format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
