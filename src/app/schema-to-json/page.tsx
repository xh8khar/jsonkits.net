import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Schema to JSON Online — Free JSON Tool | JSONKits',
  description: 'Generate sample JSON data from a JSON Schema definition. 100% client-side and free to use.',
  keywords: ['schema to json, convert schema to json, schema json converter, json converter, schema format, schema parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
