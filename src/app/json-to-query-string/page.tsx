import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Query String Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to query string format. 100% client-side and free to use.',
  keywords: ['json to query string, convert json to query string, json query string converter, query string format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
