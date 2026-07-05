import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Merge Online — Free JSON Tool | JSONKits',
  description: 'Deep merge two or more JSON objects into one. 100% client-side and free to use.',
  keywords: ['json converter, convert json, transform json, online json tool, free json tool, json conversion, json formatter, json format, json data, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
