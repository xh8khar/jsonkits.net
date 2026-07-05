import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Merge Patch Online — Free JSON Tool | JSONKits',
  description: 'Apply RFC 7396 JSON Merge Patch to a target JSON object. 100% client-side and free to use.',
  keywords: ['json converter, convert json, transform json, online json tool, free json tool, json conversion, json formatter, json format, json data, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
