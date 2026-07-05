import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema to TypeScript Online — Free JSON Tool | JSONKits',
  description: 'Generate TypeScript interfaces from JSON data samples. 100% client-side and free to use.',
  keywords: ['json schema to typescript, convert json schema to typescript, json schema typescript converter, typescript conversion, json schema format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
