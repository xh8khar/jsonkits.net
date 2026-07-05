import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Key-Value Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to simple key:value pair lines. 100% client-side and free to use.',
  keywords: ['json to key-value, convert json to key-value, json key-value converter, key-value format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
