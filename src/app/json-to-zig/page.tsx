import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Zig Online — Free JSON Tool | JSONKits',
  description: 'Generate Zig struct definitions with JSON support from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to zig, convert json to zig, json zig converter, zig format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
