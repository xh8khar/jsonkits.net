import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to R Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to R list syntax. 100% client-side and free to use.',
  keywords: ['json to r, convert json to r, json r converter, r format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
