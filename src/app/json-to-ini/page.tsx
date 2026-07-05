import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to INI - Free Online Converter | JSONKits',
  description: 'Convert JSON data to INI configuration format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to ini, json to ini online, json to ini tool, convert json to ini, json ini converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
