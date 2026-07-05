import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL INSERT Online — Free JSON Tool | JSONKits',
  description: 'Generate SQL INSERT statements from JSON data. 100% client-side and free to use.',
  keywords: ['json to sql insert, convert json to sql insert, json sql insert converter, sql insert format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
