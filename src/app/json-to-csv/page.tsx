import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to CSV - Free Online Converter ',
  description: 'Transform JSON arrays into CSV spreadsheets. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to csv, json to csv online, json to csv tool, convert json to csv, json csv converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
