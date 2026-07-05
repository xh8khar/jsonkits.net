import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to BSON - Free Online Converter | JSONKits',
  description: 'Convert JSON to MongoDB extended JSON (BSON) format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to bson, json to bson online, json to bson tool, convert json to bson, json bson converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
