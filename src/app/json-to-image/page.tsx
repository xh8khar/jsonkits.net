import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SVG Image Converter - Free Online Converter',
  description: 'Render JSON data as a syntax-highlighted SVG image. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to svg image, json to svg image online, json to svg image tool, json to image online, json to image tool, json to image, convert json to image, json image converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-image/' },
  openGraph: {
    title: 'JSON to SVG Image Converter - Free Online Converter',
    description: 'Render JSON data as a syntax-highlighted SVG image. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-image/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SVG Image Converter - Free Online Converter',
    description: 'Render JSON data as a syntax-highlighted SVG image. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
