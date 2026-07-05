import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Binary Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data into binary (0/1) string representation. 100% client-side and free to use.',
  keywords: ['json to binary, convert json to binary, json binary converter, binary format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
