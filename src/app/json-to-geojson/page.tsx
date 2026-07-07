import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GeoJSON Converter - Free Online Converter',
  description: 'Convert JSON data with coordinates to GeoJSON FeatureCollection. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to geojson, json to geojson online, json to geojson tool, convert json to geojson, json geojson converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-geojson/' },
  openGraph: {
    title: 'JSON to GeoJSON Converter - Free Online Converter',
    description: 'Convert JSON data with coordinates to GeoJSON FeatureCollection. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-geojson/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to GeoJSON Converter - Free Online Converter',
    description: 'Convert JSON data with coordinates to GeoJSON FeatureCollection. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
