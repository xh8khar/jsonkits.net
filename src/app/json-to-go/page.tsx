import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Go Converter - Free Online Converter',
  description: 'Generate Go structs with JSON tags from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to go, json to go online, json to go tool, convert json to go, json go converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
