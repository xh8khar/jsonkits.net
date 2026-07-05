import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Nested JSON to Flat Online — Free JSON Tool | JSONKits',
  description: 'Flatten deeply nested JSON into dot-notation key-value pairs. 100% client-side and free to use.',
  keywords: ['nested json to flat, convert nested json to flat, nested json flat converter, flat conversion, nested json format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
