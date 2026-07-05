import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Dataclass - Free Online Converter | JSONKits',
  description: 'Generate Python dataclass definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to python dataclass, json to python dataclass online, json to python dataclass tool, json python dataclass online, json python dataclass tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
