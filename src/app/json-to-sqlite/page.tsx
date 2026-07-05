import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQLite Online — Free JSON Tool | JSONKits',
  description: 'Generate SQLite CREATE TABLE and INSERT statements from JSON. 100% client-side and free to use.',
  keywords: ['json to sqlite, convert json to sqlite, json sqlite converter, sqlite format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
