import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to URL Encoded Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to URL-encoded format. 100% client-side and free to use.',
  keywords: ['json to url encoded, convert json to url encoded, json url encoded converter, url encoded format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
