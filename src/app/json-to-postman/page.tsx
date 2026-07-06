import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Postman Converter - Free Online Converter',
  description: 'Generate Postman Collection v2.1 from JSON request definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to postman, json to postman online, json to postman tool, convert json to postman, json postman converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
