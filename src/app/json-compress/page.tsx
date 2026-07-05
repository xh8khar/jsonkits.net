import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compress (Deflate) Online — Free JSON Tool | JSONKits',
  description: 'Compress JSON data using Deflate algorithm and output Base64. 100% client-side and free to use.',
  keywords: ['json formatter, json beautifier, pretty print json, format json online, json prettier, json indentation, json formatting tool, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
