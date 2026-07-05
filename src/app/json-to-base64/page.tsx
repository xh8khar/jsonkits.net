import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Base64 - Free Online Converter ',
  description: 'Encode JSON data to Base64 format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to base64, json to base64 online, json to base64 tool, convert json to base64, json base64 converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
