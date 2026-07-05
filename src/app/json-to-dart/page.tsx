import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Dart Online — Free JSON Tool | JSONKits',
  description: 'Generate Dart model classes from JSON samples. 100% client-side and free to use.',
  keywords: ['json to dart, convert json to dart, json dart converter, dart format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
