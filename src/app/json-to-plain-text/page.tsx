import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Plain Text Online — Free JSON Tool | JSONKits',
  description: 'Flatten JSON objects into plain key: value text. 100% client-side and free to use.',
  keywords: ['json to plain text, convert json to plain text, json plain text converter, plain text format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
