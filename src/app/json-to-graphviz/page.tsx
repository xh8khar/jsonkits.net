import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Graphviz Online — Free JSON Tool | JSONKits',
  description: 'Generate Graphviz DOT graph from JSON data structure. 100% client-side and free to use.',
  keywords: ['json to graphviz, convert json to graphviz, json graphviz converter, graphviz format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
