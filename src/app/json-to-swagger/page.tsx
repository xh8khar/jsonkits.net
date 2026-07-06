import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Swagger Converter - Free Online Converter',
  description: 'Generate Swagger 2.0 API definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to swagger, json to swagger online, json to swagger tool, convert json to swagger, json swagger converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
