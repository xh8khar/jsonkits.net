import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Barcode Converter - Free Online Converter',
  description: 'Generate a Code 39 barcode SVG image from your JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to barcode, json to barcode online, json to barcode tool, convert json to barcode, json barcode converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-barcode/' },
  openGraph: {
    title: 'JSON to Barcode Converter - Free Online Converter',
    description: 'Generate a Code 39 barcode SVG image from your JSON data. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-barcode/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Barcode Converter - Free Online Converter',
    description: 'Generate a Code 39 barcode SVG image from your JSON data. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
