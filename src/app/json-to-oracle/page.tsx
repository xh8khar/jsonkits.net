import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Oracle Online — Free JSON Tool | JSONKits',
  description: 'Generate Oracle SQL CREATE TABLE and INSERT statements from JSON. 100% client-side and free to use.',
  keywords: ['json to oracle, convert json to oracle, json oracle converter, oracle format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
