import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Nested JSON to Flat - Free Online Converter ',
  description: 'Flatten deeply nested JSON into dot-notation key-value pairs. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['nested json to flat, nested json to flat online, nested json to flat tool, nested to flat json online, nested to flat json tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
