import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PostgreSQL Online — Free JSON Tool | JSONKits',
  description: 'Generate PostgreSQL CREATE TABLE and INSERT statements from JSON. 100% client-side and free to use.',
  keywords: ['json to postgresql, convert json to postgresql, json postgresql converter, postgresql format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
