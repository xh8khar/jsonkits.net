import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MongoDB Converter - Free Online Converter',
  description: 'Convert JSON data to MongoDB document format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mongodb, json to mongodb online, json to mongodb tool, convert json to mongodb, json mongodb converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
