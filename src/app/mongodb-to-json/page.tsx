import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'MongoDB to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert MongoDB documents to standard JSON format. 100% client-side and free to use.',
  keywords: ['mongodb to json, convert mongodb to json, mongodb json converter, json converter, mongodb format, mongodb parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
