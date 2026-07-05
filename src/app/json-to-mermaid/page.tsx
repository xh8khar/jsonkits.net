import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Mermaid Online — Free JSON Tool | JSONKits',
  description: 'Generate Mermaid.js flowchart diagrams from JSON structures. 100% client-side and free to use.',
  keywords: ['json to mermaid, convert json to mermaid, json mermaid converter, mermaid format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
