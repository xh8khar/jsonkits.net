import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MongoDB Aggregation - Free Online Converter ',
  description: 'Generate MongoDB aggregation pipeline stages from JSON data queries for database operations. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mongodb aggregation, json to mongodb aggregation online, json to mongodb aggregation tool, json mongodb aggregation online, json mongodb aggregation tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
