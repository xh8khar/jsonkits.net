import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Markdown Table - Free Online Converter ',
  description: 'Convert JSON data to a Markdown table. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to markdown table, json to markdown table online, json to markdown table tool, convert json to markdown table, json markdown table converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
