import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Query String to JSON - Free Online Converter | JSONKits',
  description: 'Parse query strings into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['query string to json, query string to json online, query string to json tool, convert query string to json, query string json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
