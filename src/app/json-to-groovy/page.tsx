import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Groovy Converter - Free Online Converter',
  description: 'Generate Groovy class definitions with JSON parsing support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to groovy, json to groovy online, json to groovy tool, convert json to groovy, json groovy converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
