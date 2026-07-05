import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'CSV to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert CSV data into structured JSON format. 100% client-side and free to use.',
  keywords: ['csv to json, convert csv to json, csv json converter, json converter, csv format, csv parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
