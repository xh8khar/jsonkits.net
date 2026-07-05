import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON request bodies from cURL commands. 100% client-side and free to use.',
  keywords: ['curl to json, convert curl to json, curl json converter, json converter, curl format, curl parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
