import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Tree View Online — Free JSON Tool | JSONKits',
  description: 'Generate a visual indented tree view from JSON data. 100% client-side and free to use.',
  keywords: ['json to tree view, convert json to tree view, json tree view converter, tree view format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
