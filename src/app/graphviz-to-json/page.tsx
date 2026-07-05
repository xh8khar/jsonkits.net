import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Graphviz to JSON - Free Online Converter | JSONKits',
  description: 'Parse Graphviz DOT format back into JSON structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['graphviz to json, graphviz to json online, graphviz to json tool, convert graphviz to json, graphviz json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
