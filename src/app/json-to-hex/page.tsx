import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Hex Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to hexadecimal string representation. 100% client-side and free to use.',
  keywords: ['json to hex, convert json to hex, json hex converter, hex format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
