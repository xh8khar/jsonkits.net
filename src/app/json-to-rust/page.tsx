import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Rust - Free Online Converter ',
  description: 'Generate Rust structs with Serde attributes from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to rust, json to rust online, json to rust tool, convert json to rust, json rust converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
