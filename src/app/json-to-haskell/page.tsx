import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Haskell Online — Free JSON Tool | JSONKits',
  description: 'Generate Haskell data type definitions from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to haskell, convert json to haskell, json haskell converter, haskell format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
