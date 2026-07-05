import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'XML to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert XML documents into structured JSON format. 100% client-side and free to use.',
  keywords: ['xml to json, convert xml to json, xml json converter, json converter, xml format, xml parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
