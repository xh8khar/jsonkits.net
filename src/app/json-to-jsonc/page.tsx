import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JSONC Online — Free JSON Tool | JSONKits',
  description: 'Add inline comments to JSON keys to create JSONC format. 100% client-side and free to use.',
  keywords: ['json to jsonc, convert json to jsonc, json jsonc converter, jsonc format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
