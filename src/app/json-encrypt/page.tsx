import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Encrypt - Free Online Converter | JSONKits',
  description: 'Encrypt JSON data with XOR cipher + Base64 encoding. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json encrypt, json encrypt online, json encrypt tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
