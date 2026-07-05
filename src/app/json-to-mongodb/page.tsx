import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MongoDB Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to MongoDB document format. 100% client-side and free to use.',
  keywords: ['json to mongodb, convert json to mongodb, json mongodb converter, mongodb format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
