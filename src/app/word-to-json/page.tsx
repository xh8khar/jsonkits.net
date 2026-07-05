import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Word to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON data from Word document content. 100% client-side and free to use.',
  keywords: ['word to json, convert word to json, word json converter, json converter, word format, word parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
