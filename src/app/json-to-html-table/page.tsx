import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to HTML Table - Free Online Converter | JSONKits',
  description: 'Convert JSON data to an HTML table. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to html table, json to html table online, json to html table tool, convert json to html table, json html table converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
