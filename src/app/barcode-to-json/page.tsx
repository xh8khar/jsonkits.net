import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Barcode to JSON Converter - Free Online Converter',
  description: 'Extract JSON data from barcode text content. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['barcode to json, barcode to json online, barcode to json tool, convert barcode to json, barcode json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/barcode-to-json/' },
  openGraph: {
    title: 'Barcode to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from barcode text content. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/barcode-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barcode to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from barcode text content. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
