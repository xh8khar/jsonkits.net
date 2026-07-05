import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Oracle - Free Online Converter ',
  description: 'Generate Oracle SQL CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to oracle, json to oracle online, json to oracle tool, convert json to oracle, json oracle converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
