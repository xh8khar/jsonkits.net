import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Graphviz Converter - Free Online Converter',
  description: 'Generate Graphviz DOT graph from JSON data structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to graphviz, json to graphviz online, json to graphviz tool, convert json to graphviz, json graphviz converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
