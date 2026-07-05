import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Pointer Generator Online — Free JSON Tool | JSONKits',
  description: 'Generate RFC 6901 JSON Pointers for every node in your JSON. 100% client-side and free to use.',
  keywords: ['json formatter, json beautifier, pretty print json, format json online, json prettier, json indentation, json formatting tool, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
