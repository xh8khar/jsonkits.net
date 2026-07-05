import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Schema Online — Free JSON Tool | JSONKits',
  description: 'Generate a JSON Schema draft-07 from JSON data sample. 100% client-side and free to use.',
  keywords: ['json to schema, convert json to schema, json schema converter, schema format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
