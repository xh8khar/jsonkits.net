import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Query String to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse query strings into JSON format. 100% client-side and free to use.',
  keywords: ['query string to json, convert query string to json, query string json converter, json converter, query string format, query string parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
