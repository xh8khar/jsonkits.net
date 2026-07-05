import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSONP to JSON - Free Online Converter | JSONKits',
  description: 'Extract JSON from JSONP callback wrappers. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jsonp to json, jsonp to json online, jsonp to json tool, convert jsonp to json, jsonp json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
