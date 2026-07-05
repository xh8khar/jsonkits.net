import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Postman to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract request definitions from Postman Collection JSON. 100% client-side and free to use.',
  keywords: ['postman to json, convert postman to json, postman json converter, json converter, postman format, postman parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
