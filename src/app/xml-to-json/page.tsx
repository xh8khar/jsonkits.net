import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'XML to JSON Converter - Free Online Converter',
  description: 'Convert XML documents into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['xml to json, xml to json online, xml to json tool, convert xml to json, xml json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/xml-to-json/' },
  openGraph: {
    title: 'XML to JSON Converter - Free Online Converter',
    description: 'Convert XML documents into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/xml-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XML to JSON Converter - Free Online Converter',
    description: 'Convert XML documents into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
