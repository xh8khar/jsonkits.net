import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Plain Text - Free Online Converter ',
  description: 'Flatten JSON objects into plain key: value text. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to plain text, json to plain text online, json to plain text tool, convert json to plain text, json plain text converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
