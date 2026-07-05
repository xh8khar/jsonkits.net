import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to CSV Online — Free JSON Tool | JSONKits',
  description: 'Transform JSON arrays into CSV spreadsheets. 100% client-side and free to use.',
  keywords: ['json to csv, convert json to csv, json csv converter, csv format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
