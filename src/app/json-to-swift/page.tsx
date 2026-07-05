import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Swift Online — Free JSON Tool | JSONKits',
  description: 'Generate Swift Codable structs from JSON samples. 100% client-side and free to use.',
  keywords: ['json to swift, convert json to swift, json swift converter, swift format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
