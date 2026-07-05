import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Graphviz to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse Graphviz DOT format back into JSON structure. 100% client-side and free to use.',
  keywords: ['graphviz to json, convert graphviz to json, graphviz json converter, json converter, graphviz format, graphviz parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
