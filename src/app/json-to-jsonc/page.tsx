import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JSONC Converter - Free Online Converter',
  description: 'Add inline comments to JSON keys to create JSONC format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to jsonc, json to jsonc online, json to jsonc tool, convert json to jsonc, json jsonc converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
