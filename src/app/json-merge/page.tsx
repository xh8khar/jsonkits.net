import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Merge - Free Online Converter ',
  description: 'Deep merge two or more JSON objects into one. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json merge, json merge online, json merge tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
