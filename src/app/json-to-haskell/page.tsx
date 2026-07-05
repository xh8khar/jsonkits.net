import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Haskell - Free Online Converter | JSONKits',
  description: 'Generate Haskell data type definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to haskell, json to haskell online, json to haskell tool, convert json to haskell, json haskell converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
