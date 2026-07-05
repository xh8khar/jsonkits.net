import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Flat JSON to Nested Online — Free JSON Tool | JSONKits',
  description: 'Convert dot-notation flat JSON back to nested structure. 100% client-side and free to use.',
  keywords: ['flat json to nested, convert flat json to nested, flat json nested converter, nested conversion, flat json format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
