import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Base64 Online — Free JSON Tool | JSONKits',
  description: 'Encode JSON data to Base64 format. 100% client-side and free to use.',
  keywords: ['json to base64, convert json to base64, json base64 converter, base64 format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
