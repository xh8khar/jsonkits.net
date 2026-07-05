import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Base64 to JSON Online — Free JSON Tool | JSONKits',
  description: 'Decode Base64 data back to JSON format. 100% client-side and free to use.',
  keywords: ['base64 to json, convert base64 to json, base64 json converter, json converter, base64 format, base64 parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
