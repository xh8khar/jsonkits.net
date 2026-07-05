import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to OpenAPI Online — Free JSON Tool | JSONKits',
  description: 'Generate OpenAPI 3.0 schema components from JSON samples. 100% client-side and free to use.',
  keywords: ['json to openapi, convert json to openapi, json openapi converter, openapi format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
