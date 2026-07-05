import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Mermaid to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse Mermaid flowchart definitions into JSON format. 100% client-side and free to use.',
  keywords: ['mermaid to json, convert mermaid to json, mermaid json converter, json converter, mermaid format, mermaid parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
