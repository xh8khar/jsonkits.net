import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'NDJSON to JSON - Free Online Converter | JSONKits',
  description: 'Parse newline-delimited JSON into a JSON array. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['ndjson to json, ndjson to json online, ndjson to json tool, convert ndjson to json, ndjson json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
