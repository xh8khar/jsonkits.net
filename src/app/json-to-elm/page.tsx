import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Elm Online — Free JSON Tool | JSONKits',
  description: 'Generate Elm type aliases from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to elm, convert json to elm, json elm converter, elm format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
