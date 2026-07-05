import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PDF to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract text content from PDF data and structure it as JSON. 100% client-side and free to use.',
  keywords: ['pdf to json, convert pdf to json, pdf json converter, json converter, pdf format, pdf parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
