import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Schema to JSON - Free Online Converter | JSONKits',
  description: 'Generate sample JSON data from a JSON Schema definition. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['schema to json, schema to json online, schema to json tool, convert schema to json, schema json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
