import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'OpenAPI to JSON Converter - Free Online Converter',
  description: 'Extract sample JSON data from OpenAPI schema definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['openapi to json, openapi to json online, openapi to json tool, convert openapi to json, openapi json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
