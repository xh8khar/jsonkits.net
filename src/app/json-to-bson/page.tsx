import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to BSON Converter - Free Online Converter',
  description: 'Convert JSON to MongoDB extended JSON (BSON) format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to bson, json to bson online, json to bson tool, convert json to bson, json bson converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-bson/' },
  openGraph: {
    title: 'JSON to BSON Converter - Free Online Converter',
    description: 'Convert JSON to MongoDB extended JSON (BSON) format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-bson/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to BSON Converter - Free Online Converter',
    description: 'Convert JSON to MongoDB extended JSON (BSON) format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
