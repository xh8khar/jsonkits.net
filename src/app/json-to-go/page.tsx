import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Go Online — Free JSON Tool | JSONKits',
  description: 'Generate Go structs with JSON tags from JSON samples. 100% client-side and free to use.',
  keywords: ['json to go, convert json to go, json go converter, go format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
