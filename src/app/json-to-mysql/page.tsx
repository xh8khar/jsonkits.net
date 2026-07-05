import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MySQL Online — Free JSON Tool | JSONKits',
  description: 'Generate MySQL CREATE TABLE and INSERT statements from JSON. 100% client-side and free to use.',
  keywords: ['json to mysql, convert json to mysql, json mysql converter, mysql format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
