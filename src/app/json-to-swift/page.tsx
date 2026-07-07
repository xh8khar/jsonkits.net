import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Swift Converter - Free Online Converter',
  description: 'Generate Swift Codable structs from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to swift, json to swift online, json to swift tool, convert json to swift, json swift converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-swift/' },
  openGraph: {
    title: 'JSON to Swift Converter - Free Online Converter',
    description: 'Generate Swift Codable structs from JSON samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-swift/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Swift Converter - Free Online Converter',
    description: 'Generate Swift Codable structs from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
