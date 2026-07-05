import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to NDJSON - Free Online Converter ',
  description: 'Convert a JSON array to newline-delimited JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to ndjson, json to ndjson online, json to ndjson tool, convert json to ndjson, json ndjson converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
