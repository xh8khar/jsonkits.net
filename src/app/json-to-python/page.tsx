import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Online — Free JSON Tool | JSONKits',
  description: 'Generate Python dataclasses from JSON samples. 100% client-side and free to use.',
  keywords: ['json to python, convert json to python, json python converter, python format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
