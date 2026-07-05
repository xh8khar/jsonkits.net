import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Online — Free JSON Tool | JSONKits',
  description: 'Generate TypeScript interfaces from JSON samples. 100% client-side and free to use.',
  keywords: ['json to typescript, convert json to typescript, json typescript converter, typescript format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
