import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to URL Encoded - Free Online Converter | JSONKits',
  description: 'Convert JSON objects to URL-encoded format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to url encoded, json to url encoded online, json to url encoded tool, convert json to url encoded, json url encoded converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
