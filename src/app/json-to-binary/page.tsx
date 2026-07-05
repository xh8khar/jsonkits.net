import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Binary - Free Online Converter ',
  description: 'Convert JSON data into binary (0/1) string representation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to binary, json to binary online, json to binary tool, convert json to binary, json binary converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
