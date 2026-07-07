import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MessagePack Converter - Free Online Converter',
  description: 'Convert JSON data to MessagePack binary format for compact data storage and transmission. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to messagepack, json to messagepack online, json to messagepack tool, convert json to messagepack, json messagepack converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-messagepack/' },
  openGraph: {
    title: 'JSON to MessagePack Converter - Free Online Converter',
    description: 'Convert JSON data to MessagePack binary format for compact data storage and transmission. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-messagepack/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to MessagePack Converter - Free Online Converter',
    description: 'Convert JSON data to MessagePack binary format for compact data storage and transmission. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
