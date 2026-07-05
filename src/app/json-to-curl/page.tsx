import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to cURL - Free Online Converter | JSONKits',
  description: 'Generate cURL commands from JSON request bodies. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to curl, json to curl online, json to curl tool, convert json to curl, json curl converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
