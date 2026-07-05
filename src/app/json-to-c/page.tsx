import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to C - Free Online Converter ',
  description: 'Generate C struct definitions with JSON parsing support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to c, json to c online, json to c tool, convert json to c, json c converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
