import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Dataclass Online — Free JSON Tool | JSONKits',
  description: 'Generate Python dataclass definitions from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to python dataclass, convert json to python dataclass, json python dataclass converter, python dataclass format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
