import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Query String - Free Online Converter | JSONKits',
  description: 'Convert JSON objects to query string format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to query string, json to query string online, json to query string tool, convert json to query string, json query string converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
