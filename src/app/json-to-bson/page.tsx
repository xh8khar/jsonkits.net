import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to BSON Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to MongoDB extended JSON (BSON) format. 100% client-side and free to use.',
  keywords: ['json to bson, convert json to bson, json bson converter, bson format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
