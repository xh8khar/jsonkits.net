import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Dart - Free Online Converter | JSONKits',
  description: 'Generate Dart model classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to dart, json to dart online, json to dart tool, convert json to dart, json dart converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
