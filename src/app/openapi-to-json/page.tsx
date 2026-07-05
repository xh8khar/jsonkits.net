import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'OpenAPI to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract sample JSON data from OpenAPI schema definitions. 100% client-side and free to use.',
  keywords: ['openapi to json, convert openapi to json, openapi json converter, json converter, openapi format, openapi parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
