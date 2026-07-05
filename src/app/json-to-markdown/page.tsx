import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Markdown - Free Online Converter ',
  description: 'Convert JSON data to a Markdown code block with syntax highlighting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to markdown, json to markdown online, json to markdown tool, convert json to markdown, json markdown converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
