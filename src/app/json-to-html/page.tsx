import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to HTML - Free Online Converter | JSONKits',
  description: 'Convert JSON data to a formatted HTML document with syntax highlighting and collapsible sections. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to html, json to html online, json to html tool, convert json to html, json html converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
