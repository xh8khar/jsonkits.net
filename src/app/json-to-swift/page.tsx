import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Swift - Free Online Converter | JSONKits',
  description: 'Generate Swift Codable structs from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to swift, json to swift online, json to swift tool, convert json to swift, json swift converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
