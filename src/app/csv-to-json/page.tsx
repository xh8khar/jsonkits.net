import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'CSV to JSON - Free Online Converter | JSONKits',
  description: 'Convert CSV data into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['csv to json, csv to json online, csv to json tool, convert csv to json, csv json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
