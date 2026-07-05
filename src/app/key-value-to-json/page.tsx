import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Key-Value to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse key:value pair lines into structured JSON. 100% client-side and free to use.',
  keywords: ['key-value to json, convert key-value to json, key-value json converter, json converter, key-value format, key-value parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
