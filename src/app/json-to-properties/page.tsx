import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Properties Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to Java .properties format. 100% client-side and free to use.',
  keywords: ['json to properties, convert json to properties, json properties converter, properties format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
