import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to README - Free Online Converter | JSONKits',
  description: 'Convert JSON data to a structured README document. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to readme, json to readme online, json to readme tool, convert json to readme, json readme converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
