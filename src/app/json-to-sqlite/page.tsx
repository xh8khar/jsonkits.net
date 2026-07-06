import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQLite Converter - Free Online Converter',
  description: 'Generate SQLite CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to sqlite, json to sqlite online, json to sqlite tool, convert json to sqlite, json sqlite converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
