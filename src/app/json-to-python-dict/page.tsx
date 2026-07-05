import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Dict Online — Free JSON Tool | JSONKits',
  description: 'Generate Python dictionary literal syntax from JSON samples. 100% client-side and free to use.',
  keywords: ['json to python dict, convert json to python dict, json python dict converter, python dict format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
