import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Mermaid to JSON - Free Online Converter | JSONKits',
  description: 'Parse Mermaid flowchart definitions into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['mermaid to json, mermaid to json online, mermaid to json tool, convert mermaid to json, mermaid json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
