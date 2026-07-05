import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Base64 to JSON - Free Online Converter ',
  description: 'Decode Base64 data back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['base64 to json, base64 to json online, base64 to json tool, convert base64 to json, base64 json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
