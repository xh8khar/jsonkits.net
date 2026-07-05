import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Markdown Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to a Markdown code block with syntax highlighting. 100% client-side and free to use.',
  keywords: ['json to markdown, convert json to markdown, json markdown converter, markdown format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
