import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Swagger to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract sample JSON data from Swagger 2.0 API definitions. 100% client-side and free to use.',
  keywords: ['swagger to json, convert swagger to json, swagger json converter, json converter, swagger format, swagger parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
