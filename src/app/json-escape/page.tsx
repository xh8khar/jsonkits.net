import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Escape - Free Online Converter ',
  description: 'Escape a JSON string for use in source code or queries. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json escape, json escape online, json escape tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
