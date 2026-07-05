import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Rust Online — Free JSON Tool | JSONKits',
  description: 'Generate Rust structs with Serde attributes from JSON. 100% client-side and free to use.',
  keywords: ['json to rust, convert json to rust, json rust converter, rust format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
