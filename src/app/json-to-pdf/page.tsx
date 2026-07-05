import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PDF - Free Online Converter | JSONKits',
  description: 'Generate a downloadable PDF document from JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to pdf, json to pdf online, json to pdf tool, convert json to pdf, json pdf converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
