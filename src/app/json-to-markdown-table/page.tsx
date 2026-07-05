import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Markdown Table Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to a Markdown table. 100% client-side and free to use.',
  keywords: ['json to markdown table, convert json to markdown table, json markdown table converter, markdown table format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
