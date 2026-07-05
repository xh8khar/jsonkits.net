import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'README to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON data from structured README documents. 100% client-side and free to use.',
  keywords: ['readme to json, convert readme to json, readme json converter, json converter, readme format, readme parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
