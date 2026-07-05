import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to cURL Online — Free JSON Tool | JSONKits',
  description: 'Generate cURL commands from JSON request bodies. 100% client-side and free to use.',
  keywords: ['json to curl, convert json to curl, json curl converter, curl format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
