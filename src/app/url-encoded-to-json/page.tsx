import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'URL Encoded to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert URL-encoded strings to JSON format. 100% client-side and free to use.',
  keywords: ['url encoded to json, convert url encoded to json, url encoded json converter, json converter, url encoded format, url encoded parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
