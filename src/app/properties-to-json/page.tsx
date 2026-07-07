import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Properties to JSON Converter - Free Online Converter',
  description: 'Convert Java .properties files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['properties to json, properties to json online, properties to json tool, convert properties to json, properties json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/properties-to-json/' },
  openGraph: {
    title: 'Properties to JSON Converter - Free Online Converter',
    description: 'Convert Java .properties files to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/properties-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Properties to JSON Converter - Free Online Converter',
    description: 'Convert Java .properties files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
