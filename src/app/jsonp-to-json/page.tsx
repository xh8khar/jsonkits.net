import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSONP to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON from JSONP callback wrappers. 100% client-side and free to use.',
  keywords: ['jsonp to json, convert jsonp to json, jsonp json converter, json converter, jsonp format, jsonp parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
