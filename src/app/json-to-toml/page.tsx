import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TOML Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to TOML format for Rust and Python project configs. 100% client-side and free to use.',
  keywords: ['json to toml, convert json to toml, json toml converter, toml format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
