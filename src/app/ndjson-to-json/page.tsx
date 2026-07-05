import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'NDJSON to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse newline-delimited JSON into a JSON array. 100% client-side and free to use.',
  keywords: ['ndjson to json, convert ndjson to json, ndjson json converter, json converter, ndjson format, ndjson parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
