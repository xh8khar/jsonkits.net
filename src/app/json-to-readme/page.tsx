import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to README Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to a structured README document. 100% client-side and free to use.',
  keywords: ['json to readme, convert json to readme, json readme converter, readme format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
