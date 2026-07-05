import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to NDJSON Online — Free JSON Tool | JSONKits',
  description: 'Convert a JSON array to newline-delimited JSON format. 100% client-side and free to use.',
  keywords: ['json to ndjson, convert json to ndjson, json ndjson converter, ndjson format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
